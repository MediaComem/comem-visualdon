import { execSync } from 'node:child_process'
import { cpSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

const decks = [
  { src: 'cours/01-introduction.md',       out: '01-intro' },
  { src: 'cours/02-svg.md',                out: '02-svg' },
  { src: 'cours/03-intro-d3.md',           out: '03-intro-d3' },
  { src: 'cours/04-donnees.md',            out: '04-data' },
  { src: 'cours/05-echelles-axes.md',      out: '05-axis-scales' },
  { src: 'cours/06-interaction-1.md',      out: '06-interaction-animation-1' },
  { src: 'cours/07-interaction-2.md',      out: '07-interaction-animation-2' },
  { src: 'cours/08-intro-cartographie.md', out: '08-intro-cartographie' },
  { src: 'cours/09-cartographie-web.md',   out: '09-cartographie-web' },
  { src: 'cours/10-ethique-biais.md',      out: '10-dos-and-donts' },
  { src: 'cours/11-scrollytelling.md',     out: '11-scrollytelling' },
  { src: 'cours/12-alternatives.md',       out: '12-alternatives-d3' },
]

for (const { src, out } of decks) {
  console.log(`\n📦 Building ${src} → dist/${out}`)
  execSync(
    `npx slidev build ${src} --base "/${out}/" --out ${resolve(root, 'dist', out)}`,
    { stdio: 'inherit', cwd: root }
  )
}

// Copy index page to dist root
cpSync(resolve(root, 'public/index.html'), resolve(root, 'dist/index.html'))

console.log('\n✅ All decks built successfully!')
