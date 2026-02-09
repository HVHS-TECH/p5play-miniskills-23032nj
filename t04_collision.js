/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");

cnv = new Canvas(800, 800);
world.gravity.y = 10;

vader = new Sprite(200, 200, 60,);
vader.color = '#698fe7';
vader.bounciness = 0.7;
//There's friction and drag as well as bounciness but I didn't want to add it, it's the same premise when adding them

platform_1 = new Sprite(110, 400, 150, 20, 'k');
platform_1.color = '#eb9be1';

platform_2 = new Sprite(475, 450, 150, 20, 'k');
platform_2.color = '#e96c6c';
platform_2.rotation = -20;

wallLH  = new Sprite(0, height/2, 8, height, 'k');
wallLH.color = '#f70606';
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