import { json } from 'd3-fetch'
import { select } from 'd3-selection'
import { max, sum } from 'd3-array'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
const userUrl = 'https://jsonplaceholder.typicode.com/users'

Promise.all([json(postsUrl), json(userUrl)])
    .then(([posts, users]) => {

        // 1. Nouvel objet
        const result1 = users.map(usr => {
            const userPosts = posts.filter(post => post.userId === usr.id)
            return {
                nom_utilisateur: usr.name,
                ville: usr.address.city,
                nom_companie: usr.company.name,
                titres_posts: userPosts.map(post => post.title),
            }
        })

        console.log('Nouvel objet', result1)


        // 2. Nombre de posts par user
        const result2 = users.map(usr => ({
            userId: usr.id,
            userName: usr.name,
            nPosts: posts.filter(post => post.userId === usr.id).length,
        }))

        console.log('Nombre de posts par user', result2)

        const container = select('body').append('div')
        container.selectAll('p')
            .data(result2)
            .join('p')
            .text(d => `User ${d.userId} (${d.userName}) : ${d.nPosts} posts`)


        // 3. User avec le texte le plus long
        const textPerUser = users.map(usr => {
            const userPosts = posts.filter(post => post.userId === usr.id)
            return {
                userId: usr.id,
                userName: usr.name,
                totalLength: sum(userPosts, post => post.body.length),
            }
        })

        const maxLength = max(textPerUser, d => d.totalLength)
        const result3 = textPerUser.filter(d => d.totalLength === maxLength)

        console.log('User qui a écrit le texte le plus long', result3)

        const container2 = select('body').append('div')
        container2.selectAll('p')
            .data(result3)
            .join('p')
            .text(d => `User ${d.userId} (${d.userName}) : ${d.totalLength} caractères`)


        // Barchart : x = users, y = longueur totale des textes
        const margin = { top: 20, right: 20, bottom: 40, left: 20 }
        const width = 0.6 * window.innerWidth - margin.left - margin.right
        const height = 0.6 * window.innerHeight - margin.top - margin.bottom

        const maxTotal = max(textPerUser, d => d.totalLength)
        const barWidth = 30
        const gap = (width - textPerUser.length * barWidth) / textPerUser.length

        const svg = select('body')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

        svg.selectAll('rect')
            .data(textPerUser)
            .join('rect')
            .attr('width', barWidth)
            .attr('height', d => (d.totalLength / maxTotal) * height)
            .attr('x', (d, i) => i * (barWidth + gap))
            .attr('y', d => height - (d.totalLength / maxTotal) * height)
            .attr('fill', 'steelblue')

        svg.selectAll('text')
            .data(textPerUser)
            .join('text')
            .attr('x', (d, i) => i * (barWidth + gap) + barWidth / 2)
            .attr('y', height + 20)
            .attr('text-anchor', 'middle')
            .attr('font-size', 12)
            .text(d => d.userId)
    })
