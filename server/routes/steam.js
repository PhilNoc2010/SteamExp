const router = require('express').Router();

/// routes used to retrieve information from Steam

router.get("/topten", (req, res) => {
    console.log(req.body)
    // console.log("inside top ten route")
    // const url="https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/?key=" + process.env.STEAM_API_KEY
    // console.log(url)
})

module.exports = router;