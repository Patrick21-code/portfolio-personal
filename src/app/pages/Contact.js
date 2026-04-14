
import { Button } from '@/components/ui/button'
import { Gmail, GitHub, LinkedIn } from '@/components/icons/index'
export default function Contact () {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <p>Get In Touch</p>
                <p>Have questions, feedback, or just want to say hello? I’d be happy to hear from you and will do my best to respond thoughtfully.</p>
            </div>
            <div className="flex gap-2">
                <Button className="border-2 rounded-xl px-4"><Gmail /> Gmail</Button>
                <Button className="border-2 rounded-xl px-4"><GitHub /> GitHub</Button>
                <Button className="border-2 rounded-xl px-4"><LinkedIn /> LinkedIn</Button>
            </div>
        </div>
    )
}