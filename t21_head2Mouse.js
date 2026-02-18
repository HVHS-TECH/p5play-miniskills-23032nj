/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");

cnv = new Canvas(800, 800);
world.gravity.y = 10;

//milo = new Sprite(200, 400, 45, 75, 'd');
//milo.color = '#a7cebc';
//milo.rotationSpeed = 2;
//milo.vel.x = 2;

//vader = new Sprite(600, 400, 60,);
//vader.color = '#698fe7';

spriteOne = new Sprite(400, 400, 50, 50, 'd');
spriteOne.color = '#698fe7';
spriteOne.rotationSpeed = 2;

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background ('#f2e0f9');	

spriteOne.moveTowards(mouseX, mouseY, 1);
if (mouse.presses()) {
spriteOne.moveTo(50, 50);
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/