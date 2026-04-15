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
import { Github } from "@/components/icons"
export default function PortfolioCards ({ title, description, techs }) {
    
    return (
        <Card>
            <CardContent>
                <CardTitle>{ title }</CardTitle>
                <CardDescription>{ description }</CardDescription>
            </CardContent>

        </Card>
    )
}