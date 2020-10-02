import express from 'express'
import chalk from 'chalk'
import { calc } from './calc.js'

const PORT = 7777
const IP = '192.168.1.14'

const app = express()

const sendMessage = (req, res) => {
    res.send(req.message)
}

const wrappWithHtml = (req, res, next) => {
    const html = `
    <!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Exercices express 2</title>
  </head>

  <body>
    <p>${req.message}</p>
  </body>
</html>
`
    req.message = html
    next()
}

app.get('/', (req, res, next) => {
    req.message = `Exercices express partie 2`
    next()
})

app.get('/get_current_time', (req, res, next) => {
    const date = new Date().toUTCString()
    req.message = date
    next()
})

app.get('/how_pass_data', (req, res, next) => {
    const msg = `On peut passer des données entre les middleware grâce aux objs req, res`
    req.message = msg
    next()
})

app.use('/calc', calc)
app.use(wrappWithHtml)
app.use(sendMessage)
app.listen(PORT, IP, () => {
    console.log(`listening at ` + chalk.green(`${IP}:${PORT}`))
})
