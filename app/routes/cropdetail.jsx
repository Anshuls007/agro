import Card from "~/components/Card";
import React from "react";
import { useState,useEffect } from "react";

export default function CropResult() {
    const crop = localStorage.getItem("crop");
useEffect(() => {
    
})
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-2xl font-medium">Wheat</p>
      <Card className="h-52" />
      <p>something text</p>
    </div>
  );
}
