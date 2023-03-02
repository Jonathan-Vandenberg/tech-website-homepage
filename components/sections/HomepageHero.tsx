import { Button, Highlighter } from "../Button";
import { Hero, HeroSubtitle, HeroTitle } from "../Hero";
import { HeroImage } from "../HeroImage";
import { ChevRight } from "../svgs/ChevRight";

export const HomepageHero = () => {
  return (
    <Hero>
      <Button
        className="animate-fade-in opacity-0 translate-y-[-1rem]"
        href="/"
        variant="secondary"
        size="small"
      >
        Linear 2022 Release – Built for scale <Highlighter>→</Highlighter>
      </Button>
      <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
        Linear is a better way
        <br className="hidden md:block" /> to build products
      </HeroTitle>
      <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
        Meet the new standard for modern software development.
        <br />
        Streamline issues, sprints, and product roadmaps
      </HeroSubtitle>
      <Button
        className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
        href="/"
        variant="primary"
        size="large"
      >
        Get Started{" "}
        <Highlighter>
          <ChevRight />
        </Highlighter>
      </Button>
      <HeroImage />
    </Hero>
  );
};
