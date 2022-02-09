import Game from '../../../../Game'
import Actor from '../Actor'
import ActorAction from './ActorAction'

class ActorController extends Actor {

    Game: Game

    ActorAction: ActorAction

    constructor(Game, Name = "Name", x = 0, y = 0) {
        super(Name, x, y)

        this.Game = Game
        this.ActorAction = new ActorAction(this) 
    }

    Keyboard = (Key) => {
        if (Key.w) {
            this.vy -= this.sy
        }
        if (Key.s) {
            this.vy += this.sy
        }
        if (Key.a) {
            this.vx -= this.sx
        }
        if (Key.d) {
            this.vx += this.sx
        }
        this.ActorAction.Move(this.vx, this.vy)
    }

}

export default ActorController