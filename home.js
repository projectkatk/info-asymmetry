//  using p5 js : particle effect 
// Code inspired by https://p5js.org/examples/simulate-particles.html 

let particles = [];
  
function setup() {
  createCanvas(windowWidth, windowHeight);  
  appearText1();
  setTimeout(removeText, 3000);
  setTimeout(appearText2, 5000);
  setTimeout(removeText, 7000);
  setTimeout(appearText3, 9000);
  setTimeout(removeText, 11000);
  setTimeout(appearText4, 13000);
  setTimeout(removeText, 15000);
  setTimeout(pointer, 17000);
  
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
  windowResized();      
}

function draw() {
  background(0);
  for(let i = 0;i<particles.length;i++) {
    particles[i].generateParticle1();
    particles[i].generateParticle2();
    particles[i].generateParticle3();
    particles[i].dancingParticle();
    particles[i].networkParticle(particles.slice(i));
  } 
}

 
class Particle {  
    constructor(){
      this.x = random(0,windowWidth);
      this.y = random(0,windowHeight);
      this.r = random(1,9);
      this.xSpeed = random(-1.2,1.1);
      this.ySpeed = random(-1,1.1);
    }
  
  // particle generated
    generateParticle1() {
      noStroke();
      fill('rgba(255,255,255,0.3)');
      rect(this.x,this.y,this.r);    
      textSize(5)
      text('control', this.x, this.y)
      fill('rgba(255,255,255)')  
    }

    generateParticle2() {
      noStroke();
      fill('rgba(0,255,255,0.3)');
      ellipse(this.x+20,this.y+10,this.r);
      textSize(8)
      text('information', this.x, this.y+20)
      fill('rgba(255,255,255,0.2)')  
    }

    generateParticle3() {
      noStroke();
      fill('rgba(100,50,0,0.4)');
      ellipse(this.x-30,this.y-10,this.r);
      textSize(7)
      text('change', this.x-20, this.y+40)
      fill('rgba(255,255,255,0.5)') 
    }

  
  // particle movements
    dancingParticle() {
      if(this.x <= 0 || this.x >= width)
        this.xSpeed*=-1;
      if(this.y <= 0 || this.y >= height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }
    
  // particle connections
    networkParticle(particles) {
      particles.forEach(particle =>{
        let distance = dist(this.x,this.y,particle.x,particle.y);
        if(distance < 200) {
          stroke('rgba(255,255,255,0.05)');
          line(this.x,this.y,particle.x,particle.y);
        }
      });
    }    
  }  
  

// Window Resize code reference: https://gist.github.com/GoToLoop/54b4c49e9c2541da2d91692bf0c01192 
function windowResized() {
  const css = getComputedStyle(canvas.parentElement),
        mw = float(css.marginLeft) + float(css.marginRight),
        mh = float(css.marginTop)  + float(css.marginBottom),
        ww = float(css.width)  || windowWidth,
        wh = float(css.height) || windowHeight,
        w = round(ww - mw), h = round(wh - mh);

  resizeCanvas(w, h, true);
}

//  ========================================================
// vanilla JS
// text appearance 
const fade = document.querySelector('.fade');
let newWords;

function appearText1() {  
  newWords = 'Data.';
  fade.textContent = newWords;
}

function removeText() {
  if(newWords !== '') {
    fade.classList.add('fade-out');    
  }
}

function appearText2() {  
  fade.classList.remove('fade-out');
  newWords = 'Governance.';
  fade.textContent = newWords;
}

function appearText3() {
  fade.classList.remove('fade-out');
  newWords = 'Distribution.';
  fade.textContent = newWords;
}

function appearText4() {
  fade.classList.remove('fade-out');
  newWords = 'Control.';
  fade.textContent = newWords;
}

function pointer() {
  document.querySelector('.pointer').style.visibility = 'visible';
}



  










