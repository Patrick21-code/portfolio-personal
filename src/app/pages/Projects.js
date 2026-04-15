"use client"

import { useEffect, useRef, useState } from 'react'
import PortfolioCards from '../components/PortfolioCards'

const projects = [
    {
        title: "Truth Table Generator",
        description: "A Python project I built to generate truth tables for logical expressions. It's a simple tool that helps visualize how inputs lead to outputs, making logic easier to grasp.",
        techs: "Python",
        link: ""
    },
    {
        title: "Pawfection Palace",
        description: "Pawfection Palace is a website where pet owners can schedule appointments with ease. From the admin side, it provides a simple way to view and manage those bookings.",
        techs: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Patrick21-code/Pawfection-Palace"
    }
]

export default function Projects () {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <div id="projects" ref={sectionRef} className="flex flex-col gap-8 px-6 py-16 md:py-20 md:px-12 lg:px-24 relative">
            {/* Decorative background */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            
            <h2 className={`text-3xl md:text-4xl font-bold tracking-tight text-foreground relative inline-block transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Projects
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                        style={{ transitionDelay: `${200 + index * 150}ms` }}
                    >
                        <PortfolioCards
                            title={project.title}
                            description={project.description}
                            techs={project.techs}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
