var mcbwidth = window.innerWidth
var mcbheight = window.innerHeight

var maxx = mcbwidth
var maxy = Math.pow(2,32)-1

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

canvas.width = mcbwidth
canvas.height = mcbheight

var truearr = new Uint32Array(maxx)
window.crypto.getRandomValues(truearr)
truearr.sort()

let pseudoarr = []
for(let i=0;i<maxx;i++) pseudoarr.push(Math.random()*maxy)
pseudoarr.sort()

pseudoarr = makeFlat(pseudoarr, maxx, maxy, 2/3)
truearr = makeFlat(truearr, maxx, maxy, 1/3)

plotArray(truearr, maxx, maxy, 1/3, "#FF0000")
plotArray(pseudoarr, maxx, maxy, 2/3, "#0000FF")

function makeFlat(arr, totalx, totaly, plotheight){
  let oarr = []
  for(let i=0;i<=totalx;i++){
    oarr[i] = arr[i] - i/totalx*totaly+totaly*plotheight
  }
  return oarr
}

function plotArray(arr, totalx, totaly, plotheight, color){
  ctx.fillStyle = color
  for(let x=0;x<=totalx;x++){
    ctx.fillRect(x/totalx*canvas.width,canvas.height-arr[x]/totaly*canvas.height,1,1)
  }
}
