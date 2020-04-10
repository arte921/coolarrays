var mcbwidth = window.innerWidth
var mcbheight = window.innerHeight
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
canvas.width = mcbwidth
canvas.height = mcbheight

const maxxt = 4000
const maxyt = Math.pow(2,32)-1 //dont change
var truearr = new Uint32Array(maxxt)
window.crypto.getRandomValues(truearr)
truearr.sort()
//truearr = makeFlat(truearr, maxyt, 2/4)
plotArray(truearr,"#FF0000",false)

const maxxp = mcbwidth
const maxyp = 4000
let pseudoarr = []
for(let i=0;i<=maxxp;i++) pseudoarr.push(Math.random()*maxyp)
pseudoarr.sort()
//pseudoarr = makeFlat(pseudoarr, maxyp, 1/4)
//plotArray(pseudoarr,"#0000FF",true)

const maxxw = 4000
let walkarr = []
let last = 1000
for(let i=0;i<maxxw;i++){
  let random = Math.random()-0.5
  let current = last + random
  walkarr.push(current)
  last = current
}
plotArray(walkarr,"#00FF00",true)

function makeFlat(arr, totaly, plotheight){
  let totalx = arr.length
  let oarr = []
  for(let i=0;i<=totalx;i++){
    oarr[i] = arr[i] - i/totalx*totaly+totaly*plotheight
  }
  return oarr
}

function plotArray(arr,color,connect){
  let maxy = Math.max(...arr.filter(number => !isNaN(number)))
  let miny = Math.min(...arr.filter(number => !isNaN(number)))
  let totalx = arr.length
  let totaly = maxy-miny


  if(connect){
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.moveTo(0,canvas.height-arr[0]/totaly*canvas.height)
  }else ctx.fillStyle = color

  for(let x=0;x<=totalx;x++){
    let rely = arr[x]-miny
    if(connect){
      ctx.lineTo(x/totalx*canvas.width,canvas.height-rely/totaly*canvas.height)
    }else{
      ctx.fillRect(x/totalx*canvas.width,canvas.height-rely/totaly*canvas.height,1,1)
    }
  }
  ctx.stroke()
}

function getDerative(arr,maxy){
  let result = []
  for(let i=0;i<arr.length;i++){
    result.push((arr[i+1]-arr[i])*10+10)
    console.log((arr[i+1]-arr[i]))
  }
  return result
}
