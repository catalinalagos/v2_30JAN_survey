var backgroundColor = 127;
var circleOpacity = 200;
var dotColor = 255;
var posnegOpac = 0;
var angulo = 0.2;
var rad = 50;
var characterChange = 0;
var letterPressed = '';
var dotSize = 0;
var selfColor = [];
var posneg = [];

function setup() {
  createCanvas(300, 300);

}

function draw() {

  noStroke();
  background(backgroundColor + posnegBckg);//gets darker - negative, lighter - positive

  //------------------ BASIC SHAPE THAT IS PAINTED BY COLORS ------------
  //CENTRAL CIRCLE (SELF)
  fill(255, 100);
  ellipse(width / 2, height / 2, 50, 50)

  //------------------------- EMOTIONS PRESENT --------------------------
  for (i = 0; i < colorsMulti.length; i++) {
    selfColor = colorsMulti[i];
    stroke(selfColor[0], selfColor[1], selfColor[2], circleOpacity);
    strokeWeight(8);
    noFill();
    ellipse(width / 2, height / 2, 50 + 15 * i, 50 + 15 * i);
    noStroke();
  } 
  //EACH EMOTION GENERATES AN ARCH - THE WEIGTH WILL BE HOW MANY TIMES IT IS SAID

  //------------------------- SOCIAL PEERS --------------------------
  translate(width / 2, height / 2);
  if (socialPeersExist){
    fill(backgroundColor + posnegBckg - 50);
    ellipse (0,150,30,30);
    ellipse (-150,0,30,30);
    ellipse (150,0,30,30);
    ellipse (0,-150,30,30);
  }
  //------------------------- SOCIAL ENTITIES --------------------------
  if (socialEntExist){
    noFill();
    stroke(backgroundColor + posnegBckg + 50);
    strokeWeight(15);
    //line(x1, y1, z1, x2, y2, z2)
    line(120,120,80,80);
    line(-120,-120,-80,-80);
    line(120,-120,80,-80);
    line(-120,120,-80,80);
    noStroke();
  }


  //----------------------------   FEEDBACK FROM ANY KEY ---------------------------- 
  
  //if a key is pressed
  for (var letter = 0; letter < wordsStr.length; letter++) {
    if (wordsStr[letter] == 'a' || wordsStr[letter] == 'e' || wordsStr[letter] == 'h' || wordsStr[letter] == 'i' || wordsStr[letter] == 'n' || wordsStr[letter] == 'o' || wordsStr[letter] == 'r' || wordsStr[letter] == 's' || wordsStr[letter] == 't') {
      fill(dotColor);
      dotSize = 3;
    }
    //frequent letters (2-6%)
    else if (wordsStr[letter] == 'c' || wordsStr[letter] == 'd' || wordsStr[letter] == 'f' || wordsStr[letter] == 'g' || wordsStr[letter] == 'l' || wordsStr[letter] == 'm' || wordsStr[letter] == 'u' || wordsStr[letter] == 'w' || wordsStr[letter] == 'y') {
      fill(dotColor);
      dotSize = 6;
    }
    //rare letters (less than 2% frequency in english)
    else if (wordsStr[letter] == 'b' || wordsStr[letter] == 'j' || wordsStr[letter] == 'k' || wordsStr[letter] == 'p' || wordsStr[letter] == 'v' || wordsStr[letter] == 'x') {
      dotSize = 9;
      fill(dotColor);
    }
    //Extremely rare letters (less than 0.1% frequency in english)
    else if (wordsStr[letter] == 'q' || wordsStr[letter] == 'z') {
      dotSize = 11;
      fill(dotColor);
    }
    //any other character that is not a letter
    else {
      //fill background color
      fill(backgroundColor + posnegBckg);
      dotSize = 9;
    }
    rotate(angulo);
    ellipse(rad, rad, dotSize, dotSize);
    rad = 50 + letter * 0.15;
  }


}

function mouseClicked() {
  console.log("hey");
}