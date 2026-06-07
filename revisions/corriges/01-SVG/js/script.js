// --- Rectangle (click : changer de couleur) ---
const canvasRect = document.getElementById('canvas-rect')
const ctxRect = canvasRect.getContext('2d')
ctxRect.fillStyle = 'red'
ctxRect.fillRect(0, 0, canvasRect.width, canvasRect.height)

const rectSVG = document.getElementById('rectangle-svg')
let isSVGRed = true
rectSVG.addEventListener('click', () => {
  isSVGRed = !isSVGRed
  rectSVG.setAttribute('fill', isSVGRed ? 'red' : 'black')
})

let isCanvasRed = true
canvasRect.addEventListener('click', () => {
  isCanvasRed = !isCanvasRed
  ctxRect.fillStyle = isCanvasRed ? 'red' : 'black'
  ctxRect.fillRect(0, 0, canvasRect.width, canvasRect.height)
})


// --- Donut (hover : agrandir le cercle extérieur) ---
const CX = 110, CY = 110, INNER_R = 30, OUTER_R = 60
const canvasDonut = document.getElementById('canvas-donut')
const ctxDonut = canvasDonut.getContext('2d')

function drawDonut(ctx, canvas, outerR) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(CX, CY, outerR, 0, Math.PI * 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(CX, CY, INNER_R, 0, Math.PI * 2)
  ctx.stroke()
}
drawDonut(ctxDonut, canvasDonut, OUTER_R)

const donutOuter = document.getElementById('donut-outer')
donutOuter.addEventListener('mouseover', () => donutOuter.setAttribute('r', '80'))
donutOuter.addEventListener('mouseout',  () => donutOuter.setAttribute('r', '60'))

canvasDonut.addEventListener('mousemove', (e) => {
  const dist = Math.sqrt((e.offsetX - CX) ** 2 + (e.offsetY - CY) ** 2)
  drawDonut(ctxDonut, canvasDonut, dist >= INNER_R && dist <= OUTER_R ? 80 : OUTER_R)
})
canvasDonut.addEventListener('mouseleave', () => drawDonut(ctxDonut, canvasDonut, OUTER_R))


// --- Ligne ---
// pente = Δy/Δx = 5 → Δy = 5Δx, longueur = √(26Δx²) = 100 → Δx = 100/√26
const dx = 100 / Math.sqrt(26)
const dy = 5 * dx
const ctxLine = document.getElementById('canvas-line').getContext('2d')
ctxLine.beginPath()
ctxLine.arc(70, 90, 3, 0, Math.PI * 2)
ctxLine.fillStyle = 'red'
ctxLine.fill()
ctxLine.beginPath()
ctxLine.moveTo(70, 90)
ctxLine.lineTo(70 + dx, 90 + dy)
ctxLine.strokeStyle = 'black'
ctxLine.lineWidth = 2
ctxLine.stroke()


// --- Chemin libre : lettre N (animation le long du chemin) ---
const lettrePoints = [
  { x: 20, y: 100 },
  { x: 20, y: 10 },
  { x: 80, y: 100 },
  { x: 80, y: 10 },
  { x: 80, y: 100 },
]

function drawLettre(ctx) {
  ctx.beginPath()
  ctx.moveTo(lettrePoints[0].x, lettrePoints[0].y)
  for (let i = 1; i < lettrePoints.length; i++) {
    ctx.lineTo(lettrePoints[i].x, lettrePoints[i].y)
  }
  ctx.strokeStyle = 'steelblue'
  ctx.lineWidth = 5
  ctx.stroke()
}

const ctxPath = document.getElementById('canvas-path').getContext('2d')
drawLettre(ctxPath)

function buildPath(points) {
  const segments = []
  for (let i = 0; i < points.length - 1; i++) {
    const ddx = points[i + 1].x - points[i].x
    const ddy = points[i + 1].y - points[i].y
    segments.push({ start: points[i], end: points[i + 1], len: Math.sqrt(ddx * ddx + ddy * ddy) })
  }
  return segments
}

function getPointAtT(segs, t) {
  const total = segs.reduce((acc, s) => acc + s.len, 0)
  const target = t * total
  let acc = 0
  for (const seg of segs) {
    if (acc + seg.len >= target) {
      const u = (target - acc) / seg.len
      return {
        x: seg.start.x + u * (seg.end.x - seg.start.x),
        y: seg.start.y + u * (seg.end.y - seg.start.y),
      }
    }
    acc += seg.len
  }
  return segs[segs.length - 1].end
}

const segments = buildPath(lettrePoints)
const canvasAnim = document.getElementById('canvas-anim')
const ctxAnim = canvasAnim.getContext('2d')
let t = 0

function animateCanvas() {
  ctxAnim.clearRect(0, 0, canvasAnim.width, canvasAnim.height)
  const pos = getPointAtT(segments, t)
  ctxAnim.beginPath()
  ctxAnim.arc(pos.x, pos.y, 5, 0, Math.PI * 2)
  ctxAnim.fillStyle = 'red'
  ctxAnim.fill()
  t = (t + 0.005) % 1
  requestAnimationFrame(animateCanvas)
}
animateCanvas()
