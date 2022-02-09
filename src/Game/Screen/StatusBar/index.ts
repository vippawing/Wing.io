import * as PIXI from 'pixi.js-legacy'
import { Canvas } from '../../Lib/Constants'

class StatusBar {

    Container: PIXI.Container

    Obj: PIXI.Graphics

    HpBar: PIXI.Graphics

    HpNum: PIXI.Text

    MpBar: PIXI.Graphics

    MpNum: PIXI.Text

    ExpBar: PIXI.Graphics

    Exp: PIXI.Graphics

    constructor() {
      this.Container = new PIXI.Container()
      this.Container.position.set((Canvas.width / 2) - 150, Canvas.height - 75)

      this.drawObj()
      this.drawHpBar()
      this.drawHpNum()
      this.drawMpBar()
      this.drawMpNum()
      this.drawExpBar()
    }

    drawObj = () => {
      this.Obj = new PIXI.Graphics()
      this.Obj.beginFill(0xFFFFFF, 0.25)
      this.Obj.lineStyle(1, 0x42D00, 1)
      this.Obj.drawRoundedRect(0, 0, 300, 73, 1)
      this.Obj.endFill()
      this.Container.addChild(this.Obj)
    }

    drawHpBar = () => {
        this.HpBar = new PIXI.Graphics()
        this.HpBar.beginFill(0xFF0000)
        this.HpBar.lineStyle(3, 0x555555, 1)
        this.HpBar.drawRect(10, 10, 280, 15)
        this.HpBar.endFill()
        this.Container.addChild(this.HpBar)
    }

    drawHpNum = () =>  {
        const TextStyle = {
            fontSize: '15px', fontFamily: 'NotoSansTC', fontWeight: 'bold', fill: '#FFFFFF',
            dropShadow: true, dropShadowColor: '#000000', dropShadowBlur: 1, dropShadowDistance: 2,
        }
        this.HpNum = new PIXI.Text("100 / 100", TextStyle)
        this.HpNum.position.set(150 - (this.HpNum.width / 2), 8)
        this.Container.addChild(this.HpNum)
    }

    drawMpBar = () => {
        this.MpBar = new PIXI.Graphics()
        this.MpBar.beginFill(0x0000FF)
        this.MpBar.lineStyle(3, 0x555555, 1)
        this.MpBar.drawRect(10, 35, 280, 15)
        this.MpBar.endFill()
        this.Container.addChild(this.MpBar)
    }

    drawMpNum = () => {
        const TextStyle = {
            fontSize: '15px', fontFamily: 'NotoSansTC', fontWeight: 'bold', fill: '#FFFFFF',
            dropShadow: true, dropShadowColor: '#000000', dropShadowBlur: 1, dropShadowDistance: 2,
        }
        this.MpNum = new PIXI.Text("100 / 100", TextStyle)
        this.MpNum.position.set(150 - (this.MpNum.width / 2), 33)
        this.Container.addChild(this.MpNum)
    }

    drawExpBar() {
      this.Exp = new PIXI.Graphics()
      this.Exp.beginFill(0xBBBB00)
      this.Exp.drawRect(10, 60, 70, 7)
      this.Exp.endFill()
      this.Container.addChild(this.Exp)

      this.ExpBar = new PIXI.Graphics()
      this.ExpBar.lineStyle(3, 0x555555, 1)
      this.ExpBar.drawRect(10, 60, 280, 7)
      this.ExpBar.endFill()
      this.Container.addChild(this.ExpBar)
    }
}

export default StatusBar