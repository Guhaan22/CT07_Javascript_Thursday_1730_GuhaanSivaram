let bird
let background, birdImg;


function preload(){
    // write code to preload bird.png and background.png
    // refer to assets folder
    background = loadImage('assets/background.png');
    birdImg = loadImage('assets/bird.png');
}


function setup(){
    new Canvas(400, 600);
    // write code to create sprite and load bird image on sprite
    bird = new Sprite()
    bird.x = width/2;
    bird.y = 200;
    bird.width = 25;
    bird.height = 25;
    bird = birdImg
    bird.colider = "static"
    bird = loadImage('assets/bird.png')

    
}


function draw(){
    image(background, 0, 0, width, height);
    image(bird, 0, 0, 20, 20);
    bird.visible = true;
}