let img;
let button1;
let button2;

let img1;
let img2;
let img3;
let img4;
var brushSize = 30;
let bearState = 1;
let burn = false;
let offset = 0;
let fireX, fireY;

let numFrames = 17;
let images = [];
let currentFrame = 0;
function preload() {
    img = loadImage('sad_bear.jpg');

    img1 = loadImage('bear_used_to_happy.jpg');
    img2 = loadImage('bear_match.jpg');
    img3 = loadImage("fire.png");
    img4 = loadImage('angry.jpg');

    for (let i = 0; i < numFrames; i++) {
        images[i] = loadImage("media/burn_" + i + ".jpg");
      }
    }
    



function setup() {
    createCanvas(500, 800);
    //imageMode(CENTER);
    image(img, 100, 100, 400, 550);
    textSize(26);
    text('실연에 슬퍼하는 곰...', 180, 80);
    textSize(26);
    text('슬픈 곰을 도와주시겠습니까?', 150, 770);
    button1 = createButton('예');
    button1.position(240.410);
    button1.mouseClicked(nextState);

    button2 = createButton('아니요');
    button2.position(280.410);
button2.mouseClicked(bringAnger);
    frameRate(1.3);
}

function draw() {
    if(bearState == 3)
{
    image(img4, 100, 170, 560, 460);
}
    if (bearState == 2) {
        background(255);
        button1.hide();
        button2.hide();
        imageMode(CORNER);

        image(img1, 100, 100, 400, 300);
        image(img2, 70, 400, 400, 450);
        cursor('fire.png', 20, 20);
        // image(img3, mouseX, mouseY);
        //526, 602
        //ellipse(400, 450, 50,50);
        let d = dist(mouseX, mouseY, 400, 450);
        
        if(d < 30){
            burn = true;
        }
        if(burn){
            offset = offset + random(-3, 3);

            fireX = 400+offset;
            fireY = 450-40+offset;

            if (fireX >= 420){
                fireX  = 420;
            }
            if (fireX <= 380){
                fireX  = 380;
            }

            if (fireY >= 440){
                fireY  = 440;
            }
            if (fireY <= 420){
                fireY  = 420;
            }
            //imageMode(CENTER);
            //image(img3, fireX, fireY+50, 200, 200);
            imageMode(CENTER);

            image(images[currentFrame], 300, 250, 400, 300);
            //imageMode(CENTER);
            image(img3, fireX, fireY+50, 200, 200);

           if (currentFrame == numFrames -1){
             currentFrame = 0;
              }
              currentFrame++;




        } else {
            image(img3, mouseX, mouseY,110,110);
        }
        if (mouseX < 150 && mouseY < 150) {
            cursor('fire.png', 10, 10);
        } else {
            cursor(ARROW);
        }

    }
}

function nextState() {
    bearState = 2;
    console.log("next");
}
function bringAnger(){
    bearState = 3;
 }
