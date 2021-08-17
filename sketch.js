var bg,bgImg;
var bottomGround,topGround;
var balloon, balloonImg;

function preload() {
    bgImg = loadImage("bg.png");
    balloonImg = loadAnimation("balloon1.png","balloon2.png","balloon3.png");
}

function setup() {
    bg=createSprite(165,485,1,1);
    bg.addImage(bgImg);
    bg.scale=1.3;
    bottomGround=createSprite(200,390,800,20);
    bottomGround.visible = false
    topGround=createSprite(200,10,800,20);
    topGround.visible = false
    balloon=createSprite(100,200,20,50);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale=0.2;

}

function draw() {
    background("black");
    if (keyDown("space")){
        balloon.velocityY = -6;
    }
    balloon.veloityY = balloon.velocityY + 2;

    drawSprites();
}