const express = require('express')
const cors = require('cors')
const app = express()

require("dotenv").config()

let dateTime = new Date()
const startTime = dateTime.getHours() + ":" + dateTime.getMinutes()

app.set('port', process.env.port)
app.set('steamKey', process.env.STEAM_API_KEY)

app.listen(app.get('port'), () => {
    console.log("Express started on http://localhost:" + app.get('port') + " at " + startTime)
})