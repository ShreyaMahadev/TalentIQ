import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

export default function MockInterviewPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <CardTitle>Mock Interview</CardTitle>
          </div>
          <CardDescription>Practice with AI-powered interviews</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Mock Interview feature content will go here</p>
        </CardContent>
      </Card>
    </div>
  )
}
