export default class Controller {

    constructor(game, view) {
        this.game = game;
        this.view = view;
        this.isPlaying = false;
        this.intervalId = null;

        document.addEventListener('keydown', this.handleKeyDown.bind(this))
        document.addEventListener('keyup', this.handleKeyUp.bind(this))

        this.view.renderStartScreen()
    }

    update() {
        this.game.movePieceDown()
        this.updateView()
    }

    play() {
        this.isPlaying = true
        this.startTimer()
        this.updateView()
    }

    pause() {
        this.isPlaying = false
        this.stopTimer()
        this.updateView()
    }

    reset() {
        this.play()
        this.game.reset()
    }

    updateView() {
        const state = this.game.getState()

        if (state.isGameOver) {
            this.view.renderEndScreen(state)
        } else if (!this.isPlaying) {
            this.view.renderPauseScreen()
        } else {
            this.view.renderMainScreen(state)
        }
    }

    startTimer() {
        const speed = 1000 - this.game.getState().level * 100
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.update()
            }, speed > 0 ? speed : 100);
        }
    }

    stopTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null;
        }
    }

    handleKeyDown(e) {
        const state = this.game.getState();

        switch (e.keyCode) {
            case 13: // LEFT
                if (state.isGameOver) {
                    this.reset()
                }
                if (this.isPlaying) {
                    this.pause()
                } else {
                    this.play()
                }
                break;
            case 37: // LEFT
                this.updateView()
                this.game.movePieceLeft()
                break;

            case 38: // UP
                this.game.rotatePiece()
                this.updateView()
                break;

            case 39: // RIGHT 
                this.game.movePieceRight()
                this.updateView()
                break;

            case 40: // DOWN
                this.stopTimer()
                this.game.movePieceDown()
                this.updateView()
                break;
        }
    }

    handleKeyUp(e) {
        switch (e.keyCode) {
            case 40: // DOWN
                this.startTimer()
                break;
        }
    }
}