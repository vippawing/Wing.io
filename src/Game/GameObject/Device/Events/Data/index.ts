import { ObjectsClass } from '../../../../Lib/Constants'
import GameObjectData from '../../../Events/Data'

class Data extends GameObjectData {

    constructor(Device, ObjectClass, GroundCode, Name, x, y) {
        super()
        this.init(ObjectClass, GroundCode, Name, x, y)
        this.Case(ObjectClass)
    }

    Case = (ObjectClass) => {
        switch (ObjectClass) {
            case ObjectsClass.Device.MagicCircle:
                this.scale = 0.2
                break
            case ObjectsClass.Device.Rock:
                this.scale = 0.5
                this.zIndex = 2
            default:
                break
        }
    }

}

export default Data