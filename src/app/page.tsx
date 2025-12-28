import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VendorQ",
  description:
    "VendorQ is a system for producing consistent, source-backed answers to enterprise security questionnaires.",
};

export default function Page() {
  return (
    <main className="bg-white text-zinc-950">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        {/* 1) OPENING STATEMENT */}
        <section className="mb-20">
          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Enterprise security reviews fail when answers lack consistency.
          </h1>
        </section>

        {/* 2) CONTEXT PARAGRAPH */}
        <section className="mb-20 max-w-3xl">
          <p className="text-lg leading-8 text-zinc-700">
            Security questionnaires exist to assess risk and establish trust.
            In practice, they often slow down deals because answers are scattered
            across documents, rewritten for each customer, and difficult to
            verify. The problem is rarely missing controls — it is unclear,
            inconsistent responses.
          </p>
        </section>

        {/* 3) WHAT VENDORQ IS */}
        <section className="mb-24 max-w-3xl">
          <p className="text-xl leading-8 text-zinc-900">
            VendorQ is a system for producing consistent, source-backed answers
            to enterprise security questionnaires.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-700">
            It centralizes how answers are written, reviewed, and reused. Each
            response is linked to a concrete internal source, making it easier
            for reviewers to understand and trust what is being provided.
          </p>
        </section>

        {/* 4) CORE PRINCIPLE */}
        <section className="mb-24">
          <p className="text-3xl font-medium leading-snug tracking-tight text-zinc-900">
            One answer. One source. Reused everywhere.
          </p>
        </section>

        {/* 5) PROCESS OVERVIEW */}
        <section className="mb-24 max-w-3xl">
          <ol className="space-y-6 text-lg leading-8 text-zinc-700">
            <li>
              <span className="mr-2 text-zinc-900">1.</span>
              Receive an enterprise security questionnaire
            </li>
            <li>
              <span className="mr-2 text-zinc-900">2.</span>
              Attach internal policies or documents as sources
            </li>
            <li>
              <span className="mr-2 text-zinc-900">3.</span>
              Produce consistent answers linked to those sources
            </li>
            <li>
              <span className="mr-2 text-zinc-900">4.</span>
              Reuse and refine answers across future reviews
            </li>
          </ol>
        </section>

        {/* 6) TRUST & SCOPE */}
        <section className="mb-24 max-w-3xl">
          <p className="text-lg leading-8 text-zinc-700">
            VendorQ is intentionally narrow in scope. It focuses on answering
            security questionnaires, not running full compliance programs or
            continuous monitoring. Customer data remains private, is not used
            for model training, and can be removed at any time. The product is
            designed to support human judgment, not replace it.
          </p>
        </section>

        {/* 7) WHO THIS IS FOR */}
        <section className="mb-32 max-w-3xl">
          <p className="text-lg leading-8 text-zinc-700">
            VendorQ is built for SaaS teams selling to enterprise customers who
            repeatedly handle security reviews and want their answers to be
            clear, consistent, and defensible.
          </p>
        </section>

        {/* 8) SINGLE CTA */}
        <section>
          <Link
            href="/contact"
            className="inline-block text-lg font-medium text-zinc-900 underline underline-offset-8 hover:text-zinc-700"
          >
            Start a pilot evaluation
          </Link>
        </section>
      </div>
    </main>
  );
}
