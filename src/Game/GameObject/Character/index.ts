import GameObject from '../../GameObject'
import Events from './Events'
import Data from './Events/Data'
import Image from './Events/Image'

abstract class Character extends GameObject {

    Events: Events

    Data: Data

    Image: Image
    
    constructor(Game, id) {
        super(Game, id)
    }

    initEvents = (ObjectClass, Name, GroundCode, x, y) => {
        this.Events = new Events(this, ObjectClass, Name, GroundCode, x, y)
    }

    Update = () => {
        this.Events.Update()
    }

}

export default Character