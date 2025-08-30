import React from 'react'
import Header from '../../components/Header/Header'
import Hero1 from '../../components/Hero/Hero1'

const HomePage = () => {
  return (
    <>
      <Header />
      <main style={{position:'absolute', width: '100%', height:'100%', top:0, left:0}}>
        <Hero1 />
      </main>
    </>
  )
}

export default HomePage
