import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function CareerRoadmapPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            <CardTitle>Career Roadmap</CardTitle>
          </div>
          <CardDescription>Your personalized career journey</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Career Roadmap feature content will go here</p>
        </CardContent>
      </Card>
    </div>
  )
}
