/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");

//cnv = new Canvas(800, 800);

//milo = new Sprite(300, 400, 45, 75, '5');
//milo.color = '#a7cebc';

//vader = new Sprite(500, 400, 60,);
//vader.color = '#698fe7';

// Now the width and height of the canvas keep changing
width = random(300,600);
height = random(300,600);

// and the sprites keep changing too!
spriteX= random(50,150);
spriteY=  random(50,150);  

cnv = new Canvas(width, height);

red = new Sprite(50, 50 , spriteX, spriteY);
red.color = 'red';

green = new Sprite( width - spriteX, 50 , spriteX, spriteY);
green.color = 'green';

blue = new Sprite( width - spriteX, height - spriteY , spriteX, spriteY);
blue.color = 'blue';

yellow = new Sprite( 50, height - spriteY ,  spriteX, spriteY);
yellow.color = 'yellow';

//purple = new Sprite( __, __ ,  spriteX, spriteY);
//purple.color = 'purple';

}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {		
background ('#f2e0f9');
}

/*******************************************************/
//  END OF APP
/*******************************************************/