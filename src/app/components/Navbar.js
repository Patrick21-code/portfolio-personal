"use client"

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Navbar () {
    const [activeSection, setActiveSection] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check initial theme
        const htmlElement = document.documentElement
        setIsDark(htmlElement.classList.contains('dark'))

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
            
            // Determine active section based on scroll position
            const sections = ['home', 'about', 'projects', 'contact']
            const scrollPosition = window.scrollY + window.innerHeight / 2

            // Check sections in reverse order to prioritize lower sections
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop } = element
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        // Initial check
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    const toggleDarkMode = () => {
        const htmlElement = document.documentElement
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark')
            setIsDark(false)
        } else {
            htmlElement.classList.add('dark')
            setIsDark(true)
        }
    }

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <div className={`flex justify-between items-center px-6 py-4 md:px-12 lg:px-24 border-b sticky top-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-background/80 backdrop-blur-xl border-border/60 shadow-lg' 
                : 'bg-background/60 backdrop-blur-md border-border/30'
        }`}>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground hover:gradient-text transition-all duration-300 cursor-pointer animate-fade-in-down"
                onClick={() => scrollToSection('home')}>
                Patrick<span className="text-primary">.dev</span>
            </h1>
            <div className="flex items-center gap-6 md:gap-8">
                <nav className="flex gap-6 md:gap-8">
                    {navLinks.map((link, index) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`text-sm md:text-base font-medium transition-all duration-300 cursor-pointer relative group animate-fade-in-down delay-${(index + 1) * 100}
                                ${activeSection === link.id 
                                    ? 'text-primary' 
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {link.label}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ${
                                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </button>
                    ))}
                </nav>
                <button
                    onClick={toggleDarkMode}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 p-2 hover:scale-110 animate-fade-in-down delay-500"
                    aria-label="Toggle dark mode"
                >
                    {isDark ? (
                        <Sun className="size-5" />
                    ) : (
                        <Moon className="size-5" />
                    )}
                </button>
            </div>
        </div>
    )
}
