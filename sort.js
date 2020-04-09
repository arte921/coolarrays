var mcbwidth = window.innerWidth
var mcbheight = window.innerHeight

var totalx = mcbwidth
var totaly = mcbheight

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

canvas.width = mcbwidth
canvas.height = mcbheight

let arr = []
for(let i=0;i<totalx;i++) arr.push(Math.random()*totaly)

begintime = performance.now()

arr = arr.sort()

console.log("javascript builtin sort: " + (performance.now()-begintime) + " ms")


function render(x,y){
  ctx.fillRect(x/totalx*canvas.width,canvas.height-y/totaly*canvas.height,1,1)
}

for(let i=0;i<=arr.length;i++){
  render(i,arr[i])
}
