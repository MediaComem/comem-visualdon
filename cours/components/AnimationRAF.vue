<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { select } from 'd3-selection'
import { scaleLinear } from 'd3-scale'
import { useIsSlideActive } from '@slidev/client'

const svgRef = ref(null)
const W = 400, H = 165
const M = { top: 20, right: 20, bottom: 28, left: 40 }
const innerW = W - M.left - M.right
const innerH = H - M.top - M.bottom

const xScale = scaleLinear().domain([0, 100]).range([0, innerW])
const yScale = scaleLinear().domain([0, 100]).range([innerH, 0])

const countries = [
  { name: 'Alpha', x0: 15, y0: 40, x1: 78, y1: 85, r: 14, color: '#E92528' },
  { name: 'Beta',  x0: 38, y0: 28, x1: 68, y1: 72, r: 18, color: '#4a90d9' },
  { name: 'Gamma', x0: 22, y0: 58, x1: 58, y1: 88, r: 11, color: '#4a7c59' },
  { name: 'Delta', x0: 52, y0: 18, x1: 82, y1: 62, r: 15, color: '#f5a623' },
]

function lerp(a, b, t) { return a + (b - a) * t }
function getData(t) {
  return countries.map(c => ({ ...c, x: lerp(c.x0, c.x1, t), y: lerp(c.y0, c.y1, t) }))
}

let g = null, circles = null, labels = null
let rafId = null, lastTime = null, t = 0, dir = 1

onMounted(() => {
  const svg = select(svgRef.value)
  g = svg.append('g').attr('transform', `translate(${M.left},${M.top})`)

  g.append('line').attr('x1', 0).attr('y1', innerH).attr('x2', innerW).attr('y2', innerH).attr('stroke', '#e0e0e0')
  g.append('line').attr('x1', 0).attr('y1', 0).attr('x2', 0).attr('y2', innerH).attr('stroke', '#e0e0e0')
  g.append('text').attr('x', innerW / 2).attr('y', innerH + 20)
    .attr('text-anchor', 'middle').attr('font-size', '8px').attr('fill', '#bbb').text('Revenu par habitant →')
  g.append('text').attr('transform', 'rotate(-90)').attr('x', -innerH / 2).attr('y', -28)
    .attr('text-anchor', 'middle').attr('font-size', '8px').attr('fill', '#bbb').text('Espérance de vie →')

  const d0 = getData(0)
  circles = g.selectAll('circle').data(d0).join('circle')
    .attr('cx', d => xScale(d.x)).attr('cy', d => yScale(d.y))
    .attr('r', d => d.r).attr('fill', d => d.color).attr('opacity', 0.8)

  labels = g.selectAll('text.clabel').data(d0).join('text')
    .attr('class', 'clabel')
    .attr('x', d => xScale(d.x)).attr('y', d => yScale(d.y) + 3)
    .attr('text-anchor', 'middle').attr('font-size', '6px')
    .attr('fill', 'white').attr('font-weight', 'bold')
    .text(d => d.name)
})

function animate(timestamp) {
  if (!lastTime) lastTime = timestamp
  const dt = timestamp - lastTime
  lastTime = timestamp
  t += (dt / 3000) * dir
  if (t >= 1) { t = 1; dir = -1 }
  if (t <= 0) { t = 0; dir = 1 }
  const d = getData(t)
  circles.data(d).attr('cx', d => xScale(d.x)).attr('cy', d => yScale(d.y))
  labels.data(d).attr('x', d => xScale(d.x)).attr('y', d => yScale(d.y) + 3)
  rafId = requestAnimationFrame(animate)
}

const isActive = useIsSlideActive()
watch(isActive, (active) => {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
  lastTime = null
  if (active) rafId = requestAnimationFrame(animate)
}, { immediate: true })

onUnmounted(() => { if (rafId) cancelAnimationFrame(rafId) })
</script>

<template>
  <svg ref="svgRef" :viewBox="`0 0 ${W} ${H}`"
    style="display:block;width:100%;border:1px solid #e5e5e5;border-radius:6px;background:#fafafa;" />
</template>
