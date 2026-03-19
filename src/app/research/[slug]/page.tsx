import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const RESEARCH_POSTS: Record<
  string,
  {
    title: string;
    description: string;
    tags: string[];
    image: string;
    content: string;
  }
> = {
  "pricing-engine-liability": {
    title: "Your Pricing Engine Isn't a System. It's a Liability.",
    description:
      "How rule-based pricing architectures silently erode margin, create compliance exposure, and become impossible to audit at scale.",
    tags: ["Pricing Infrastructure", "Enterprise Systems"],
    image: "/articles/engine.jpg",
    content:
      "Content coming soon. This article will explore how rule-based pricing architectures silently erode margin, create compliance exposure, and become impossible to audit at scale.",
  },
  "pipeline-problem": {
    title: "You Don't Have a Data Problem. You Have a Pipeline Problem.",
    description:
      "Why the reports your finance and ops teams don't trust aren't a data quality issue — they're a backend architecture issue.",
    tags: ["Backend Architecture", "Operational Finance"],
    image: "/articles/pipelines.jpg",
    content:
      "Content coming soon. This article will examine why the reports your finance and ops teams don't trust aren't a data quality issue — they're a backend architecture issue.",
  },
  "nobody-builds-for-audit": {
    title: "Nobody Builds for the Audit. Then the Audit Arrives.",
    description:
      "Why compliance is always the last thing teams think about and the first thing that breaks them — and what it actually costs to fix it retroactively.",
    tags: ["Compliance Architecture", "Enterprise Infrastructure"],
    image: "/articles/audit.jpg",
    content:
      "Content coming soon. This article will discuss why compliance is always the last thing teams think about and the first thing that breaks them.",
  },
  "agent-prompt-crayon": {
    title:
      "Your AI Agent Isn't Broken. Your Prompt Is an Instruction Manual Written in Crayon.",
    description:
      "Why multi-agent systems fail in production — and what it takes to build ones that behave like software instead of guessing like interns.",
    tags: ["Agent Infrastructure", "Systems Engineering"],
    image: "/articles/agent-prompt.jpg",
    content:
      "Content coming soon. This article will explore why multi-agent systems fail in production and what it takes to build ones that behave like software.",
  },
  "evm-solana-account-model": {
    title: "EVM Developers on Solana: What the Account Model Actually Changes",
    description:
      "Most EVM-to-Solana comparisons stop at TPS and gas costs. The architectural difference that actually matters is that EVM contracts own their state and Solana programs don't.",
    tags: ["DeFi Infrastructure", "Protocol Design"],
    image: "/articles/evm_to_solana.jpg",
    content:
      "Content coming soon. This article will break down the architectural differences between EVM and Solana account models.",
  },
  "realtime-dashboard-lie": {
    title: "Your Real-Time Dashboard Isn't Real-Time. It's a Confident Lie.",
    description:
      "Why the number on your ops dashboard can be right on average and wrong right now — and what it actually takes to build a monitoring system your team can trust when it matters.",
    tags: ["Risk Engineering", "Data Infrastructure"],
    image: "/articles/realtime.jpg",
    content:
      "Content coming soon. This article will explain why real-time dashboards often mislead and what it takes to build trustworthy monitoring systems.",
  },
};

export default function ResearchPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = slug ? RESEARCH_POSTS[slug] : null;

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar isLightBg={true} />
      <main className="min-h-screen bg-white py-16 md:py-24">
        <Container>
          <Link
            href="/#research"
            className="mb-8 inline-block text-[13px] font-medium text-steel-blue hover:text-navy transition-colors"
          >
            ← Back to Research
          </Link>
          <article>
            <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray">
              {post.tags.join(" · ")}
            </div>
            <h1 className="mt-2 text-3xl font-semibold leading-[1.2] tracking-[-0.03em] text-text-dark md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.7] text-gray">
              {post.description}
            </p>
            <div className="relative mt-8 aspect-[2/1] w-full overflow-hidden rounded-lg bg-[#0F1E3A]">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <div className="prose prose-gray mt-12 max-w-none">
              <p className="text-[15px] leading-[1.8] text-text-dark">
                {post.content}
              </p>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
