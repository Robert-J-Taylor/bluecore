import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <Section id="contact" className="relative overflow-hidden py-24 md:py-28 lg:py-32">
      <div className="relative overflow-hidden rounded-lg border border-soft-white/[0.06] bg-navy px-8 py-20 md:px-16 md:py-24 lg:px-24 lg:py-28">
        {/* Oversized low-opacity shapes in corners */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[22rem] w-[22rem] rounded-full border border-soft-white/[0.04] bg-pale-blue/[0.04]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-48 -bottom-32 h-[28rem] w-[28rem] rounded-full border border-soft-white/[0.03] bg-pale-blue/[0.03]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[20%] top-1/3 h-44 w-44 rotate-45 rounded-xl border border-soft-white/[0.025]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium leading-[1.14] tracking-[-0.03em] text-soft-white md:text-4xl lg:text-[2.5rem]">
            Let&apos;s build something clear, modern, and built to last.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.65] text-pale-blue/90 md:mt-8">
            Bluecore works with teams that want a clean, credible digital presence
            without the noise.
          </p>
          <div className="mt-12">
            <Button variant="light" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
