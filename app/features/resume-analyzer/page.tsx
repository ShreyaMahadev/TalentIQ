import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function ResumeAnalyzerPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <CardTitle>Resume Analyzer</CardTitle>
          </div>
          <CardDescription>Get AI-powered feedback on your resume</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Resume Analyzer feature content will go here</p>
        </CardContent>
      </Card>
    </div>
  )
}
