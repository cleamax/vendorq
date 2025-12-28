import type { Metadata } from "next";
import Link from "next/link";
import { ScrollNarrative } from "@/components/landing/scroll-narrative";
import { TransformationScroll } from "@/components/landing/transformation-scroll";
import { FlowSteps } from "@/components/landing/flow-steps";

export const metadata: Metadata = {
  title: "VendorQ — Start a free pilot questionnaire",
  description:
    "VendorQ helps SaaS teams selling to enterprise customers reduce time spent on security questionnaires by reusing consistent, source-backed answers.",
};

export default function Page() {
  return (
    <main className="bg-white text-zinc-950">
      {/* HERO (no primary CTA here — story ends with one CTA) */}
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
            . Reuse consistent, source-backed answers that security reviewers can
            verify — without pulling the whole company into every questionnaire.
          </p>

          <p className="mt-5 text-xs leading-5 text-zinc-500">
            Early-stage product. Used in pilot evaluations with SaaS teams.
          </p>
        </div>
      </section>

      {/* Subtle continuity divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      </div>

      {/* STICKY SCROLL NARRATIVE (Problem) */}
      <section className="mx-auto max-w-6xl px-6 pb-2 pt-10">
        <ScrollNarrative
          eyebrow="The problem"
          stickyTitle="Why enterprise security reviews slow down deals"
          stickyBody="Most teams don’t lose deals because they lack controls. They lose momentum because answers are unclear, inconsistent, or hard to verify."
          steps={[
            {
              title: "Manual copy-paste",
              body: "Answers are scattered across spreadsheets, docs, and old questionnaires. Every new customer restarts the work.",
            },
            {
              title: "Inconsistent answers",
              body: "The same question gets slightly different wording each time — which triggers follow-up questions and distrust.",
            },
            {
              title: "Reviewer back-and-forth",
              body: "Security reviewers ask for clarification or evidence. Threads grow. The deal timeline doesn’t wait.",
            },
            {
              title: "Lost momentum",
              body: "Late-stage sales pauses while the team chases approvals and sources across the company.",
            },
          ]}
        />
      </section>

      {/* Smooth solution reveal (no hard section cut) */}
      <section className="mx-auto max-w-6xl px-6 pb-4 pt-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium text-zinc-500">What changes</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            When answers are consistent and sourced, reviews move forward.
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            VendorQ turns your internal security material into a reusable answer
            library. Each answer stays linked to its source, so reviewers can
            verify without guessing.
          </p>
        </div>
      </section>

      {/* Integrated transformation (Before → After) */}
      <section className="mx-auto max-w-6xl px-6 pb-4 pt-8">
        <TransformationScroll
          eyebrow="The shift"
          stickyTitle="From “who owns this?” to a source of truth"
          stickyBody="As you move through a real questionnaire, the same pain points keep repeating — until answers are owned, reused, and backed by sources."
          beforeTitle="Before"
          afterTitle="After"
          before={[
            "Copy-paste across docs and spreadsheets",
            "Different answers for the same control",
            "Last-minute Slack threads and approvals",
            "Clarification emails from reviewers",
          ]}
          after={[
            "A shared answer library backed by your sources",
            "Consistent wording across customers and deals",
            "Review before anything leaves the team",
            "Fewer clarification emails from reviewers",
          ]}
        />
      </section>

      {/* Product flow (quiet, scannable, subtle motion) */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-10">
        <FlowSteps
          eyebrow="How it works"
          title="How VendorQ works in a real deal"
          subtitle="A straightforward workflow designed to support real security reviews — without adding process overhead."
          steps={[
            {
              step: "Step 1",
              title: "Upload the questionnaire",
              body: "Add the customer file and the policies you want to reference.",
            },
            {
              step: "Step 2",
              title: "Reuse verified answers",
              body: "Reuse approved wording linked to a specific policy section.",
            },
            {
              step: "Step 3",
              title: "Review drafts",
              body: "Draft assistance can help, but your team reviews every answer.",
            },
            {
              step: "Step 4",
              title: "Export reviewer-ready",
              body: "Export a clean file with answers and sources included.",
            },
          ]}
        />
      </section>

      {/* Subtle divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-zinc-200" />
      </div>

      {/* CTA as conclusion (single primary CTA) */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            The next step is simple: run one real questionnaire.
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            If security questionnaires regularly slow down your deals, we can
            evaluate VendorQ on a real customer file and see if the workflow
            fits.
          </p>

          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Start a free pilot questionnaire
            </Link>
          </div>

          <p className="mt-4 text-xs leading-5 text-zinc-500">
            We typically respond within 1–2 business days. If VendorQ isn’t a fit,
            we’ll tell you directly.
          </p>
        </div>
      </section>
    </main>
  );
}