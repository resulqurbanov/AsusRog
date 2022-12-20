import React from 'react'
import Navbar from '../../components/Navbar'
import IlkSlider from '../../components/HomeComponents/ilkslider'
import Products from '../../components/HomeComponents/Products'
import Stories from '../../components/HomeComponents/Stories'
import Action from '../../components/HomeComponents/Action'
function Home() {
  return (
    <>
<Navbar></Navbar>
<IlkSlider/>
<Products/>
<Stories/>
<Action/>
    </>
  )
}

export default Home