
import { Card, CardContent } from "@/components/ui/card"
export default function SkillsCard ({ icon, name }) {

    return (
        <Card>
            <CardContent className="flex items-center gap-2">
                <p className="size-10">{icon}</p>
                <p>{name}</p>
            </CardContent>
        </Card>
    )

}