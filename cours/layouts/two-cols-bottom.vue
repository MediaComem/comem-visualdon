<!--
  Two-column top + full-width bottom layout.

  Usage:
  ---
  layout: two-cols-bottom
  ---

  # Title
  Left column content (text, description)

  ::right::
  Right column content (code block)

  ::bottom::
  Full-width content (image)
-->

<script setup lang="ts">
const props = defineProps({
  class: { type: String },
  layoutClass: { type: String },
})
</script>

<template>
  <div class="slidev-layout two-cols-bottom w-full h-full" :class="layoutClass">
    <div class="col-left" :class="props.class">
      <slot />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
    <div class="col-bottom" :class="props.class">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped>
.two-cols-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 0 2rem;
  min-height: 0;
}

.col-left {
  grid-area: 1 / 1 / 2 / 2;
  overflow: hidden;
  min-height: 0;
}

.col-right {
  grid-area: 1 / 2 / 2 / 3;
  overflow: hidden;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.col-right :slotted(div) {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.col-bottom {
  grid-column: 1 / -1;
  border-top: 1px solid #e0e0e0;
  padding-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
