import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VendorQ — Run a pilot security questionnaire",
  description:
    "VendorQ helps SaaS teams selling to enterprise customers reduce time spent on security questionnaires by reusing consistent, source-backed answers.",
};

export default function Page() {
  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Reduce time spent answering enterprise security questionnaires — so deals don’t stall.
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            VendorQ is built for{" "}
            <span className="font-medium text-zinc-900">
              SaaS teams selling to enterprise customers
            </span>
            . It helps you reuse consistent, source-backed answers that security reviewers can verify.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Run a pilot security questionnaire
            </a>
          </div>

          <p className="mt-4 text-xs leading-5 text-zinc-500">
            Early-stage product. Currently used in pilot evaluations with SaaS teams.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER (DIRECTLY AFTER HERO) */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 border-t border-zinc-200 pt-10 lg:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-zinc-900">Before VendorQ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
              <li>• Manual copy-paste across documents and spreadsheets</li>
              <li>• Inconsistent answers between customers</li>
              <li>• Security reviewers asking for clarification</li>
              <li>• Deals slowed down late in the sales cycle</li>
            </ul>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
            <h2 className="text-sm font-semibold text-zinc-900">After VendorQ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
              <li>• One source of truth for security answers</li>
              <li>• Consistent, source-backed responses</li>
              <li>• Fewer follow-up questions from reviewers</li>
              <li>• Security reviews move forward with less friction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCT FLOW */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="border-t border-zinc-200 pt-10">
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              How VendorQ works in a real deal
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              A straightforward workflow designed to support real security reviews.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <p className="text-xs font-medium text-zinc-500">Step 1</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Upload questionnaire
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Bring the customer’s security questionnaire and your internal policies.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-xs font-medium text-zinc-500">Step 2</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Reuse verified answers
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Use existing answers linked to specific policy sections.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <p className="text-xs font-medium text-zinc-500">Step 3</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Review drafts
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Review and adjust suggested answers before sharing anything.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-xs font-medium text-zinc-500">Step 4</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Export responses
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Export a reviewer-ready file with clear references.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Run a pilot security questionnaire
            </a>
          </div>
        </div>
      </section>

      {/* EARLY-STAGE TRUST */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-zinc-900">
              Early-stage, intentionally focused
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              VendorQ is an early-stage product built based on real enterprise security
              reviews. It focuses on one problem: helping teams respond to security
              questionnaires with clarity and consistency.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}