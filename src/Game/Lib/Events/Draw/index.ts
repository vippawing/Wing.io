import Game from '../../../../Game'
import Events from '../../Events'
import Device from './Device'

class Draw {

    Events: Events

    Game: Game

    Device: Device

    constructor(Events) {
        this.Events = Events
        this.Game = Events.Game

        this.initDevice()
    }

    initDevice = () => {
        this.Device = new Device(this.Events, this)
    }

    newObject = (Obj) => {
        Obj.Container.zIndex = Obj.Data.zIndex
        this.Game.Devices.push(Obj)
        this.Game.World.addObject(Obj)
    }

}

export default Draw