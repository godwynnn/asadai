import React from "react";
import { cn } from "@/app/lib/utils";
import { Spotlight } from "@/app/components/ui/Spotlight";

export function SpotlightPreview({children}) {
  return (
    <div
      className="relative flex h-full w-full overflow-hidden rounded-md  antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
        //   "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )} />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-150" fill="white" />
      {children}
    </div>
  );
}
