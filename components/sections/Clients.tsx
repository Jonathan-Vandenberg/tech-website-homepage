import {
  Alan,
  Arc,
  CashApp,
  Descript,
  Loom,
  Mercury,
  OpenSea,
  Pitch,
  Ramp,
  RayCast,
  Retool,
  Vercel,
} from "../svgs/ClientLogos";

export const Clients = () => {
  return (
    <div>
      <p className="text-center text-lg md:text-xl mb-12">
        <span className="text-primary-text">
          Powering the world’s best product teams.
        </span>{" "}
        <br className="hidden md:block" />
        From next-gen startups to established enterprises.
      </p>

      <div className="flex flex-wrap justify-around md:[&_svg]:basis-[calc(16.66%-20px)] [&_svg]:basis-[calc(50%-12px)] [&_svg]:max-w-[16rem] gap-x-6 gap-y-8">
        <Ramp />
        <Vercel />
        <Loom className="hidden md:block" />
        <Descript className="hidden md:block" />
        <CashApp />
        <RayCast />
        <Mercury />
        <Retool />
        <Alan className="hidden md:block" />
        <Arc className="hidden md:block" />
        <OpenSea className="hidden md:block" />
        <Pitch className="hidden md:block" />
      </div>
    </div>
  );
};
