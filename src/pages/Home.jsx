import React from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { StartBackground } from '@/components/StarBackground'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StartBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Home