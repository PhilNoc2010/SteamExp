import React from 'react'
import { useEffect, useState } from 'react'

const TopTen = () => {

  const [topHundredGames, setTopHundredGames] = useState([])
  const [topTenGames, setTopTenGames] = useState([])

  useEffect( () => {
    console.log("inside useEffect")
    const getTopHundred = () => {
        fetch("http://localhost:8000/steam/topten")
          .then(response=> response.json())
          .then(resObject=> {
            setTopHundredGames(resObject.response.ranks)
            setTopTenGames(topHundredGames.filter(rank => rank.rank <= 25))
          })
        .catch(err => console.log(err))
        }
    getTopHundred()

  }, [])

  return (
    <div>Steam Top 10 by Most Played

    {/* <p>{JSON.stringify(topHundredGames)}</p> */}

    <p>{JSON.stringify(topTenGames)}</p>
    </div>
  )
}

export default TopTen