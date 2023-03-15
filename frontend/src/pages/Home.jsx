import React from 'react'
import Featured from '../components/Featured'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
//import FeaturedProperties from '../featuredproperties/FeaturedProperties'
import Footer from '../footer/Footer'
import MailList from '../maillist/MailList'
import PropertyList from '../propertyList/PropertyList'
import "./Home.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          {/* <h1 className="homeTitle">Homes guests love</h1> */}
         {/* <FeaturedProperties/>  */}
         <MailList/> 
         <Footer/> 

        </div>
    </div>
  )
}

export default Home
