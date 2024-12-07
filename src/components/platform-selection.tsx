"use client"

import { Facebook, Instagram, MessageCircle } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface Platform {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  connected: boolean
}

const platforms: Platform[] = [
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    connected: true,
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
    connected: true,
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: MessageCircle,
    connected: false,
  },
]

export function PlatformSelection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platforms</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="flex items-center justify-between space-x-4"
          >
            <div className="flex items-center space-x-4">
              <platform.icon className="w-6 h-6" />
              <Label htmlFor={platform.id} className="font-medium">
                {platform.name}
              </Label>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  platform.connected
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {platform.connected ? "Connected" : "Disconnected"}
              </span>
            </div>
            <Switch id={platform.id} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

