
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { GitHub } from "@/components/icons/index"

export default function Home () {

    return (
        <div className="flex justify-between">
            <div className="flex flex-col"> {/*left side*/}
                <div className="flex flex-col">
                    <p>Hello, I'm Patrick 👋</p>
                    <p>Frontend Developer </p>
                    <p>I like creating interfaces that feel simple and enjoyable, turning ideas into smooth, appealing experiences</p>
                </div>
                <div className="flex align-items gap-2"> {/* clickables */}
                    <GitHub className="size-10" />
                    <Button className="border-2 rounded-xl px-4">Download Resume</Button>
                </div>
            </div>
            <Avatar className="size-50"> {/*right side*/}
                <AvatarImage src="/profile-picture.jpg" className="w-50 h-auto" />
                <AvatarFallback>Profile Picture</AvatarFallback>
            </Avatar>
        </div>
    )
}