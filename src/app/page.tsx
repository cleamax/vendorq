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
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-36">
        {/* OPENING STATEMENT */}
        <section className="mb-32">
          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Enterprise security reviews fail when answers lack consistency.
          </h1>
        </section>

        {/* CONTEXT */}
        <section className="mb-40 max-w-3xl">
          <p className="text-lg leading-9 text-zinc-700">
            Security questionnaires exist to assess risk and establish trust.
            In practice, they slow down deals because answers are scattered,
            rewritten for every customer, and difficult to verify. The issue is
            rarely missing controls. It is unclear and inconsistent responses.
          </p>
        </section>

        {/* STATEMENT MOMENT */}
        <section className="mb-44">
          <p className="text-3xl font-medium leading-snug tracking-tight text-zinc-900">
            Consistency is a security control.
          </p>
        </section>

        {/* WHAT VENDORQ IS */}
        <section className="mb-40 max-w-3xl">
          <p className="text-xl leading-9 text-zinc-900">
            VendorQ is a system for producing consistent, source-backed answers
            to enterprise security questionnaires.
          </p>
          <p className="mt-10 text-lg leading-9 text-zinc-700">
            It defines how answers are written, reviewed, and reused. Each
            response is tied to a concrete internal source, giving security
            reviewers something specific they can evaluate and trust.
          </p>
        </section>

        {/* VISUAL ANCHOR */}
        <section className="mb-44">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-8 py-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="space-y-6 text-sm text-zinc-800">
              <p className="font-medium text-zinc-900">
                Questionnaire excerpt
              </p>
              <p className="leading-7">
                <span className="block text-xs uppercase tracking-wide text-zinc-500">
                  Question
                </span>
                How is customer data encrypted at rest?
              </p>
              <p className="leading-7">
                <span className="block text-xs uppercase tracking-wide text-zinc-500">
                  Answer
                </span>
                Customer data is encrypted at rest using managed storage
                encryption with restricted access controls.
              </p>
              <p className="leading-7">
                <span className="block text-xs uppercase tracking-wide text-zinc-500">
                  Source
                </span>
                Information Security Policy §7.2
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-44 max-w-3xl">
          <ol className="space-y-16">
            <li>
              <div className="text-4xl font-medium text-zinc-900">1</div>
              <p className="mt-6 text-lg leading-9 text-zinc-700">
                Receive an enterprise security questionnaire.
              </p>
            </li>
            <li>
              <div className="text-4xl font-medium text-zinc-900">2</div>
              <p className="mt-6 text-lg leading-9 text-zinc-700">
                Attach internal policies and documents as sources.
              </p>
            </li>
            <li>
              <div className="text-4xl font-medium text-zinc-900">3</div>
              <p className="mt-6 text-lg leading-9 text-zinc-700">
                Produce consistent answers tied to those sources.
              </p>
            </li>
            <li>
              <div className="text-4xl font-medium text-zinc-900">4</div>
              <p className="mt-6 text-lg leading-9 text-zinc-700">
                Reuse and refine answers over time.
              </p>
            </li>
          </ol>
        </section>

        {/* TRUST & SCOPE */}
        <section className="mb-44 max-w-3xl">
          <p className="text-lg leading-9 text-zinc-700">
            VendorQ is intentionally narrow. It focuses on answering security
            questionnaires, not on running full compliance programs or
            continuous monitoring. Customer data remains private, is not used
            for training, and can be deleted at any time.
          </p>
        </section>

        {/* WHO IT IS FOR */}
        <section className="mb-56 max-w-3xl">
          <p className="text-lg leading-9 text-zinc-700">
            VendorQ is built for SaaS teams selling to enterprise customers who
            repeatedly handle security reviews and need their answers to be
            clear, consistent, and defensible.
          </p>
        </section>

        {/* CTA */}
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