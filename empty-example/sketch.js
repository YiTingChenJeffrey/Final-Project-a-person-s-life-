// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var curry;
var bogut = 0;
var draymond = 3;
var Animation1;
var Animation2;
var Animation3;
var Animation4;
var Animation5;
var Animation6;
var Animation7;
var Animation8;
var Animation9;
var Animation10;
var color1;
var sound;
var color2;
var color3;
var age = 110;
var display1 = false;
var display2 = false;
var display3 = false;
var display4 = false;
var display5 = false;
var display6 = false;
var display7 = false;
var display8 = false; 
var display9 = false;
var display10 = false;
var display11 = false;
var display12 = false;
var rectangle1 = false;
var rectangle2 = false;
var rectangle3 = false;
var rectangle4 = false;
var rectangle5 = false;
var rectangle6 = false;
var rectangle7 = false;
var rectangle8 = false;
var rectangle9 = false;
var rectangle10 = false;
var rectangle11= false;
var Balls = function(){
    this.x = 500;
    this.y = 500;
    this.speedx = random(0,3);
    this.speedy = random(-5,-2);
    this.color = color(random(255),random(255),random(255));
}
var ball = [];
var play = false;
var time = 0;
var klay;
var football = 300;
var football1 = 8;
var sun;
var black1 = 255;
var time2 = 0; 
var time1 = 0;
var stop = false;
var tall = 180;
var dead = 255;

function preload() {
    Animation2 = loadAnimation("Baby Crying 1.png","baby crying 2.png","baby crying 3.png");
    Animation1 = loadAnimation("pregnant 1.png","pregnant 2.png","pregnant 3.png","pregnant 4.png","pregnant 5.png");
    Animation3 = loadAnimation("baby crawling 1.png","baby crawling 2.png","baby crawling 3.png");
    Animation4 = loadAnimation("playing soccer 1.png","playing soccer 2.png","playing soccer 3.png");
    Animation5 = loadAnimation("reading book 1.png","reading book 2.png","reading book 3.png");
    Animation6 = loadAnimation("graduating 1.png","graduating 2.png","graduating 3.png");
    sound = loadSound("HEBE.mp3");
    Animation7 = loadAnimation("working 1.png","working 2.png");
    Animation8 = loadAnimation("marriage.png");
    Animation9 = loadAnimation("daughter 1.png","daughter 2.png");
    Animation10 = loadAnimation("old man 1.png","old man 2.png");
}


function setup() {
    bg = loadImage("grey.jpg");
    pg=createGraphics(600,400);
    createCanvas(windowWidth,windowHeight);
    sound.setVolume(1);
    sound.play();
    color1 = random(255);
    color2 = random(255);
    color3 = random(255);
    img = loadImage("dead man.jpg");
    
}

