import type { Metadata } from "next";
import Link from "next/link";
import { ScrollNarrative } from "@/components/landing/scroll-narrative";
import { TransformationScroll } from "@/components/landing/transformation-scroll";
import { FlowSteps } from "@/components/landing/flow-steps";

export const metadata: Metadata = {
  title: "VendorQ — Run a pilot security questionnaire",
  description:
    "VendorQ helps SaaS teams selling to enterprise customers answer security questionnaires with consistent, source-backed responses — so deals don’t stall.",
};

export default function Page() {
  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 sm:pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Security questionnaires shouldn’t be the reason a deal stalls.
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            VendorQ is built for{" "}
            <span className="font-medium text-zinc-900">
              SaaS teams selling to enterprise customers
            </span>
            . It helps you reuse consistent, source-backed answers that security
            reviewers can verify.
          </p>

          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Run a pilot security questionnaire
            </Link>
          </div>

          <p className="mt-4 text-xs leading-5 text-zinc-500">
            Early-stage product. Used in pilot evaluations with SaaS teams.
          </p>
        </div>
      </section>

      {/* SCROLL NARRATIVE: PROBLEM */}
      <section className="mx-auto max-w-6xl px-6 pb-4 pt-6">
        <ScrollNarrative
          eyebrow="The problem"
          stickyTitle="Why enterprise security reviews slow down deals"
          stickyBody="Deals rarely stall because controls are missing. They stall because answers are unclear, inconsistent, or hard to verify."
          steps={[
            {
              title: "Manual copy-paste",
              body: "Answers live across spreadsheets, docs, and old questionnaires. Every deal restarts the same work.",
            },
            {
              title: "Inconsistent answers",
              body: "Similar questions get different wording, which raises doubts during review.",
            },
            {
              title: "Reviewer back-and-forth",
              body: "Clarification requests pile up, slowing late-stage sales.",
            },
            {
              title: "Lost momentum",
              body: "Security reviews pause the deal while teams chase approvals internally.",
            },
          ]}
        />
      </section>

      {/* TRANSFORMATION */}
      <section className="mx-auto max-w-6xl px-6 pb-6 pt-6">
        <TransformationScroll
          eyebrow="What changes"
          stickyTitle="From scattered answers to a single source of truth"
          stickyBody="As teams answer real questionnaires, the same friction appears — until answers are owned, reused, and clearly sourced."
          before={[
            "Copy-paste across documents",
            "Different answers to the same question",
            "Late-stage Slack escalations",
            "Clarification emails from reviewers",
          ]}
          after={[
            "Reusable answer library",
            "Consistent wording across customers",
            "Clear ownership and review",
            "Fewer follow-ups from reviewers",
          ]}
        />
      </section>

      {/* PRODUCT FLOW */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <FlowSteps
          eyebrow="How it works"
          title="How VendorQ fits into a real deal"
          subtitle="A simple workflow designed for real enterprise security reviews."
          steps={[
            {
              step: "Step 1",
              title: "Upload the questionnaire",
              body: "Add the customer file and the policies you want to reference.",
            },
            {
              step: "Step 2",
              title: "Reuse verified answers",
              body: "Answers stay linked to a specific policy section.",
            },
            {
              step: "Step 3",
              title: "Review drafts",
              body: "Nothing is shared before human review.",
            },
            {
              step: "Step 4",
              title: "Export responses",
              body: "Export a reviewer-ready file with sources included.",
            },
          ]}
        />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            The next step is simple: run one real questionnaire.
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            If security questionnaires regularly slow down your deals, we can
            evaluate VendorQ on a real customer file.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Run a pilot security questionnaire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}