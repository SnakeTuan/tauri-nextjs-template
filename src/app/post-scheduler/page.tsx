import { VideoUpload } from "@/components/video-upload"
import { PlatformSelection } from "@/components/platform-selection"
import { ContentCustomization } from "@/components/content-customization"
import { SchedulingOptions } from "@/components/scheduling-options"
import { Button } from "@/components/ui/button"

export default function PostScheduler() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Schedule Post</h1>
        <Button>Schedule Post</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <VideoUpload />
          <PlatformSelection />
        </div>
        <div className="space-y-6">
          <ContentCustomization />
          <SchedulingOptions />
        </div>
      </div>
    </div>
  )
}

