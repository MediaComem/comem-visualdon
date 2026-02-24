const ctx = canvas.getContext('2d');

// Baseline
ctx.strokeStyle = '#ccc';
ctx.beginPath();
ctx.moveTo(10, 140); ctx.lineTo(250, 140);
ctx.stroke();

// Barres
ctx.fillStyle = 'steelblue';
ctx.fillRect(20,  100, 40, 40);
ctx.fillRect(75,  60,  40, 80);
ctx.fillRect(130, 80,  40, 60);
ctx.fillRect(185, 50,  40, 90);

// Labels
ctx.fillStyle = '#666';
ctx.font = '12px sans-serif';
ctx.textAlign = 'center';
ctx.fillText('A', 40,  156);
ctx.fillText('B', 95,  156);
ctx.fillText('C', 150, 156);
ctx.fillText('D', 205, 156);
