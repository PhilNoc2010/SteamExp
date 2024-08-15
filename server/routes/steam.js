const router = require('express').Router();

/// routes used to retrieve information from Steam

router.get("/topten", (req, res) => {
    console.log("inside top ten route")
    const url="https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/?key=" + process.env.STEAM_API_KEY
    fetch(url)
      .then(response=>response.json())
      .then(data => res.send(data))
      .catch(err => console.log(err))
    })

router.get("/game/:appid", (req, res) => {
    console.log(req.params)
    const { appid } =  req.params
    console.log(appid)
    const url = "http://store.steampowered.com/api/appdetails/?appids=" + appid;
    console.log(url)
    fetch(url)
      .then(response=>response.json())
      .then(data => res.send(data))
      .catch(err => console.log(err))
    // res.send("completed game info route")
    })

module.exports = router;