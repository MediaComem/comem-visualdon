import { nextTick } from 'vue'
import type { Router } from 'vue-router'

export default ({ isClient, router }: { isClient: boolean; router: Router }) => {
  if (!isClient) return

  // Watch for line highlight class changes and scroll the highlighted line into view.
  const lineObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      const el = mutation.target as HTMLElement
      if (el.classList.contains('line') && el.classList.contains('highlighted')) {
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
        break
      }
    }
  })

  const attachToLines = () => {
    lineObserver.disconnect()
    nextTick(() => {
      document.querySelectorAll('.slidev-code .line').forEach(el => {
        lineObserver.observe(el, { attributes: true, attributeFilter: ['class'] })
      })
    })
  }

  router.afterEach(attachToLines)
  nextTick(attachToLines)
}
