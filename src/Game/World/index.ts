import * as PIXI from 'pixi.js-legacy'
import { PixiResources } from '../Lib/Loader'
import { Canvas } from '../Lib/Constants'

class World {

    resources: Object = PixiResources
    
    Container: PIXI.Container

    Ground: PIXI.Sprite = null

    display: { index: number, width: number, height: number }

    Objects: any[] = []

    constructor() {
        this.Container = new PIXI.Container()
        this.Container.interactive = true
        this.Container.sortableChildren = true

        this.drawGround()
    }

    drawGround = () => {
        this.Ground = new PIXI.Sprite(this.resources['BackGround2'].texture)
        this.Ground.scale.set(1)
        this.display = { index: 1, width: this.Ground.width, height: this.Ground.height }
        this.Container.addChild(this.Ground)
    }

    setGround = (index) => {
        if (index == 1) {
            this.Ground.texture = this.resources['BackGround2'].texture
            this.Ground.scale.set(1)
            this.display = { index: 2, width: this.Ground.width, height: this.Ground.height }
            this.viewObject()
        } else {
            this.Ground.texture = this.resources['BackGround'].texture
            this.Ground.scale.set(2)
            this.display = { index: 1, width: this.Ground.width, height: this.Ground.height }
            this.viewObject()
        }
    }

    addObject = (Obj) => {
        this.Container.addChild(Obj.Container)
        this.Objects.push(Obj.Container)
        if (Obj.Data.GroundCode != this.display.index) Obj.Container.visible = false
    }

    delObject = (Obj) => {
        this.Objects.splice(this.Container.getChildIndex(Obj.Container), 1)
        this.Container.removeChild(Obj.Container)
    }

    viewObject = () => {
        for (let i = 1 ; i < this.Objects.length ; i++) {
            this.Objects[i].visible = !this.Objects[i].visible
        }
    }

    view = (vx, vy) => {
        this.Container.x = -vx + (Canvas.width / 2)
        this.Container.y = -vy + (Canvas.height / 2)
        if (vx < (Canvas.width / 2)) this.Container.x = 0
        if (vy < (Canvas.height / 2)) this.Container.y = 0
        if (this.Container.x < Canvas.width - this.display.width) this.Container.x = Canvas.width - this.display.width
        if (this.Container.y < Canvas.height - this.display.height) this.Container.y = Canvas.height - this.display.height
    }

}

export default World