import { UploadVideo } from "@/components/upload-video";
import { PlatformSelection } from "@/components/platform-selection";
import { Button } from "@/components/ui/button";
import { ContentCustomization } from "@/components/content-customization";
import { SchedulingOptions } from "@/components/scheduling-options";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 fixed w-full bg-white z-10">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="text-2xl font-bold">Schedule Post</h1>
      </header>
      <div className="container mx-auto p-6 space-y-6 pt-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="w-full">
              <UploadVideo />
            </div>
            <div className="w-full">
              <PlatformSelection />
            </div>
          </div>
          <div className="space-y-6">
            <div className="w-full">
              <ContentCustomization />
            </div>
            <div className="w-full">
              <SchedulingOptions />
            </div>
          </div>
        </div>
        <div className="flex left">
          <Button>Schedule Post</Button>
        </div>
      </div>
    </div>
  );
}
