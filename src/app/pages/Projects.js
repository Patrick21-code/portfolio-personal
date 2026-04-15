import PortfolioCards from '../components/PortfolioCards'

const projects = [
    {
        title: "Truth Table Generator",
        description: "A Python project I built to generate truth tables for logical expressions. It's a simple tool that helps visualize how inputs lead to outputs, making logic easier to grasp.",
        techs: "Python",
        link: ""
    },
    {
        title: "Pawfection Palace",
        description: "Pawfection Palace is a website where pet owners can schedule appointments with ease. From the admin side, it provides a simple way to view and manage those bookings.",
        techs: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Patrick21-code/Pawfection-Palace"
    }
]

export default function Projects () {

    return (
        <div className="flex flex-col">
            <p>Projects</p>
            <div className="flex flex-col gap-4">
                {projects.map((project, index) => (
                    <PortfolioCards
                        key={index}
                        title={project.title}
                        description={project.description}
                        techs={project.techs}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}