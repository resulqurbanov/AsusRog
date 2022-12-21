import React from 'react'
import Navbar from '../../components/Navbar'
import IlkSlider from '../../components/HomeComponents/ilkslider'
import Products from '../../components/HomeComponents/Products'
import Stories from '../../components/HomeComponents/Stories'
import Action from '../../components/HomeComponents/Action'
import Universe from '../../components/HomeComponents/Universe'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
<Navbar/>
<IlkSlider/>
<Products/>
<Stories/>
<Action/>
<Universe/>
<Footer/>
    </>
  )
}

export default Home