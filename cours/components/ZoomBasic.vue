<script setup>
import { ref, onMounted, watch } from 'vue'
import { select } from 'd3-selection'
import { zoom, zoomIdentity } from 'd3-zoom'
import { useIsSlideActive } from '@slidev/client'

const svgRef = ref(null)
const W = 400, H = 400
const points = [
  [50, 50], [110, 130], [170, 45], [230, 150], [290, 75], [350, 120],
  [80, 155], [195, 90], [310, 40], [130, 30], [265, 165], [370, 60],
]

let zoomBehavior = null

onMounted(() => {
  const svg = select(svgRef.value)
  const g = svg.select('g.content')
  zoomBehavior = zoom()
    .scaleExtent([0.5, 8])
    .on('zoom', (event) => g.attr('transform', event.transform))
  svg.call(zoomBehavior)
})

const isActive = useIsSlideActive()
watch(isActive, (active) => {
  if (!active && svgRef.value && zoomBehavior)
    select(svgRef.value).call(zoomBehavior.transform, zoomIdentity)
})
</script>

<template>
  <div>
    <svg ref="svgRef" :viewBox="`0 0 ${W} ${H}`"
      style="display:block;width:100%;border:1px solid #e5e5e5;border-radius:6px;cursor:grab;background:#fafafa;">
      <g class="content">
        <circle v-for="(p, i) in points" :key="i" :cx="p[0]" :cy="p[1]" r="10" fill="#E92528" opacity="0.75" />
      </g>
    </svg>
    <p style="font-size:0.65em;color:#aaa;margin:0.2rem 0 0;text-align:center;">scroll pour zoomer · drag pour déplacer</p>
  </div>
</template>
