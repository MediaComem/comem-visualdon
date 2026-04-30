<script setup>
import { ref, computed, onUnmounted } from 'vue'
import gsap from 'gsap'

const boxRef = ref(null)
const active = ref(null)
let tween = null

function kill() { if (tween) { tween.kill(); tween = null } }

function reset() {
  gsap.set(boxRef.value, { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, backgroundColor: '#000' })
}

const actions = [
  {
    id: 'to',
    verb: 'gsap.to()',
    label: 'Va là',
    sub: "part de l'état actuel, arrive à la destination",
    color: '#4a90d9',
    code: `gsap.to(element, {
  x: 180,
  rotation: 180,
  duration: 1.2,
  ease: 'power2.inOut',
})`,
    run() {
      kill(); reset(); active.value = 'to'
      tween = gsap.to(boxRef.value, { x: 180, rotation: 180, backgroundColor: '#4a90d9', duration: 1.2, ease: 'power2.inOut' })
    },
  },
  {
    id: 'from',
    verb: 'gsap.from()',
    label: 'Viens de là',
    sub: "l'élément arrive depuis un état invisible",
    color: '#E92528',
    code: `gsap.from(element, {
  x: -180,
  opacity: 0,
  scale: 0.2,
  duration: 1.2,
  ease: 'back.out(1.7)',
})`,
    run() {
      kill()
      reset() // d'abord reset → état actuel = destination
      active.value = 'from'
      // from() anime DEPUIS ces valeurs VERS l'état actuel (reset)
      tween = gsap.from(boxRef.value, {
        x: -180, opacity: 0, scale: 0.2, rotation: -90,
        backgroundColor: '#E92528',
        duration: 1.2, ease: 'back.out(1.7)',
      })
    },
  },
  {
    id: 'fromTo',
    verb: 'gsap.fromTo()',
    label: 'De A vers B',
    sub: 'on définit soi-même le départ ET l\'arrivée',
    color: '#4a7c59',
    code: `gsap.fromTo(element,
  { x: -180, opacity: 0.2, scale: 0.4 },
  { x:  180, opacity:   1, scale:   1,
    duration: 1.6, ease: 'sine.inOut' }
)`,
    run() {
      kill(); active.value = 'fromTo'
      tween = gsap.fromTo(
        boxRef.value,
        { x: -180, scale: 0.4, opacity: 0.2, backgroundColor: '#9e9e9e', rotation: -180 },
        { x: 180, scale: 1, opacity: 1, backgroundColor: '#4a7c59', rotation: 180, duration: 1.6, ease: 'sine.inOut' }
      )
    },
  },
  {
    id: 'tl',
    verb: 'timeline()',
    label: 'Étape par étape',
    sub: 'une séquence d\'animations qui se suivent dans l\'ordre',
    color: '#f5a623',
    code: `const tl = gsap.timeline()

tl.to(el, { x: 120, duration: 0.4 })
  .to(el, { rotation: 360, duration: 0.5 })
  .to(el, { y: -35, scale: 1.4, duration: 0.35 })
  .to(el, { y: 0, x: 0, duration: 0.6 })`,
    run() {
      kill(); reset(); active.value = 'tl'
      const tl = gsap.timeline()
      tl.to(boxRef.value, { x: 120, duration: 0.4, ease: 'power1.in' })
        .to(boxRef.value, { rotation: 360, backgroundColor: '#f5a623', duration: 0.5 })
        .to(boxRef.value, { y: -35, scale: 1.4, duration: 0.35, ease: 'power2.out' })
        .to(boxRef.value, { y: 0, scale: 1, x: 0, rotation: 720, duration: 0.6, ease: 'bounce.out', backgroundColor: '#000' })
      tween = tl
    },
  },
]

function highlight(code) {
  return code
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\b(gsap|const|tl)\b/g, '<span class="kw">$1</span>')
    .replace(/\.(to|from|fromTo|timeline|set)\(/g, '.<span class="fn">$1</span>(')
    .replace(/'([^']*)'/g, '<span class="str">\'$1\'</span>')
    .replace(/(\/\/.*)/g, '<span class="cm">$1</span>')
}

const current = computed(() => {
  const a = actions.find(a => a.id === active.value)
  if (!a) return null
  return { ...a, codeHtml: highlight(a.code) }
})

onUnmounted(kill)
</script>

<template>
  <div class="demo">

    <!-- Stage -->
    <div class="stage">
      <div ref="boxRef" class="box" />
      <span v-if="!active" class="hint">Choisir une méthode ci-dessous</span>
    </div>

    <!-- Boutons -->
    <div class="btns">
      <button
        v-for="a in actions" :key="a.id"
        class="btn"
        :class="{ 'is-active': active === a.id }"
        :style="active === a.id ? { borderColor: a.color, color: a.color } : {}"
        @click="a.run()"
      >
        <code class="btn-verb">{{ a.verb }}</code>
        <span class="btn-label">{{ a.label }}</span>
      </button>
      <button class="btn btn-reset" @click="kill(); reset(); active = null">↺</button>
    </div>

    <!-- Description + code -->
    <div v-if="current" class="bottom" :style="{ borderLeftColor: current.color }">
      <p class="bottom-sub">{{ current.sub }}</p>
      <pre class="code"><code v-html="current.codeHtml" /></pre>
    </div>
    <div v-else class="bottom bottom-empty">
      <span>Sélectionne une méthode pour voir le code</span>
    </div>

  </div>
</template>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

/* Stage */
.stage {
  flex: 1;
  min-height: 0;
  background: #f7f7f7;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.box {
  width: 52px;
  height: 52px;
  background: #000;
  border-radius: 8px;
}

.hint {
  position: absolute;
  bottom: 0.6rem;
  font-size: 0.58rem;
  color: #ccc;
  font-family: 'Roboto Mono', monospace;
}

/* Boutons */
.btns {
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
}

.btn {
  flex: 1;
  padding: 0.45rem 0.4rem;
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  transition: border-color 0.2s, color 0.2s;
  color: #444;
}

.btn:hover:not(.btn-reset):not(.is-active) {
  border-color: #999;
  background: #f9f9f9;
}

.btn-verb {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.62rem;
  color: inherit;
}

.btn-label {
  font-size: 0.68rem;
  font-weight: 600;
  color: inherit;
}

.btn-reset {
  flex: 0 0 2.2rem;
  font-size: 1rem;
  color: #bbb;
  padding: 0.4rem;
}

.btn-reset:hover { color: #333; border-color: #999; }

/* Bottom: description + code */
.bottom {
  flex-shrink: 0;
  border-left: 3px solid #e0e0e0;
  padding: 0 0 0 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  transition: border-left-color 0.3s;
}

.bottom-empty {
  padding: 0.4rem 0.75rem;
  font-size: 0.65rem;
  color: #bbb;
  font-family: 'Roboto Mono', monospace;
}

.bottom-sub {
  font-size: 0.72rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
}

.code {
  margin: 0;
  background: #1e1e1e;
  border-radius: 4px;
  padding: 0.6rem 0.85rem;
  font-size: 0.67rem;
  line-height: 1.6;
  overflow: auto;
}

.code code {
  background: none;
  padding: 0;
  color: #d4d4d4;
  font-family: 'Roboto Mono', monospace;
}

:deep(.kw)  { color: #9cdcfe; }
:deep(.fn)  { color: #dcdcaa; }
:deep(.str) { color: #ce9178; }
:deep(.cm)  { color: #6a9955; }
</style>
