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

const CATEGORY_COLORS: Record<Category, { color: string; colorLight: string }> = {
  all: { color: "rgb(37, 99, 235)", colorLight: "rgba(37, 99, 235, 0.08)" },
  frontend: { color: "rgb(59, 130, 246)", colorLight: "rgba(59, 130, 246, 0.08)" },
  backend: { color: "rgb(91, 127, 166)", colorLight: "rgba(91, 127, 166, 0.08)" },
  mobile: { color: "rgb(107, 148, 194)", colorLight: "rgba(107, 148, 194, 0.08)" },
  devops: { color: "rgb(15, 30, 58)", colorLight: "rgba(15, 30, 58, 0.06)" },
};

/* ── All: 2x2 dashboard grid ── */
function AllShape({ isActive }: { isActive: boolean }) {
  const c = CATEGORY_COLORS.all;
  const border = isActive ? c.color : "rgba(148, 163, 184, 0.25)";
  const bg = isActive ? c.colorLight : "white";
  const tileBg = isActive ? "rgba(37, 99, 235, 0.12)" : "rgba(148, 163, 184, 0.08)";
  return (
    <div
      className="flex h-[120px] w-full flex-col overflow-hidden rounded-xl border-[1.5px] transition-all duration-200"
      style={{ borderColor: border, backgroundColor: bg }}
    >
      <div className="flex h-6 items-center gap-1 border-b px-2.5" style={{ borderColor: border }}>
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? c.color : "rgba(148,163,184,0.4)" }} />
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? c.color : "rgba(148,163,184,0.3)" }} />
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? c.color : "rgba(148,163,184,0.2)" }} />
      </div>
      <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-1.5 p-2.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-md" style={{ backgroundColor: tileBg }} />
        ))}
      </div>
    </div>
  );
}

/* ── Frontend: browser window ── */
function BrowserShape({ isActive }: { isActive: boolean }) {
  const c = CATEGORY_COLORS.frontend;
  const border = isActive ? c.color : "rgba(148, 163, 184, 0.25)";
  const bg = isActive ? c.colorLight : "white";
  return (
    <div
      className="flex h-[120px] w-full flex-col overflow-hidden rounded-xl border-[1.5px] transition-all duration-200"
      style={{ borderColor: border, backgroundColor: bg }}
    >
      {/* Title bar */}
      <div className="flex h-6 items-center gap-1 border-b px-2.5" style={{ borderColor: border }}>
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? "#EF4444" : "rgba(148,163,184,0.4)" }} />
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? "#F59E0B" : "rgba(148,163,184,0.3)" }} />
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? "#22C55E" : "rgba(148,163,184,0.2)" }} />
      </div>
      {/* Address bar */}
      <div className="flex h-5 items-center px-2.5" style={{ borderBottom: `1px solid ${border}` }}>
        <div
          className="h-2 w-3/4 rounded-sm"
          style={{ backgroundColor: isActive ? "rgba(59,130,246,0.15)" : "rgba(148,163,184,0.1)" }}
        />
      </div>
      {/* Content area */}
      <div className="flex flex-1 flex-col gap-1.5 p-2.5">
        <div className="h-2 w-full rounded-sm" style={{ backgroundColor: isActive ? "rgba(59,130,246,0.12)" : "rgba(148,163,184,0.08)" }} />
        <div className="h-2 w-4/5 rounded-sm" style={{ backgroundColor: isActive ? "rgba(59,130,246,0.09)" : "rgba(148,163,184,0.06)" }} />
        <div className="h-2 w-3/5 rounded-sm" style={{ backgroundColor: isActive ? "rgba(59,130,246,0.06)" : "rgba(148,163,184,0.04)" }} />
      </div>
    </div>
  );
}

/* ── Backend: terminal ── */
function TerminalShape({ isActive }: { isActive: boolean }) {
  const c = CATEGORY_COLORS.backend;
  const border = isActive ? c.color : "rgba(148, 163, 184, 0.25)";
  const headerBg = isActive ? c.color : "rgba(148, 163, 184, 0.12)";
  const bodyBg = isActive ? "rgb(20, 30, 42)" : "rgba(15, 23, 42, 0.04)";
  const lineBright = isActive ? "rgba(91, 200, 166, 0.7)" : "rgba(148,163,184,0.2)";
  const lineDim = isActive ? "rgba(91, 200, 166, 0.35)" : "rgba(148,163,184,0.12)";
  return (
    <div
      className="flex h-[120px] w-full flex-col overflow-hidden rounded-xl border-[1.5px] transition-all duration-200"
      style={{ borderColor: border }}
    >
      {/* Dark header */}
      <div className="flex h-6 items-center gap-1 px-2.5" style={{ backgroundColor: headerBg }}>
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? "rgba(255,255,255,0.5)" : "rgba(148,163,184,0.4)" }} />
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? "rgba(255,255,255,0.35)" : "rgba(148,163,184,0.3)" }} />
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "rgba(148,163,184,0.2)" }} />
      </div>
      {/* Terminal body */}
      <div className="flex flex-1 flex-col gap-1.5 p-2.5" style={{ backgroundColor: bodyBg }}>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5" style={{ backgroundColor: lineBright }} />
          <div className="h-1.5 w-3/4 rounded-sm" style={{ backgroundColor: lineBright }} />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5" style={{ backgroundColor: lineDim }} />
          <div className="h-1.5 w-1/2 rounded-sm" style={{ backgroundColor: lineDim }} />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5" style={{ backgroundColor: lineDim }} />
          <div className="h-1.5 w-2/3 rounded-sm" style={{ backgroundColor: lineDim }} />
        </div>
        {/* Cursor blink */}
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5" style={{ backgroundColor: lineBright }} />
          <div className="h-3 w-1.5 rounded-sm" style={{ backgroundColor: lineBright, opacity: isActive ? 1 : 0.4 }} />
        </div>
      </div>
    </div>
  );
}

