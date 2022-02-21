var noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
diffrence = 0;

function setup(){
    video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 550);
  canvas.position(560, 150);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw(){
    background('#5b5c75');
    fill('teal');
    textSize(diffrence)
    stroke('gray');
    document.getElementById("square_sides").innerHTML = "width and height of the square is gonna be " + diffrence + "px";
    text('LUKE', noseX, noseY)
}
function modelLoaded(){
    console.log('poseNet initialised');
}
function gotPoses(results){
   if(results.length > 0)
   {
       console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
       console.log("noseX" + noseX + "noseY" + noseY);
       leftwristX = results[0].pose.leftWrist.x;
       rightwristX = results[0].pose.rightWrist.x;
       diffrence = floor(leftwristX - rightwristX)
       console.log("leftwristX" + leftwristX + "rightwristX" + rightwristX + "diffrence" + diffrence);
   }

}
