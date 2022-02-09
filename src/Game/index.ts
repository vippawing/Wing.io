import * as PIXI from 'pixi.js-legacy'
import Events from './Lib/Events'
import Controller from './Lib/Controller'
import Screen from './Screen'
import World from './World'
import Player from './GameObject/Character/Player'

class Game extends PIXI.Application {

    Events: Events

    Controller: Controller

    Screen: Screen

    World: World

    Player: Player

    Players = []

    Devices = []

    constructor(props: Object) {
        super(props)
        this.stage.interactive = true
        this.stage.sortableChildren = true
        this.renderer.view.style.display = 'block'
        this.renderer.view.style.position = 'absolute'

        this.setEvents()
        this.setController()
    }

    setEvents = () => {
        this.Events = new Events(this)
    }

    setController = () => {
        this.Controller = new Controller(this)
    }

}

export default Game