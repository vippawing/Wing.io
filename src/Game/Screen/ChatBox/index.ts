import * as PIXI from 'pixi.js-legacy'
import { Canvas } from '../../Lib/Constants'
import { Scrollbox } from 'pixi-scrollbox'
const TextInput = require('pixi-text-input')

class ChatBox {

    Container: PIXI.Container

    Obj: PIXI.Graphics

    SayInput: any

    SayButton: PIXI.Graphics

    SayButtonText: PIXI.Text

    MsgScrollBox: Scrollbox

    Msg: PIXI.Text

    constructor() {
        this.Container = new PIXI.Container()
        this.Container.position.set(0, Canvas.height)
        this.drawOBj()
        this.drawSayInput()
        this.drawSayButton()
        this.drawMsg()
    }

    drawOBj() {
        this.Obj = new PIXI.Graphics()
        this.Obj.beginFill(0xFFFFFF, 0.5)
        this.Obj.lineStyle(1, 0x000000, 1)
        this.Obj.drawRoundedRect(1, -251, 400, 251, 1)
        this.Obj.endFill()
        this.Container.addChild(this.Obj)
    }

    drawSayInput() {
        this.SayInput = new TextInput({
            input: {
                fontFamily: 'NotoSansTC', fontSize: '18px', padding: '4px 6px 4px 6px', width: '311px', height: '20px', color: '#000000'
            },
            box: {
                default: { fill: 0xAAAAAA, stroke: { color: 0x444444, width: 3 } }, focused: { fill: 0xFFFFFF, stroke: { color: 0x777777, width: 3 } },
            }
        })
        this.SayInput.x = 1
        this.SayInput.y = -30
        this.SayInput.disabled = true
        this.Container.addChild(this.SayInput)
    }

    drawSayButton() {
        this.SayButton = new PIXI.Graphics()
        this.SayButton.beginFill(0x000000, 0.75)
        this.SayButton.drawRect(325, -31, 75, 31)
        this.SayButton.endFill()
        this.SayButton.interactive = true
        this.SayButton.on('mouseover', mouseData => { this.SayButton.alpha = 0.9 })
        this.SayButton.on('mouseout', mouseData => { this.SayButton.alpha = 1 })
        this.SayButton.on('click', mouseData => { })
        this.Container.addChild(this.SayButton)

        const TextStyle = { 
            fontSize: '21px', fontFamily: 'cwTeXYen', fontWeight: 'bold', fill: '#FFFFFF',
            dropShadow: true, dropShadowColor: '#000000', dropShadowBlur: 1, dropShadowDistance: 2,
        }
        this.SayButtonText = new PIXI.Text("發 送", TextStyle)
        this.SayButtonText.position.set(340, -26)
        this.Container.addChild(this.SayButtonText)
    }

    drawMsg() {
        this.MsgScrollBox  = new Scrollbox({ boxWidth: 395, boxHeight: 215, overflow: "hidden"})
        this.MsgScrollBox.position.set(1, -250)
        const TextStyle = { 
            fontSize: '21px', fontFamily: 'NotoSansTC', fontWeight: 'normal', fill: '#000000',
            dropShadow: true, dropShadowColor: '#FFFFFF', dropShadowBlur: 1, dropShadowDistance: 2,
            breakWords:true, wordWrap: true, wordWrapWidth: 400
        }
        this.Msg = this.MsgScrollBox.content.addChild(new PIXI.Text(" ☆ ★ ☆ ╰⊱⋛⋋ 歷史訊息 ⋌⋚⊰╯ ☆ ★ ☆ \n\n",TextStyle))
        this.MsgScrollBox.update()
        this.Container.addChild(this.MsgScrollBox)
    }
}

export default ChatBox