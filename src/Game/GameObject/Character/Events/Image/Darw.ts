import * as PIXI from 'pixi.js-legacy'
import { PixiResources } from '../../../../Lib/Loader'
import Charactor from '../../../Character'
import Image from '../Image'

class Draw {

    resources: Object = PixiResources

    Charactor: Charactor

    Image: Image

    constructor(Charactor, Image) {
        this.Charactor = Charactor
        this.Image = Image

        this.drawBody()
        this.drawLeftHand()
        this.drawRightHand()
        this.drawWeapon()
        this.drawHpBar()
        this.drawNameBar()
    }

    drawBody = () => {
        this.Image.Body = new PIXI.Sprite(this.resources['PlayerHead'].texture)
        this.Image.Body.position.set(0, 0)
        this.Image.Body.anchor.set(0.5)
        this.Image.Body.scale.set(0.1225)
        this.Image.Body.zIndex = 3
        this.Image.Actor.addChild(this.Image.Body)
    }

    drawLeftHand = () => {
        this.Image.LeftHand = new PIXI.Sprite(this.resources['PlayerHand'].texture)
        this.Image.LeftHand.position.set(20, -35)
        this.Image.LeftHand.anchor.set(0.5)
        this.Image.LeftHand.scale.set(0.125)
        this.Image.LeftHand.zIndex = 2
        this.Image.Actor.addChild(this.Image.LeftHand)
    }

    drawRightHand = () => {
        this.Image.RightHand = new PIXI.Sprite(this.resources['PlayerHand'].texture)
        this.Image.RightHand.position.set(20, 35)
        this.Image.RightHand.anchor.set(0.5)
        this.Image.RightHand.scale.set(0.125)
        this.Image.RightHand.zIndex = 2
        this.Image.Actor.addChild(this.Image.RightHand)
    }

    drawWeapon = () => {
        this.Image.Weapon = new PIXI.Sprite(this.resources['PlayerSword'].texture)
        this.Image.Weapon.position.set(45, 35)
        this.Image.Weapon.anchor.set(0.5)
        this.Image.Weapon.scale.set(0.04)
        this.Image.Weapon.zIndex = 1
        this.Image.Actor.addChild(this.Image.Weapon)
    }

    drawHpBar = () =>  {
        this.Image.HpBar = new PIXI.Graphics()
        this.Image.HpBar.beginFill(0xFF0000)
        this.Image.HpBar.lineStyle(2, 0x42D00, 1)
        this.Image.HpBar.drawRect(-30, -45, 60, 5)
        this.Image.HpBar.endFill()
        this.Image.HpBar.alpha = 0.75
        this.Charactor.Container.addChild(this.Image.HpBar)
    }

    drawNameBar = () => {
        const Style = new PIXI.TextStyle({
            fontFamily: "NotoSansTC",
            fontWeight: "bold",
            fontSize: 16
        })
        this.Image.NameBar = new PIXI.Text(this.Image.Charactor.Data.Name, Style)
        this.Image.NameBar.x = - (this.Image.NameBar.width / 2)
        this.Image.NameBar.y = - (this.Image.NameBar.height) - 35
        this.Image.NameBar.visible = false
        this.Image.NameBar.alpha = 0.75
        this.Charactor.Container.addChild(this.Image.NameBar)
    }

}

export default Draw