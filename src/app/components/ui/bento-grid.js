import { cn } from "@/app/lib/utils";


export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "group/bento  shadow-input row-span-2 flex flex-col justify-between space-y-6 rounded-xl border border-neutral-200 bg-transparent p-4 py-14 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div
          className="mt-2 mb-2 font-sans font-bold text-neutral-100 dark:text-neutral-200">
          {title}
        </div>
        <div
          className="font-sans text-xs font-normal text-neutral-200 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
