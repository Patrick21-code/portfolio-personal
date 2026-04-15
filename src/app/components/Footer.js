"use client"

import { Heart } from "lucide-react"

export default function Footer () {

    return (
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-8 md:py-10 mt-auto border-t border-border/40 bg-card/30 backdrop-blur-sm"> 
            <p className="text-sm text-muted-foreground flex items-center gap-2">
                Made with <Heart className="size-4 text-destructive fill-destructive animate-pulse" /> by Patrick
            </p>
            <p className="text-xs text-muted-foreground/70">&copy; 2026 Patrick Danielle Tomas. All rights reserved</p>
        </div>
    )
}
