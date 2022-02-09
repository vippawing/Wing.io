import { ObjectsClass } from '../../Constants'
import Game from '../../../../Game'
import Events from '../../Events'
import Screen from '../../../Screen'
import World from '../../../World'
import Player from '../../../GameObject/Character/Player'

class initialize { 

    Events: Events

    Game: Game

    constructor(Events) {
        this.Events = Events
        this.Game = Events.Game

        this.setScreen()
        this.setWorld()
        this.setPlayer()
    }

    setScreen() {
        this.Game.Screen = new Screen()
        this.Game.Screen.Container.zIndex = 100
        this.Game.stage.addChild(this.Game.Screen.Container)
    }

    setWorld = () => {
        this.Game.World = new World()
        this.Game.World.Container.zIndex = 0
        this.Game.stage.addChild(this.Game.World.Container)
    }

    setPlayer = () => {
        this.Game.Player = new Player(this.Game, 0)
        this.Game.Player.new(ObjectsClass.Character.Player, "Vippa", 1, 500, 500)
        this.Game.Player.Container.zIndex = 100
        this.Game.Players.push(this.Game.Player)
        this.Game.World.addObject(this.Game.Player)
    }

}

export default initialize