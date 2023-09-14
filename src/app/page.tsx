import React from 'react'
import Slider from './components/Slider'
import Featured from './components/Featured'
import Offer from './components/Offer'
export const metadata ={
  title:"Home"
}
function HomePage() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}

export default HomePage