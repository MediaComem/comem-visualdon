<!--
  4-cell grid layout: text + result on top row, code left + code right on bottom row.

  Usage:
  ---
  layout: four-cells
  ---

  # Title
  Description text and bullets (top-left)

  ::result::
  Visual result — SVG or HTML code (top-right)

  ::left::
  **Vanilla JS** code block (bottom-left)

  ::right::
  **D3** code block (bottom-right)
-->

<script setup lang="ts">
const props = defineProps({
  class: { type: String },
  layoutClass: { type: String },
})
</script>

<template>
  <div class="slidev-layout four-cells w-full h-full" :class="layoutClass">
    <div class="cell-text" :class="props.class">
      <slot />
    </div>
    <div class="cell-result" :class="props.class">
      <slot name="result" />
    </div>
    <div class="cell-left" :class="props.class">
      <slot name="left" />
    </div>
    <div class="cell-right" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.four-cells {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 0;
}

.cell-text {
  grid-area: 1 / 1 / 2 / 2;
  padding-right: 2rem;
  overflow: hidden;
}

.cell-result {
  grid-area: 1 / 2 / 2 / 3;
  border-left: 1px solid #e0e0e0;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cell-left {
  grid-area: 2 / 1 / 3 / 2;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
  padding-right: 2rem;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cell-right {
  grid-area: 2 / 2 / 3 / 3;
  border-top: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  padding-top: 1rem;
  padding-left: 2rem;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Code block wrapper (div.slidev-code) fills the cell and scrolls */
.cell-left :slotted(div),
.cell-right :slotted(div) {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

/* Label (p, strong) should not grow */
.cell-left :slotted(p),
.cell-right :slotted(p) {
  flex-shrink: 0;
}
</style>
