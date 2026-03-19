"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type ContactTab = "call" | "telegram" | "email";

const TELEGRAM_URL = "https://t.me/bluecore";
const CALENDLY_URL = "#contact"; // Replace with Calendly/booking link

export function CtaSection() {
  const [activeTab, setActiveTab] = useState<ContactTab>("call");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-deep-navy pt-16 pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16"
    >
      {/* Abstract background shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -bottom-24 h-[380px] w-[380px] rounded-full bg-pale-blue/[0.08]" />
        <div
          className="absolute -left-20 -bottom-8 h-[180px] w-[900px] bg-pale-blue/[0.05]"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
        <div
          className="absolute left-[200px] bottom-0 h-[120px] w-[800px] bg-pale-blue/[0.04]"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />
        <div className="absolute -right-20 -top-16 h-[320px] w-[320px] rounded-full bg-pale-blue/[0.06]" />
        <div className="absolute -right-16 top-1/3 h-[200px] w-[200px] rotate-45 rounded-lg border border-pale-blue/[0.04]" />
      </div>

      <Container className="relative">
        <div
          className="cta-card-animate relative overflow-hidden rounded-2xl border border-navy/10 bg-navy px-8 py-12 shadow-[0_4px_24px_rgba(15,30,58,0.12)] md:px-14 md:py-14 lg:px-20 lg:py-16"
          style={{
            backgroundImage: `linear-gradient(165deg, rgb(15, 30, 58) 0%, rgb(12, 24, 46) 100%)`,
          }}
        >
          {/* Card decorative treatment */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/[0.03]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full border border-white/[0.02]" aria-hidden />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 opacity-[0.04]"
            aria-hidden
            style={{
              background: `linear-gradient(135deg, transparent 40%, rgba(220, 235, 255, 0.3) 100%)`,
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            }}
          />

          <div className="relative">
            {/* Header */}
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-pale-blue/70">
              Contact
            </span>
            <h2 className="mt-3 font-display text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-soft-white md:text-[1.75rem]">
              Let&apos;s Build
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-[1.65] text-pale-blue/80 md:text-[15px]">
              No enterprise forms. No 3-week sales cycles. Choose how you&apos;d like to connect.
            </p>

            {/* Tab pills */}
            <div
              role="tablist"
              aria-label="Contact method"
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                { id: "call" as ContactTab, label: "Book a Call" },
                { id: "telegram" as ContactTab, label: "Telegram" },
                { id: "email" as ContactTab, label: "Email" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-4 py-2.5 text-[13px] font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-soft-white text-navy"
                      : "border border-white/15 bg-white/5 text-pale-blue/90 hover:border-white/25 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content — fixed height so no layout shift */}
            <div className="mt-6 h-[190px]">
              {activeTab === "call" && (
                <div className="flex h-full flex-col justify-between gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-[14px] leading-[1.5] text-pale-blue/85">
                      30-min technical discovery. We&apos;ll assess fit, scope, and timeline.
                    </p>
                    <p className="mt-1.5 text-[13px] text-pale-blue/60">Best for active projects</p>
                  </div>
                  <Link
                    href={CALENDLY_URL}
                    className="shrink-0 inline-flex h-10 items-center justify-center rounded-lg bg-soft-white px-6 text-[13px] font-medium text-navy transition-all hover:bg-pale-blue"
                  >
                    Book a Call
                  </Link>
                </div>
              )}

              {activeTab === "telegram" && (
                <div className="flex h-full flex-col justify-between gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-[14px] leading-[1.5] text-pale-blue/85">
                      Quick questions or early ideas? Fast, async conversations.
                    </p>
                    <p className="mt-1.5 text-[13px] text-pale-blue/60">We reply within 24 hours</p>
                  </div>
                  <Link
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex h-10 items-center justify-center rounded-lg bg-soft-white px-6 text-[13px] font-medium text-navy transition-all hover:bg-pale-blue"
                  >
                    Chat on Telegram
                  </Link>
                </div>
              )}

              {activeTab === "email" && (
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex h-full flex-col gap-3"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="cta-name" className="sr-only">Name</label>
                      <input
                        id="cta-name"
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-[14px] text-soft-white placeholder:text-pale-blue/50 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-email" className="sr-only">Email</label>
                      <input
                        id="cta-email"
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-[14px] text-soft-white placeholder:text-pale-blue/50 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cta-message" className="sr-only">Brief description</label>
                    <textarea
                      id="cta-message"
                      rows={2}
                      placeholder="What are you building and where do you need help?"
                      className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-[14px] text-soft-white placeholder:text-pale-blue/50 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[13px] text-pale-blue/60">We reply within 1–2 business days</p>
                    <button
                      type="submit"
                      className="shrink-0 inline-flex h-10 items-center justify-center rounded-lg bg-soft-white px-6 text-[13px] font-medium text-navy transition-all hover:bg-pale-blue"
                    >
                      Build with Us
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
