class Person{
    name:string
    age:number
    city:string
    constructor(name,age,city){
        this.name=name
        this.age=age
        this.city=city// console.log("Person class Constructor")
    }
}

class Faculty extends Person{
    dept_name="CS"
    Fac_id="F101"
    constructor(name,age,city,dept_name,Facid){
        super(name,age,city)
        this.dept_name=dept_name
        this.Fac_id=Facid
      //  console.log("child class Constructor")
    }
    display(){
        console.log(`Name : ${this.name}`)
        console.log(`Age : ${this.age}`)
        console.log(`City : ${this.city}`)
        console.log(`Dept_name : ${this.dept_name}`)
        console.log(`Facid: ${this.Fac_id}`)
    }
}
let f:Faculty=new Faculty("Anna",12,"Nyc","CSE","f101")
f.display()
// console.log(f.name)
// console.log(f.age)
// console.log(f.dept_name)