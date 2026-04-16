<script setup>
import { ref, onMounted } from 'vue'
import { geoEqualEarth, geoPath } from 'd3-geo'
import { select } from 'd3-selection'

const svgRef = ref(null)
const W = 500, H = 400

onMounted(async () => {
  const res = await fetch('/images/08-intro-cartography/europe.geojson')
  const geojson = await res.json()

  const projection = geoEqualEarth().fitExtent([[12, 12], [W - 12, H - 12]], geojson)
  const path = geoPath().projection(projection)

  const svg = select(svgRef.value)
  svg.selectAll('path')
    .data(geojson.features)
    .join('path')
    .attr('d', path)
    .attr('fill', '#E92528')
    .attr('stroke', '#fff')
    .attr('stroke-width', 0.8)
})
</script>

<template>
  <svg ref="svgRef" :viewBox="`0 0 ${W} ${H}`"
    style="display:block;width:100%;height:100%;background:#fff;" />
</template>
