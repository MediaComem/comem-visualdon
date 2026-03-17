<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { select } from 'd3-selection'
import { easeLinear } from 'd3-ease'
import 'd3-transition'
import { useIsSlideActive } from '@slidev/client'

const svgRef = ref(null)
let timer = null
let toggled = false

// State A: r=0, opacity=0  →  State B: r=40, color=#E92528
const R_A = 0
const R_B = 30

function animate() {
  if (!svgRef.value) return
  const svg = select(svgRef.value)
  toggled = !toggled
  const r    = toggled ? R_B : R_A
  const fill = toggled ? '#E92528' : '#888'
  const op   = toggled ? 1 : 0.15

  // sans transition — instantané
  svg.select('#ci').attr('r', r).attr('fill', fill).attr('opacity', op)

  // avec transition — animé
  svg.select('#ct')
    .transition().duration(900).ease(easeLinear)
    .attr('r', r).attr('fill', fill).attr('opacity', op)
}

const isActive = useIsSlideActive()
watch(isActive, (active) => {
  clearInterval(timer); timer = null; toggled = false
  if (svgRef.value) {
    const svg = select(svgRef.value)
    svg.select('#ci').interrupt().attr('r', R_A).attr('opacity', 0.15).attr('fill', '#888')
    svg.select('#ct').interrupt().attr('r', R_A).attr('opacity', 0.15).attr('fill', '#888')
  }
  if (active) setTimeout(() => { animate(); timer = setInterval(animate, 2400) }, 600)
}, { immediate: true })

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <svg ref="svgRef" viewBox="0 0 300 110" style="display:block;width:100%;overflow:visible;">
    <!-- divider -->
    <line x1="150" y1="5" x2="150" y2="95" stroke="#ccc" stroke-dasharray="3,3" />

    <!-- state labels -->
    <text x="75"  y="12" text-anchor="middle" font-family="Roboto Mono,monospace" font-size="2.5" fill="#888">r = 0 → r = 40</text>
    <text x="225" y="12" text-anchor="middle" font-family="Roboto Mono,monospace" font-size="2.5" fill="#888">r = 0 → r = 40</text>

    <!-- sans transition -->
    <circle id="ci" cx="75"  cy="58" r="0" fill="#888" opacity="0.15" />
    <text x="75"  y="120" text-anchor="middle" font-family="Roboto Mono,monospace" font-size="2.5" fill="#555">sans transition</text>
    <text x="75"  y="140" text-anchor="middle" font-family="Roboto Mono,monospace" font-size="2" fill="#aaa">.attr('r', 40)</text>

    <!-- avec transition -->
    <circle id="ct" cx="225" cy="58" r="0" fill="#888" opacity="0.15" />
    <text x="225" y="120" text-anchor="middle" font-family="Roboto Mono,monospace" font-size="2.5" fill="#E92528">avec transition</text>
    <text x="225" y="140" text-anchor="middle" font-family="Roboto Mono,monospace" font-size="2" fill="#aaa">.transition().attr('r', 40)</text>
  </svg>
</template>
