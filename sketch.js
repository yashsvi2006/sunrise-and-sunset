const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
  
  
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


}

function draw(){
  if(bg){
      background(bg);
  }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=04 && hour<=06){
            backgroundImg = "sunrise1.png";
        }
        else if (hour>=06 && hour<=08){
            backgroundImg = "sunrise2.png";
        }
        else if(hour>=08 && hour<=09) {
            backgroundImg = "sunrise3.png";
        }else if(hour>=09 && hour<=10) {
            backgroundImg = "sunrise4.png";
        }
        else if(hour>=10 && hour<=11) {
            backgroundImg = "sunrise5.png";
        }
        else if(hour>=11 && hour<=12) {
            backgroundImg = "sunrise6.png";
        }
        else if(hour>=22 && hour<=24) {
            backgroundImg = "sunrise5.png";
        }

    
        bg = loadImage(backgroundImg);
      //  console.log(backgroundImg);
    }
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


