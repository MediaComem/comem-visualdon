<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { select } from 'd3-selection'
import { scaleLinear, scaleBand } from 'd3-scale'
import 'd3-transition'
import { useIsSlideActive } from '@slidev/client'

const svgRef = ref(null)
const W = 400, H = 155
const M = { top: 20, right: 20, bottom: 25, left: 30 }

const years = [1990, 1995, 2000, 2005, 2010, 2015, 2020]
const dataByYear = {
  1990: [30, 45, 20, 55],
  1995: [40, 50, 35, 60],
  2000: [55, 40, 50, 70],
  2005: [60, 35, 65, 55],
  2010: [75, 55, 70, 45],
  2015: [80, 65, 80, 40],
  2020: [90, 70, 75, 60],
}
const labels = ['A', 'B', 'C', 'D']
const colors = ['#E92528', '#4a90d9', '#4a7c59', '#f5a623']

const currentYear = ref(years[0])
let step = 0, intervalId = null, bars = null, yScale

onMounted(() => {
  const innerW = W - M.left - M.right
  const innerH = H - M.top - M.bottom

  const xScale = scaleBand().domain(labels).range([0, innerW]).padding(0.25)
  yScale = scaleLinear().domain([0, 100]).range([innerH, 0])

  const svg = select(svgRef.value)
  const g = svg.append('g').attr('transform', `translate(${M.left},${M.top})`)

  // y gridlines
  g.selectAll('line.grid')
    .data([25, 50, 75, 100])
    .join('line')
    .attr('class', 'grid')
    .attr('x1', 0).attr('x2', innerW)
    .attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
    .attr('stroke', '#eee').attr('stroke-width', 1)

  g.selectAll('text.lbl')
    .data(labels)
    .join('text')
    .attr('class', 'lbl')
    .attr('x', d => xScale(d) + xScale.bandwidth() / 2)
    .attr('y', innerH + 16)
    .attr('text-anchor', 'middle')
    .attr('font-size', '10px')
    .attr('fill', (d, i) => colors[i])
    .attr('font-weight', 'bold')
    .text(d => d)

  bars = g.selectAll('rect')
    .data(dataByYear[years[0]])
    .join('rect')
    .attr('x', (d, i) => xScale(labels[i]))
    .attr('width', xScale.bandwidth())
    .attr('y', d => yScale(d))
    .attr('height', d => innerH - yScale(d))
    .attr('fill', (d, i) => colors[i])
    .attr('opacity', 0.85)
})

function updateBars(values) {
  if (!bars) return
  const innerH = H - M.top - M.bottom
  bars.data(values)
    .transition().duration(700)
    .attr('y', d => yScale(d))
    .attr('height', d => innerH - yScale(d))
}

const isActive = useIsSlideActive()
watch(isActive, (active) => {
  clearInterval(intervalId); intervalId = null; step = 0
  if (active) {
    currentYear.value = years[0]
    updateBars(dataByYear[years[0]])
    intervalId = setInterval(() => {
      step = (step + 1) % years.length
      currentYear.value = years[step]
      updateBars(dataByYear[years[step]])
    }, 1000)
  }
}, { immediate: true })

onUnmounted(() => clearInterval(intervalId))
</script>

<template>
  <div>
    <div style="font-family:monospace;font-size:0.8em;color:#E92528;margin-bottom:0.2rem;">
      Année : <strong>{{ currentYear }}</strong>
    </div>
    <svg ref="svgRef" :viewBox="`0 0 ${W} ${H}`"
      style="display:block;width:100%;border:1px solid #e5e5e5;border-radius:6px;background:#fafafa;" />
  </div>
</template>
