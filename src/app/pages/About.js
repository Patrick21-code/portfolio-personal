"use client"

import { useEffect, useRef, useState } from 'react'
import { HTML5, CSS, JavaScript, TailwindCSS, React, Nextjs, MySQL, Python, Git, GitHub} from '@/components/icons'
import SkillsCard from '../components/SkillsCard'

const skills = [
    {
        icon: <HTML5 />,
        name: "HTML"
    },
    {
        icon: <CSS />,
        name: "CSS"
    },
    {
        icon: <JavaScript />,
        name: "JavaScript"
    },
    {
        icon: <TailwindCSS />,
        name: "TailwindCSS"
    },
    {
        icon: <React />,
        name: "React"
    },
    {
        icon: <Nextjs />,
        name: "Nextjs"
    },
    {
        icon: <MySQL />,
        name: "MySQL"
    },
    {
        icon: <Python />,
        name: "Python"
    },
    {
        icon: <Git />,
        name: "Git"
    },
    {
        icon: <GitHub />,
        name: "GitHub"
    }

]

export default function About () {
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
        <div id="about" ref={sectionRef} className="flex flex-col gap-12 px-6 py-16 md:py-20 md:px-12 lg:px-24 relative">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            
            <div className={`flex flex-col gap-6 max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> {/*about*/}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground relative inline-block">
                    About Me
                    <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Hi, I'm Patrick. I focus on <span className="text-primary font-semibold">frontend development</span> and enjoy working with React to build interfaces that feel clear
                    and easy to use. I'm still learning and growing as a developer, but I take pride in creating simple, practical
                    solutions that make ideas come to life. <span className="text-accent">✨</span>
                </p>
            </div>
            <div className={`flex flex-col gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> {/*tech skills*/}
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground relative inline-block">
                    Tech Stack
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {skills.map((skill, index) => (
                        <div 
                            key={index}
                            className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${300 + index * 50}ms` }}
                        >
                            <SkillsCard
                                icon={skill.icon}
                                name={skill.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
