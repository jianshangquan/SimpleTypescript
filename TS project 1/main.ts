let a: number;
let b: string;
let c: any;
let d: number[] = [1,2,3];
let e: boolean;
let f: any[] = [1, " ", 1.1, false, true];

const ColorRed = 0;


enum Colors{
    Red = 0, Green = 1, Yellow = 2
}

let backgroundColor = Colors.Red;





// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
// }


class Points {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number){ // put "?" for optional variable
        this.x = x; this.y = y;
    }

    draw(){
    }
}





import {Points1} from "./point";
let point = new Points1(1,2); 
point.draw();


// function drawPoint(point: {x: number, y: number}){
//     //.. do something
// }

// function drawPoint(point: Point){
//     //.. do something
// }


// function getDistance(point: Point, pointB: Point){
//     //...
// }


// drawPoint({
//     x: 1,
//     y: 1
// });




