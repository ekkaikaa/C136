video = "";
status = "empty"

function preload(){
    video = createVideo('video.mp4')
    video.hide()

}

function setup(){
    canvas = createCanvas(480,380)
    canvas.center()
}

function draw(){
    image(video, 0,0, 480,380)
}

function start(){
    object_detector = ml5.objectDetector('cocossd', modelloaded)
}

function modelloaded() {
    console.log("cocossd model has been loaded sucesfully");
    status = true 
    video.loop()
    video.speed(1)
    video.volume(0)
}
