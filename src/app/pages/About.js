
import { Card, CardContent } from "@/components/ui/card"

import { HTML5, CSS, JavaScript, TailwindCSS, React, Nextjs, MySQL, Git, GitHub} from '@/components/icons'

export default function About () {

    return (
        <div className="flex justify-between">
            <div> {/*about*/}
                <p>About Me</p>
                <p>
                    Hi, I’m Patrick. I focus on frontend development and enjoy working with React to build interfaces that feel clear
                    and easy to use. I’m still learning and growing as a developer, but I take pride in creating simple, practical
                    solutions that make ideas come to life.
                </p>
            </div>
            <div> {/*tech skills*/}
                <Card>
                    <CardContent>
                        <HTML5 className="size-10" />
                        <CSS className="size-10" />
                        <JavaScript className="size-10" />
                        <TailwindCSS className="size-10" />
                        <React className="size-10" />
                        <Nextjs className="size-10" />
                        <MySQL className="size-10" />
                        <Git className="size-10" />
                        <GitHub className="size-10" />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}