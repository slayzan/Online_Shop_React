import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Categories from './components/Categories'
import ProductList from './components/ProductList'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider />
            <Categories />
            <ProductList />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
