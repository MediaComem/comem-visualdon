import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  monaco.editor.setTheme('vs-dark')
  monaco.editor.onDidCreateEditor(() => {
    monaco.editor.setTheme('vs-dark')
  })
})
