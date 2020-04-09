var mcbwidth = window.innerWidth;
var mcbheight = window.innerHeight;

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

canvas.width = mcbwidth
canvas.height = canvas.width

let amount = mcbwidth
let arr = []
for(let i=0;i<amount;i++) arr.push(Math.random()*amount)

console.log("made an array")
/*
function swap(arr, indexa, indexb){
  let temp = arr[indexa]
  arr[indexa] = arr[indexb]
  arr[indexb] = temp
  return arr
}

let begintime = performance.now()
let isdone = false
while(!isdone){
  isdone = true
  for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
      arr = swap(arr,i,i+1)
      isdone = false
    }
  }
}

console.log("manual sort: " + (performance.now()-begintime) + " ms")*/

begintime = performance.now()

arr = arr.sort()

console.log("javascript builtin sort: " + (performance.now()-begintime) + " ms")

for(let i=0;i<=arr.length;i++){
  ctx.fillRect(Math.round(i),arr[Math.round(i)],1,1)
}
