"use client";
import React, { useEffect } from "react";

export default function SafeSpline() {
  useEffect(() => {
    if (!document.getElementById("spline-viewer-script")) {
      const script = document.createElement("script");
      script.id = "spline-viewer-script";
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.3/build/spline-viewer.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="w-full h-full pointer-events-none"
      dangerouslySetInnerHTML={{
        __html: `<spline-viewer url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" style="width: 100%; height: 100%; pointer-events: none;"></spline-viewer>`,
      }}
    />
  );
}
