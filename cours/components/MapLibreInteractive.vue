<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const STYLE = 'https://tiles.openfreemap.org/styles/positron'

const mapRef = ref(null)
let map = null
let popup = null
let hoveredId = null

onMounted(() => {
  map = new maplibregl.Map({
    container: mapRef.value,
    style: STYLE,
    center: [8, 47],
    zoom: 3.2,
    attributionControl: false,
    pixelRatio: window.devicePixelRatio || 2,
  })

  popup = new maplibregl.Popup({ closeButton: false, closeOnClick: false })

  map.on('load', async () => {
    const res = await fetch('/images/08-intro-cartography/europe.geojson')
    const geojson = await res.json()

    geojson.features = geojson.features.map((f, i) => ({ ...f, id: i }))

    map.addSource('europe', { type: 'geojson', data: geojson, generateId: false })

    map.addLayer({
      id: 'europe-fill',
      type: 'fill',
      source: 'europe',
      paint: {
        'fill-color': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          '#7a0c0e',
          '#E92528',
        ],
        'fill-opacity': 0.75,
      },
    })
    map.addLayer({
      id: 'europe-outline',
      type: 'line',
      source: 'europe',
      paint: { 'line-color': '#fff', 'line-width': 0.8 },
    })

    map.on('mousemove', 'europe-fill', (e) => {
      if (!e.features.length) return
      if (hoveredId !== null)
        map.setFeatureState({ source: 'europe', id: hoveredId }, { hover: false })
      hoveredId = e.features[0].id
      map.setFeatureState({ source: 'europe', id: hoveredId }, { hover: true })
      map.getCanvas().style.cursor = 'pointer'
      const name = e.features[0].properties.NAME || e.features[0].properties.name || '—'
      popup.setLngLat(e.lngLat)
        .setHTML(`<span style="font-weight:600">${name}</span>`)
        .addTo(map)
    })

    map.on('mouseleave', 'europe-fill', () => {
      if (hoveredId !== null)
        map.setFeatureState({ source: 'europe', id: hoveredId }, { hover: false })
      hoveredId = null
      map.getCanvas().style.cursor = ''
      popup.remove()
    })
  })
})

onUnmounted(() => map?.remove())
</script>

<template>
  <div ref="mapRef" style="width:100%;height:100%;" />
</template>
