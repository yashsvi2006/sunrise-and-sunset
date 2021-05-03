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
    


}

function draw(){
  if(bg){
      background(bg);
  }
    


    Engine.update(engine);
    if(hour>=12){
         text("Time : "+ hour%12 + " PM", 50,100);
         }else if(hour==0){
              text("Time : 12 AM",100,100); 
            }
        else{
         text("Time : "+ hour%12 + " AM", 50,100);
         }
    


}

async function getBackgroundImg(){
    
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        hour =datetime.slice(11,13);
        
        if(hour>=04 && hour<=06){
            backgroundImg = "sunrise1.png";
        }
        else if (hour>=06 && hour<=08){
            backgroundImg = "sunrise2.png";
        }
        else if(hour>=08 && hour<=11) {
            backgroundImg = "sunrise3.png";
        }else if(hour>=11 && hour<=13) {
            backgroundImg = "sunrise4.png";
        }
        else if(hour>=13 && hour<=15) {
            backgroundImg = "sunrise5.png";
        }
        else if(hour>=15 && hour<=17) {
            backgroundImg = "sunrise6.png";
        }
        else if(hour>=17 && hour<=18) {
            backgroundImg = "sunset7.png";
        }
        else if(hour>=18 && hour<=20) {
            backgroundImg = "sunset8.png";
        }
        else if(hour>=20 && hour<=23) {
            backgroundImg = "sunset9.png";
        }
        else if(hour>=23 && hour<=0) {
            backgroundImg = "sunset10.png";
        }
        else if(hour>=0 && hour<=03) {
            backgroundImg = "sunset11.png";
        }
        else if(hour>=03 && hour<=06) {
            backgroundImg = "sunset12.png";
        }

    
        bg = loadImage(backgroundImg);
      
    }
    

    


