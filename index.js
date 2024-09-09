const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = process.env.PORT || 3006

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors({
    origin: '*'
}))
app.get('/', (request, response) => {
    response.json([{
        info: 'API Insertar Claves-Geo-Inegi Servicio'},
        {version:'Version 20240808'}
    ])
})

app.post('/inserta-mgee', db.insertaMgee);

app.listen(port, () => {
    console.log('API Insertar Claves-Geo-Inegi Servicio en puerto: ', port);
});