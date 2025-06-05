import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code } from "lucide-react"

export default function SkillGapPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <CardTitle>Skill Gap Checker</CardTitle>
          </div>
          <CardDescription>Identify and bridge your skill gaps</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Skill Gap Checker feature content will go here</p>
        </CardContent>
      </Card>
    </div>
  )
}
