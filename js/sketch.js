function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
}

function draw() {
    background(0);
    
    //moon
    fill(200);
    strokeWeight(20);
    stroke(173, 169, 166,200);
    ellipse(300,700,900,600);
    fill(173, 169, 166);
    ellipse(430,520,35,25);
    ellipse(510,490,35,20);
    ellipse(510,580,30,20);
    ellipse(80,580,30,20);
    ellipse(200,540,40,20);
    ellipse(80,500,50,30);
    fill(130, 126, 124);
    ellipse(300,480,50,30);
    
    //stars
    fill(255);
    noStroke()
    var starSize= (5,5);
    ellipse(50,50,starSize);
    ellipse(80,100,starSize);
    ellipse(500,30,starSize);
    ellipse(580,300,starSize);
    ellipse(510,260,starSize);
    ellipse(400,300,starSize);
    ellipse(200,340,starSize);
    ellipse(100,300,starSize);
    ellipse(50,380,starSize);
    ellipse(210,200,starSize);
    
    //rocket
    var centerX= mouseX;
      var centerY= mouseY;
    noStroke();
    fill(156, 39, 39);
    triangle(centerX,centerY-200,centerX+50,centerY-100,centerX-50,centerY-100);
    fill(110, 106, 106);
    quad(centerX-50,centerY-100,centerX+50,centerY-100,centerX+20,centerY+100,centerX-20,centerY+100);
    fill(64, 59, 59);
    quad(centerX-20,centerY+100,centerX+20,centerY+100,centerX+25,centerY+105,centerX-25,centerY+105);
    quad(centerX+27,centerY+50,centerX+50,centerY+60,centerX+50,centerY+100,centerX+24,centerY+70);
    quad(centerX-27,centerY+50,centerX-50,centerY+60,centerX-50,centerY+100,centerX-24,centerY+70);
    ellipse(centerX,centerY,50,50);
    ellipse(centerX,centerY-70,55,55);
    fill(70, 107, 163);
    ellipse(centerX,centerY-70,50,50);
    ellipse(centerX,centerY,45,45);
    fill(163, 189, 230);
    ellipse(centerX+20,centerY-10,10,10);
    ellipse(centerX+20,centerY-85,10,10);
    fill(227, 98, 0,255);
    triangle(centerX+10,centerY+150,centerX+25,centerY+105,centerX-5,centerY+105);
    fill(207, 45, 45,200);
    triangle(centerX-5,centerY+160,centerX-25,centerY+105,centerX+10,centerY+105);
    
    //alien
    fill(57, 191, 27);
    ellipse(centerX,centerY-65,30,20);
    fill(0);
    ellipse(centerX-5,centerY-65,5,10);
    ellipse(centerX+5,centerY-65,5,10);
    
    
  }