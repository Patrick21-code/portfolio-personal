"use client"

import { useEffect, useRef, useState } from 'react'
import { toast } from "sonner"
import { Button } from '@/components/ui/button'
import { Gmail, GitHub, LinkedIn } from '@/components/icons/index'
import { CheckCircle2Icon, Sparkles } from "lucide-react"

export default function Contact () {
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredButton, setHoveredButton] = useState(null)
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

    const handleEmailClick = () => {
        navigator.clipboard.writeText("tomaspatrickdanielle@gmail.com")
        toast.success("Email copied to clipboard!", {
            icon: <CheckCircle2Icon className="text-primary" />
        })
    }

    return (
        <div id="contact" ref={sectionRef} className="flex flex-col items-center justify-center gap-10 px-6 py-16 md:py-24 md:px-12 lg:px-24 min-h-[60vh] relative">
            {/* Decorative background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
            
            <div className={`flex flex-col items-center gap-4 text-center max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-2">
                    <Sparkles className="size-6 text-accent animate-pulse" />
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground relative inline-block">
                        Get In Touch
                    </h2>
                    <Sparkles className="size-6 text-secondary animate-pulse delay-300" />
                </div>
                <span className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></span>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-2">
                    Have questions, feedback, or just want to say hello? I'd be happy to hear from you and will do my best to respond thoughtfully. <span className="text-accent">💬</span>
                </p>
            </div>

            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <Button 
                    onMouseEnter={() => setHoveredButton('gmail')}
                    onMouseLeave={() => setHoveredButton(null)}
                    variant="outline"
                    className="border-2 rounded-xl px-6 py-6 font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 flex items-center gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 relative group" 
                    onClick={handleEmailClick}
                >
                    <Gmail className="size-5 group-hover:rotate-12 transition-transform duration-300" /> 
                    <span>Gmail</span>
                    {hoveredButton === 'gmail' && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                    )}
                </Button>
                <a href="https://github.com/Patrick21-code" target="_blank" rel="noopener noreferrer">
                    <Button 
                        onMouseEnter={() => setHoveredButton('github')}
                        onMouseLeave={() => setHoveredButton(null)}
                        variant="outline" 
                        className="border-2 rounded-xl px-6 py-6 font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 flex items-center gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 relative group"
                    >
                        <GitHub className="size-5 group-hover:rotate-12 transition-transform duration-300" /> 
                        <span>GitHub</span>
                        {hoveredButton === 'github' && (
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                        )}
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/patrick-danielle-tomas-441395353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <Button 
                        onMouseEnter={() => setHoveredButton('linkedin')}
                        onMouseLeave={() => setHoveredButton(null)}
                        variant="outline"
                        className="border-2 rounded-xl px-6 py-6 font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 flex items-center gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 relative group"
                    >
                        <LinkedIn className="size-5 group-hover:rotate-12 transition-transform duration-300" /> 
                        <span>LinkedIn</span>
                        {hoveredButton === 'linkedin' && (
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                            </span>
                        )}
                    </Button>
                </a>
            </div>
        </div>
    )
}
