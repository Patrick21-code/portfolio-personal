"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Home () {

    const scrollToProjects = () => {
        const element = document.getElementById('projects')
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
    }

    const handleDownloadResume = () => {
        // Add your resume download logic here
        console.log('Download resume')
    }

    return (
        <div id="home" className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 px-6 py-16 md:py-24 lg:py-32 md:px-12 lg:px-24 min-h-[calc(100vh-80px)] relative">
            <div className="flex flex-col gap-8 flex-1 max-w-2xl opacity-0 animate-slide-in-left"> {/*left side*/}
                <div className="flex flex-col gap-4">
                    <p className="text-lg md:text-xl text-muted-foreground font-medium">
                        Hello, I'm Patrick <span className="inline-block animate-bounce-subtle">👋</span>
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        <span className="gradient-text">Frontend</span> Developer
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        I like creating interfaces that feel <span className="text-primary font-semibold">simple</span> and <span className="text-secondary font-semibold">enjoyable</span>, turning ideas into smooth, appealing experiences
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-4"> {/* clickables */}
                    <Button 
                        onClick={scrollToProjects}
                        className="border-2 rounded-xl px-6 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-primary text-primary-foreground border-primary hover:bg-primary/90 group"
                    >
                        See Projects
                        <ArrowDown className="ml-2 size-4 group-hover:translate-y-1 transition-transform duration-300" />
                    </Button>
                    <Button 
                        onClick={handleDownloadResume}
                        variant="outline" 
                        className="border-2 rounded-xl px-6 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-primary/30 hover:border-primary hover:bg-primary/5"
                    >
                        Download Resume
                    </Button>
                </div>
            </div>
            <div className="relative opacity-0 animate-slide-in-right delay-200">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Avatar className="size-64 md:size-72 lg:size-80 ring-4 ring-primary/20 shadow-2xl hover:ring-primary/40 transition-all duration-500 hover:scale-105 relative z-10 animate-float"> {/*right side*/}
                    <AvatarImage src="/profile-picture.jpg" className="object-cover" />
                    <AvatarFallback>Profile Picture</AvatarFallback>
                </Avatar>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>
    )
}
