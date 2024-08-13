import React from 'react'
import { useEffect } from 'react'

const TopTen = () => {

  let topTenGames = {}

  useEffect( () => {
    console.log("inside useEffect")
    const getTopTen = () => {
        fetch("http://localhost:8000/steam/topten", {
            method: "GET",
            credentials: "include",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,}
        }).then(response=>{
            if(response.status === 200) return response.json()
            throw new Error("Request Failed")
        }).then(resObject=> {
            topTenGames = resObject
            console.log(topTenGames)  // to review returned object during development
        }).catch((err) => {
            console.log(err)
        })
    }
    getTopTen()
  }, [])


  return (
    <div>Steam Top 10 by Most Played</div>
  )
}

export default TopTen