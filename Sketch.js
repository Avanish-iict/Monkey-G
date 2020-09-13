var backround,BananaIMG,MonkeyIMG;

function preload(){    
 
backround = loadImage("jungle.jpg");
bananaImg = loadImage("banana.png")
MonkeyIMG = loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",);
BananaIMg = loadImage("banana.png");
}

function setup() {
    createCanvas(1300, 700);
    
    //Creating the sprites.
    ground = createSprite(250,690,900,30);
         ground.shapeColor = color(225,60,0);
              // ground.velocityX = 2;

         monkey=createSprite(90, 590, 10,10);
         monkey.addImage(MonkeyIMG)
         monkey.scale=0.3
       // monkey.velocityX = 2;
}


function draw() { 
	background(backround);
   
    backround.velocityX = 18;
drawSprites();


 
}
