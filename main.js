function setup() {
    video = createCapture(VIDEO);
    video.size(350, 350);

    canvas = createCanvas(550, 500)
    canvas.position(500, 60);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function modelLoaded() {
    console.log('Nothing To See Here Move On');
  }

  function draw() {
     image(video, 0, 0, 100, 100);
     background('#ff0000');
  }

function gotPoses (results) 
{
    if(results.length > 0)
    {
        console.log(results);
    }
}