let mic;
let spectrum;
let fft;


 function setup(){
  colorMode(HSB);
  let cnv = createCanvas(windowWidth,windowHeight);
  cnv.touchStarted(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  
   
}


function draw(){
  // background(0,0,0);
  
  freqTop = 10000;
  opacity = 0.20
  
  let spectrum = fft.analyze();
  // console.log(spectrum)
  let sc = fft.getCentroid();
  
  // console.log(sc);
  let mc = map(sc,0, freqTop, 0, 360)


  
  background(mc, 100, 100, opacity);
  
}
