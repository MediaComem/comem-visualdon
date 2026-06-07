// ===================== FORMES DE BASE =====================

// --- Rectangle ---
const ctxRect = document.getElementById('canvas-rect').getContext('2d')
ctxRect.fillStyle = 'red'
ctxRect.fillRect(0, 0, 800, 300)


// --- Donut ---
const ctxDonut = document.getElementById('canvas-donut').getContext('2d')
ctxDonut.strokeStyle = 'black'
ctxDonut.lineWidth = 2
ctxDonut.beginPath()
ctxDonut.arc(110, 110, 60, 0, Math.PI * 2)
ctxDonut.stroke()
ctxDonut.beginPath()
ctxDonut.arc(110, 110, 30, 0, Math.PI * 2)
ctxDonut.stroke()


// --- Ligne (longueur 100px, pente 5, point A = 70,90) ---
// pente = Δy/Δx = 5 → Δy = 5Δx
// longueur = √(Δx² + Δy²) = √(26Δx²) = 100 → Δx = 100/√26
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


// --- Chemin libre : lettre N ---
// Les segments de la lettre N
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


// ===================== ANIMER DES FORMES =====================

// --- On click : changer de couleur ---
const rectSVG = document.getElementById('rectangle-click')
let isSVGRed = true
rectSVG.addEventListener('click', () => {
  isSVGRed = !isSVGRed
  rectSVG.style.fill = isSVGRed ? 'red' : 'black'
})

// Canvas : on click
const canvasClick = document.getElementById('canvas-click')
const ctxClick = canvasClick.getContext('2d')
let isCanvasRed = true

function drawRectClick(color) {
  ctxClick.clearRect(0, 0, canvasClick.width, canvasClick.height)
  ctxClick.fillStyle = color
  ctxClick.fillRect(0, 0, canvasClick.width, canvasClick.height)
}
drawRectClick('red')

canvasClick.addEventListener('click', (e) => {
  const { offsetX, offsetY } = e
  // Vérifier que le clic est dans le rectangle
  if (offsetX >= 0 && offsetX <= canvasClick.width &&
      offsetY >= 0 && offsetY <= canvasClick.height) {
    isCanvasRed = !isCanvasRed
    drawRectClick(isCanvasRed ? 'red' : 'black')
  }
})


// --- On hover : agrandir le donut ---
const donutHoverSVG = document.getElementById('donut-hover-outer')
donutHoverSVG.addEventListener('mouseover', () => donutHoverSVG.setAttribute('r', '80'))
donutHoverSVG.addEventListener('mouseout',  () => donutHoverSVG.setAttribute('r', '60'))

// Canvas : on hover
const canvasHover = document.getElementById('canvas-hover')
const ctxHover = canvasHover.getContext('2d')
const CX = 110, CY = 110, INNER_R = 30, OUTER_R = 60

function drawDonut(outerR) {
  ctxHover.clearRect(0, 0, canvasHover.width, canvasHover.height)
  ctxHover.strokeStyle = 'black'
  ctxHover.lineWidth = 2
  ctxHover.beginPath()
  ctxHover.arc(CX, CY, outerR, 0, Math.PI * 2)
  ctxHover.stroke()
  ctxHover.beginPath()
  ctxHover.arc(CX, CY, INNER_R, 0, Math.PI * 2)
  ctxHover.stroke()
}
drawDonut(OUTER_R)

canvasHover.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e
  const dist = Math.sqrt((offsetX - CX) ** 2 + (offsetY - CY) ** 2)
  const isHovered = dist >= INNER_R && dist <= OUTER_R
  drawDonut(isHovered ? 80 : OUTER_R)
})
canvasHover.addEventListener('mouseleave', () => drawDonut(OUTER_R))


// --- Animation le long d'un chemin ---

// Calcul de la longueur totale du chemin et position à t ∈ [0, 1]
function buildPath(points) {
  const segments = []
  for (let i = 0; i < points.length - 1; i++) {
    const dx = points[i + 1].x - points[i].x
    const dy = points[i + 1].y - points[i].y
    segments.push({ start: points[i], end: points[i + 1], len: Math.sqrt(dx * dx + dy * dy) })
  }
  return segments
}

function getPointAtT(segments, t) {
  const total = segments.reduce((acc, s) => acc + s.len, 0)
  const target = t * total
  let acc = 0
  for (const seg of segments) {
    if (acc + seg.len >= target) {
      const u = (target - acc) / seg.len
      return {
        x: seg.start.x + u * (seg.end.x - seg.start.x),
        y: seg.start.y + u * (seg.end.y - seg.start.y),
      }
    }
    acc += seg.len
  }
  return segments[segments.length - 1].end
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
