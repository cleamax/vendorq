import type { Metadata } from "next";
import Link from "next/link";
import { ScrollNarrative } from "@/components/landing/scroll-narrative";
import { TransformationScroll } from "@/components/landing/transformation-scroll";
import { FlowSteps } from "@/components/landing/flow-steps";

export const metadata: Metadata = {
  title: "VendorQ",
  description:
    "VendorQ helps SaaS teams selling to enterprise customers answer security questionnaires with consistent, source-backed responses.",
};

export default function Page() {
  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-36">
        <div className="max-w-3xl">
          <h1 className="text-[3.75rem] leading-[1.02] font-semibold tracking-tight">
            Security questionnaires<br />
            shouldn’t decide<br />
            whether a deal closes.
          </h1>

          <p className="mt-10 text-lg leading-8 text-zinc-600">
            VendorQ is built for{" "}
            <span className="text-zinc-900 font-medium">
              SaaS teams selling to enterprise customers
            </span>
            . It helps teams reuse consistent, source-backed answers that
            security reviewers can clearly verify.
          </p>

          <p className="mt-12 text-sm text-zinc-500">
            Early-stage product. Used in pilot evaluations.
          </p>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="mx-auto max-w-6xl px-6 pb-40">
        <p className="max-w-4xl text-2xl leading-relaxed text-zinc-900">
          Most deals don’t slow down because controls are missing.
          <br />
          They slow down because answers aren’t trusted.
        </p>
      </section>

      {/* PROBLEM NARRATIVE */}
      <section className="mx-auto max-w-6xl px-6 pb-44">
        <ScrollNarrative
          eyebrow="The reality"
          stickyTitle="Why enterprise security reviews stall deals"
          stickyBody="The same friction appears in almost every late-stage sale."
          steps={[
            {
              title: "Scattered answers",
              body: "Responses live across documents, spreadsheets, and old questionnaires.",
            },
            {
              title: "Inconsistent wording",
              body: "Similar questions receive different answers across customers.",
            },
            {
              title: "Reviewer pushback",
              body: "Unclear responses trigger clarification requests.",
            },
            {
              title: "Lost momentum",
              body: "Deals pause while teams chase internal approvals.",
            },
          ]}
        />
      </section>

      {/* TRANSFORMATION */}
      <section className="mx-auto max-w-6xl px-6 pb-44">
        <TransformationScroll
          eyebrow="What changes"
          stickyTitle="From scattered responses to a single source of truth"
          stickyBody="When answers are owned and reused, reviews move forward."
          before={[
            "Manual copy-paste",
            "Different answers to the same question",
            "Late-stage escalations",
            "Reviewer clarification loops",
          ]}
          after={[
            "Reusable answer library",
            "Consistent language across customers",
            "Clear ownership",
            "Fewer follow-ups",
          ]}
        />
      </section>

      {/* FLOW */}
      <section className="mx-auto max-w-6xl px-6 pb-48">
        <FlowSteps
          eyebrow="Workflow"
          title="How VendorQ fits into a real deal"
          subtitle="Designed for real enterprise security reviews."
          steps={[
            {
              step: "Step 1",
              title: "Upload the questionnaire",
              body: "Add the customer file and internal policies.",
            },
            {
              step: "Step 2",
              title: "Reuse verified answers",
              body: "Answers remain linked to specific policy sections.",
            },
            {
              step: "Step 3",
              title: "Review before sharing",
              body: "Nothing leaves the system without human approval.",
            },
            {
              step: "Step 4",
              title: "Export reviewer-ready responses",
              body: "Clear answers with sources included.",
            },
          ]}
        />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-56">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight">
            The next step is simple.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600">
            Run one real security questionnaire and evaluate VendorQ
            in a live sales context.
          </p>

          <div className="mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Start a free pilot questionnaire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}