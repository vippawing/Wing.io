import { Canvas } from '../../../Lib/Constants'
import GameObject from '../../../GameObject'

class GameObjectData {

    GameObject: GameObject

    _display = { ObjectClass: "", zIndex: 0, scale: 1, width: 0, height: 0 }

    _status = {
        Name: "Name",
        GroundCode: 1,
        x: (Canvas.width / 2),
        y: (Canvas.height / 2),
        Rotation: 0,
    }

    constructor() {

    }

    init(ObjectClass, Name, GroundCode, x, y) {
        this.ObjectClass = ObjectClass
        this.Name = Name
        this.GroundCode = GroundCode
        this.x = x
        this.y = y
    }

    set GroundCode(GroundCode) {
        this._status.GroundCode = GroundCode
    }

    get GroundCode() {
        return this._status.GroundCode
    }  

    set Name(Name) {
        this._status.Name =  Name
    }

    get Name() {
        return this._status.Name
    }

    set x(x) {
        this._status.x = x
    }

    get x() {
        return this._status.x
    }

    set y(y) {
        this._status.y = y
    }

    get y() {
        return this._status.y
    }

    set Rotation(Rotation) {
        this._status.Rotation = Rotation
    }

    get Rotation() {
        return this._status.Rotation
    }

    set ObjectClass(ObjectClass) {
        this._display.ObjectClass = ObjectClass
    }

    get ObjectClass() {
        return this._display.ObjectClass
    }

    set zIndex(zIndex) {
        this._display.zIndex = zIndex
    }

    get zIndex() {
        return this._display.zIndex
    }

    set scale(scale) {
        this._display.scale = scale
    }

    get scale() {
        return this._display.scale
    }

    set width(width) {
        this._display.width = width
    }

    get width() {
        return this._display.width
    }

    set height(height) {
        this._display.zIndex = height
    }

    get height() {
        return this._display.height
    }

}

export default GameObjectData