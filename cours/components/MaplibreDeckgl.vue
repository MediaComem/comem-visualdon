<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { MapboxOverlay } from '@deck.gl/mapbox'
import { HexagonLayer } from '@deck.gl/aggregation-layers'

const DARK = 'https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json'

const mapRef = ref(null)
const tooltip = ref(null)
let map = null

// ~600 random points across Europe (seeded to look like population density)
function generatePoints(n, seed) {
  let s = seed
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }
  const boxes = [
    // W. Europe dense
    { lon: [2, 15],   lat: [47, 54], w: 4 },
    // Iberia
    { lon: [-8, 3],   lat: [37, 43], w: 1.5 },
    // Italy
    { lon: [11, 16],  lat: [39, 46], w: 1.5 },
    // Eastern Europe
    { lon: [16, 28],  lat: [48, 54], w: 2 },
    // Scandinavia (sparse)
    { lon: [5, 28],   lat: [55, 70], w: 0.5 },
  ]
  const totalW = boxes.reduce((a, b) => a + b.w, 0)
  const pts = []
  for (let i = 0; i < n; i++) {
    const r = rng() * totalW
    let acc = 0, box = boxes[0]
    for (const b of boxes) { acc += b.w; if (r <= acc) { box = b; break } }
    pts.push([box.lon[0] + rng() * (box.lon[1] - box.lon[0]),
              box.lat[0] + rng() * (box.lat[1] - box.lat[0])])
  }
  return pts
}

const DATA = generatePoints(800, 42).map(([lon, lat]) => ({ lon, lat }))

onMounted(() => {
  map = new maplibregl.Map({
    container: mapRef.value,
    style: DARK,
    center: [10, 51],
    zoom: 3.5,
    pitch: 45,
    bearing: -10,
    attributionControl: false,
    pixelRatio: window.devicePixelRatio || 2,
  })

  const overlay = new MapboxOverlay({
    interleaved: false,
    layers: [
      new HexagonLayer({
        id: 'hexagon',
        data: DATA,
        getPosition: d => [d.lon, d.lat],
        radius: 80000,
        elevationScale: 5000,
        extruded: true,
        pickable: true,
        colorRange: [
          [29,  53,  87],
          [52,  96, 142],
          [69, 144, 167],
          [168, 218, 220],
          [233, 196, 106],
          [231,  76,  60],
        ],
        onHover: ({ object, x, y }) => {
          tooltip.value = object
            ? { text: `${object.points.length} points`, x, y }
            : null
        },
      }),
    ],
  })

  map.addControl(overlay)
})

onUnmounted(() => map?.remove())
</script>

<template>
  <div style="width:100%;height:100%;display:flex;flex-direction:column;position:relative;">
    <div ref="mapRef" style="width:100%;flex:1;min-height:0;border-radius:6px;" />
    <div v-if="tooltip" :style="{
      position:'absolute', left:tooltip.x+'px', top:(tooltip.y-36)+'px',
      background:'rgba(0,0,0,0.8)', color:'#fff',
      padding:'3px 8px', borderRadius:'4px', fontSize:'0.7em', pointerEvents:'none',
    }">{{ tooltip.text }}</div>
    <p style="font-size:0.6em;color:#555;margin:0.25rem 0 0;text-align:center;flex-shrink:0;">
      Deck.gl HexagonLayer 3D · pitch 45° · survol pour comptage
    </p>
  </div>
</template>
