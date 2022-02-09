import Game from '../../../Game'
import ActorController from './Actor/ActorController'

class Controller {

    KeyPressed: {} = {}

    KeyAction: {} = { "Enter": false }

    Game: Game

    ActorController: ActorController

    constructor(Game) {
        this.Game = Game
        this.ActorController = new ActorController(Game, this.Game.Player.Data.Name, this.Game.Player.Data.x, this.Game.Player.Data.y)        

        document.addEventListener('pointermove', this.PointerMoveListener) 
        document.addEventListener('pointerdown', this.PointerDownListener)
        document.addEventListener('keydown', this.KeyDownListener)
        document.addEventListener('keyup', this.KeyUpListener)

        setInterval(this.Update, 20)
    }

    Update = () => {
        this.UpdateAction()
        this.UpdateActor()
    }

    UpdateAction = () => {
        this.ActorController.Keyboard(this.KeyPressed)
    }

    UpdateActor = () => {
        if (!this.Game.Player) return false
        this.Game.World.view(this.ActorController.x, this.ActorController.y)
        this.Game.Player.Data.x = this.ActorController.x
        this.Game.Player.Data.y = this.ActorController.y
        this.Game.Player.Data.Rotation = this.ActorController.Rotation
        this.Game.Player.Data.Attack = this.ActorController.Attack
        this.Game.Player.Update()
        this.EmptyActor()
    }

    EmptyActor = () => {
        this.ActorController.Attack = false
    }

    PointerMoveListener = (e) => {
        let World = { toLocal: { x: this.Game.stage.toLocal(this.Game.World.Container.position).x, y: this.Game.stage.toLocal(this.Game.World.Container.position).y } }
        let Player = { toLocal: { x: World.toLocal.x + this.ActorController.x, y: World.toLocal.y + this.ActorController.y } }
        this.ActorController.Rotation = Math.atan2(e.y - Player.toLocal.y, e.x - Player.toLocal.x)
    }

    PointerDownListener = (e) => {
        if (!this.ActorController.Attack) this.ActorController.Attack = true
    }

    KeyDownListener = (e) => {
        switch (e.key) {
            case 'w':
            case 'a':
            case 's':
            case 'd':
                this.KeyPressed[e.key] = true
                break
            case 'Enter':
                this.Game.Screen.PlayerSay(this.ActorController)
                this.KeyAction[e.key] = !this.KeyAction[e.key]
                break
            case "q": 
                this.Game.Screen.ShowTabBox()
                break
        }
    }
    
    KeyUpListener = (e) => {
        switch (e.key) {
            case 'w':
            case 'a':
            case 's':
            case 'd':
                this.KeyPressed[e.key] = false
                break
        }
    }

}

export default Controller