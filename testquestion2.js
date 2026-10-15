
let square;

function setup(){
    new Canvas(400, 600);
    square = new Sprite()
    // code to set the gravity of the world
    world.gravity.y = 10;


    // code to create a new square sprite
}

function draw(){
    background("grey");
    if (mouse.presses()) {
        square.velocity.y = -12
    }

    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up
}