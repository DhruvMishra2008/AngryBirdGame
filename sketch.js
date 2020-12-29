var fixedRectangle,movingRectangle,rect1,rect2,rect3;


function setup() {
  createCanvas(800,800);
 fixedRectangle =  createSprite(400, 200, 50, 50);
 movingRectangle = createSprite(400,400,80,80);

 movingRectangle.shapeColor = "blue";
 fixedRectangle.shapeColor = "blue";
 //movingRectangle.velocityY = -4;
 //fixedRectangle.velocityY = 4;

 rect1 = createSprite(200,100,60,60);
 rect1.shapeColor = "green";
 rect2 = createSprite(200,170,60,60);
 rect2.shapeColor = "green";
 rect3 = createSprite(200,250,60,60);
 rect3.shapeColor = "green";


}

function draw() {
  background(255,255,255);  

movingRectangle.x = mouseX;
movingRectangle.y = mouseY;

if (isTouch(movingRectangle,rect1)) {
  rect1.shapeColor = "black";
}

if (isTouch(movingRectangle,rect2)) {
  rect2.velocityY = -4;
}
  
  if (isTouch(movingRectangle,rect3)) {
    rect3.velocityX = 4;
    fixedRectangle.velocityX = -4;
  }

  bouncy(fixedRectangle,rect3);

  drawSprites();
}



