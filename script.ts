// class Point { x: number; y: number; }
// let point: Point = new Point();
// point.x = 1;
// point.y = 3;

// class Rect {
//     private x1: number //переменную нельзя изменять единично
//     public x2: number  //можно
//     y1: number
//     y2: number
//     private readonly MAX_COORD  = 1000;// readonly -
//     constructor(x: number, y: number) {
//         this.x1 = x
//         this.x2 = x
//         this.y1 = y
//         this.y2 = y
//     }
//     square(){
//         return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2)
//     }
// }
// let rect1: Rect = new Rect(10, 20);
// let rectSquare: number = rect1.square();
// console.log(rectSquare)

// ------------------------------------------------------------------------------------------
// class Point {
//     x: number;
//     y: number;
//     z: number;

//     constructor(x: number, y: number, z: number) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }
// }

// class Triangle {
//     point1: Point;
//     point2: Point;
//     constructor(x1: number = 0, x2: number = 0, y1: number = 0, y2: number = 0, z1: number = 0, z2: number = 0) {
//         this.point1 = new Point(x1, y1, z1)
//         this.point2 = new Point(x2, y2, z2)
//     }
// }
// let trilage1 = new Triangle()
// let trilage2 = new Triangle(10, 15, 24, 42 ,32 ,9)

// console.log("Trilage1:")
// console.log(trilage1.point2.x)
// console.log(trilage1.point2.y)
// console.log(trilage1.point2.z)

// -------------------------------------------------------------------------------------------------------------------

class General {
    name: string;
    sizes: string;
    price: number;
}

class Chair extends General {
    legCount: number;
    legHeight: number;
    backrest: boolean;
    constructor(_name: string, _sizes: string, _price: number) {
        super()
        this.name = _name;
        this.sizes = _sizes;
        this.price = _price;
    }
}

class Closet extends General {
    handleMaterial: string;
    leafNumber: number;
    lockers: number;
    constructor(_name: string, _sizes: string, _price: number) {
        super()
        this.name = _name;
        this.sizes = _sizes;
        this.price = _price;
    }
}

class Shelves extends General {
    numberSegments: number;
    sizeSegment: number;
    constructor(_name: string, _sizes: string, _price: number) {
        super()
        this.name = _name;
        this.sizes = _sizes;
        this.price = _price;
    }
}

class Tables extends General {
    legCount: number;
    worktopArea: number;
    constructor(_name: string, _sizes: string, _price: number) {
        super()
        this.name = _name;
        this.sizes = _sizes;
        this.price = _price;
    }
}
