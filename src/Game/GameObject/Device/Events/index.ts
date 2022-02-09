import Device from '../../Device'
import Data from './Data'
import Image from './Image'
import Receiver from './Receiver'
import Handler from './Handler'

class Events {

    Device: Device

    Data: Data

    Image: Image

    Receiver: Receiver

    Handler: Handler

    ObjectClass: string

    constructor(Device, ObjectClass, Name, GroundCode, x, y) {
        this.Device = Device
        this.ObjectClass = ObjectClass
        
        this.initData(ObjectClass, Name, GroundCode, x, y)
        this.initImg()
        this.initReceiver()
        this.initHandler()
    }

    initData = (ObjectClass, Name, GroundCode, x, y) => {
        this.Data = new Data(this.Device, ObjectClass, Name, GroundCode, x, y)
        this.Device.Data = this.Data
    }

    initImg = () => {
        this.Image = new Image(this.Device)
        this.Device.Image = this.Image
    }

    initReceiver = () => {
        this.Receiver = new Receiver(this.Device)    
    }

    initHandler = () => {
        this.Handler = new Handler(this.Device)   
    }

    Update = () => {
        this.Image.Update()
    }

}

export default Events