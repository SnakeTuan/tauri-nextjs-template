"use client"

import * as React from "react"
import { CalendarIcon, Clock } from 'lucide-react'
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export function SchedulingOptions() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid gap-2">
          <Label>Time</Label>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Hour" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }).map((_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {i.toString().padStart(2, "0")}:00
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Minute" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 60 }).map((_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {i.toString().padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label>Timezone</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc">UTC</SelectItem>
              <SelectItem value="est">Eastern Time</SelectItem>
              <SelectItem value="pst">Pacific Time</SelectItem>
              {/* Add more timezones as needed */}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}

