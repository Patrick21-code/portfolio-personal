"use client"

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { GitHub } from "@/components/icons"

export default function PortfolioCards ({ title, description, techs, link }) {
    const [isHovered, setIsHovered] = useState(false)
    const techList = Array.isArray(techs) ? techs : [techs]

    return (
        <Card 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="border border-border/50 shadow-md hover:shadow-2xl transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 relative overflow-hidden group bg-card/50 backdrop-blur-sm h-full flex flex-col"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent transition-all duration-500 ${isHovered ? 'w-2' : 'w-1'}`}></div>
            
            <CardContent className="flex flex-col gap-4 p-6 relative z-10 flex-1">
                <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                        { title }
                    </CardTitle>
                    {isHovered && (
                        <ExternalLink className="size-5 text-primary animate-bounce-subtle" />
                    )}
                </div>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                    { description }
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                    {techList.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground px-3 py-1.5 rounded-lg border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2">
                        <Button 
                            variant="outline" 
                            className="rounded-xl font-semibold shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 group/btn"
                        >
                            <GitHub className="size-4 group-hover/btn:rotate-12 transition-transform duration-300" /> 
                            View on GitHub
                        </Button>
                    </a>
                )}
            </CardContent>
        </Card>
    )
}
