nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
difference=0;
function setup(){
canvas=createCanvas(550,480);
canvas.position(650,120);
video=createCapture(VIDEO);
video.size(550,480)
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes)
}
function modelLoaded()
{
console.log("model loaded")
}
function gotposes(results)
{
if(results.length>0)
{
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex= "+nosex+" nosey= "+nosey);
leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
difference=floor(leftwristx-rightwristx);
}
}
function draw()
{
background('grey');
stroke('turquoise');
text("Mithra",nosex,nosey,difference);
}