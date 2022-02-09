import * as PIXI from 'pixi.js-legacy'
import Device from '../../../Device'
import Draw from './Draw'

class Image {

    Device: Device

    Draw: Draw

    Object: PIXI.Container

    Obj: PIXI.Sprite

    constructor(Charactor) {
        this.Device = Charactor

        this.Object = new PIXI.Container()
        this.Object.sortableChildren = true
        this.Device.Container.addChild(this.Object)
        this.Device.Container.position.set(this.Device.Data.x, this.Device.Data.y)

        this.initDraw()
    }

    initDraw = () => {
        this.Draw = new Draw(this.Device, this)
        
        this.Object.zIndex = 1
    }

    Update = () => {
        this.Device.Container.x = this.Device.Data.x
        this.Device.Container.y = this.Device.Data.y
        this.Object.rotation = this.Device.Data.Rotation
    }

}

export default Image