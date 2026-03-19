import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  isLightBg?: boolean;
}

export function Navbar({ isLightBg = false }: NavbarProps) {
  const textClass = isLightBg
    ? "text-text-dark hover:text-deep-navy"
    : "text-white hover:text-white";
  const linkClass = isLightBg
    ? "text-gray hover:text-text-dark"
    : "text-white/90 hover:text-white";
  const borderClass = isLightBg ? "border-gray/20" : "border-white/10";

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-transparent transition-colors ${borderClass}`}
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
              href="#contact"
              className={`text-[13px] font-medium tracking-[0.02em] transition-colors ${linkClass}`}
            >
              Contact
            </Link>
            <Button variant={isLightBg ? "primary" : "light"} size="sm">
              Book a Call
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
