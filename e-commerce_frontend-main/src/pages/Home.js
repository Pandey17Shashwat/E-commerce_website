
import React from 'react'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'

import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

// import './style.css'

const Home = () => {
    return (
        <div>
            
            <Announcements/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
