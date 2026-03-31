<script setup>
import { ref, onMounted } from 'vue'
import { select } from 'd3-selection'
import { zoom } from 'd3-zoom'

const svgRef = ref(null)
const W = 400, H = 400
const points = [
  [50, 50], [110, 120], [170, 40], [230, 140], [290, 70], [350, 110],
  [80, 145], [195, 80], [310, 35], [130, 28], [265, 148], [370, 55],
]

onMounted(() => {
  const svg = select(svgRef.value)
  const g = svg.select('g.content')
  svg.call(
    zoom()
      .scaleExtent([1, 5])
      .translateExtent([[0, 0], [W, H]])
      .on('zoom', (event) => g.attr('transform', event.transform))
  )
})
</script>

<template>
  <div>
    <svg ref="svgRef" :viewBox="`0 0 ${W} ${H}`"
      style="display:block;width:100%;border:1px solid #e5e5e5;border-radius:6px;cursor:grab;background:#fafafa;overflow:hidden;">
      <g class="content">
        <circle v-for="(p, i) in points" :key="i" :cx="p[0]" :cy="p[1]" r="10" fill="#4a7c59" opacity="0.75" />
      </g>
    </svg>
    <p style="font-size:0.65em;color:#aaa;margin:0.2rem 0 0;text-align:center;">
      scaleExtent: [1, 5] · translateExtent limité aux dimensions du SVG
    </p>
  </div>
</template>
