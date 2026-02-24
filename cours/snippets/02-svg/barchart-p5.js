new p5(p => {
  p.setup = () => {
    p.createCanvas(260, 160);
    p.noLoop();
  };

  p.draw = () => {
    p.background(255);

    // Baseline
    p.stroke('#ccc'); p.strokeWeight(1);
    p.line(10, 140, 250, 140);

    // Barres
    p.fill('steelblue'); p.noStroke();
    p.rect(20,  100, 40, 40);
    p.rect(75,  60,  40, 80);
    p.rect(130, 80,  40, 60);
    p.rect(185, 50,  40, 90);

    // Labels
    p.fill('#666');
    p.textAlign(p.CENTER);
    p.textSize(12);
    p.text('A', 40,  156);
    p.text('B', 95,  156);
    p.text('C', 150, 156);
    p.text('D', 205, 156);
  };
});
