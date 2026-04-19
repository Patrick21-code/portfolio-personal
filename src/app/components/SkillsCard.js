"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"

export default function SkillsCard ({ icon, name }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Card 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 cursor-pointer relative overflow-hidden group bg-card/50 backdrop-blur-sm"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="flex flex-col items-center justify-center gap-3 p-4 md:p-5 relative z-10">
                <div className={`size-10 md:size-12 flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
                    {icon}
                </div>
                <p className="text-sm md:text-base font-medium text-foreground text-center">{name}</p>
            </CardContent>
        </Card>
    )

}
