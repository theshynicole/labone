// names of GUI elements
var bob;
var maple;
var nic;
var sammy;
var chicken;
var radio;
var val;
var value;

//varables to control shapes on canvas
var showCircle=false;
var circleX=100;
var circleY=100;

function setup(){
    createCanvas(720,480);
    bob=createColorPicker("aquamarine");
    maple=createButton("Click for surprise");
    maple.mousePressed(function(){
         if(showCircle===true){
           showCircle=false;
         }else{
             circleX=random(width);
             circleY=random(height);
             showCircle=true;
         }
    // showCircle=!showCircle;
});

nic=createCheckbox("Other Circle",true);

sammy=createSlider(0,width,width/2);
chicken=createSlider(0,height,height/2,100);

radio=createRadio();
radio.option('black');
radio.option('blue');
radio.option('gray');
radio.style('width','60px');
textAlign(CENTER);
fill(255,0,0);
// Resource to p5 reference:https://p5js.org/reference/#/p5/createRadio
}


function draw(){
    background(bob.color());

    if(showCircle){
        circle(circleX,circleY,100);
    }
    if(nic.checked()){
        circle(400,149,40);
    }
    rect(sammy.value(),chicken.value(),100,100);

    let val=radio.value();
    background(val);
    text(val,width/2,height/2);

    background(237, 34, 93);
  fill(0);

  if (mouseIsPressed === true) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(253, 25, 50, 50);
  }

  print(mouseIsPressed);
  describe(`black 50-by-50 rect becomes ellipse with mouse click/press.
    fuchsia background.`);
    // link to p5 reference:https://p5js.org/reference/#/p5/mouseIsPressed
}
