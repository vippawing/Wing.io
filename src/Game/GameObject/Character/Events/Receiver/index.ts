import Character from '../../../Character'

class Receiver {

    Character: Character

    constructor(Character) {
        this.Character = Character
    }

    Receive = (Event, Obj) => {
        switch (Event) {
            case "Teleport":
                this.Character.Events.Handler.Teleport()
                break
            case "Cantgohere":
                this.Character.Events.Handler.Cantgohere(Obj)
                break
            default:
                break
        }

    } 

}

export default Receiver