export class Points1 {
    constructor(private _x?: number, private _y?: number){ // put "?" for optional variable
    }

    draw(){
    }

    get x(){
        return this._x;
    }

    set x(value: number){
        if(value < 0)
            throw new Error("");
        this._x =  value;
    }

    get y(){
       return this._y;
    }

    set y(value: number){
        if(value < 0)
            throw new Error("");
        this._y = value;
    }

}