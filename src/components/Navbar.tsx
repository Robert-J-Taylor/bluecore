"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface NavbarProps {
  isLightBg?: boolean;
}

export function Navbar({ isLightBg = false }: NavbarProps) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 250);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useLightNavbar = isLightBg && !scrolledPastHero;
  const useNavyNavbar = scrolledPastHero;
  const textClass = useLightNavbar
    ? "text-text-dark hover:text-deep-navy"
    : "text-white hover:text-white";
  const linkClass = useLightNavbar
    ? "text-gray hover:text-text-dark"
    : "text-white/90 hover:text-white";
  const borderClass = useLightNavbar ? "border-b border-gray/20 border-t-white" : "border-b border-white/10";
  const bgClass = useNavyNavbar ? "bg-navy shadow-sm border-t-navy" : useLightNavbar ? "bg-white border-t-white" : "bg-transparent border-t-transparent";

  return (
    <header
      className={`sticky top-0 z-50 border-t transition-colors duration-200 ${bgClass} ${borderClass}`}
    >
      <Container>
        <nav className="flex h-[5rem] items-center justify-between">
          <Link
            href="/"
            className={`text-[15px] font-semibold tracking-[-0.02em] transition-colors ${textClass}`}
          >
            Bluecore
          </Link>
          <div className="flex items-center gap-8 lg:gap-10">
            <Link
              href="#services"
              className={`text-[13px] font-medium tracking-[0.02em] transition-colors ${linkClass}`}
            >
              Services
            </Link>
            <Link
              href="#process"
              className={`text-[13px] font-medium tracking-[0.02em] transition-colors ${linkClass}`}
            >
              Process
            </Link>
            <Link
              href="/#contact"
              className={`text-[13px] font-medium tracking-[0.02em] transition-colors ${linkClass}`}
            >
              Contact
            </Link>
            <Link
              href="https://calendly.com/dev-bluecorestudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-9 items-center justify-center rounded-sm px-5 text-[13px] font-medium tracking-[0.02em] transition-colors ${
                useLightNavbar
                  ? "bg-navy text-soft-white hover:bg-deep-navy border border-navy"
                  : "bg-soft-white text-navy hover:bg-pale-blue border border-soft-white/30"
              }`}
            >
              Book a Call
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
