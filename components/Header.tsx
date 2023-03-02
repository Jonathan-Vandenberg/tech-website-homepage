"use client";

import Link from "next/link";
import { Logo } from "./svgs/Logo";
import { Container } from "./Container";
import { Button } from "./Button";
import { HamburgerIcon } from "./svgs/HamburgerIcon";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className="fixed left-0 top-0 w-full border-b border-transparent-white backdrop-blur-[12px] z-30">
      <Container className="flex h-navigation-height">
        <Link href="/" className="flex items-center text-md">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
          LoremTech
        </Link>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
          )}
        >
          <nav
            className={classNames(
              "h-[calc(100vh_-_var(--navigation-height))] md:transition-none md:translate-x-0 md:h-auto md-w-auto overflow-auto w-full md:block fixed md:relative",
              "top-navigation-height md:top-0 left-0 bg-background md:bg-transparent transition-opacity duration-500 md:opacity-100",
              hamburgerMenuIsOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100vw]"
            )}
          >
            <ul
              className={classNames(
                "flex flex-col md:flex-row md:items-center [&_a]:duration-300 [&_a]:translate-y-8 md:[&_a]:translate-y-0",
                "ease-in [&_a]:text-md md:[&_a]:text-sm [&_li]:ml-6 [&_a:hover]:text-gray [&_a]:w-full [&_a]:transition-[color,transform] md:[&_a]:transition-colors",
                "[&_a]:h-navigation-height [&_a]:flex [&_a]:items-center md:[&_a]:border-none [&_a]:border-b [&_a]:border-gray-dark",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li>
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Research</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-auto h-full flex items-center">
          <Link className="text-sm px-4 h-auto" href="/">
            Login
          </Link>
          <Button href="/">SignUp</Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
