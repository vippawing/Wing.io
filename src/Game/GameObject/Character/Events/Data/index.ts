import { Canvas } from '../../../../Lib/Constants'
import GameObjectData from '../../../Events/Data'
import Character from '../../../Character'

class Data extends GameObjectData {

    Character: Character

    _status = {
        Name: "Name",
        GroundCode: 1,
        x: (Canvas.width / 2),
        y: (Canvas.height / 2),
        Rotation: 0,
        Attack: false,
        Say: "" 
    }

    constructor(Character, ObjectClass, Name, GroundCode, x, y) {
        super()
        this.Character = Character
        this.init(ObjectClass, Name, GroundCode, x, y)
    }

    set Attack(Attack) {
        this._status.Attack = Attack
    }

    get Attack() {
        return this._status.Attack
    }

    set Say(Say) {
        this._status.Say = Say
    }

    get Say() {
        return this._status.Say
    }

}

export default Data