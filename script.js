// Author: Jay Patel, 000881881

// Auto function
function run(){
  
  // disables rest scenes
document.getElementById("button1").disabled = true; 
document.getElementById("button2").disabled = true;
document.getElementById("button3").disabled = true;
document.getElementById("button4").disabled = true;

// moves sun, sets background color and toggles ship's windows lights
const sun=document.getElementById('sun');
let x = -50;
const interval = setInterval(()=> {
  x+=5;
  sun.setAttribute('cx',x);
  if (x >= -50 && x < 370){
    document.getElementById('sky').setAttribute('fill', '#AED6F1');
    document.getElementById('sun').setAttribute('fill', 'yellow');
    document.getElementById('window1').setAttribute('fill', '#27EDED');
    document.getElementById('window2').setAttribute('fill', '#27EDED');}
  else if (x >=370 && x < 740){
    document.getElementById('sky').setAttribute('fill', '#F7DC6F');
    document.getElementById('sun').setAttribute('fill', 'yellow');
    document.getElementById('window1').setAttribute('fill', '#27EDED');
    document.getElementById('window2').setAttribute('fill', '#27EDED');}
  else if (x >= 1000 && x < 1100){
    document.getElementById('sky').setAttribute('fill', '#F5B041');
    document.getElementById('sun').setAttribute('fill', 'yellow');
    document.getElementById('window1').setAttribute('fill', '#27EDED');
    document.getElementById('window2').setAttribute('fill', '#27EDED');}
  else if (x >= 1100 && x < 1300){
    document.getElementById('sky').setAttribute('fill', '#2E4053');
    document.getElementById('window1').setAttribute('fill', 'yellow');
    document.getElementById('window2').setAttribute('fill', 'yellow');}
  if(x >= 1300){
    x = -50;
    sun.setAttribute('cx',x);
    
  }
},100)}
 
function morning(){
  document.getElementById('sky').setAttribute('fill', '#AED6F1'); // sky color : skyblue
  document.getElementById('window1').setAttribute('fill', '#27EDED'); // window 1 color : blue
  document.getElementById('window2').setAttribute('fill', '#27EDED'); // window 2 color : blue
  const sun=document.getElementById('sun');
  sun.setAttribute('cx',185); // sun position : left
  sun.setAttribute('cy',150);
  sun.setAttribute('fill','yellow'); // sun color : yellow
}
function noon(){
  document.getElementById('sky').setAttribute('fill', '#F7DC6F'); // sky color : yellow
  document.getElementById('window1').setAttribute('fill', '#27EDED'); // window 1 color : blue
  document.getElementById('window2').setAttribute('fill', '#27EDED'); // window 2 color : blue
  const sun=document.getElementById('sun');
  sun.setAttribute('cx',555); // sun position : middle
  sun.setAttribute('cy',100);
  sun.setAttribute('fill','yellow'); // sun color : yellow
}
function evening(){
  document.getElementById('sky').setAttribute('fill', '#F5B041'); // sky color : orange
  document.getElementById('window1').setAttribute('fill', '#27EDED'); // window 1 color : blue
  document.getElementById('window2').setAttribute('fill', '#27EDED'); // window 2 color : blue
  const sun=document.getElementById('sun');
  sun.setAttribute('cx',925); // sun position : right
  sun.setAttribute('cy',150);
  sun.setAttribute('fill','yellow'); // sun color : yellow
}
function night(){
  // disables rest button for a while
  document.getElementById("button1").disabled = true; 
  document.getElementById("button2").disabled = true;
  document.getElementById("button3").disabled = true;
  document.getElementById("button5").disabled = true;

  document.getElementById('sky').setAttribute('fill', '#2E4053'); // sky color : darkblue
  document.getElementById('window1').setAttribute('fill', 'yellow'); // window 1 color : yellow
  document.getElementById('window2').setAttribute('fill', 'yellow'); // window 2 color : yellow
  const sun=document.getElementById('sun');
  sun.setAttribute('cx',800); // sun position : right
  sun.setAttribute('cy',150);
  sun.setAttribute('fill','#2E4053'); // sun color : darkblue, so will look like background
  
  // creates new circle 
  const moon = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  moon.setAttribute("cx", "800");
  moon.setAttribute("cy", "100");
  moon.setAttribute("r", "50");
  moon.setAttribute("fill", "#D5D8DC");
  svg.appendChild(moon); // adds moon in canvas
  let moonPosition = 0;
     const speedOfMoon = 0.2; // pixels per millisecond
     const intervalForMoon = 4; // milliseconds per interval
     const moveMoon = setInterval(() => {
    moonPosition += speedOfMoon * intervalForMoon;
    moon.setAttribute("cx", moonPosition);
    document.getElementById("button1").disabled = false; 
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button5").disabled = false;
    if (moonPosition > 1100) {
     clearInterval(moveMoon);
     svg.removeChild(moon); // removes moon from canvas
    }
  }, intervalForMoon);

 }

const svg = document.getElementById("canvas");
let score = 0;
addBall(svg); // to call function addBall

// to add ball and to move 
function addBall(svg) {
const ballRadius = 15;
setInterval(() => {
    const x = 1100; // start at 1100 
    const y = 580 + Math.random() * 200; // generate random y position

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x); 
    circle.setAttribute("cy", y);
    circle.setAttribute("r", ballRadius);

    // 8 balls of 10 will be black and 2 will be red
    if (Math.random()>0.8){
      circle.setAttribute("fill", "red");
    }
    else{
      circle.setAttribute("fill", "black");
    }

     svg.appendChild(circle); // adds ball in canvas
 
     let ballPosition = x;
     const speed = 0.4; // pixels per millisecond
     const interval = 4; // milliseconds per interval
     const moveBall = setInterval(() => {
       ballPosition -= speed * interval;
       circle.setAttribute("cx", ballPosition);
       if (ballPosition > 1100) {
        
         clearInterval(moveBall);
         svg.removeChild(circle);
       }
     }, interval);

     // add event listener to the space bar to remove ball when pressed
     document.addEventListener('Space', (event) => {
       removeCircle(circle);
     });

     // add event listener to the canvas to remove ball when clicked
     svg.addEventListener("click", (event) => {
       removeCircle(circle);
     });

     // add event listener to the button to remove ball when clicked
     document.getElementById('catch').addEventListener("click", (event) => {
       removeCircle(circle);
     });
     
   },1000);
 }

function removeCircle(circle) {
  // trap area 
  const x1 = 200; 
  const y1 = 435;
  const x2 = 280;
  const y2 = 435;
  const x3 = 280;
  const y3 = 780;
  const x4 = 200;
  const y4 = 780;
  const ballX = parseInt(circle.getAttribute("cx"));
  const ballY = parseInt(circle.getAttribute("cy"));

  // if ball is in this area then it will remove
  if (ballX > x1 && ballX < x2 && ballY > y1 && ballY > y2 && ballX < x3 && ballX > x4 && ballY < y3 && ballY < y4 ) {
    if (circle.getAttribute("fill")=="red"){
      score-=5; // if you catch red ball then your score will decrease by -5
      gameOver();
    }
    else{
      score++; // increment score counter
    }
    
    svg.removeChild(circle); // remove ball from canvas
    document.getElementById('score').textContent = score; // display score in window
}
  }    

function gameOver(){
  if (score<=0){ // if score gets lower than or euqals to 0 then display alert and reloads the window
    alert("Game Over! Better luck next time :)" );
    location.reload();
  } 
}
