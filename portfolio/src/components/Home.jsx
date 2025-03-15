import '../App.css'
import React from 'react'
import HeroSection from './Sections/HeroSection'
import Cards from './Sections/Project'
import Footer from './Sections/Footer'
import AboutMe from './Sections/AboutMe'
import Skills from './Sections/Skills'
import Work from './Sections/Work'
import Education from './Sections/Education'


function Home() {
    return (
        <>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Work />
        {/* <Education /> */}
        <Cards />
        <Footer />
        </>
    )
    }

export default Home