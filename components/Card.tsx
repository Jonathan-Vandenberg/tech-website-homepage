import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";

interface CardProps extends VariantProps<typeof cardClasses> {
  href: string;
  title: string;
  content: string;
  image: string;
}

const cardClasses = cva("rounded inline-flex items-center", {
  variants: {
    variant: {
      primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary",
      secondary: "",
      tertiary: "",
    },
    size: {
      small: "text-xs px-3",
      medium: "p-2",
      large: "text-md px-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Card = ({
  href,
  variant,
  size,
  title,
  content,
  image,
}: CardProps) => {
  return (
    <Link className={cardClasses({ variant, size })} href={href}>
      <div className="flex flex-col items-center justify-center max-w-[30rem]">
        <Image
          style={{ maxWidth: "30rem" }}
          width="600"
          height="400"
          src={image}
          alt="card image"
        />
        <p className="w-full text-2xl py-2 mt-[1rem]">{title}</p>
        <p className="text-md">{content}</p>
      </div>
    </Link>
  );
};
