const express = require('express')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/auth')
const steamRoutes = require('./routes/steam')

require("dotenv").config()

let dateTime = new Date()
const startTime = dateTime.getHours() + ":" + dateTime.getMinutes()

app.set('port', process.env.port)
app.set('steamKey', process.env.STEAM_API_KEY)

app.use(cors)

app.use("/auth/", authRoutes)

app.use("/steam/", steamRoutes)

app.listen(app.get('port'), () => {
    console.log("Express started on http://localhost:" + app.get('port') + " at " + startTime)
})