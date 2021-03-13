
function preload(){
b=loadAnimation("images/b1.png","images/b2.png","images/b3.png");
bg=loadImage("images/Background.jpg");
f=loadAnimation("images/f1.png","images/f2.png","images/f3.png");
ob1=loadImage("images/o1.png");
ob2=loadImage("images/o2.png");
ob3=loadImage("images/o3.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
 database = firebase.database();
var bn=createSprite(displayWidth/4,displayHeight-200);
bn.addAnimation("running",b);
bn.scale=2;
var fx=createSprite(displayWidth/4-200,displayHeight-215);
fx.addAnimation("running",f);
fx.scale=2;
var bnRef  = database.ref('bunny/position');
    bnRef.on("value",function(data){
       var pos = data.val();
       bn.x=pos.x;
       bn.y=pos.y;
      })
      var fxRef  = database.ref('fox/position');
    fxRef.on("value",function(data){
       var pos = data.val();
       fx.x=pos.x;
       fx.y=pos.y;
      })
}


function draw(){
  image(bg, 0, 0, displayWidth-20, displayHeight-30)
  image(bg, displayWidth-20, 0, displayWidth-20, displayHeight-30)
  image(bg, 2*displayWidth-20, 0, displayWidth-20, displayHeight-30)
  image(bg, 3*displayWidth-20, 0, displayWidth-20, displayHeight-30)
  image(bg, 4*displayWidth-20, 0, displayWidth-20, displayHeight-30)
  drawSprites();
}


