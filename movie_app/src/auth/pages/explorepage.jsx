import React from 'react'
import Explore from '../componets/explore'
import Footer from '../../footer/footer'
import Publicnavbarblack from '../componets/publicnavbarblack'

function ExplorePage() {
  return (
    <div>
        <Publicnavbarblack activediscover="active" />
        <Explore/>
        <Footer/>
    </div>
  )
}

export default ExplorePage