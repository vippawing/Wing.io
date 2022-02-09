import * as PIXI from 'pixi.js-legacy'
import { PixiResources } from '../../../../Lib/Loader'
import Device from '../../../Character'
import Image from '../Image'

class Draw {

    resources: Object = PixiResources

    Device: Device

    Image: Image

    constructor(Device, Image) {
        this.Device = Device
        this.Image = Image

        this.drawObj()
    }

    drawObj = () => {
        this.Image.Obj = new PIXI.Sprite(this.resources[this.Device.Data.ObjectClass].texture)
        this.Image.Obj.anchor.set(0.5)
        this.Image.Obj.scale.set(this.Device.Data.scale)
        this.Image.Obj.position.set(0, 0)
        this.Image.Object.addChild(this.Image.Obj)
    }

}

export default Draw