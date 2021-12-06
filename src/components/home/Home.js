import React from 'react'
import Navbar from '../CommonComponents/Navbar/Navbar'
import About from './About/About'
import Contact from './contact/Contact'
import './Home.css'
import HomeMain from './HomeMain/HomeMain'
import PropertyMenu from './PropertyMenu/PropertyMenu'
import WeOffer from './WeOffer/WeOffer'
function Home() {
    return (
        <div className="home">
            <div className="home_headerPart">
                <Navbar />
                <HomeMain />
            </div>

            {/* <div style={{ width: 'auto', height: '100vh' }}>
                <h1>Hello world</h1>
            </div> */}

            <About />

            <WeOffer />

            <PropertyMenu />

            <Contact />
            {/* have to create contact page and footer */}
        </div>
    )
}

export default Home
