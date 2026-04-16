<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const STYLE = 'https://tiles.openfreemap.org/styles/positron'

const mapRef = ref(null)
const is3D = ref(false)
let map = null

const YVERDON = { center: [6.64, 46.78], zoom: 9,  pitch: 0,  bearing: 0 }
const BERN    = { center: [7.45, 46.95], zoom: 12, pitch: 55, bearing: -20 }
const ZURICH  = { center: [8.54, 47.37], zoom: 12, pitch: 55, bearing: 30 }

onMounted(() => {
  map = new maplibregl.Map({
    container: mapRef.value,
    style: STYLE,
    ...YVERDON,
    projection: 'globe',
    attributionControl: false,
    pixelRatio: window.devicePixelRatio || 2,
  })

  new maplibregl.Marker({ color: '#E92528' })
    .setLngLat([6.64, 46.78])
    .setPopup(new maplibregl.Popup({ offset: 25 })
      .setHTML('<b>HEIG-VD</b><br>Yverdon-les-Bains'))
    .addTo(map)
})

onUnmounted(() => map?.remove())

function flyTo(preset) {
  // Mercator requis pour pitch > 0
  if (preset.pitch > 0) map?.setProjection({ type: 'mercator' })
  map?.flyTo({ ...preset, duration: 1800 })
  is3D.value = preset.pitch > 0
}

function toggle3D() {
  is3D.value = !is3D.value
  if (is3D.value) {
    map?.setProjection({ type: 'mercator' })
    map?.easeTo({ pitch: 60, bearing: 30, duration: 1000 })
  } else {
    map?.easeTo({ pitch: 0, bearing: 0, duration: 1000 })
    setTimeout(() => map?.setProjection({ type: 'globe' }), 1000)
  }
}

function reset() {
  map?.flyTo({ ...YVERDON, duration: 1500 })
  is3D.value = false
  setTimeout(() => map?.setProjection({ type: 'globe' }), 1500)
}
</script>

<template>
  <div style="width:100%;height:100%;display:flex;flex-direction:column;gap:0.4rem;padding:0.5rem;">
    <div style="display:flex;gap:0.4rem;flex-shrink:0;flex-wrap:wrap;">
      <button @click="flyTo(YVERDON)" class="map-btn">Yverdon</button>
      <button @click="flyTo(BERN)"    class="map-btn">→ Berne</button>
      <button @click="flyTo(ZURICH)"  class="map-btn">→ Zurich</button>
      <button @click="toggle3D()"     class="map-btn" :class="{ active: is3D }">
        {{ is3D ? 'Vue 2D' : 'Vue 3D' }}
      </button>
      <button @click="reset()"        class="map-btn reset">Reset</button>
    </div>
    <div ref="mapRef" style="width:100%;flex:1;min-height:0;border-radius:4px;" />
  </div>
</template>

<style scoped>
.map-btn {
  padding: 0.2rem 0.65rem;
  font-size: 0.72em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  color: #333;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.map-btn:hover { background: #f0f0f0; color: #000; }
.map-btn.active { background: #E92528; border-color: #E92528; color: #fff; }
.map-btn.reset  { border-color: #ddd; color: #aaa; }
</style>
