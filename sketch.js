//move slider to see changes!
//sliders control the first 6 parameters of camera()
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let A;
let B;
let C;
let centerA;
let centerB;
let centerC;
let D;
let E;
let F;
let centerD;
let centerE;
let centerF;
let G;
let H;
let I;
let centerG;
let centerH;
let centerI;
let h = 20;
var d;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //create sliders
  
  d=select('.div-block');
  d.position(0,0);
  
  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(1200, 0+h);
    sliderGroup[i].style('width', '80px');
  }
  
}

function draw() {
  background(255);
  // assigning sliders' value to each parameters
 
  G = sliderGroup[0].value();
  H = sliderGroup[1].value();
  I = sliderGroup[2].value();
  centerG = sliderGroup[3].value();
  centerH = sliderGroup[4].value();
  centerI = sliderGroup[5].value();
  camera(G, H, I, centerG, centerH, centerI, 40, 10, 5);
  stroke(255);
  fill(255, 152, 94);
  box(50);
  
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  stroke(255);
  fill(205, 102, 94);
  box(85);
  
  A = sliderGroup[0].value();
  B = sliderGroup[1].value();
  C = sliderGroup[2].value();
  centerA = sliderGroup[3].value();
  centerB = sliderGroup[4].value();
  centerC = sliderGroup[5].value();
  camera(A, B, C, centerA, centerB, centerC, 100, 1, 10);
  stroke(255);
  fill(255, 82, 94);
  box(130);
  
  D = sliderGroup[0].value();
  E = sliderGroup[1].value();
  F = sliderGroup[2].value();
  centerD = sliderGroup[3].value();
  centerE = sliderGroup[4].value();
  centerF = sliderGroup[5].value();
  camera(D, E, F, centerD, centerE, centerF, 20, 15, 5);
  stroke(255);
  fill(255, 102, 94);
  box(100);
  

}