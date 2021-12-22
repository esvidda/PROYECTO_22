var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//1 carga aquí la animación y sonido del hada
	
	// fairyImg = loadImage("images/fairyImage1.png","images/fairyImage2.png");
	// fairyVoice = playSound("sound/JoyMusic.mp3");

	 fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	 fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//2 escribe el código para reproducir el sonido fairyVoice

	 fairyVoice.play();
	// fairyVoice.Soundplay();
	// fairyVoice.reproduce();

	//3 crea el sprite del hada, y agrega la animación para el hada
	// fairy = createSprite(130, 520);
	// fairy.addImage(fairyImg);  
	// fairy.scale =0.25;
	
	// fairy = createSprite(130, 520);
	// fairy.addAnimation(fairyImg);  
	// fairy.scale =0.25;

	 fairy = createSprite(130, 520);
	 fairy.addAnimation("fairyflying",fairyImg);  
	 fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //4 escribe aquí el código para detener la estrella en la mano del hada
  if(star.y > 470 && starBody.position.y > 470 ){
	Matter.Body.setStatic(starBody,true);
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la derecha
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
 }
 
	//5 escribe el código para mover al hada a la izquierda 
if(keyCode === LEFT_ARROW){
	fairy.x = fairy.x - 20;
}

	
	//escribe el código para bajar la estrella
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(starBody,false); 
 }
}
