import { ObjectsClass } from '../../../Lib/Constants'
import Device from '../../Device'

class Rock extends Device {

    constructor(Game, id) {
        super(Game, id)
    }

    new = (Name, GroundCode, x, y) => {
        this.initEvents(ObjectsClass.Device.Rock, Name, GroundCode, x, y)
        return this;
    }
}

export default Rock