import Game from '../../../../../Game' 
import Events from '../../../Events'
import Draw from '../../Draw'
import MagicCircle from '../../../../GameObject/Device/MagicCircle'
import Rock from '../../../../GameObject/Device/Rock'

class Device {

    Game: Game

    Events: Events

    Draw: Draw

    constructor(Events, Draw) {
        this.Events = Events
        this.Game = Events.Game
        this.Draw = Draw

        this.setMagicCircle(1, "魔法陣一號", 1, 300, 300)
        this.setMagicCircle(2, "魔法陣二號", 2, 1500, 300)
        this.setRock(3, "石頭", 1, 500, 500)
    }

    setMagicCircle = (id, Name, GroundCode, x, y) => {
        this.Draw.newObject(new MagicCircle(this.Game, id).new(Name, GroundCode, x, y))
    }

    setRock = (id, Name, GroundCode, x, y) => {
        this.Draw.newObject(new Rock(this.Game, id).new(Name, GroundCode, x, y))
    }

}

export default Device