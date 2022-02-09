import Charactor from '../../Character'
import Data from './Data'
import Image from './Image'
import Receiver from './Receiver'
import Handler from './Handler'

class Events {

    Charactor: Charactor

    Data: Data

    Image: Image

    Receiver: Receiver

    Handler: Handler

    constructor(Charactor, ObjectClass, Name, GroundCode, x, y) {
        this.Charactor = Charactor
        
        this.initData(ObjectClass, Name, GroundCode, x, y)
        this.initImg()
        this.initReceiver()
        this.initHandler()
    }

    initData = (ObjectClass, Name, GroundCode, x, y) => {
        this.Data = new Data(this.Charactor, ObjectClass, Name, GroundCode, x, y)
        this.Charactor.Data = this.Data
    }

    initImg = () => {
        this.Image = new Image(this.Charactor)
        this.Charactor.Image = this.Image
    }

    initReceiver = () => {
        this.Receiver = new Receiver(this.Charactor)    
    }

    initHandler = () => {
        this.Handler = new Handler(this.Charactor)   
    }

    Update = () => {
        this.Image.Update()
    }

}

export default Events