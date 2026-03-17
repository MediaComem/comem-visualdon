<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { select } from 'd3-selection'
import { easeCubicOut } from 'd3-ease'
import 'd3-transition'
import { useIsSlideActive } from '@slidev/client'

const svgRef = ref(null)
let timer = null

const N = 8
const W = 480
const H = 90
const PAD = 14
const BAR_W = (W - PAD * 2) / N - 4
const DURATION = 650
const DELAY = 100
const MAX_H = H - 22
const BASE_Y = H - 14

const bars = Array.from({ length: N }, (_, i) => ({
  i,
  h: 0.35 + (i % 3) * 0.22 + (i % 2) * 0.15,
  x: PAD + i * ((W - PAD * 2) / N),
}))

let visible = false

function animateBars() {
  if (!svgRef.value) return
  visible = !visible
  const svg = select(svgRef.value)
  bars.forEach(b => {
    const barH = visible ? b.h * MAX_H : 0
    svg.select(`#b${b.i}`)
      .transition().duration(DURATION).ease(easeCubicOut).delay(b.i * DELAY)
      .attr('y', BASE_Y - barH).attr('height', barH)
  })
}

const isActive = useIsSlideActive()
watch(isActive, (active) => {
  clearInterval(timer); timer = null; visible = false
  if (svgRef.value) {
    const svg = select(svgRef.value)
    bars.forEach(b => svg.select(`#b${b.i}`).interrupt().attr('y', BASE_Y).attr('height', 0))
  }
  if (active) setTimeout(() => { animateBars(); timer = setInterval(animateBars, DURATION + N * DELAY + 700) }, 400)
}, { immediate: true })

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <svg ref="svgRef" viewBox="0 0 480 90" style="display:block;width:100%;max-height:90px;overflow:visible;">
    <line x1="0" :y1="BASE_Y" x2="480" :y2="BASE_Y" stroke="#333" stroke-width="1" />
    <g v-for="b in bars" :key="b.i">
      <rect :id="`b${b.i}`" :x="b.x" :y="BASE_Y" :width="BAR_W" height="0" fill="#E92528" rx="2" />
      <text :x="b.x + BAR_W/2" :y="BASE_Y + 10" text-anchor="middle" font-family="Roboto Mono,monospace" font-size="2" fill="#555">{{ b.i * DELAY }}ms</text>
    </g>
  </svg>
</template>
