import { nextTick } from 'vue'
import type { Router } from 'vue-router'

const COPY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`
const CHECK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`

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

  const addCopyButtons = () => {
    nextTick(() => {
      // Target the outer wrapper which already has position:relative and contains the code
      document.querySelectorAll<HTMLElement>('.slidev-code-wrapper').forEach(wrapper => {
        if (wrapper.querySelector('.copy-btn')) return

        const btn = document.createElement('button')
        btn.className = 'copy-btn'
        btn.setAttribute('aria-label', 'Copy code')
        btn.innerHTML = COPY_ICON

        btn.addEventListener('click', async () => {
          const code = wrapper.querySelector('code')?.textContent ?? ''
          await navigator.clipboard.writeText(code)
          btn.innerHTML = CHECK_ICON
          btn.classList.add('copied')
          setTimeout(() => {
            btn.innerHTML = COPY_ICON
            btn.classList.remove('copied')
          }, 1500)
        })

        wrapper.appendChild(btn)
      })
    })
  }

  router.afterEach(() => {
    attachToLines()
    addCopyButtons()
  })

  nextTick(() => {
    attachToLines()
    addCopyButtons()
  })
}
