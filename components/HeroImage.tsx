"use client";

import heroImage from "../public/hero.webp";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { CSSProperties, useEffect, useRef, useState } from "react";

export const HeroImage = () => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  interface Line {
    id: string;
    direction: "to top" | "to left";
    size: number;
    duration: number;
  }

  const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to top" : "to left",
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 20),
            id: Math.random().toFixed(3).toString(),
          },
        ]);
        renderLine(randomNumberBetween(800, 1300));
      }, timeout);
    };
    renderLine(randomNumberBetween(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id != id));
  };

  return (
    <div ref={inViewRef} className="[perspective:2000px] mt-[12.8rem]">
      <div
        className={classNames(
          "relative bg-hero-gradient border border-transparent-white bg-white bg-opacity-[0.01] rounded-lg",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:opacity-0 before:bg-hero-glow before:top-0 before:left-0 before:w-full before:h-full before:absolute before:[filter:blur(120px)]",
          inView && "before:animate-image-glow"
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full z-20 overflow-hidden">
          {lines.map((line) => (
            <span
              onAnimationEnd={() => removeLine(line.id)}
              key={line.id}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                "absolute top-0 block bg-glow-lines",
                line.direction === "to left" &&
                  "w-[calc(var(--size)*1rem)] h-[1px] left-0 animate-glow-lines-horizontal",
                line.direction === "to top" &&
                  "h-[calc(var(--size)*1rem)] w-[1px] right-0 animate-glow-lines-vertical"
              )}
            />
          ))}
        </div>
        <svg
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
          className={classNames(
            "absolute left-0 right-0 w-full h-full",
            "[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            inView && "[&_path]:animate-sketch-lines"
          )}
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        <Image
          className={classNames(
            "relative z-10 transition-opacity delay-[680ms]",
            inView ? "opacity-100" : "opacity-0"
          )}
          src={heroImage}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};
