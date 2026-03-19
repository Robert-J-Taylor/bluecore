"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

type Category = "all" | "frontend" | "backend" | "mobile" | "devops";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "devops", label: "DevOps" },
];

const STACK_ITEMS: { name: string; category: Category; iconSlug: string }[] = [
  { name: "React", category: "frontend", iconSlug: "react" },
  { name: "Vue.js", category: "frontend", iconSlug: "vuedotjs" },
  { name: "Angular", category: "frontend", iconSlug: "angular" },
  { name: "Next.js", category: "frontend", iconSlug: "nextdotjs" },
  { name: "Node.js", category: "backend", iconSlug: "nodedotjs" },
  { name: "Python", category: "backend", iconSlug: "python" },
  { name: "Rust", category: "backend", iconSlug: "rust" },
  { name: "Go", category: "backend", iconSlug: "go" },
  { name: "Laravel", category: "backend", iconSlug: "laravel" },
  { name: "Swift", category: "mobile", iconSlug: "swift" },
  { name: "React Native", category: "mobile", iconSlug: "react" },
  { name: "Flutter", category: "mobile", iconSlug: "flutter" },
  { name: "Docker", category: "devops", iconSlug: "docker" },
  { name: "Kubernetes", category: "devops", iconSlug: "kubernetes" },
  { name: "GCP", category: "devops", iconSlug: "googlecloud" },
  { name: "AWS", category: "devops", iconSlug: "amazonaws" },
  { name: "PostgreSQL", category: "devops", iconSlug: "postgresql" },
  { name: "Figma", category: "frontend", iconSlug: "figma" },
];

const ICON_COLOR = "5B7FA6";

// Bluecore palette: tonal progression navy → primary → secondary → steel → pale
const CIRCLE_COLORS: Record<Category, { bg: string; border: string; ring: string; textLight: boolean }> = {
  all: {
    bg: "rgb(37, 99, 235)",
    border: "rgba(37, 99, 235, 0.95)",
    ring: "rgba(37, 99, 235, 0.35)",
    textLight: true,
  },
  frontend: {
    bg: "rgb(59, 130, 246)",
    border: "rgba(59, 130, 246, 0.9)",
    ring: "rgba(59, 130, 246, 0.3)",
    textLight: true,
  },
  backend: {
    bg: "rgb(91, 127, 166)",
    border: "rgba(91, 127, 166, 0.85)",
    ring: "rgba(91, 127, 166, 0.25)",
    textLight: true,
  },
  mobile: {
    bg: "rgb(220, 235, 255)",
    border: "rgba(91, 127, 166, 0.45)",
    ring: "rgba(91, 127, 166, 0.18)",
    textLight: false,
  },
  devops: {
    bg: "rgb(15, 30, 58)",
    border: "rgba(15, 30, 58, 0.98)",
    ring: "rgba(37, 99, 235, 0.2)",
    textLight: true,
  },
};

function StackItem({
  name,
  iconSlug,
  index,
}: {
  name: string;
  iconSlug: string;
  index: number;
}) {
  return (
    <div
      className="stack-grid-item flex items-center gap-3 rounded-lg border border-gray/15 bg-white px-4 py-3 shadow-card-soft transition-colors duration-150 hover:border-primary-blue/30 hover:shadow-md"
      style={{ animationDelay: `${index * 20}ms`, opacity: 0 }}
    >
      <img
        src={`https://cdn.simpleicons.org/${iconSlug}/${ICON_COLOR}`}
        alt=""
        className="h-6 w-6 shrink-0 object-contain"
      />
      <span className="text-sm font-medium text-text-dark">{name}</span>
    </div>
  );
}

const TRANSITION_DURATION = 280;

