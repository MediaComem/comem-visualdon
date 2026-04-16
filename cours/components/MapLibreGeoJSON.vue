<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const STYLE = 'https://tiles.openfreemap.org/styles/positron'

const mapRef = ref(null)
let map = null

onMounted(() => {
  map = new maplibregl.Map({
    container: mapRef.value,
    style: STYLE,
    center: [8, 47],
    zoom: 3.2,
    attributionControl: false,
    pixelRatio: window.devicePixelRatio || 2,
  })

  map.on('load', async () => {
    const res = await fetch('/images/08-intro-cartography/europe.geojson')
    const geojson = await res.json()

    map.addSource('europe', { type: 'geojson', data: geojson })

    map.addLayer({
      id: 'europe-fill',
      type: 'fill',
      source: 'europe',
      paint: { 'fill-color': '#E92528', 'fill-opacity': 0.7 },
    })
    map.addLayer({
      id: 'europe-outline',
      type: 'line',
      source: 'europe',
      paint: { 'line-color': '#fff', 'line-width': 1 },
    })
  })
})

onUnmounted(() => map?.remove())
</script>

<template>
  <div ref="mapRef" style="width:100%;height:100%;" />
</template>
