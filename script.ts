class Point { x: number; y: number; }
let point: Point = new Point();
point.x = 1;
point.y = 3;

class Rect {
    private x1: number //переменную нельзя изменять единично
    public x2: number  //можно
    y1: number
    y2: number
    private readonly MAX_COORD  = 1000;// readonly -
    constructor(x: number, y: number) {
        this.x1 = x
        this.x2 = x
        this.y1 = y
        this.y2 = y
    }
    square(){
        return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2)
    }
}
let rect1: Rect = new Rect(10, 20);
let rectSquare: number = rect1.square();
console.log(rectSquare)
