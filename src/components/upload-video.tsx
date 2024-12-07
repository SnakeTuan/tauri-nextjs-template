"use client";

import * as React from "react";
import { Upload, X } from "lucide-react";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function UploadVideo() {
  const [video, setVideo] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string>("");

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setVideo(file);
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": [".mp4", ".mov", ".avi"],
    },
    maxFiles: 1,
  });

  const removeVideo = () => {
    setVideo(null);
    setPreview("");
  };

  return (
    <Card>
      <CardContent className="p-6">
        {!video ? (
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
              isDragActive ? "border-primary bg-primary/10" : "border-border"
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">{isDragActive ? "Drop your video here" : "Upload your video"}</h3>
            <p className="text-sm text-muted-foreground mb-4">Drag and drop your video here, or click to browse</p>
            <Button variant="secondary">Browse Files</Button>
          </div>
        ) : (
          <div className="relative">
            <video src={preview} className="w-full rounded-lg" controls />
            <Button variant="secondary" size="icon" className="absolute top-2 right-2" onClick={removeVideo}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
