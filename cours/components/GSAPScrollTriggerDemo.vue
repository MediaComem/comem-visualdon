<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useIsSlideActive } from '@slidev/client'
import gsap from 'gsap'

const stepsRef = ref(null)
const ballRef = ref(null)
let s2Active = false
let s3Active = false

function reset() {
  if (!ballRef.value) return
  gsap.set(ballRef.value, { x: 0, y: 0, scale: 1, backgroundColor: '#111' })
  s2Active = false
  s3Active = false
}

function onScroll() {
  const container = stepsRef.value
  const ball = ballRef.value
  if (!container || !ball) return

  const cRect = container.getBoundingClientRect()
  const threshold = cRect.top + cRect.height * 0.75

  const s2El = container.querySelector('.s2')
  const s3El = container.querySelector('.s3')

  if (s2El) {
    const top = s2El.getBoundingClientRect().top
    if (!s2Active && top < threshold) {
      s2Active = true
      gsap.to(ball, { x: 160, duration: 0.6, ease: 'power2.inOut' })
    } else if (s2Active && top >= threshold) {
      s2Active = false
      gsap.to(ball, { x: 0, duration: 0.5, ease: 'power2.inOut' })
    }
  }

  if (s3El) {
    const top = s3El.getBoundingClientRect().top
    if (!s3Active && top < threshold) {
      s3Active = true
      gsap.to(ball, { y: 50, scale: 1.8, backgroundColor: '#E92528', duration: 0.6, ease: 'back.out(1.7)' })
    } else if (s3Active && top >= threshold) {
      s3Active = false
      gsap.to(ball, { y: 0, scale: 1, backgroundColor: '#111', duration: 0.5, ease: 'power2.inOut' })
    }
  }
}

function init() {
  if (!stepsRef.value) return
  reset()
  stepsRef.value.addEventListener('scroll', onScroll, { passive: true })
}

function destroy() {
  if (stepsRef.value) stepsRef.value.removeEventListener('scroll', onScroll)
}

const isActive = useIsSlideActive()
watch(isActive, val => {
  if (val) setTimeout(init, 200)
  else { destroy(); reset() }
}, { immediate: true })

onUnmounted(destroy)
</script>

<template>
  <div class="outer">

    <!-- Gauche : code -->
    <div class="code-panel">
      <div class="code-file">ScrollTrigger.js</div>
      <pre class="code"><code><span class="kw">import</span> { ScrollTrigger } <span class="kw">from</span> <span class="str">'gsap/ScrollTrigger'</span>
<span class="kw">gsap</span>.registerPlugin(ScrollTrigger)

<span class="cm">// Déclencher quand .s2 entre dans la vue</span>
ScrollTrigger.create({
  trigger: <span class="str">'.s2'</span>,
  scroller: container,
  start: <span class="str">'top 55%'</span>,

  onEnter: () =>
    <span class="kw">gsap</span>.<span class="fn">to</span>(<span class="str">'#ball'</span>, {
      x: 160,
      duration: 0.6,
      ease: <span class="str">'power2.inOut'</span>,
    }),

  onLeaveBack: () =>
    <span class="kw">gsap</span>.<span class="fn">to</span>(<span class="str">'#ball'</span>, {
      x: 0,
      duration: 0.5,
    }),
})</code></pre>
      <div class="code-legend">
        <div class="leg-row"><span class="dot-a">A</span> initial</div>
        <div class="leg-row"><span class="dot-b">B</span> après scroll</div>
      </div>
    </div>

    <!-- Droite : stage fixe + steps scrollables -->
    <div class="right">

      <!-- Stage : toujours visible, position absolute en haut -->
      <div class="stage">
        <div class="track-labels">
          <span>A</span>
          <span style="margin-left:150px">B</span>
        </div>
        <div ref="ballRef" class="ball" />
        <div class="hint">↓ scroller ci-dessous</div>
      </div>

      <!-- Steps : scrollent sous le stage -->
      <div ref="stepsRef" class="steps">

        <div class="step s1">
          <span class="snum">01</span>
          <strong>Point A — état initial</strong>
          <p>L'objet est en position de départ. ScrollTrigger surveille les éléments qui arrivent.</p>
        </div>

        <div class="step s2">
          <span class="snum">02</span>
          <strong>A → B — <code>onEnter</code></strong>
          <p>En scrollant jusqu'ici, <code>onEnter</code> se déclenche : le cercle se déplace vers B (x +160px).</p>
          <p>En remontant, <code>onLeaveBack</code> le ramène en A.</p>
        </div>

        <div class="step s3">
          <span class="snum">03</span>
          <strong>B → C — scale + couleur</strong>
          <p>Un second trigger : le cercle grossit et change de couleur. Chaque propriété CSS est animable.</p>
        </div>

        <div style="height: 200px" />
      </div>

    </div>
  </div>
</template>

<style scoped>
.outer {
  display: flex;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  font-family: 'Roboto', sans-serif;
}

/* ── Code panel ───────────────────────────── */
.code-panel {
  width: 46%;
  flex-shrink: 0;
  background: #1e1e1e;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.9rem;
  border-right: 1px solid #333;
  gap: 0.5rem;
  overflow: hidden;
}

.code-file {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.52rem;
  color: #6a9955;
  letter-spacing: 0.08em;
  flex-shrink: 0;
}

.code {
  flex: 1;
  margin: 0;
  background: none;
  font-size: 0.65rem;
  line-height: 1.65;
  color: #d4d4d4;
  overflow: auto;
}

.code code { background: none; padding: 0; font-family: 'Roboto Mono', monospace; color: #d4d4d4; }
.kw  { color: #c586c0; }
.fn  { color: #dcdcaa; }
.str { color: #ce9178; }
.cm  { color: #6a9955; }

.code-legend {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
  padding-top: 0.4rem;
  border-top: 1px solid #333;
}

.leg-row {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.58rem;
  color: #777;
  font-family: 'Roboto Mono', monospace;
}

.dot-a, .dot-b {
  width: 13px; height: 13px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.48rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}
.dot-a { background: #111; }
.dot-b { background: #E92528; }

/* ── Right side ───────────────────────────── */
.right {
  flex: 1;
  position: relative;   /* contexte pour absolute */
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Stage : fixe en haut, ne scrolle pas */
.stage {
  flex-shrink: 0;
  height: 130px;
  background: #f8f8f8;
  border-bottom: 1px solid #ececec;
  position: relative;
  overflow: hidden;
}

.track-labels {
  position: absolute;
  top: 0.5rem;
  left: 1.25rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.52rem;
  color: #ddd;
}

.ball {
  width: 22px;
  height: 22px;
  background: #111;
  border-radius: 50%;
  position: absolute;
  left: 1.25rem;
  top: 50%;
  margin-top: -11px;
}

.hint {
  position: absolute;
  bottom: 0.4rem;
  right: 0.75rem;
  font-size: 0.52rem;
  color: #ccc;
  font-family: 'Roboto Mono', monospace;
}

/* Steps : scrollent sous le stage */
.steps {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.step {
  flex-shrink: 0;
  min-height: 220px;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.45rem;
  border-bottom: 1px solid #f0f0f0;
}

.snum {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.52rem;
  color: #ccc;
}

.step strong { font-size: 0.82rem; color: #111; }

.step p {
  font-size: 0.7rem;
  color: #666;
  line-height: 1.55;
  margin: 0;
}

.step code {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.63rem;
  background: #f0f0f0;
  padding: 0.1em 0.3em;
  border-radius: 2px;
  color: #333;
}
</style>
