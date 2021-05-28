class Polygon{
    no_of_sides:number
    name:string
    draw(){
        console.log("Drawing shapes......")
    }
}
class Rectangle extends Polygon{
    length:number
    breadth:number
    constructor(l:number,b:number){
        super()
        this.length=l
        this.breadth=b
    }
    draw(){
        super.draw()
        console.log("Drawing a Rectangle with length",this.length,"and breadth ",this.breadth)
    }
}
let r=new Rectangle(10,12)
let r1:Polygon=new Rectangle(8,10)
r.draw()
console.log(r instanceof Polygon)
console.log(r instanceof Rectangle)