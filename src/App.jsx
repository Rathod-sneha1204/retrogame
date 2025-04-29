import React from 'react'
import Navbar from './Componenets/Hero/Navbar'
import Hero from './Componenets/Hero/Hero'
import SocialProof from './Componenets/Hero/SocialProof'
import FeatureSection from './Componenets/Hero/Feature'
import Create from './Componenets/Hero/Create'
import Collaborate from './Componenets/Hero/Collaborate'
import Analyze from './Componenets/Hero/Analyze'



function App() {
  return (
    <main className="overflow-x-hidden bg-white text-dark" >
     <Hero />
     <SocialProof />
     <FeatureSection />
     <Create />
     <Collaborate />
     <Analyze />
    </main> 
  )
}

export default App