import { Button, Highlighter } from "../Button";
import { DesignedSVG } from "../illustrations/Designed";
import { ZapSVG } from "../illustrations/ZapSVG";
import { ChevRight } from "../svgs/ChevRight";

export const UnlikeAnyTool = () => {
  return (
    <div className="text-white">
      <div className="text-center items-center">
        <h2 className="text-4xl md:text-7xl mb-4 md:mb-7">
          Unlike any tool <br /> you&apos;ve used before
        </h2>
        <p className="text-primary-text text-lg md:text-xl max-w-[68rem] mx-auto mb-4 md:mb-7">
          Designed to the last pixel and engineered with unforgiving{" "}
          <br className="md:block hidden" /> precision, Linear combines UI
          elegance with world-class <br className="md:block hidden" />{" "}
          performance.
        </p>
      </div>
      <div className="flex md:flex-wrap gap-6 overflow-x-auto snap-x snap-mandatory">
        <div className="bg-glass-gradient snap-center w-full shrink-0 flex flex-col justify-end min-h-[48rem] p-8 md:p-14 border border-transparent-white rounded-[4.8rem] md:basis-[calc(66.66%-12px)]">
          <p className="text-3xl text-center">Built for your keyboard</p>
          <p className="max-w-[42rem] mx-auto text-md text-primary-text pt-4 text-center">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </div>
        <div className="relative items-center bg-glass-gradient snap-center w-full shrink-0 flex flex-col justify-end min-h-[48rem] p-8 md:p-14 border border-transparent-white rounded-[4.8rem] md:basis-[calc(33.33%-12px)]">
          <div className="mask-linear-faded absolute -top-[9.2rem]">
            <ZapSVG />
          </div>
          <p className="text-3xl text-center">Breathtakingly fast</p>
          <p className="text-md text-primary-text pt-4 text-center">
            Built for speed with 50ms interactions and real-time sync.
          </p>
        </div>
        <div className="group bg-glass-gradient snap-center w-full shrink-0 flex flex-col justify-end min-h-[48rem] p-8 md:p-14 border border-transparent-white rounded-[4.8rem] md:basis-[calc(33.33%-12px)] relative items-center">
          <div className="mask-linear-faded absolute -top-[8rem] pointer-events-none">
            <DesignedSVG />
          </div>
          <p className="text-3xl text-center">
            Designed for modern software teams
          </p>
          <p className="text-md text-primary-text pt-4 text-center">
            Comes with built-in workflows that create focus and routine.
          </p>
          <Button
            className="[&_highlighter]:text-[1.1rem] group-hover:opacity-100 transition-[transform,opacity] group group-hover:transform-none absolute top-[20rem] opacity-0 translate-y-[30%] scale-0.8"
            variant="secondary"
            href={"/"}
            size="small"
          >
            <Highlighter>Linear Method</Highlighter> Product Principles
            <ChevRight className="ml-1" />
          </Button>
        </div>
        <div className="bg-glass-gradient snap-center w-full shrink-0 flex flex-col justify-end min-h-[48rem] p-8 md:p-14 border border-transparent-white rounded-[4.8rem] md:basis-[calc(66.66%-12px)] items-center">
          <p className="text-3xl text-center">Meet your command line</p>
          <p className="text-md text-primary-text pt-4 text-center">
            Complete any action in seconds with the global command menu.
          </p>
        </div>
      </div>
    </div>
  );
};
