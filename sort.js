var mcbwidth = window.innerWidth
var mcbheight = window.innerHeight

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

canvas.width = mcbwidth
canvas.height = mcbheight

const maxxp = mcbwidth
const maxyp = 1000

const maxxt = 40

const maxyt = Math.pow(2,32)-1

var truearr = new Uint32Array(maxxt)
window.crypto.getRandomValues(truearr)

let pseudoarr = []
for(let i=0;i<maxxp;i++) pseudoarr.push(Math.random()*maxyp)


pseudoarr.sort()
truearr.sort()

pseudoarr = makeFlat(pseudoarr, maxyp, 1/4)
//truearr = makeFlat(truearr, maxyt, 2/4)


//plotArray(pseudoarr, 0, maxyp, "#0000FF",true)
plotArray(truearr, 0, maxyt, "#FF0000",true)
//plotArray(getDerative(pseudoarr,maxyp), 0,pseudoarr.length,1,"#00FF00")

function makeFlat(arr, totaly, plotheight){
  let totalx = arr.length
  let oarr = []
  for(let i=0;i<=totalx;i++){
    oarr[i] = arr[i] - i/totalx*totaly+totaly*plotheight
  }
  return oarr
}

function plotArray(arr, mingy, f, color,connect){
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
