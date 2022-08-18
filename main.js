left_WristX=0;
left_WristY=0;
right_WristX=0;
right_WristY=0;

song1="";
song2="";

function setup(){
canvas= createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("PoseNet is intialized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
left_WristX=results[0].pose.leftWrist.x;
left_WristY=results[0].pose.leftWrist.y;
console.log("Left Wrist x"+ left_WristX + "Left Wrist y"+ left_WristY);
right_WristX=results[0].pose.rightWrist.x;
right_WristY=results[0].pose.rightWrist.y;
console.log("Right Wrist x"+ right_WristX+ "Right Wrist y"+ right_WristY);
}
}

function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}

function draw(){
image(VIDEO,0,0,500,500);
}

