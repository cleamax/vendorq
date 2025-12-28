import type { Metadata } from "next";
import Link from "next/link";

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

          <div className="mt-8">
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

      {/* BEFORE / AFTER */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 border-t border-zinc-200 pt-10 lg:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-zinc-900">Before VendorQ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
              <li>• Copy-paste across spreadsheets, docs, and old questionnaires</li>
              <li>• Slightly different answers for the same control</li>
              <li>• “Who owns this answer?” threads and last-minute approvals</li>
              <li>• Reviewer follow-ups due to unclear wording or missing sources</li>
            </ul>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
            <h2 className="text-sm font-semibold text-zinc-900">After VendorQ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
              <li>• A shared answer library backed by your internal sources</li>
              <li>• Consistent wording across customers and deals</li>
              <li>• Clear review before anything leaves your team</li>
              <li>• Fewer clarification emails from security reviewers</li>
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
              A simple workflow: reuse what you already have, keep sources visible,
              export in a format reviewers expect.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <p className="text-xs font-medium text-zinc-500">Step 1</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Upload the questionnaire
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Add the customer file and the policies you want to reference.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-xs font-medium text-zinc-500">Step 2</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Reuse consistent answers
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Reuse approved wording linked to a specific policy section.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <p className="text-xs font-medium text-zinc-500">Step 3</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Review drafts
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Draft assistance helps, but your team reviews every answer.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-xs font-medium text-zinc-500">Step 4</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">
                Export reviewer-ready
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Export a clean file with answers and sources included.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Run a pilot security questionnaire
            </Link>
          </div>
        </div>
      </section>

      {/* EARLY-STAGE TRUST */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-zinc-900">
              Early-stage, intentionally narrow
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              VendorQ is built from real enterprise security reviews. It is not a
              full compliance platform — it focuses on one job: making questionnaire
              responses consistent, verifiable, and easier to produce under time
              pressure.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}