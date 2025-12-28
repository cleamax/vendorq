import type { Metadata } from "next";
import Link from "next/link";
import { ScrollNarrative } from "@/components/landing/scroll-narrative";
import { TransformationScroll } from "@/components/landing/transformation-scroll";
import { FlowSteps } from "@/components/landing/flow-steps";

export const metadata: Metadata = {
  title: "VendorQ — Run a pilot security questionnaire",
  description:
    "VendorQ helps SaaS teams selling to enterprise customers reduce time spent on security questionnaires by reusing consistent, source-backed answers.",
};

export default function Page() {
  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-28">
        <div className="max-w-3xl">
          <h1 className="text-[3.25rem] leading-[1.05] font-semibold tracking-tight sm:text-[3.75rem]">
            Security questionnaires<br />
            shouldn’t stall enterprise deals.
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            VendorQ is built for{" "}
            <span className="text-zinc-900 font-medium">
              SaaS teams selling to enterprise customers
            </span>
            . It helps teams reuse consistent, source-backed answers that
            security reviewers can actually verify.
          </p>

          <p className="mt-10 text-sm text-zinc-500">
            Early-stage product. Used in pilot evaluations with SaaS teams.
          </p>
        </div>
      </section>

      {/* STATEMENT MOMENT */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <h2 className="max-w-4xl text-2xl leading-relaxed font-medium text-zinc-900">
          Deals don’t slow down because controls are missing.<br />
          They slow down because answers are unclear.
        </h2>
      </section>

      {/* SCROLL NARRATIVE */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <ScrollNarrative
          eyebrow="The problem"
          stickyTitle="Why enterprise security reviews create friction"
          stickyBody="The same issues repeat across companies, deals, and questionnaires."
          steps={[
            {
              title: "Manual copy-paste",
              body: "Answers live across documents, spreadsheets, and old questionnaires. Each deal restarts the work.",
            },
            {
              title: "Inconsistent wording",
              body: "Similar questions receive different answers, which raises doubts during review.",
            },
            {
              title: "Reviewer back-and-forth",
              body: "Clarification requests slow down late-stage deals.",
            },
            {
              title: "Lost momentum",
              body: "Security reviews pause progress while teams chase internal approvals.",
            },
          ]}
        />
      </section>

      {/* TRANSFORMATION */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <TransformationScroll
          eyebrow="What changes"
          stickyTitle="From scattered answers to a single source of truth"
          stickyBody="The moment answers are owned and reused, the conversation changes."
          before={[
            "Copy-paste across documents",
            "Different answers to the same question",
            "Late-stage escalations",
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
      <section className="mx-auto max-w-6xl px-6 pb-36">
        <FlowSteps
          eyebrow="How it works"
          title="How VendorQ fits into a real deal"
          subtitle="A calm workflow designed for real enterprise security reviews."
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

      {/* CTA — NATURAL CONCLUSION */}
      <section className="mx-auto max-w-6xl px-6 pb-40">
        <div className="max-w-3xl">
          <h2 className="text-3xl leading-tight font-semibold">
            The next step is simple.
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Run one real security questionnaire and evaluate VendorQ
            in an actual sales context.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Start a free pilot questionnaire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}