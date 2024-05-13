function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
}


function take_snapshot(){
    save('myFilterImage.png')
}

function setput() {
    canvas = createCanvas(300,300);
    canvas.center();
    vedieo = createCapture(VIDEO);
    vedieo.size(300,300);
    vedieo.hide();

    poseNet = ml5.poseNet(vedieo, modelLoaded);
    poseNet.on ('pose', gotPoses); 
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function gotPoses(results) 
{
    if(result.lenght > 0)
    {
        console.log(result);
        console.log("nose x = " + result[0].pose.nose.x);
        console.log("nose y = " + result[0].pose.nose.y);
    }
}