/* ── Mobile: phone ── */
function PhoneShape({ isActive }: { isActive: boolean }) {
  const c = CATEGORY_COLORS.mobile;
  const border = isActive ? c.color : "rgba(148, 163, 184, 0.25)";
  const bg = isActive ? c.colorLight : "white";
  const barColor = isActive ? "rgba(107,148,194,0.2)" : "rgba(148,163,184,0.1)";
  return (
    <div className="flex h-[120px] w-full items-center justify-center" style={{ backgroundColor: "transparent" }}>
      <div
        className="flex h-[110px] w-[62px] flex-col overflow-hidden rounded-2xl border-[2px] transition-all duration-200"
        style={{ borderColor: border, backgroundColor: bg }}
      >
        {/* Notch */}
        <div className="mx-auto mt-1.5 h-1 w-5 rounded-full" style={{ backgroundColor: isActive ? c.color : "rgba(148,163,184,0.25)" }} />
        {/* Screen content */}
        <div className="flex flex-1 flex-col gap-1.5 px-2 pt-2.5">
          <div className="h-1.5 w-full rounded-sm" style={{ backgroundColor: barColor }} />
          <div className="h-1.5 w-4/5 rounded-sm" style={{ backgroundColor: barColor }} />
          <div className="h-1.5 w-3/5 rounded-sm" style={{ backgroundColor: barColor }} />
          <div className="mt-auto mb-1 h-4 w-full rounded-md" style={{ backgroundColor: isActive ? "rgba(107,148,194,0.18)" : "rgba(148,163,184,0.06)" }} />
        </div>
        {/* Home indicator */}
        <div className="mx-auto mb-1.5 h-0.5 w-5 rounded-full" style={{ backgroundColor: isActive ? c.color : "rgba(148,163,184,0.2)" }} />
      </div>
    </div>
  );
}

/* ── DevOps: cloud with nodes ── */
function CloudShape({ isActive }: { isActive: boolean }) {
  const c = CATEGORY_COLORS.devops;
  const stroke = isActive ? c.color : "rgba(148, 163, 184, 0.4)";
  const fill = isActive ? c.colorLight : "rgba(148, 163, 184, 0.04)";
  const nodeFill = isActive ? c.color : "rgba(148, 163, 184, 0.3)";
  const lineStroke = isActive ? "rgba(15, 30, 58, 0.3)" : "rgba(148, 163, 184, 0.15)";
  return (
    <div className="flex h-[120px] w-full items-center justify-center">
      <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
        {/* Cloud shape */}
        <path
          d="M30 65 C10 65 8 48 22 42 C18 25 38 15 52 22 C58 10 82 10 88 22 C102 18 112 30 108 45 C118 50 115 65 100 65 Z"
          stroke={stroke}
          strokeWidth="1.5"
          fill={fill}
        />
        {/* Connection lines */}
        <line x1="45" y1="45" x2="60" y2="38" stroke={lineStroke} strokeWidth="1" />
        <line x1="60" y1="38" x2="78" y2="45" stroke={lineStroke} strokeWidth="1" />
        <line x1="60" y1="38" x2="60" y2="52" stroke={lineStroke} strokeWidth="1" />
        {/* Nodes */}
        <circle cx="45" cy="45" r="4" fill={nodeFill} />
        <circle cx="60" cy="38" r="5" fill={nodeFill} />
        <circle cx="78" cy="45" r="4" fill={nodeFill} />
        <circle cx="60" cy="52" r="3.5" fill={nodeFill} />
      </svg>
    </div>
  );
}

const SHAPE_COMPONENTS: Record<Category, React.ComponentType<{ isActive: boolean }>> = {
  all: AllShape,
  frontend: BrowserShape,
  backend: TerminalShape,
  mobile: PhoneShape,
  devops: CloudShape,
};

function CategoryCard({
  category,
  label,
  count,
  isActive,
  onClick,
}: {
  category: Category;
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const colors = CATEGORY_COLORS[category];
  const ShapeComponent = SHAPE_COMPONENTS[category];

  return (
    <button
      onClick={onClick}
      className={`group flex cursor-pointer flex-col items-center gap-2 transition-all duration-200 ${
        isActive ? "" : "opacity-75 hover:opacity-100"
      }`}
    >
      <ShapeComponent isActive={isActive} />
      <span
        className={`text-[13px] font-semibold transition-colors duration-200 ${
          isActive ? "text-text-dark" : "text-gray group-hover:text-text-dark"
        }`}
        style={isActive ? { color: colors.color } : undefined}
      >
        {label}
      </span>
      <span
        className={`text-[11px] font-medium transition-colors duration-200 ${
          isActive ? "text-steel-blue" : "text-gray/50"
        }`}
      >
        {count} tools
      </span>
    </button>
  );
}

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

export function StackSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? STACK_ITEMS
      : STACK_ITEMS.filter((item) => item.category === activeCategory);

  const getCategoryCount = (id: Category) =>
    id === "all"
      ? STACK_ITEMS.length
      : STACK_ITEMS.filter((item) => item.category === id).length;

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
          {/* Shape card selector */}
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4 sm:grid-cols-5 sm:gap-5">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat.id}
                label={cat.label}
                count={getCategoryCount(cat.id)}
                isActive={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              />
            ))}
          </div>

          {/* Technology grid */}
          <div className="mx-auto mt-10 max-w-3xl lg:mt-12">
            <div
              key={activeCategory}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
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
      </Container>
    </section>
  );
}
