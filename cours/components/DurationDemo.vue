<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { select } from 'd3-selection'
import { easeLinear } from 'd3-ease'
import 'd3-transition'
import { useIsSlideActive } from '@slidev/client'

const svgRef = ref(null)
let timer = null

const durations = [
  { id: 'd0', label: '100ms',  ms: 100,  cx: 60  },
  { id: 'd1', label: '500ms',  ms: 500,  cx: 180 },
  { id: 'd2', label: '1000ms', ms: 1000, cx: 300 },
  { id: 'd3', label: '2000ms', ms: 2000, cx: 420 },
]

const R = 8
const Y_TOP = R + 5
const Y_BOT = 75
const FLOOR_Y = Y_BOT + R + 2

let going = false

function drop() {
  if (!svgRef.value) return
  going = !going
  const targetY = going ? Y_BOT : Y_TOP
  const svg = select(svgRef.value)
  durations.forEach(d => {
    svg.select(`#${d.id}`)
      .transition().duration(d.ms).ease(easeLinear)
      .attr('cy', targetY)
  })
}

const isActive = useIsSlideActive()
watch(isActive, (active) => {
  clearInterval(timer); timer = null; going = false
  if (svgRef.value) {
    const svg = select(svgRef.value)
    durations.forEach(d => svg.select(`#${d.id}`).interrupt().attr('cy', Y_TOP))
  }
  if (active) setTimeout(() => { drop(); timer = setInterval(drop, 2800) }, 500)
}, { immediate: true })

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <svg ref="svgRef" viewBox="0 0 480 115" style="display:block;width:100%;max-height:115px;overflow:visible;">
    <line x1="10" :y1="FLOOR_Y" x2="470" :y2="FLOOR_Y" stroke="#555" stroke-width="1" />
    <g v-for="d in durations" :key="d.id">
      <circle :id="d.id" :cx="d.cx" :cy="Y_TOP" :r="R" fill="#E92528" />
      <text :x="d.cx" y="112" text-anchor="middle" font-family="Roboto Mono,monospace" font-size="2" fill="#555">{{ d.label }}</text>
    </g>
  </svg>
</template>
