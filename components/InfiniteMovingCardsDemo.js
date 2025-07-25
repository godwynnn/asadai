"use client";

import React from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image:"https://res.cloudinary.com/dtt4nxboi/image/upload/v1753228655/152305175_wcnnpe.webp"
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
     image:"https://res.cloudinary.com/dtt4nxboi/image/upload/v1753228142/portrait-woman-with-big-smile-her-eyes-are-crinkled-her-cheeks-are-full-she-is-happy-content_73899-33059_na998u.avif"
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
     image:"https://res.cloudinary.com/dtt4nxboi/image/upload/v1753227989/How-to-Detect-AI-generated-Images-Tips-You-Should-Know_nor25t.jpg"
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
     image:"https://res.cloudinary.com/dtt4nxboi/image/upload/v1753228628/ai-generated-8703356_1280_aijap8.png"
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
     image:"https://res.cloudinary.com/dtt4nxboi/image/upload/v1753229107/Albert-Einstein-generated-by-AI-1024x683_rgmoza.webp"
  },
];
