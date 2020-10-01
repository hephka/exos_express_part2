import express from 'express'
import chalk from 'chalk'

const PORT = 7777
const IP = '192.168.1.14'
const title = `
<header>
<h1 
    style="text-align: 
    center; font-size: 3rem; 
    margin-top: 2rem; 
    color: #686868"
>
Exercices <em>express</em> partie 2
</h1>
</header>
`

const app = express()

app.get('/', (req, res) => {
    res.send(title)
})

app.get('/get_current_time', (req, res) => {
    const date = new Date()
    res.send(title+`${date.toUTCString()}`)
})

app.get('/how_pass_data', (req, res) => {
    res.send(title+`Pour passer des données handler/middleware à un express nous leur ajoutons un paramètre <i>next</i> que nous appelons avec <i>next()</i>`)
})
 
app.listen(PORT, IP, () => {
    console.log(`Exercice `+chalk.bgBlue(`express`)+` listening at `+chalk.green(`http://${IP}:${PORT}`))
})
