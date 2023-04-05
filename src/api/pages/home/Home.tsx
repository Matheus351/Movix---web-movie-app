import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import './style.scss'
import TopRated from './topRated/TopRated'
import Popular from './popular/Popular'

const Home = () => {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <Trending />
        <TopRated/>
        <Popular/> 
    </div>
  )
}

export default Home