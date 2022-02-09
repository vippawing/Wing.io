import * as PIXI from 'pixi.js-legacy'
import StatusBar from './StatusBar'
import PlayerBox from './PlayerBox'
import ChatBox from './ChatBox'

class Screen {

  Container: PIXI.Container

  StatusBar: StatusBar

  PlayerBox: PlayerBox

  ChatBox: ChatBox

  constructor() {
    this.Container = new PIXI.Container()
    this.StatusBar = new StatusBar()
    this.ChatBox = new ChatBox()
    this.PlayerBox = new PlayerBox()

    this.Container.addChild(this.StatusBar.Container)
    this.Container.addChild(this.PlayerBox.Container)
    this.Container.addChild(this.ChatBox.Container)
  }

  PlayerSay(Player) {
    if (this.ChatBox.SayInput.disabled) {
        this.ChatBox.SayInput.disabled = false
        this.ChatBox.SayInput.focus()
    } else {
        Player.status.Say = this.ChatBox.SayInput.text
        this.ChatBox.SayInput.text = ""
        this.ChatBox.SayInput.blur()
        this.ChatBox.SayInput.disabled = true      
    }
  }

  resize(width, height) {
    this.StatusBar.Container.position.set((width / 2) - 150, height - 70)
  }

  ShowTabBox() {
    this.PlayerBox.Container.visible = !this.PlayerBox.Container.visible
  }

}

export default Screen