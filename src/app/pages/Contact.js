"use client"

import { toast } from "sonner"
import { Button } from '@/components/ui/button'
import { Gmail, GitHub, LinkedIn } from '@/components/icons/index'
import { CheckCircle2Icon } from "lucide-react"

export default function Contact () {

    const handleEmailClick = () => {
        navigator.clipboard.writeText("tomaspatrickdanielle@gmail.com")
        toast.success("Email copied to clipboard"), {
            icon: <CheckCircle2Icon />
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <p>Get In Touch</p>
                <p>Have questions, feedback, or just want to say hello? I’d be happy to hear from you and will do my best to respond thoughtfully.</p>
            </div>

            <div className="flex gap-2">
                <Button className="border-2 rounded-xl px-4" onClick={handleEmailClick}><Gmail /> Gmail</Button>
                <a href="https://github.com/Patrick21-code" target="_blank" >
                    <Button className="border-2 rounded-xl px-4" variant="outline"><GitHub /> GitHub</Button>
                </a>
                <a href="https://www.linkedin.com/in/patrick-danielle-tomas-441395353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" >
                    <Button className="border-2 rounded-xl px-4"><LinkedIn /> LinkedIn</Button>
                </a>
            </div>
        </div>
    )
}