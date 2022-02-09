import Charactor from '../../../Character'
import Image from '../Image'

class Attack {

    Charactor: Charactor

    Image: Image

    Attacking: boolean = false

    AttackAnimationDisplay: number = 0

    constructor(Charactor, Image) {
        this.Charactor = Charactor
        this.Image = Image
    }

    AttackAnimation = () => {
        if (this.Charactor.Data.Attack && !this.Attacking) {
            this.Attacking = true
            this.Charactor.Data.Attack = false
        }
        if (this.Attacking) this.AttackAnimationDisplay += 1
        switch (this.AttackAnimationDisplay) {
            case 1:
                this.Image.LeftHand.x = 19
                this.Image.RightHand.x = 21
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 2:
                this.Image.LeftHand.x = 18
                this.Image.RightHand.x = 22
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 3:
                this.Image.LeftHand.x = 17
                this.Image.RightHand.x = 23
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 4:
                this.Image.LeftHand.x = 16
                this.Image.RightHand.x = 24
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 5:
                this.Image.LeftHand.x = 15
                this.Image.RightHand.x = 25
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 6:
                this.Image.LeftHand.x = 14
                this.Image.RightHand.x = 27
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 7:
                this.Image.LeftHand.x = 13
                this.Image.RightHand.x = 29
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 8:
                this.Image.LeftHand.x = 12
                this.Image.RightHand.x = 31
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 9:
                this.Image.LeftHand.x = 11
                this.Image.RightHand.x = 33
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 10:
                this.Image.LeftHand.x = 10
                this.Image.RightHand.x = 36
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 11:
                this.Image.LeftHand.x = 9
                this.Image.RightHand.x = 39
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 12:
                this.Image.LeftHand.x = 8
                this.Image.RightHand.x = 42
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 13:
                this.Image.LeftHand.x = 7
                this.Image.RightHand.x = 46
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 14:
                this.Image.LeftHand.x = 6
                this.Image.RightHand.x = 50
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 15:
                this.Image.LeftHand.x = 5
                this.Image.RightHand.x = 55
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation -= 0.05
                break
            case 16:
                this.Image.LeftHand.x = 6.5
                this.Image.RightHand.x = 51.5
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                break
            case 17:
                this.Image.LeftHand.x = 8
                this.Image.RightHand.x = 48.5
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                break
            case 18:
                this.Image.LeftHand.x = 9.5
                this.Image.RightHand.x = 44.5
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                break
            case 19:
                this.Image.LeftHand.x = 11
                this.Image.RightHand.x = 41
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                break
            case 20:
                this.Image.LeftHand.x = 12.5
                this.Image.RightHand.x = 37.5
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                break
            case 21:
                this.Image.LeftHand.x = 14
                this.Image.RightHand.x = 34
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                break
            case 22:
                this.Image.LeftHand.x = 15.5
                this.Image.RightHand.x = 30.5
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                break
            case 23:
                this.Image.LeftHand.x = 17
                this.Image.RightHand.x = 27
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                break
            case 24:
                this.Image.LeftHand.x = 18.5
                this.Image.RightHand.x = 23.5
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                break
            case 25:
                this.Image.LeftHand.x = 20
                this.Image.RightHand.x = 20
                this.Image.Weapon.x = this.Image.RightHand.x + 25
                this.Image.Body.rotation += 0.075
                this.Attacking = false
                this.AttackAnimationDisplay = 0
                break
        }
    }

    Update = () => {
        this.AttackAnimation()
    }

}

export default Attack