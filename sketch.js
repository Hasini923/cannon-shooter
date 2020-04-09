// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.


/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/


    // Setup the canvas,ground,tanker, the shooting ball and the bubble balls.
    var engine, world;
    var tanker;
    var angle = 0
    var canonBall;
    var shoot;
    var ground;
    var ball;
    var launcherX, launcherY;
    var flag = "start"
    
    function setup() {
        var canvas = createCanvas(1000, 700);
        engine = Engine.create();
        world = engine.world;
        ground = new Ground(width / 2, height - 10, width, 30);
        tanker = new Tanker(80, height - 110, 60, 30);
        ball = new Ball(400,50, 20);   
        canonBall = new CanonBall(20, 20);
        shoot = new ShootBall(canonBall.body, { x: 80, y: height - 210 });
    }
    
    function draw() {
        background(102)
        Matter.Engine.update(engine);
        ground.display();
        ball.display();
        canonBall.display();
        tanker.display();
        shoot.display();
        if (keyIsDown(UP_ARROW)) {
            shoot.attach(canonBall.body)
        }
    }
    
    
    function keyReleased() {
        if (keyCode === DOWN_ARROW) {
            flag = "launch"
    
            shoot.shoot()
        }
    }