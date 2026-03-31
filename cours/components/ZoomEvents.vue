<script setup>
import { ref, onMounted } from 'vue'
import { select } from 'd3-selection'
import { zoom } from 'd3-zoom'

const svgRef = ref(null)
const W = 400, H = 400
const points = [
  [50, 50], [110, 120], [170, 40], [230, 140], [290, 70], [350, 110],
  [80, 145], [195, 85], [310, 35], [130, 28], [265, 150],
]

const eventType = ref('—')
const tx = ref('0.0'), ty = ref('0.0'), tk = ref('1.00')

onMounted(() => {
  const svg = select(svgRef.value)
  const g = svg.select('g.content')
  svg.call(
    zoom()
      .on('start', () => { 
        eventType.value = 'start' 
      })
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
        eventType.value = 'zoom'
        tx.value = event.transform.x.toFixed(1)
        ty.value = event.transform.y.toFixed(1)
        tk.value = event.transform.k.toFixed(2)
      })
      .on('end', () => { eventType.value = 'end' })
  )
})
</script>

<template>
  <div>
    <svg ref="svgRef" :viewBox="`0 0 ${W} ${H}`"
      style="display:block;width:100%;border:1px solid #e5e5e5;border-radius:6px;cursor:grab;background:#fafafa;">
      <g class="content">
        <circle v-for="(p, i) in points" :key="i" :cx="p[0]" :cy="p[1]" r="10" fill="#4a90d9" opacity="0.75" />
      </g>
    </svg>
    <div style="font-family:monospace;font-size:0.8em;margin-top:0.4rem;display:flex;gap:1.5rem;color:#555;">
      <span>event: <strong :style="{ color: eventType === 'zoom' ? '#E92528' : '#333' }">{{ eventType }}</strong></span>
      <span>x: <strong>{{ tx }}</strong></span>
      <span>y: <strong>{{ ty }}</strong></span>
      <span>k: <strong>{{ tk }}</strong></span>
    </div>
  </div>
</template>
