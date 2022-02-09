class Actor {

    _status = { Name: "Vippa", GroundCode: 1, x: 0, y: 0, Rotation: 0, Attack: false, Say: "" }

    _Controller = { sx: 10, sy: 10, vx: 0, vy: 0 }
    
    constructor(Name, x, y) {
        this.Name = Name
        this.x = x
        this.y = y
    }

    set Name(Name) {
        this._status.Name = Name
    }

    get Name() {
        return this._status.Name
    }

    set GroundCode(GroundCode) {
        this._status.GroundCode = GroundCode
    }

    get GroundCode() {
        return this._status.GroundCode
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

    set sx(sx) {
        this._Controller.sx = sx
    }

    get sx() {
        return this._Controller.sx
    }

    set sy(sy) {
        this._Controller.sy = sy
    }

    get sy() {
        return this._Controller.sy
    }

    set vx(vx) {
        this._Controller.vx = vx
    }

    get vx() {
        return this._Controller.vx
    }

    set vy(vy) {
        this._Controller.vy = vy
    }

    get vy() {
        return this._Controller.vy
    }

}

export default Actor