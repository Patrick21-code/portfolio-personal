import { HTML5, CSS, JavaScript, TailwindCSS, React, Nextjs, MySQL, Python, Git, GitHub} from '@/components/icons'
import SkillsCard from '../components/SkillsCard'

const skills = [
    {
        icon: <HTML5 />,
        name: "HTML"
    },
    {
        icon: <CSS />,
        name: "CSS"
    },
    {
        icon: <JavaScript />,
        name: "JavaScript"
    },
    {
        icon: <TailwindCSS />,
        name: "TailwindCSS"
    },
    {
        icon: <React />,
        name: "React"
    },
    {
        icon: <Nextjs />,
        name: "Nextjs"
    },
    {
        icon: <MySQL />,
        name: "MySQL"
    },
    {
        icon: <Python />,
        name: "Python"
    },
    {
        icon: <Git />,
        name: "Git"
    },
    {
        icon: <GitHub />,
        name: "GitHub"
    }

]
export default function About () {

    return (
        <div className="flex flex-col justify-between">
            <div> {/*about*/}
                <p>About Me</p>
                <p>
                    Hi, I’m Patrick. I focus on frontend development and enjoy working with React to build interfaces that feel clear
                    and easy to use. I’m still learning and growing as a developer, but I take pride in creating simple, practical
                    solutions that make ideas come to life.
                </p>
            </div>
            <div> {/*tech skills*/}
                {skills.map((skill, index) => (
                    <SkillsCard
                        key={index}
                        icon={skill.icon}
                        name={skill.name}
                    />
                ))}
            </div>
        </div>
    )
}