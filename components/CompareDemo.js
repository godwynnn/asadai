import React from "react";
import { Compare } from "@/app/components/ui/compare";

export function CompareDemo() {
  return (
    <div
      className="p-10 mt-20  border w-full md:w-[50%] h-[60vh] rounded-3xl dark:bg-transparent bg-transparent  border-transparent dark:border-transparent mx-auto">
      <Compare
        firstImage="https://res.cloudinary.com/dtt4nxboi/image/upload/v1753187232/srefhunt-image-to-prompt-768x480_fuabnr.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] md:h-[100%] w-[100%]"
        slideMode="hover"
        autoplay={true}
        />
    </div>
  );
}
