import Game from '../../../Game'
import initialize from './initialize'
import Draw from './Draw'

class Events {

    Game: Game

    initialize: initialize

    Draw: Draw

    constructor(Game) {
        this.Game = Game

        this.newGame()
        this.initDraw()
    }

    newGame = () => {
        this.initialize = new initialize(this)
    }

    initDraw = () => {
        this.Draw = new Draw(this)
    }

}

export default Events