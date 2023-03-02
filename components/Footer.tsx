import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./svgs/Logo";
import { Github, Slack, Twitter } from "./svgs/SocialIcons";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "ChangeLog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "Github", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-transparent-white py-[5.6rem] mt-12 text-sm">
      <Container className="flex flex-col lg:flex-row justify-between">
        <div>
          <div className="flex flex-row justify-between lg:flex-col md:flex-row h-full">
            <div className="flex items-center">
              <Logo className="w-6 h-6" />{" "}
              <p className="text-gray ml-4">WizzyWigWeb3</p>
            </div>
            <div className="mt-auto flex space-x-4 text-gray">
              <Twitter />
              <Github />
              <Slack />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="lg:min-w-[18rem] min-w-[50%] mt-10 lg:mt-0"
            >
              <h3 className="font-medium mb-3">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className="[&_a]:last:mb-0">
                    <Link
                      className="text-gray mb-3 block hover:text-off-white transition-colors"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
