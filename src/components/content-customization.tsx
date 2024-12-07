"use client";

import * as React from "react";
import { Hash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const trendingHashtags = ["#trending", "#viral", "#fyp", "#foryou"];

export function ContentCustomization() {
  const [caption, setCaption] = React.useState("");
  const maxLength = 2200; // Instagram's caption limit

  const addHashtag = (hashtag: string) => {
    if (caption.length + hashtag.length <= maxLength) {
      setCaption((prev) => (prev ? `${prev} ${hashtag}` : hashtag));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="caption">Caption</Label>
          <Textarea
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write your caption here..."
            className="min-h-[120px]"
            maxLength={maxLength}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{caption.length} characters</span>
            <span>{maxLength - caption.length} remaining</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Hash className="w-4 h-4" />
            Trending Hashtags
          </Label>
          <div className="flex flex-wrap gap-2">
            {trendingHashtags.map((hashtag) => (
              <Badge key={hashtag} variant="secondary" className="cursor-pointer" onClick={() => addHashtag(hashtag)}>
                {hashtag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
