var policeCar, thiefCar ; 

var policeCarImg, thiefCarImg ; 

var bullet, bulletImg;

var gameState = 0; 

var start, startImg;

function preload(){
    policeCarImg = loadImage("images/policeCar.png");
    thiefCarImg = loadImage("images/thiefCar.png");

    bulletImg = loadImage("images/bullet2.png");

    startImg = loadImage("images/startButton.png");

}

  

function setup(){
    createCanvas(windowWidth , windowHeight);

    if(gameState===0){
        var start = createSprite(windowWidth/2, windowHeight/2, 80, 80);
        start.addImage(startImg);
        
        
            
        
        
        //textSize(30);
        //fill("black");
        //text("HELLO", windowWidth/2 + 100, windowHeight/2 - 10);
        

    }

    else if(gameState===1){
        bullet = createSprite(windowWidth/2, windowHeight - 400, 10, 10);
    bullet.addImage(bulletImg);
    bullet.scale = 0.3;
    //bullet.visible  = false;

    policeCar = createSprite(windowWidth/2 , windowHeight - 286, 10, 10)
    policeCar.addImage(policeCarImg);

    thiefCar = createSprite(windowWidth/2, windowHeight - 1100, 20, 20);
    thiefCar.addImage(thiefCarImg)
    thiefCar.scale = 0.4;
    }

    
  
}


function draw(){
    background("white");
    
    if(gameState===0){

    }

    else if(gameState===1){
        policeCar.velocityX = 0;
        bullet.velocityX = 0;

        //moving the car with the help of the arrow keys
        if(keyDown(LEFT_ARROW)){
            policeCar.velocityX = -5;
            bullet.velocityX = policeCar.velocityX
        }
        if(keyDown(RIGHT_ARROW)){
            policeCar.velocityX = 5;
            bullet.velocityX = policeCar.velocityX
        }

        //when the space key is pressed bullet is being shot
        if(keyCode===32){
            bullet.velocityY = -100;
        }

        //when the bullet touches the thief car, the thief car dissapears
        if(bullet.isTouching(thiefCar)){
            bullet.velocityY = 0;
            gameState = 0;
            textSize(30);
            text("GAME WON", windowWidth/2, windowHeight/2);
            
            
        }
    
    
    }

    //thiefCar.velocityX = random(2,6);

    

   

    drawSprites();

}
