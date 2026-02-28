/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");

cnv = new Canvas(800, 800);

//milo = new Sprite(200, 400, 45, 75, 'd');
//milo.color = '#a7cebc';
//milo.rotationSpeed = 2;
//milo.vel.x = 2;

//vader = new Sprite(600, 400, 60,);
//vader.color = '#698fe7';

spriteOne = new Sprite(400, 400, 50, 50, 'd');
spriteOne.color = '#698fe7';
spriteOne.rotationSpeed = 3;

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

if (kb.pressing('left')) {
spriteOne.vel.x = '-10'
}
else if (kb.pressing ('right')) {
spriteOne.vel.x = '10'
};

if (kb.released('left')) {
spriteOne.vel.x = '0'
}

if (kb.released('right')) {
spriteOne.vel.x = '0'
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/