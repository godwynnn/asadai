import React from "react";
import { BentoGrid,BentoGridItem } from "@/app/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-6xl p-5   md:auto-rows-[20rem] border-2   rounded-lg">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon} />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({url}) => (
  <div
    className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-transparent ">
    <Image src={url}
     width={1000} height={1000}/>
    </div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton  url={'https://res.cloudinary.com/dtt4nxboi/image/upload/v1753396197/2151719581_qodysa.jpg'}/>,


    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton  url={'https://res.cloudinary.com/dtt4nxboi/image/upload/v1753396214/2151558755_yo0tqp.jpg'}/>,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton url={'https://res.cloudinary.com/dtt4nxboi/image/upload/v1753396126/2151141616_xrzrig.jpg'}/>,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton url={'https://res.cloudinary.com/dtt4nxboi/image/upload/v1753396184/2148932854_kbneak.jpg'}/>,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-300" />,
  },
];
