<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useIsSlideActive } from '@slidev/client'
import gsap from 'gsap'

const scrollRef = ref(null)
const boxRef = ref(null)
const progress = ref(0)

function onScroll() {
  const el = scrollRef.value
  const box = boxRef.value
  if (!el || !box) return
  const max = el.scrollWidth - el.clientWidth
  if (max <= 0) return
  const p = el.scrollLeft / max
  progress.value = Math.round(p * 100)
  gsap.set(box, { x: p * 200 })
}

function captureWheel(e) {
  if (!scrollRef.value || !scrollRef.value.contains(e.target)) return
  e.stopPropagation()
  e.preventDefault()
  scrollRef.value.scrollTop += e.deltaY
}

function init() {
  if (!scrollRef.value) return
  scrollRef.value.scrollTop = 0
  gsap.set(boxRef.value, { x: 0 })
  progress.value = 0
  scrollRef.value.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('wheel', captureWheel, { capture: true, passive: false })
}

function destroy() {
  if (scrollRef.value) scrollRef.value.removeEventListener('scroll', onScroll)
  document.removeEventListener('wheel', captureWheel, { capture: true })
}

const isActive = useIsSlideActive()
watch(isActive, val => {
  if (val) setTimeout(init, 200)
  else destroy()
}, { immediate: true })

onUnmounted(destroy)
</script>

<template>
  <div class="demo-wrap">
    <div ref="scrollRef" class="scroll-area">

      <div class="hint-top">↓ molette pour scroller</div>

      <div class="trigger-zone">
        <div class="zone-label">trigger zone</div>

        <div class="track">
          <span class="tag">start</span>
          <div class="track-inner">
            <div ref="boxRef" class="boite" />
          </div>
          <span class="tag">x: 400</span>
        </div>

        <div class="prog-row">
          <span class="prog-label">scrub</span>
          <div class="prog-bg">
            <div class="prog-fill" :style="{ width: progress + '%' }" />
          </div>
          <span class="prog-val">{{ progress }}%</span>
        </div>
      </div>

      <div class="hint-bottom">↑ remonter pour revenir</div>

    </div>
  </div>
</template>

<style scoped>
.demo-wrap {
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;
  overflow: hidden;
}

.scroll-area {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
}

.hint-top, .hint-bottom {
  flex-shrink: 0;
  height: 180px;
  display: flex;
  align-items: center;
  font-size: 0.52rem;
  font-family: 'Roboto Mono', monospace;
  color: #bbb;
  letter-spacing: 0.05em;
}

.trigger-zone {
  flex-shrink: 0;
  width: 100%;
  padding: 1.2rem 0.8rem;
  border: 1.5px dashed #4a90d9;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.zone-label {
  font-size: 0.48rem;
  font-family: 'Roboto Mono', monospace;
  color: #bbb;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.track {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.tag {
  font-size: 0.48rem;
  font-family: 'Roboto Mono', monospace;
  color: #ccc;
  flex-shrink: 0;
}

.track-inner {
  flex: 1;
  height: 40px;
  background: #f5f5f5;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.boite {
  width: 30px;
  height: 30px;
  background: #111;
  border-radius: 4px;
  position: absolute;
  top: 5px;
  left: 4px;
}

.prog-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.prog-label {
  font-size: 0.48rem;
  font-family: 'Roboto Mono', monospace;
  color: #aaa;
  flex-shrink: 0;
}

.prog-bg {
  flex: 1;
  height: 5px;
  background: #ebebeb;
  border-radius: 3px;
  overflow: hidden;
}

.prog-fill {
  height: 100%;
  background: #4a90d9;
  border-radius: 3px;
}

.prog-val {
  font-size: 0.52rem;
  font-family: 'Roboto Mono', monospace;
  color: #888;
  width: 2.5rem;
  text-align: right;
  flex-shrink: 0;
}
</style>
