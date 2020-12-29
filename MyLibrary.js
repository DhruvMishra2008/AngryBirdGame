function isTouch(rectA,rectB){

    if(rectA.x-rectB.x<rectA.width/2+rectB.width/2
      &&rectB.x-rectA.x<rectB.width/2+rectA.width/2
      &&rectA.y-rectB.y<rectA.height/2+rectB.height/2
      &&rectB.y-rectA.y<rectB.height/2+rectA.height/2){
  
      return true;
  
      }
  
      else{
        return false;
      }
  
  }
  
  
  
  
  function bouncy(rectA,rectB){
    if(rectA.x-rectB.x<rectA.width/2+rectB.width/2
      &&rectB.x-rectA.x<rectB.width/2+rectA.width/2
      &&rectA.y-rectB.y<rectA.height/2+rectB.height/2
      &&rectB.y-rectA.y<rectB.height/2+rectA.height/2){
        rectA.velocityX = rectA.velocityX*-1;
        rectB.velocityX = rectB.velocityX*-1;
        rectA.velocityY = rectA.velocityY*-1;
        rectB.velocityY = rectB.velocityY *-1;
      }
  }