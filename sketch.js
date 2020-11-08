var car;
var wall;
var speed,weight;

function setup() {
  speed=random(55,90);
  weight=random(400,1500)
  createCanvas(1800,400);
  car=createSprite(40, 200, 50, 50);
  car.shapeColor="black";
  car.velocityX=speed;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="grey";

  

}

function draw() {
  background(255,255,255);

  if (wall.x-car.x  < car.width/2+wall.width/2){
    car.velocityX=0;

    var deformation= 0.5 * weight * speed * speed/22509;

    if(deformation<100){
      car.shapeColor="green";


    }
    
    if (deformation>180){
      car.shapeColor="red";
    }
    
    if (deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
  }
  
 

  


  drawSprites();
}