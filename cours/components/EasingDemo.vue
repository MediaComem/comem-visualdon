<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { select } from 'd3-selection'
import { easeLinear, easeCubic, easeBounce, easeElastic } from 'd3-ease'
import 'd3-transition'
import { useIsSlideActive } from '@slidev/client'

const svgRef = ref(null)
let timer = null

const DURATION = 1300
const R = 8
const Y_TOP = R + 5
const Y_BOT = 90 - R - 14
const FLOOR_Y = Y_BOT + R + 2

const easings = [
  { id: 'e0', name: 'easeLinear',  fn: easeLinear,  color: '#aaa'    },
  { id: 'e1', name: 'easeCubic',   fn: easeCubic,   color: '#4a90d9' },
  { id: 'e2', name: 'easeBounce',  fn: easeBounce,  color: '#E92528' },
  { id: 'e3', name: 'easeElastic', fn: easeElastic, color: '#4a7c59' },
]
const xs = [60, 180, 300, 420]

let going = false

function drop() {
  if (!svgRef.value) return
  going = !going
  const targetY = going ? Y_BOT : Y_TOP
  const svg = select(svgRef.value)
  easings.forEach(e => svg.select(`#${e.id}`).transition().duration(DURATION).ease(e.fn).attr('cy', targetY))
}

const isActive = useIsSlideActive()
watch(isActive, (active) => {
  clearInterval(timer); timer = null; going = false
  if (svgRef.value) {
    const svg = select(svgRef.value)
    easings.forEach(e => svg.select(`#${e.id}`).interrupt().attr('cy', Y_TOP))
  }
  if (active) setTimeout(() => { drop(); timer = setInterval(drop, DURATION + 700) }, 500)
}, { immediate: true })

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <svg ref="svgRef" viewBox="0 0 480 115" style="display:block;width:100%;max-height:115px;overflow:visible;">
    <line x1="10" :y1="FLOOR_Y" x2="470" :y2="FLOOR_Y" stroke="#333" stroke-width="1" />
    <g v-for="(e, i) in easings" :key="e.id">
      <circle :id="e.id" :cx="xs[i]" :cy="Y_TOP" :r="R" :fill="e.color" />
      <text :x="xs[i]" y="112" text-anchor="middle" font-family="Roboto Mono,monospace" font-size="3" :fill="e.color">{{ e.name }}</text>
    </g>
  </svg>
</template>
