picture=""
function setup(){
canvas = createCanvas(1200,675)
canvas.center()
}
function draw(){
image(picture,0,0,1200,675)

}
function preload(){

picture = loadImage("")
}