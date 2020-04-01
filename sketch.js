// final submission from Katharina Bruchner
// Titel: Your Pattern
// Date: 30.03.2020
// This project was created as part of the Creative coding course.

//**********************************************************************************************

//The Colors/Themes:

let myColorsPastel = [[212, 255, 235], [206, 232, 193], [255, 252, 224], [235, 203, 152], [255, 133,104]];

let myColorsCandy = [[255, 219, 212], [1245, 255, 224], [255, 199, 224], [173, 255, 222], [238, 186,255]];

let myColorsPinkflower = [[255, 117, 191], [235, 63, 126], [255, 184, 198], [235, 75, 80], [255, 140,135]];

let myColorsRedflower = [[191, 6, 0], [128, 4, 0], [255, 10, 0], [64, 2, 0], [230, 8,0]];

let myColorsBlueflower = [[89, 101, 255], [81, 132, 232], [102, 194, 255], [81, 211, 232], [89, 255,232]];


let i, j, colorFill;
let title, shapeSel, shuffleButton, input, submButton;

//The Slider for the backgroundcolor
let redSlider;
let greenSlider;
let blueSlider;


s = 30; //Size of the heart



function setup() 
{  
  pageElements();
  createCanvas(1080, 1080);
  ellipseMode(CORNER);
  
  noStroke();
}

function submit() 
{
  
  background(255,255,255);
    updateTitle();
    drawShapes();
}

function drawShapes() 
{  
  
  for (i = 0; i < 14; i++) // number of elements/shapes, which are drawen
  {
    for (j = 0; j < 14;j++) 
    {
      fillRandomColor();
      
      
      if (shapeSel.value() == "Circle") 
      {
        CirclePattern();
      }
      
      else if (shapeSel.value() == "Triangle") 
      {
       TrianglePattern();
      }
      
      else if (shapeSel.value() == "Rect") 
      {
     RectPattern();
      }
      
      else if (shapeSel.value() == "Pacman") 
      {
         Pacman();
      }
      
       else if (shapeSel.value() == "Heart") 
      {
      heart(i*80+7.5+s/2, j*80+7.5+s/2, s/2);
      }
       
     else if (shapeSel.value() == "Tile") 
     { 
       TilePattern();
     }
      
      else 
      {
        RectTrianglePattern();
      }
    }
  }
}

//**********************************************************************************************************

function CirclePattern() 
{
        ellipse(i*80+7.5, j*80+7.5, 25,25);
}

function TrianglePattern()
{
   triangle(i*80+20, j*80+5, i*80+5, j*80+35, i*80+35, j*80+35);
}

function RectPattern()
{
  rect(i*80+7.5, j*80+7.5, 20,20,5);
}

function Pacman()
{
  if ((i/2 == int(i/2) && j/2 != int(j/2)) || (i/2 != int(i/2) && j/2 == int(j/2))) 
        arc(i*80+7.5, j*80+7.5,30, 30, 0, HALF_PI);
        arc(i*80+7.5, j*80+7.5,30, 30, 0, QUARTER_PI - HALF_PI);
        fill(0,0,0);
        ellipse(i*80+(7.5 +7), j*80+(7.5+4), 6, 6); 
}

function heart(x, y, size) 
{
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function TilePattern()
{
  if ((i/2 == int(i/2) && j/2 != int(j/2)) || (i/2 != int(i/2) && j/2 == int(j/2)))
       triangle(i*80-80, j*80-80, i*80-40, j*80-80, i*80-80, j*80-40);
       triangle(i*80-40, j*80-40, i*80-10, j*80-40, i*80-40, j*80-10);
       triangle(i*80+40, j*80+40, i*80+10, j*80+40, i*80+40, j*80+10);
}

function  RectTrianglePattern()
{
  if ((i/2 == int(i/2) && j/2 != int(j/2)) || (i/2 != int(i/2) && j/2 == int(j/2))) 
        {
          ellipse(i*80+7.5, j*80+7.5, 25, 25);
        }
      
        else 
        {
          triangle(i*80+20, j*80+5, i*80+5, j*80+35, i*80+35, j*80+35);
        }
}



function fillRandomColor() 
{
  if (ThemeSel.value() == "Pastel") 
      {
       colorFill = int(random(0, myColorsPastel.length));
      fill(myColorsPastel[colorFill][0], myColorsPastel[colorFill][1],   myColorsPastel[colorFill][2]);
      }
      
      else if (ThemeSel.value() == "Candy") 
      {
          colorFill = int(random(0, myColorsPastel.length));
      fill(myColorsCandy[colorFill][0], myColorsCandy[colorFill][1],myColorsCandy[colorFill][2]);
      }
  
   else if (ThemeSel.value() == "Pinkflower") 
      {
          colorFill = int(random(0, myColorsPinkflower.length));
      fill(myColorsPinkflower[colorFill][0], myColorsPinkflower[colorFill][1],   myColorsPinkflower[colorFill][2]);
      }
  else if (ThemeSel.value() == "Redflower") 
      {
          colorFill = int(random(0, myColorsRedflower.length));
      fill(myColorsRedflower[colorFill][0], myColorsRedflower[colorFill][1],   myColorsRedflower[colorFill][2]);
      }
  else if (ThemeSel.value() == "Blueflower") 
      {
          colorFill = int(random(0, myColorsBlueflower.length));
      fill(myColorsBlueflower[colorFill][0], myColorsBlueflower[colorFill][1],   myColorsBlueflower[colorFill][2]);
      }
}

function updateTitle() 
{
  
  //Change the Submit button's label
  submButton.html("Shuffle Colors");
}

function pageElements()
  {
    createP("<br>Select your favorite shape: ");
    shapeSel = createSelect();
    shapeSel.option("Circle");
    shapeSel.option("Triangle");
    shapeSel.option("Rect");
    shapeSel.option("Pacman");
    shapeSel.option("Heart");
    shapeSel.option("Tile");
    shapeSel.option("I like both");
    
   createP("<br>Select your favorite theme: ");
    ThemeSel = createSelect();
    ThemeSel.option("Pastel");
    ThemeSel.option("Candy");
    ThemeSel.option("Pinkflower");
    ThemeSel.option("Redflower");
    ThemeSel.option("Blueflower");
    
    
    createP("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
    submButton = createButton("Submit");
    submButton.mousePressed(submit);
    title = createElement("h1", "");
  }