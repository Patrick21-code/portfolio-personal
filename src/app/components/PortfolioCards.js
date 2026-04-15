import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHub } from "@/components/icons"
export default function PortfolioCards ({ title, description, techs, link }) {
    
    const techList = Array.isArray(techs) ? techs : [techs]

    return (
        <Card>
            <CardContent>
                <CardTitle>{ title }</CardTitle>
                <CardDescription>{ description }</CardDescription>
                <div>
                    {techList.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-muted px-2 py-1 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <a href={link}>
                    <Button variant="outline"><GitHub /></Button>
                </a>
            </CardContent>
            
        </Card>
    )
}