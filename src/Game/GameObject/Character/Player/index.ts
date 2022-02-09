import Character from "../../Character"

class Player extends Character {

    constructor(Game, id) {
        super(Game, id)
    }

    new = (ObjectClass, Name, GroundCode, x, y) => {
        this.initEvents(ObjectClass, Name, GroundCode, x, y)
    }

}

export default Player