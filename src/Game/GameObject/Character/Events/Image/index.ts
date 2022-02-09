import * as PIXI from 'pixi.js-legacy'
import Charactor from '../../../Character'
import Draw from './Darw'
import Attack from './Attack'

class Image {

    Charactor: Charactor

    Draw: Draw

    Actor: PIXI.Container = null

    Body: PIXI.Sprite = null

    LeftHand: PIXI.Sprite = null

    RightHand: PIXI.Sprite = null

    Weapon: PIXI.Sprite = null
    
    NameBar: PIXI.Text = null

    HpBar: PIXI.Graphics = null

    Attack: Attack

    constructor(Charactor) {
        this.Charactor = Charactor

        this.Actor = new PIXI.Container()
        this.Actor.sortableChildren = true
        this.Charactor.Container.addChild(this.Actor)
        this.Charactor.Container.position.set(this.Charactor.Data.x, this.Charactor.Data.y)

        this.initDraw()
        this.initAttack()
    }

    initDraw = () => {
        this.Draw = new Draw(this.Charactor, this)
        
        this.HpBar.zIndex = this.NameBar.zIndex = 2
        this.Actor.zIndex = 1
    }

    initAttack = () => {
        this.Attack = new Attack(this.Charactor, this)
    }

    Update = () => {
        this.Charactor.Container.x = this.Charactor.Data.x
        this.Charactor.Container.y = this.Charactor.Data.y
        this.Actor.rotation = this.Charactor.Data.Rotation
        this.Attack.Update()
    }

}

export default Image