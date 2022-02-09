import * as PIXI from 'pixi.js-legacy'
import { PixiResources } from '../../Lib/Loader'
import { Canvas } from '../../Lib/Constants'

class PlayerBox {

  resources: Object = PixiResources

  Container: PIXI.Container

  Obj: PIXI.Graphics

  Name: PIXI.Text

  RoleText: PIXI.Text

  Role: PIXI.Text

  LevelText: PIXI.Text

  Level: PIXI.Text

  StatusText: PIXI.Text

  Status: PIXI.Text

  EquipmentBox: PIXI.Graphics[]

  EquipmentText: PIXI.Text[]

  Equipment:  PIXI.Sprite[]

  constructor() {
    this.Container = new PIXI.Container()
    this.Container.position.set((Canvas.width / 4) - 150, (Canvas.height / 4) - 145)
    this.Container.visible = false

    this.drawObj()
    this.drawName()
    this.drawRole()
    this.drawLevel()
    this.drawStatus()
    this.drawEquipment()
  }

  drawObj() {
    this.Obj = new PIXI.Graphics()
    this.Obj.beginFill(0x000000, 0.9)
    this.Obj.lineStyle(3, 0xFFFFFF, 1)
    this.Obj.drawRoundedRect(0, 0, 300, 290, 1)
    this.Obj.endFill()
    this.Container.addChild(this.Obj)
  }

  drawName() {
    const TextStyle = {
        fontSize: '22px', fontFamily: 'NotoSansTC', fontWeight: 'bold', fill: '#00BBFF',
        dropShadow: true, dropShadowColor: '#777777', dropShadowBlur: 1, dropShadowDistance: 2,
    }
    this.Name = new PIXI.Text("Vippa", TextStyle)
    this.Name.position.set((this.Obj.width / 2) - (this.Name.width / 2), 10)
    this.Container.addChild(this.Name)
  }

  drawRole() {
    const TextStyle = {
        fontSize: '16px', fontFamily: 'NotoSansTC', fontWeight: 'bold', fill: '#FFFFFF',
        dropShadow: true, dropShadowColor: '#000000', dropShadowBlur: 1, dropShadowDistance: 2,
    }
    this.RoleText = new PIXI.Text("職業：", TextStyle)
    this.RoleText.position.set(90, 50)
    this.Container.addChild(this.RoleText)

    this.Role = new PIXI.Text("尚無", TextStyle)
    this.Role.position.set(this.RoleText.x + this.RoleText.width, this.RoleText.y)
    this.Container.addChild(this.Role)
  }

  drawLevel() {
    const TextStyle = {
        fontSize: '16px', fontFamily: 'NotoSansTC', fontWeight: 'bold', fill: '#FFFFFF',
        dropShadow: true, dropShadowColor: '#000000', dropShadowBlur: 1, dropShadowDistance: 2,
    }
    this.LevelText = new PIXI.Text("等級：", TextStyle)
    this.LevelText.position.set(90, 80)
    this.Container.addChild(this.LevelText)

    this.Level = new PIXI.Text("1", TextStyle)
    this.Level.position.set(this.LevelText.x + this.LevelText.width, this.LevelText.y)
    this.Container.addChild(this.Level)
  }

  drawStatus() {
    const TextStyle = {
        fontSize: '16px', fontFamily: 'NotoSansTC', fontWeight: 'bold', fill: '#FFFFFF',
        dropShadow: true, dropShadowColor: '#000000', dropShadowBlur: 1, dropShadowDistance: 2,
    }
    this.StatusText = new PIXI.Text("狀態：", TextStyle)
    this.StatusText.position.set(90, 110)
    this.Container.addChild(this.StatusText)

    this.Status = new PIXI.Text("正常", TextStyle)
    this.Status.position.set(this.StatusText.x + this.StatusText.width, this.StatusText.y)
    this.Container.addChild(this.Status)
  }

  drawEquipment() {
    this.EquipmentBox = new Array()
    this.EquipmentText = new Array()
    this.Equipment = new Array()

    for (let i = 0 ; i < 4 ; i++) {
      this.EquipmentBox[i] = new PIXI.Graphics()
      this.EquipmentBox[i].beginFill(0x000000)
      this.EquipmentBox[i].lineStyle(1, 0xFFFFFF, 1)
      this.EquipmentBox[i].drawRoundedRect(20 + (i * 70), 150, 50, 50, 1)
      this.EquipmentBox[i].endFill()
      this.Container.addChild(this.EquipmentBox[i])

      const TextStyle = {
          fontSize: '14px', fontFamily: 'NotoSansTC', fontWeight: 'bold', fill: '#FFFFFF',
          dropShadow: true, dropShadowColor: '#000000', dropShadowBlur: 1, dropShadowDistance: 2,
      }
      this.EquipmentText[i] = new PIXI.Text("裝備", TextStyle)
      this.EquipmentText[i].position.set(20 + (this.EquipmentBox[i].width) / 2 - (this.EquipmentText[i].width / 2) + (i * 70), 150 + (this.EquipmentBox[i].height / 2) - (this.EquipmentText[i].height / 2))
      this.Container.addChild(this.EquipmentText[i])
    }
    var j = 0
    for (let i = 4 ; i < 8 ; i++) {
      this.EquipmentBox[i] = new PIXI.Graphics()
      this.EquipmentBox[i].beginFill(0x000000)
      this.EquipmentBox[i].lineStyle(1, 0xFFFFFF, 1)
      this.EquipmentBox[i].drawRoundedRect(20 + (j * 70), 220, 50, 50, 1)
      this.EquipmentBox[i].endFill()
      this.Container.addChild(this.EquipmentBox[i])

      const TextStyle = {
          fontSize: '14px', fontFamily: 'NotoSansTC', fontWeight: 'bold', fill: '#FFFFFF',
          dropShadow: true, dropShadowColor: '#000000', dropShadowBlur: 1, dropShadowDistance: 2,
      }
      this.EquipmentText[i] = new PIXI.Text("裝備", TextStyle)
      this.EquipmentText[i].position.set(20 + (this.EquipmentBox[i].width / 2) - (this.EquipmentText[i].width / 2) + (j * 70), 220 + (this.EquipmentBox[i].height / 2) - (this.EquipmentText[i].height / 2))
      this.Container.addChild(this.EquipmentText[i])
      j += 1
    }

    this.EquipmentText[0].text = "武器"
    this.EquipmentText[1].text = "帽子"
    this.EquipmentText[2].text = "衣服"
    this.EquipmentText[3].text = "鞋子"
    this.EquipmentText[4].text = "戒指"
    this.EquipmentText[5].text = "手鐲"
    this.EquipmentText[6].text = "戒指"
    this.EquipmentText[7].text = "手鐲"
  }

}

export default PlayerBox