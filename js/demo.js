function validate(){
 let  fname=  document.getElementById("firstname")
 let  lname=  document.getElementById("lastname")
 let  email=  document.getElementById("email")
 let  mobile=  document.getElementById("mobile")
 let  password=  document.getElementById("password")
if(fname.value==""){
    console.log("dd")
    alert("first name can't be empty")
    fname.focus()
    return false
}


if(mobile.value==""){
    console.log("dd")
    alert("mobile number field can't be  empty")
    mobile.focus()
    return false
}
console.log(isNaN(mobile.value))
if(/^\+91\s\d{10}$/.test(mobile.value)==false){
    alert("invalid mobile number")
    mobile.focus()
    return false

}
if(password.value==""){
    alert("Password field can't be empty")
    password.focus()
    return false
}
if(password.value.length!=5)
{
    alert("Password Length should be 5")
    password.focus()
    return false

}

}
document.write("demo","\u0D05")
localStorage.setItem("one","apple")
localStorage.setItem("two","grape")
localStorage.setItem("three","orange")
console.log(localStorage.length)
function volume(l)
{
    return function(b){
        return function(h){
            return l*b*h
        }
    }
}


f=volume(100)
console.log(f)
f1=f(40)
console.log(f1(10))
console.log(volume(1)(2)(3))
function greet(gender,age,name){
    let salutation=gender=="male"?"Mr":"Ms"
    if(age>30){
        console.log("hello "+salutation+" "+name)
    }else{
        console.log("hey "+salutation+" "+name)
    }
}
f=greet.bind(null,"male",30)
console.log(f)
f("Amal")
let num=["x",123,"y",56,90]
let result=num.every((element)=>{
    console.log("called")
    if(/^\d+$/.test(element)){
        return true
    }

})
console.log(result)
result=num.some((element)=>{
    console.log("called")
    if(/^\d+$/.test(element)){
        return true
    }

})
console.log(result)

//Array Destruction
let [a,b,c,d,e]=num
console.log(a)
console.log(b)
console.log(c)
let o1={x:10,y:20}
let o2={k:30,y:25}
let o3=Object.assign(o1,o2)
console.log(o3)
for ([Key,value] of Object.entries(o3)){
    console.log(`key :${Key} : value : ${value}`)
}
qwertyi