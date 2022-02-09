import Game from '../../../../Game'
import ActorController from './ActorController'

class ActorAction {

    Game: Game

    ActorController: ActorController

    constructor(ActorController) {
        this.ActorController = ActorController
        this.Game = ActorController.Game
    }

    Move = (vx, vy) => {
        this.ActorController._status.x += vx
        this.ActorController._status.y += vy
        this.ActorController.vx = 0
        this.ActorController.vy = 0
        this.CheckBoundary()
    }

    CheckBoundary = () => {
        if (this.ActorController._status.x - (this.Game.Player.Image.Body.width / 2) < 0) this.ActorController._status.x = (this.Game.Player.Image.Body.width / 2)
        if (this.ActorController._status.x + (this.Game.Player.Image.Body.width / 2) > this.Game.World.display.width) this.ActorController._status.x = this.Game.World.display.width - (this.Game.Player.Image.Body.width / 2)
        if (this.ActorController._status.y - (this.Game.Player.Image.Body.height / 2) < 0) this.ActorController._status.y = (this.Game.Player.Image.Body.height / 2)
        if (this.ActorController._status.y + (this.Game.Player.Image.Body.height / 2) > this.Game.World.display.height) this.ActorController._status.y = this.Game.World.display.height - (this.Game.Player.Image.Body.height / 2)
    }

}

export default ActorAction