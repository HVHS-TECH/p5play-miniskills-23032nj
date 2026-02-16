/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");

cnv = new Canvas(800, 800);
world.gravity.y = 10;

//vader = new Sprite(200, 200, 60,);
//vader.color = '#698fe7';
//vader.bounciness = 0.7;
//There's friction and drag as well as bounciness but I didn't want to add it, it's the same premise when adding them

//platform_1 = new Sprite(110, 400, 150, 20, 'k');
//platform_1.color = '#eb9be1';

//platform_2 = new Sprite(475, 450, 150, 20, 'k');
//platform_2.color = '#e96c6c';
//platform_2.rotation = -20;

walls() 

alienGroup = new Group();
for (i = 0; i < 100; i++) {
  alien = new Sprite(110, 400, 30, 30, 'd');
  alien.vel.x = 3;
  alien.vel.y = 4;
  alien.bounciness = 1;
  alien.friction = 0;
  alienGroup.add(alien);
}

}

function walls () {
wallLH  = new Sprite(0, height/2, 8, height, 'k');
wallLH.color = '#f70606';

wallRH  = new Sprite(799, height/2, 8, height, 'k');
wallRH.color = '#dff706';

wallTop = new Sprite(width/2, 799, width, 8, 'k');
wallTop.color = '#06f742';

wallBottom = new Sprite(width/2, 0, width, 8, 'k');
wallBottom.color = '#0632f7';

ball_1 = new Sprite(width/2, height/2, 50, 'd');
ball_1.color = 'cyan';
ball_1.vel.x = 2;
ball_1.vel.y = 2;
ball_1.bounciness = 2.5;
ball_1.friction = 0;
ball_1.drag = 0;
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