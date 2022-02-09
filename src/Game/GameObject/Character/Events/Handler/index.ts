import Game from '../../../../../Game'
import Character from '../../../Character'

class Handler {

    Game: Game

    Character: Character

    constructor(Character) {
        this.Character = Character
        this.Game = Character.Game
    }

    Teleport = () => {
        if (this.Character.Data.GroundCode == 1) {
            this.Character.Data.GroundCode = 2
        } else {
            this.Character.Data.GroundCode = 1
        }
        this.Game.World.setGround(this.Character.Data.GroundCode)
    }

    Cantgohere = (Obj) => {
        if (this.Character.Data.x > Obj.Container.x) this.Character.Container.x = Obj.Data.x
    }

}

export default Handler