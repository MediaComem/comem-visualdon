<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import { useIsSlideActive } from '@slidev/client'
import scrollama from 'scrollama'

const stepsRef = ref(null)
let scroller = null

const steps = [
  {
    id: 0,
    year: '1990',
    pct: 0.05,
    users: '2.8 M',
    color: '#9e9e9e',
    text: 'Les débuts d\'Internet. Seul 0.05 % de la population mondiale est connectée — universités et centres de recherche américains.',
  },
  {
    id: 1,
    year: '2000',
    pct: 6.7,
    users: '413 M',
    color: '#4a90d9',
    text: 'L\'explosion du Web. Le boom Internet transforme les économies développées, mais la fracture numérique reste immense.',
  },
  {
    id: 2,
    year: '2010',
    pct: 29,
    users: '2.0 Md',
    color: '#f5a623',
    text: 'La révolution mobile. Les smartphones rendent Internet accessible dans les pays émergents pour la première fois.',
  },
  {
    id: 3,
    year: '2023',
    pct: 66,
    users: '5.4 Md',
    color: '#E92528',
    text: 'Plus de 5 milliards d\'utilisateurs. Internet est devenu une infrastructure critique mondiale, au même titre que l\'eau ou l\'électricité.',
  },
]

const active = ref(0)
const current = computed(() => steps[active.value])

// Bubble radius proportional to sqrt(pct) — area ∝ pct
const MAX_R = 72
const bubbleR = computed(() => Math.sqrt(current.value.pct / 100) * MAX_R * 1.6)
const innerR = computed(() => bubbleR.value * 0.55)

function initScrollama() {
  if (!stepsRef.value) return
  scroller = scrollama()
  scroller
    .setup({ step: '.scroll-step', container: stepsRef.value, offset: 0.5 })
    .onStepEnter(({ index }) => { active.value = index })
}

function destroyScrollama() {
  if (scroller) { scroller.destroy(); scroller = null }
}

const isActive = useIsSlideActive()
watch(isActive, (val) => {
  if (val) setTimeout(initScrollama, 150)
  else { destroyScrollama(); active.value = 0 }
}, { immediate: true })

onUnmounted(destroyScrollama)
</script>

<template>
  <div class="demo-outer">
    <!-- Left: fixed visualization panel -->
    <div class="viz-panel">
      <div class="year-badge" :style="{ background: current.color }">{{ current.year }}</div>
      <svg viewBox="0 0 280 210" class="viz-svg">
        <!-- Outer bubble -->
        <circle
          cx="140" cy="108"
          :r="bubbleR"
          :fill="current.color"
          opacity="0.12"
          style="transition: r 0.7s ease, fill 0.7s ease"
        />
        <!-- Inner bubble -->
        <circle
          cx="140" cy="108"
          :r="innerR"
          :fill="current.color"
          opacity="0.35"
          style="transition: r 0.7s ease, fill 0.7s ease"
        />
        <!-- Percentage -->
        <text
          x="140" y="104"
          text-anchor="middle"
          dominant-baseline="middle"
          :font-size="current.pct >= 10 ? 32 : 20"
          font-weight="700"
          :fill="current.color"
          style="transition: fill 0.7s ease; font-family: Roboto, sans-serif"
        >{{ current.pct }}%</text>
        <!-- Users -->
        <text x="140" y="130" text-anchor="middle" font-size="11" fill="#666"
          style="font-family: Roboto, sans-serif">
          {{ current.users }} utilisateurs
        </text>
        <!-- World label -->
        <text x="140" y="195" text-anchor="middle" font-size="9" fill="#aaa"
          style="font-family: Roboto Mono, monospace">
          % de la population mondiale
        </text>
      </svg>
      <!-- Progress bar -->
      <div class="progress-track">
        <div class="progress-fill" :style="{ width: current.pct + '%', background: current.color }" />
      </div>
      <div class="progress-labels">
        <span>0 %</span><span>100 %</span>
      </div>
      <!-- Step dots -->
      <div class="step-dots">
        <button
          v-for="s in steps" :key="s.id"
          class="dot"
          :class="{ active: active === s.id }"
          :style="active === s.id ? { background: s.color } : {}"
          @click="active = s.id"
        />
      </div>
    </div>

    <!-- Right: scrollable steps -->
    <div ref="stepsRef" class="steps-panel">
      <div class="steps-hint">↓ Scroller pour avancer</div>
      <div
        v-for="step in steps"
        :key="step.id"
        class="scroll-step"
        :class="{ 'is-active': active === step.id }"
      >
        <div class="step-bar" :style="{ background: step.color }" />
        <div class="step-body">
          <div class="step-year" :style="{ color: step.color }">{{ step.year }}</div>
          <p class="step-text">{{ step.text }}</p>
          <div class="step-stat">{{ step.pct }}% — {{ step.users }}</div>
        </div>
      </div>
      <div class="steps-spacer" />
    </div>
  </div>
</template>

<style scoped>
.demo-outer {
  display: flex;
  height: 395px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  background: #fff;
}

/* Left: fixed visualization */
.viz-panel {
  width: 44%;
  flex-shrink: 0;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 0.75rem 0.5rem;
  background: #fafafa;
  overflow: hidden;
}

.year-badge {
  align-self: flex-start;
  font-size: 0.6rem;
  font-weight: 700;
  color: #fff;
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
  letter-spacing: 0.12em;
  font-family: 'Roboto Mono', monospace;
  transition: background 0.7s ease;
}

.viz-svg {
  width: 100%;
  flex: 1;
  min-height: 0;
}

.progress-track {
  width: 90%;
  height: 4px;
  background: #ebebeb;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 0.25rem;
}

.progress-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.7s ease, background 0.7s ease;
  min-width: 2px;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  width: 90%;
  font-size: 0.5rem;
  color: #bbb;
  font-family: 'Roboto Mono', monospace;
  margin-top: 0.2rem;
}

.step-dots {
  display: flex;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e0e0e0;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.3s, transform 0.2s;
}

.dot.active {
  transform: scale(1.3);
}

/* Right: scrollable steps */
.steps-panel {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.steps-hint {
  text-align: center;
  font-size: 0.6rem;
  color: #bbb;
  font-family: 'Roboto Mono', monospace;
  padding: 0.5rem 0 0.25rem;
  letter-spacing: 0.05em;
}

.scroll-step {
  display: flex;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  min-height: 110px;
  transition: background 0.3s;
}

.scroll-step.is-active {
  background: #f7f7f7;
}

.step-bar {
  width: 3px;
  border-radius: 2px;
  flex-shrink: 0;
  align-self: stretch;
  transition: background 0.3s;
}

.step-body {
  flex: 1;
}

.step-year {
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 0.35rem;
  transition: color 0.3s;
}

.step-text {
  font-size: 0.78rem;
  line-height: 1.65;
  color: #333;
  margin: 0 0 0.4rem;
}

.step-stat {
  font-size: 0.6rem;
  font-family: 'Roboto Mono', monospace;
  color: #aaa;
}

.steps-spacer {
  height: 120px;
}
</style>
