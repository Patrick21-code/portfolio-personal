
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home () {

    return (
        <div className="flex justify-between">
            <div className="flex flex-col"> {/*left side*/}
                <div className="flex flex-col">
                    <p>Hello, I'm Patrick 👋</p>
                    <p>Frontend Developer </p>
                    <p>I like creating interfaces that feel simple and enjoyable, turning ideas into smooth, appealing experiences</p>
                </div>
                <div className="flex"> {/*icons*/}
                    <Avatar className="w-10 h-auto"> {/*right side*/}
                        <AvatarImage src="/github.svg" className="w-50 h-auto" />
                        <AvatarFallback>Github Icon</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <Avatar className="w-50 h-auto"> {/*right side*/}
                <AvatarImage src="/profile-picture.jpg" className="w-50 h-auto" />
                <AvatarFallback>Profile Picture</AvatarFallback>
            </Avatar>
        </div>
    )
}