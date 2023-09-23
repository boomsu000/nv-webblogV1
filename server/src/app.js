let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
const { sequelize } = require('./models')

const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

require('./route')(app)

app.get('/status', function (req, res) {
    res.send('Hello nodejs server burapha')
})

app.get('/hello/:name', function (req, res) {
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
})

let port = process.env.PORT || config.port

sequelize.sync({ force: false }).then(() => {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
})