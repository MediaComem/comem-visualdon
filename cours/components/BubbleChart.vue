<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { select } from 'd3-selection'
import { scaleSqrt } from 'd3-scale'
import { easeQuadOut, easeCubicInOut, easeQuadIn } from 'd3-ease'
import 'd3-transition'
import { useIsSlideActive } from '@slidev/client'

const svgRef = ref(null)

const C = {
  enter:  '#4a7c59',  // sage green
  update: '#aaa',     // light gray
  exit:   '#9b3a3a',  // muted rose
}

const CITIES = [
  { name: 'Zürich',     pop: 421_000 },
  { name: 'Genève',     pop: 201_000 },
  { name: 'Basel',      pop: 177_000 },
  { name: 'Lausanne',   pop: 137_000 },
  { name: 'Bern',       pop: 133_000 },
  { name: 'Winterthur', pop: 114_000 },
  { name: 'Luzern',     pop:  82_000 },
  { name: 'St. Gallen', pop:  75_000 },
  { name: 'Lugano',     pop:  62_000 },
  { name: 'Bienne',     pop:  55_000 },
]

const W = 820
const H = 240
const R_MAX = 60

const rScale = scaleSqrt()
  .domain([0, CITIES[0].pop])
  .range([0, R_MAX])

const STEPS = [3, 5, 7, 10]
let step = 0
let timer = null

const label = ref('top 3')

function layout(data) {
  return data.map((d, i) => ({
    ...d,
    x: (W / (data.length + 1)) * (i + 1),
    y: H / 2,
    r: rScale(d.pop),
  }))
}

function draw(data) {
  const svg = select(svgRef.value)
  const nodes = layout(data)

  svg.selectAll('g.bubble')
    .data(nodes, d => d.name)
    .join(
      // ── ENTER ─────────────────────────────────────────────────
      enter => {
        const g = enter.append('g')
          .attr('class', 'bubble')
          .attr('transform', d => `translate(${d.x},${d.y})`)
          .style('opacity', 0)

        g.append('circle')
          .attr('r', 0)
          .attr('fill', '#fff')
          .attr('stroke', C.enter)
          .attr('stroke-width', 1)

        g.append('text')
          .attr('class', 'c-name')
          .attr('text-anchor', 'middle')
          .attr('font-size', 8.5)
          .attr('font-family', 'Roboto Mono, monospace')
          .attr('fill', C.enter)
          .attr('dy', d => d.r + 15)
          .text(d => d.name)

        g.append('text')
          .attr('class', 'c-pop')
          .attr('text-anchor', 'middle')
          .attr('font-size', 7)
          .attr('font-family', 'Roboto Mono, monospace')
          .attr('fill', '#ccc')
          .attr('dy', d => d.r + 25)
          .text(d => `${Math.round(d.pop / 1000)}k`)

        g.transition()
          .duration(1000).ease(easeQuadOut)
          .delay((_, i) => i * 80)
          .style('opacity', 1)

        g.select('circle')
          .transition()
          .duration(1000).ease(easeQuadOut)
          .delay((_, i) => i * 80)
          .attr('r', d => d.r)

        return g
      },

      // ── UPDATE ────────────────────────────────────────────────
      update => {
        update.transition()
          .duration(1000).ease(easeCubicInOut)
          .attr('transform', d => `translate(${d.x},${d.y})`)
          .style('opacity', 1)

        update.select('circle')
          .transition()
          .duration(1000).ease(easeCubicInOut)
          .attr('r', d => d.r)
          .attr('stroke', C.update)

        update.select('.c-name')
          .transition()
          .duration(1000).ease(easeCubicInOut)
          .attr('dy', d => d.r + 15)
          .attr('fill', C.update)

        update.select('.c-pop')
          .transition()
          .duration(1000).ease(easeCubicInOut)
          .attr('dy', d => d.r + 25)

        return update
      },

      // ── EXIT ──────────────────────────────────────────────────
      exit => {
        // flash to exit color immediately
        exit.select('circle').attr('stroke', C.exit).attr('stroke-width', 1)
        exit.select('.c-name').attr('fill', C.exit)

        // float upward + fade out
        exit.transition()
          .duration(700).ease(easeQuadIn)
          .attr('transform', d => `translate(${d.x},${d.y - 100})`)
          .style('opacity', 0)
          .remove()

        return exit
      }
    )
}

const isActive = useIsSlideActive()

watch(isActive, (active) => {
  clearInterval(timer)
  timer = null

  if (active) {
    // Reset to initial state each time the slide becomes visible
    select(svgRef.value).selectAll('g.bubble').remove()
    step = 0
    label.value = `top ${STEPS[0]}`
    draw(CITIES.slice(0, STEPS[0]))

    timer = setInterval(() => {
      step = (step + 1) % STEPS.length
      const n = STEPS[step]
      label.value = n === 10 ? 'toutes les villes' : `top ${n}`
      draw(CITIES.slice(0, n))
    }, 3000)
  }
}, { immediate: true })

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;gap:1.25rem;">
    <svg ref="svgRef" :width="W" :height="H" style="overflow:visible;" />

    <!-- State legend -->
    <div style="display:flex;gap:2rem;align-items:center;">
      <span :style="`font-family:'Roboto Mono',monospace;font-size:0.55rem;letter-spacing:0.14em;text-transform:uppercase;color:${C.enter}`">
        ● enter
      </span>
      <span :style="`font-family:'Roboto Mono',monospace;font-size:0.55rem;letter-spacing:0.14em;text-transform:uppercase;color:${C.update}`">
        ● update
      </span>
      <span :style="`font-family:'Roboto Mono',monospace;font-size:0.55rem;letter-spacing:0.14em;text-transform:uppercase;color:${C.exit}`">
        ● exit
      </span>
    </div>

    <!-- Cycle label -->
    <p style="font-family:'Roboto Mono',monospace;font-size:0.5rem;color:#ddd;letter-spacing:0.15em;text-transform:uppercase;margin:0;">
      {{ label }} · population · suisse
    </p>
  </div>
</template>
