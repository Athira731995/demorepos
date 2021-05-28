class Card{
    type:string
    name:string
    exp_date:string
    Acc_name:string
    constructor(type:string,name:string,Acc_Name:string,exp_date:string){
        this.type=type
        this.name=name
        this.exp_date=exp_date
        this.Acc_name=Acc_Name
    }
    //instance methods or member functions
    getDiscount(Amount:number){
        if(this.type=="Platinum")
        {
            console.log("You need to pay ",Amount*0.5)
        }   else if (this.type=="Gold") {
            console.log("You need to pay ",Amount*0.3)
        }
        else if(this.type=="Silver"){
            console.log("You need to pay ",Amount*0.25)
        }

    }

}
let card1:Card=new Card("Silver","Master Card","Anitha ",new Date().toDateString()) 
console.log(card1)
card1.getDiscount(50000)
function getValue(value:number|string|string[]){
console.log(value)
}
getValue(100)
getValue("hello")
getValue(["a","b","c"])
function add(x,y=40){
    console.log(x+y)
}
add(10)
add(1,2)
//rest parameter 
function getNumbers(...args:number[]){
    let sum=0
    args.forEach((data)=>{

        sum+=data
    })
    console.log("sum of values =",sum)
}
getNumbers(10,12,14,20.25,400)