function draw() {
    background(bg);
    pg.background(dead);
    image(pg,450,100);
    //textSize(32);
    //text("Time To Grow",650,600);
    button = createButton('Time To Grow');
    button.position(650,600);
    button.mousePressed(curry);
    
    button = createButton('AutoPlay');
    button.position(750,600);
    button.mousePressed(klay);
    
    textSize(30);
    fill(255,255,255);
    text("Age of" +" "+bogut,30,age);
    
    fill(color1,color2,color3);
    rect(180,100,100,draymond);
    
    fill(0,0,0)
    triangle(350,300,380,270,380,330);
    
    if(display1 == false){
        animation(Animation1,700,300);
        textSize(32);
        fill(0,0,0);
        text("The baby is here.",800,450);
        
        
        }
    
    if(display2 == true){
        pg.animation(Animation2,700,300);
         textSize(32);
        fill(0,0,0);
        text("Baby Crying",800,450);
        
    }
    
    
    
    if(display3 == true){
        animation(Animation3,700,300);
        textSize(32);
        fill(0,0,0);
        text("Baby Crawling",800,450);
    }
    
    if(display4 == true){
        animation(Animation4,700,300);
        fill(34,34,80);
         ellipse(530,football,100,100);
            if (football < 200 || football >300){
                football1 = football1 * -1;
            }
           football = football - football1;
         textSize(32);
        fill(0,0,0);
        text("Playing Football",800,450);
    }
    
    if(display5 == true){
        animation(Animation5,700,300);
        fill(black1,black1,0);
        ellipse (950,tall,100,100);
        time2++;
        if (time2 < 100){
        black1 = 255;
      }
        if (time2 > 100){
            black1 = 0;
        }
         textSize(32);
        fill(0,0,0);
        text("Studying",900,450);
    }
    
    if(display6 == true){
        animation(Animation6,700,300);
         textSize(32);
        fill(0,0,0);
        text("Graduating",800,450);
    }
    
    if(display7 == true){
        animation(Animation7,700,300);
         textSize(32);
        fill(0,0,0);
        text("Going to Work",800,450);
         
    }
    
    if(display8 == true){
        animation(Animation8,700,300);
          ellipse(1050,350,10,10);
        ball.push(new Balls());
        for(var i=0;i<ball.length;i++){
            ball[i].x = ball[i].x + ball[i].speedx;
            ball[i].y = ball[i].y + ball[i].speedy;
            fill(ball[i].color);
            ellipse(ball[i].x,ball[i].y,8,8);
             textSize(32);
        fill(0,0,0);
        text("Marriage",900,450);
            
        }
    }
    
    if(display9 == true){
        animation(Animation9,600,300);
         textSize(32);
        fill(0,0,0);
        text("Father/Daughter",800,450);
    }
    
    if(display10 == true){
       animation(Animation10,700,300);
         textSize(32);
        fill(0,0,0);
        text("Getting older",800,450);
    }
    
    if(display11 == true){
        image(img,500,100,img.width/2,img.height/2);
         textSize(32);
        fill(0,0,0);
        text("Happy with my life",790,490);
    }
    
    if(display12 == true){
        dead = dead - 5;
         textSize(32);
        fill(255,255,255);
        text("Life is over!",800,450);
    }
    
    if(rectangle1 == true){ 
    if(draymond<6){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle2 == true){ 
    if(draymond<19){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle3 == true){ 
    if(draymond<50){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle4 == true){ 
    if(draymond<100){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle5 == true){ 
    if(draymond<137){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle6 == true){ 
    if(draymond<156){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle7 == true){ 
    if(draymond<187){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle8 == true){ 
    if(draymond<250){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle9 == true){ 
    if(draymond<375){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle10 == true){ 
    if(draymond<500){
        draymond++;
        age = age + 1;
        }
    }
    
    if(rectangle11 == true){
        if(draymond < 505){
            draymond++;
        }
    }
    
    if (frameCount%30 == 0){
        if(play == true) 
            time++;
        if (time == 5){
            console.log(1);
            curry();
        } else if (time == 10){
            console.log(2);
            curry();
        } else if (time == 15){
            console.log(3);
            curry();
        } else if (time == 20) {
            curry();
        } else if (time == 25) {
            curry();
        } else if (time == 30) {
            curry();
        } else if (time == 35) {
            curry();
        } else if (time == 40) {
            curry();
        } else if (time == 43) {
            curry();
        } else if (time == 42) {
            curry();
        }
          else if (time == 43) {
            curry();
        }
    }
    
    }

function klay(){
      play = true;
}

function curry(){
    if(display2 == false && draymond < 5){
        display2 = true;
        display1 = true;
        bogut++;
        rectangle1 = true;
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
    }

    
    if(display2 == true && draymond > 4){
        display2 = false;
        display3 = true;
        rectangle2 = true;
        bogut = bogut + 2;
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
    }
    
    if(display3 == true && draymond > 17){
        display4 = true;
        display3 = false;
        rectangle3 = true;
        bogut = bogut + 5;
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
    }
    
    if(display4 == true && draymond > 48){
        display5 = true;
        display4 = false;
        rectangle4 = true;
        bogut = bogut + 8;
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
    }
    
    if(display5 == true && draymond > 98){
        display6 = true;
        display5 = false; 
        rectangle5 = true;
        bogut = bogut + 6; 
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
    } 
    
    if(display6 == true && draymond > 135){
        display7 = true;
        display6 =false;
        rectangle6 = true;
        bogut = bogut + 3;
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
        
    }
    
    if(display7 == true && draymond > 154){
        display8 = true;
        display7 = false;
        rectangle7 = true;
        bogut = bogut + 5;
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
    }
    
    if(display8 == true && draymond > 185){
        display9 = true;
        display8 = false;
        rectangle8 = true;
        bogut = bogut + 10;
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
    }
    
    if(display9 == true && draymond >248){
        display10 = true;
        display9 = false;
        rectangle9 = true;
        bogut = bogut + 20;
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
    }
    
    if(display10 == true && draymond > 373){
        display11 = true;
        display10 = false;
        rectangle10 = true;
        bogut = bogut + 20;
        color1 = random(255);
        color2 = random(255);
        color3 = random(255);
        
    }
    
    if(display11 == true && draymond > 498){
        display12 = true;
        display11 = false;
        rectangle11 = true;
    }
}
    
        
    
    
    


    

