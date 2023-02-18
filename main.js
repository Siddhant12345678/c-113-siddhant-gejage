function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(230,300);
    video=createCapture(VIDEO);
    video.position(300,400);
    video.size(500,350,);

}

function take_snapshot(){
    save("YourImage.png");
}
function draw(){
    fill('blue');
    stroke('aqua');
    circle(50, 70, 50);

    fill('blue');
    strokeWeight(4);
    stroke('aqua');
  circle(570, 70, 50);
  
fill('white');
  rect(70, 60, 480, 20);

  fill('blue');
    stroke('aqua');
    circle(65, 470, 50);

    fill('blue');
    strokeWeight(4);
    stroke('aqua');
  circle(575, 470, 50);

  fill('white');
  rect(90, 460, 460, 20);

  
}
