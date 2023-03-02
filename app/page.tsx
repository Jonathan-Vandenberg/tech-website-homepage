import classNames from "classnames";
import { Container } from "../components/Container";
import { Stars } from "../components/Stars";
import { Clients } from "../components/sections/Clients";
import { HomepageHero } from "../components/sections/HomepageHero";
import { UnlikeAnyTool } from "../components/sections/UnlikeAnyTool";

export default function Page() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="py-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          "mask-radial-faded z-[-1] pointer-events-none relative h-[60rem] overflow-hidden -my-[12.8rem]",
          "before:inset-0 before:absolute before:opacity-[0.4] [--color:#7877C6] before:bg-radial-faded",
          "after:h-[142.8%] after:absolute after:bg-background after:rounded-[50%] after:border after:border-[rgba(120,_119,_198,_0.4)] after:top-1/2 after:-left-1/2 after:w-[200%]"
        )}
      >
        <Stars />
      </div>
      <Container>
        <UnlikeAnyTool />
      </Container>
    </>
  );
}
