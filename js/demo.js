function add(){
   // document.getElementById("mydiv").innerHTML=`<p>welcome</p>`
   let mypara=document.createElement("p")
    mypara.innerText="welcome"
    mypara.id="p1"
    mypara.style="color:red"
    document.getElementById("mydiv").appendChild(mypara)

}
let data=["a","b","c","d","e"]


for(let i of data){
  let li= document.createElement("li")
  li.innerText=i
  document.getElementById("myarray").appendChild(li)


}
function remove(){
 let parent=document.getElementById("myarray")
//  parent.removeChild(parent.childNodes[0])
parent.remove()
}
let num_arr=[10,12,33,35,27,28,32]

num_arr.forEach((num)=>{
    console.log(num)
})
let new_arrr=num_arr.map((d)=>{
    return d**2
})
console.log(new_arrr)
let new_array=num_arr.map((elements)=>{
    return elements+2

})
console.log(new_array)
let new_arrys=num_arr.filter((d)=>{
if(d%2!=0){
    return d
}
})
console.log(new_arrys)
let r=new_array.reduce((x,y)=>{
    // 5mins
    // console.log(" x =",x)
    // console.log(" y =",y)
    // return x+y
})
console.log(r)
// let r=new_array.reduceRight((x,y)=>{
//     console.log(" x =",x)
//     console.log(" y =",y)
//     return x-y
// })
// console.log(r)
console.log("started...")
function asyntest(){
    setTimeout(()=>{
        console.log("inside asyn function...")
    },5000)
}
asyntest()
console.log("finished....")
console.log("test")