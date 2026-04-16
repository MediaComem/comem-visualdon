<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const STYLE = 'https://tiles.openfreemap.org/styles/positron'

const mapRef = ref(null)
let map = null

const POP = {
  France: 68000000, Germany: 84000000, Italy: 60000000,
  Spain: 47000000, Poland: 38000000, Romania: 19000000,
  Netherlands: 17000000, Belgium: 11000000, Sweden: 10000000,
  Portugal: 10000000, 'Czech Republic': 11000000, Hungary: 10000000,
  Greece: 11000000, Austria: 9000000, Switzerland: 8700000,
  Bulgaria: 7000000, Denmark: 5900000, Finland: 5600000,
  Norway: 5400000, Slovakia: 5500000, Croatia: 4000000,
  Ireland: 5100000, Serbia: 7000000, Belarus: 9400000, Ukraine: 44000000,
}

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

    geojson.features = geojson.features.map(f => ({
      ...f,
      properties: {
        ...f.properties,
        population: POP[f.properties.NAME || f.properties.name] ?? 5000000,
      },
    }))

    map.addSource('europe', { type: 'geojson', data: geojson })

    map.addLayer({
      id: 'europe-choropleth',
      type: 'fill',
      source: 'europe',
      paint: {
        'fill-color': [
          'interpolate', ['linear'], ['get', 'population'],
          1000000,  '#fadadb',
          15000000, '#E92528',
          85000000, '#7a0c0e',
        ],
        'fill-opacity': 0.85,
      },
    })
    map.addLayer({
      id: 'europe-outline',
      type: 'line',
      source: 'europe',
      paint: { 'line-color': '#fff', 'line-width': 0.8 },
    })
  })
})

onUnmounted(() => map?.remove())
</script>

<template>
  <div ref="mapRef" style="width:100%;height:100%;" />
</template>
