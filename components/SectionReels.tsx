"use client";
import React from "react";
import VideoItem from "./VideoItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SectionReels = () => {
  const videoSources = [
    "https://hpisixztqp.ufs.sh/f/rLSjidNURJqjpR3kgajiOVP0Z5gswAucWmH9v24EtXUQ6RMK",
    "https://hpisixztqp.ufs.sh/f/rLSjidNURJqjxh4K7FwC4BmU38K01WjQfOAr2htRVv5MTlLN",
    "https://hpisixztqp.ufs.sh/f/rLSjidNURJqjF5kcsNR4Za8Skzgf5MVborXEsd7qwYuGRCTj",
    "https://hpisixztqp.ufs.sh/f/rLSjidNURJqjtlolBZm5hSfaJjZ79QtuUbekL6BIDnROv2gN",
    "https://hpisixztqp.ufs.sh/f/rLSjidNURJqjkgd78W1r4GN6UH2bDVJatgp9mRc5BC0XSA1P",
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8 uppercase">
        Reels
      </h1>
      <div className="hidden xl:grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {videoSources.map((src, index) => (
          <VideoItem key={index} src={src} />
        ))}
      </div>
      <div className="block xl:hidden">
        <Carousel className="relative">
          <CarouselContent>
            {videoSources.map((src, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <VideoItem src={src} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-5 top-50%" />
          <CarouselNext className="absolute -right-5 top-50%" />
        </Carousel>
      </div>
    </div>
  );
};

export default SectionReels;
