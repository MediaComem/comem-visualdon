<script setup>
import { ref, onMounted } from 'vue'
import { select } from 'd3-selection'
import { zoom, zoomIdentity } from 'd3-zoom'
import 'd3-transition'

const svgRef = ref(null)
const W = 400, H = 400
const points = [
  [50, 50], [110, 120], [170, 40], [230, 140], [290, 70], [350, 110],
  [80, 140], [195, 80], [310, 35], [130, 28], [265, 145],
]

let zoomBehavior = null
let svg = null

onMounted(() => {
  svg = select(svgRef.value)
  const g = svg.select('g.content')
  zoomBehavior = zoom()
    .scaleExtent([0.5, 10])
    .on('zoom', (event) => g.attr('transform', event.transform))
  svg.call(zoomBehavior)
})

function scaleBy() { svg.transition().duration(400).call(zoomBehavior.scaleBy, 2) }
function scaleTo() { svg.transition().duration(400).call(zoomBehavior.scaleTo, 3) }
function translateBy() { svg.transition().duration(400).call(zoomBehavior.translateBy, 80, 0) }
function reset() { svg.transition().duration(400).call(zoomBehavior.transform, zoomIdentity) }
</script>

<template>
  <div>
    <div style="display:flex;gap:0.5rem;margin-bottom:0.4rem;flex-wrap:wrap;">
      <button class="btn" @click="scaleBy">scaleBy(2)</button>
      <button class="btn" @click="scaleTo">scaleTo(3)</button>
      <button class="btn" @click="translateBy">translateBy(80, 0)</button>
      <button class="btn" @click="reset">reset</button>
    </div>
    <svg ref="svgRef" :viewBox="`0 0 ${W} ${H}`"
      style="display:block;width:100%;border:1px solid #e5e5e5;border-radius:6px;cursor:grab;background:#fafafa;overflow:hidden;">
      <g class="content">
        <circle v-for="(p, i) in points" :key="i" :cx="p[0]" :cy="p[1]" r="10" fill="#E92528" opacity="0.75" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.btn {
  padding: 0.25rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-family: monospace;
  font-size: 0.75em;
  color: #333;
}
.btn:hover { background: #f5f5f5; }
</style>
