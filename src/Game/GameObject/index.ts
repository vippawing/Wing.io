import * as PIXI from 'pixi.js-legacy'
import { PixiResources } from '../Lib/Loader'
import Game from '../../Game'

abstract class GameObject {

    Game: Game

    resources: Object = PixiResources

    Container: PIXI.Container

    _id: number

    constructor(Game, id) {
        this.Game = Game
        this.id = id

        this.Container = new PIXI.Container()
        this.Container.sortableChildren = true  
    }

    set id(id) {
        this._id = id
    }

    get id() {
        return this._id
    }

}

export default GameObject