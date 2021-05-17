console.log(w)
//console.l//
let  k=100
let x=50
add()
let z=20
function  demo(){
    let x=100
    z=30
    console.log("demo function......")
    console.log("x inside demo",x)
    console.log("z inside demo",z)
}
var w="welcome"
add()
console.log(k)
demo()
console.log(x)
console.log(z)
function add(a,b){
    let sum=a+b
    console.log("inside add function")
   // console.log(sum)
    return sum
}
let result=add(1,2)
console.log("result =",result)
console.log(add(3,4))
console.log(add(100,40))
function average(i,j,k){
    return (i+j+k)/3
}
console.log("Average =",average(10,12,13))
function greetings(){
    document.write("hello all good morning......")
}
let f=function (){
    console.log("Example for an anonymous function")
}
console.log(f);
f()

if(true){
    var message="hello"

}
console.log(message)