function HorizontalCircleSelector({
  activeCategory,
  onSelect,
}: {
  activeCategory: Category;
  onSelect: (cat: Category) => void;
}) {
  const activeIndex = CATEGORIES.findIndex((c) => c.id === activeCategory);
  const CIRCLE_SIZE = 200;
  const OVERLAP = 110;

  return (
    <div className="flex flex-col gap-6">
      {/* Category label — reads as interactive control */}
      <span className="text-[11px] font-medium uppercase tracking-widest text-steel-blue/80">
        Category
      </span>

      <div className="flex items-center gap-6">
        {/* Horizontal overlapping circles */}
        <div
          className="relative shrink-0"
          style={{
            height: CIRCLE_SIZE,
            width: CIRCLE_SIZE + (CATEGORIES.length - 1) * (CIRCLE_SIZE - OVERLAP),
          }}
        >
          {CATEGORIES.map((cat, index) => {
            const isActive = activeCategory === cat.id;
            const distanceFromActive = Math.abs(index - activeIndex);
            const zIndex = isActive ? 40 : Math.max(8, 35 - distanceFromActive * 6);
            const inactiveOpacity = Math.max(0.52, 0.78 - distanceFromActive * 0.05);
            const colors = CIRCLE_COLORS[cat.id];

            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className="absolute flex cursor-pointer items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
                style={{
                  left: index * (CIRCLE_SIZE - OVERLAP),
                  top: 0,
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  zIndex,
                  transition: `opacity ${TRANSITION_DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1)`,
                  opacity: isActive ? 1 : inactiveOpacity,
                }}
                aria-pressed={isActive}
                aria-label={`Select ${cat.label}`}
              >
                <div
                  className="flex h-full w-full cursor-pointer items-center justify-center rounded-full"
                  style={{
                    background: colors.bg,
                    border: `2px solid ${colors.border}`,
                    boxShadow: isActive
                      ? `0 0 0 4px ${colors.ring}, 0 3px 10px rgba(15, 30, 58, 0.08), 0 1px 3px rgba(15, 30, 58, 0.04)`
                      : "0 0 0 1px rgba(91, 127, 166, 0.08)",
                    transform: isActive ? "scale(1.02) translateY(-2px)" : "scale(1)",
                    transition: `transform ${TRANSITION_DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1), box-shadow ${TRANSITION_DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1)`,
                  }}
                >
                  <span
                    className={`px-2 text-center text-[12px] font-semibold uppercase leading-tight tracking-wider ${
                      colors.textLight ? "text-white" : "text-navy"
                    }`}
                  >
                    {cat.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Labels — integrated with cluster */}
        <div className="flex flex-col justify-center gap-1.5 py-1">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className={`cursor-pointer text-left transition-colors duration-300 ease-out ${
                  isActive
                    ? "text-[13px] font-semibold text-text-dark"
                    : "text-[13px] font-medium text-gray hover:text-text-dark"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function StackSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? STACK_ITEMS
      : STACK_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="border-y border-gray/10 bg-soft-white py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-medium uppercase tracking-wider text-primary-blue">
            Stack
          </h2>
          <h3 className="mt-2.5 text-2xl font-semibold text-text-dark sm:text-3xl">
            Technologies We Ship With
          </h3>
          <p className="mt-3.5 text-[15px] leading-relaxed text-gray">
            An engineer will scan this in 3 seconds. We made sure it&apos;s
            worth the look.
          </p>
        </div>

        <div className="mt-14 lg:mt-16">
          {/* Mobile/tablet: compact pills */}
          <div className="flex flex-wrap justify-center gap-2 lg:hidden">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                  activeCategory === cat.id
                    ? "bg-primary-blue text-white"
                    : "bg-white text-gray hover:bg-white/80 hover:text-text-dark"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Desktop: 2-column layout — left: circle selector, right: grid */}
          <div className="mt-10 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            {/* Left: circle selector + labels — one composed unit */}
            <div className="hidden lg:flex lg:min-h-[240px] lg:flex-col lg:items-center lg:justify-center lg:border-r lg:border-steel-blue/12 lg:pr-16 lg:pl-2">
              <HorizontalCircleSelector
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
              />
            </div>

            {/* Right: technology grid — balanced, not cramped */}
            <div className="min-w-0 lg:pl-2">
              <div
                key={activeCategory}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 lg:gap-5"
              >
                {filteredItems.map((item, index) => (
                  <StackItem
                    key={item.name}
                    name={item.name}
                    iconSlug={item.iconSlug}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
