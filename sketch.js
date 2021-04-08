var garden, gardenImg;
var cat, catSittingImg;
var mouse, mouseSittingImg;
var mouseMovingImg;
var mouseTouchingImg, catTouchingImg;
var mouseTouching, catTouching;


var  catMovingImg;


function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catSittingImg=loadImage("images/cat1.png");
    mouseSittingImg=loadImage("images/mouse1.png");
    catMovingImg=loadAnimation("images/cat2.png", "images/cat3.png");
    mouseMovingImg=loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseTouchingImg=loadImage("images/mouse4.png");
    catTouchingImg=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(800,550);
    //create tom and jerry sprites her
    cat=createSprite(620,480);
    cat.addImage("catSitting", catSittingImg);
    cat.scale=0.1;
    mouse=createSprite(230,480)
    mouse.addImage("mouseSitting", mouseSittingImg);
    mouse.scale=0.1;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("left")){
        cat.velocityX=-5;
        cat.setCollider("circle", 10,10,10)
        cat.addAnimation("catMoving", catMovingImg);
        cat.changeAnimation("catMoving");
        mouse.addAnimation("mouseMoving", mouseMovingImg);
        mouse.changeAnimation("mouseMoving");
    }

    if(cat.isTouching(mouse)){
        cat.velocityX=0;
        cat.addAnimation("catTouching", catTouchingImg);
        cat.changeAnimation("catTouching");
        mouse.addAnimation("mouseTouching", mouseTouchingImg);
        mouse.changeAnimation("mouseTouching");

    }
    drawSprites();
    
}



