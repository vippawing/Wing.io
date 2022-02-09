import { ObjectsClass } from '../../../../Lib/Constants'
import Game from '../../../../../Game'
import Device from '../../../Device'

class Handler {

    Game: Game

    Device: Device

    constructor(Device) {
        this.Device = Device
        this.Game = Device.Game

        setInterval(this.ImpactEvents, 20)
    }

    ImpactEvents = () => {
        this.Game.Players.forEach(Actor => {
            this.CheckGround(Actor)
        })
    }

    CheckGround = (Actor) => {
        if (Actor.Data.GroundCode != this.Device.Data.GroundCode) return false
        this.CheckImpact(Actor)
    }

    CheckImpact = (Actor) => {
        if (Math.abs(Actor.Container.x - this.Device.Container.x) > Math.abs(Actor.Image.Body.width - this.Device.Container.width)) {
            return false
        }
        if (Math.abs(Actor.Container.y - this.Device.Container.y) > Math.abs(Actor.Image.Body.height - this.Device.Container.height)) {
            return false
        }
        this.Impaction(Actor, this.Device)
    }

    Impaction = (Actor, Obj) => {
        switch (Obj.Data.ObjectClass) {
            case ObjectsClass.Device.MagicCircle:
                Actor.Events.Receiver.Receive("Teleport", Obj)
                break
            default:
                Actor.Events.Receiver.Receive("Cantgohere", Obj)
                break
        }
    }

}

export default Handler