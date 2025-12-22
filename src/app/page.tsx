import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VendorQ — Evaluate one security questionnaire",
  description:
    "VendorQ helps SaaS teams selling to enterprise customers answer security questionnaires faster with consistent, source-backed responses.",
};

export default function Page() {
  return (
    <main className="bg-white text-zinc-950">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-zinc-600">VendorQ</p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Answer enterprise security questionnaires faster — so deals keep moving.
            </h1>

            <p className="mt-4 text-base leading-7 text-zinc-600">
              Built for <span className="font-medium text-zinc-900">SaaS teams selling to enterprise customers</span>{" "}
              who need consistent, source-backed answers that security reviewers can verify quickly.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
              >
                Evaluate one questionnaire with VendorQ
              </a>

              <a
                href="#not-for-everyone"
                className="text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900"
              >
                See if it fits
              </a>
            </div>

            <div className="mt-6 text-xs leading-5 text-zinc-500">
              Early-stage product. Currently used in pilot evaluations with SaaS teams.
            </div>
          </div>

          {/* Realistic artefact (replaces generic mock UI) */}
          <div className="lg:mt-2">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-zinc-700">Security Questionnaire Fragment</p>
                  <p className="mt-1 text-xs text-zinc-500">Customer: Enterprise Security Review</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-zinc-700">Reuse</p>
                  <p className="mt-1 text-xs text-zinc-500">Used in 14 previous questionnaires</p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-medium text-zinc-700">Q-7.2 Encryption at Rest</p>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
                    Confidence: High
                  </span>
                </div>

                <div className="mt-3 space-y-3">
                  <div className="text-xs text-zinc-600">
                    <p className="font-medium text-zinc-700">Question</p>
                    <pre className="mt-1 whitespace-pre-wrap rounded-md bg-zinc-50 p-3 font-mono text-[12px] leading-5 text-zinc-800">
                      {`Do you encrypt customer data at rest? If yes, specify the encryption standard and key management approach.`}
                    </pre>
                  </div>

                  <div className="text-xs text-zinc-600">
                    <p className="font-medium text-zinc-700">Answer</p>
                    <pre className="mt-1 whitespace-pre-wrap rounded-md bg-zinc-50 p-3 font-mono text-[12px] leading-5 text-zinc-800">
                      {`Yes. Customer data is encrypted at rest using AES-256.
Encryption keys are managed via a centralized KMS with rotation policies and access controls enforced by least privilege.`}
                    </pre>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-3">
                    <p className="text-xs text-zinc-600">
                      <span className="font-medium text-zinc-700">Source:</span>{" "}
                      <span className="font-medium text-zinc-900">Information Security Policy §7.2</span>
                      <span className="text-zinc-500"> (Encryption at Rest)</span>
                    </p>
                    <p className="text-xs text-zinc-500">Last used: 2025-11-18</p>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-zinc-500">
                Dry by intention: this is the exact kind of material security reviewers expect to see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1) Strong focus statement (point of view) */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="border-t border-zinc-200 pt-6">
          <p className="max-w-3xl text-sm font-semibold leading-6 text-zinc-900">
            VendorQ is built for one thing: answering enterprise security questionnaires with consistent, source-backed
            responses—so security review doesn’t become the reason a deal slips.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600">
            If you want a full compliance platform or continuous monitoring, VendorQ is not that product.
          </p>
        </div>
      </section>

      {/* 4) Benefits (sharpened, concrete outcomes) */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-8 border-t border-zinc-200 pt-10 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-zinc-900">Stop rewriting the same answers</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Reuse approved responses across customers and keep language consistent when your team is moving fast.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900">Reduce back-and-forth with reviewers</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Include a clear policy reference with each answer so security teams can verify quickly without extra emails.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900">Move reviews forward with fewer stalls</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Respond when questionnaires arrive late in the cycle—without relying on one person to “know where the doc is.”
            </p>
          </div>
        </div>
      </section>

      {/* Visual product understanding (static flow) */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="border-t border-zinc-200 pt-10">
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">How VendorQ fits into a real deal</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              A simple workflow: reuse verified answers with sources, then export a reviewer-ready response.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <p className="text-xs font-medium text-zinc-500">Step 1</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">Upload questionnaire</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Bring the customer’s spreadsheet or document and your existing policies.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-xs font-medium text-zinc-500">Step 2</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">Reuse verified answers</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Use consistent responses linked to policy sections and supporting material.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <p className="text-xs font-medium text-zinc-500">Step 3</p>
              <p className="mt-1 text-sm font-semibold text-zinc-900">Export reviewer-ready</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Share a clean export with sources to reduce follow-ups and delays.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Evaluate one questionnaire with VendorQ
            </a>
          </div>
        </div>
      </section>

      {/* What security reviewers actually expect */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="border-t border-zinc-200 pt-10">
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              What security reviewers actually expect
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Most security reviews fail not because of missing controls, but because of unclear answers.
            </p>
          </div>

          <ul className="mt-6 max-w-2xl space-y-2 text-sm leading-6 text-zinc-700">
            <li>• Clear, unambiguous answers that map to the question</li>
            <li>• Exact policy references (not “we do this” without a source)</li>
            <li>• Consistency across responses and customers</li>
            <li>• No vague or hand-wavy language</li>
            <li>• Fast follow-ups without long email threads</li>
          </ul>
        </div>
      </section>

      {/* Before vs After VendorQ */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="border-t border-zinc-200 pt-10">
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Before and after VendorQ</h2>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-zinc-900">Before VendorQ</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Answers spread across Google Docs and spreadsheets</li>
                <li>• Copy-pasting the same responses for every customer</li>
                <li>• Slack messages like “Who owns this answer?”</li>
                <li>• Follow-up emails asking for clarification</li>
              </ul>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-900">After VendorQ</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• One source of truth for security answers</li>
                <li>• Reused answers with clear sources</li>
                <li>• Clear ownership and consistent wording</li>
                <li>• Fewer clarification emails from reviewers</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Evaluate one questionnaire with VendorQ
            </a>
          </div>
        </div>
      </section>

      {/* Mini Data & Trust block */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-zinc-900">Your data stays yours</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
              <li>• Stored privately</li>
              <li>• Not used for training</li>
              <li>• You control retention</li>
              <li>• Delete anytime</li>
            </ul>
            <p className="mt-3 text-xs leading-5 text-zinc-500">Built for enterprise security reviews.</p>
          </div>
        </div>
      </section>

      {/* Explicit "Who this is NOT for" */}
      <section id="not-for-everyone" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">VendorQ is not for everyone</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              This product is intentionally narrow. That’s the point.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-900">VendorQ is NOT for</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Teams shopping for a full GRC platform</li>
                <li>• Continuous compliance monitoring or agent-based evidence collection</li>
                <li>• Large enterprises with dedicated audit and compliance departments</li>
              </ul>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-zinc-900">VendorQ is for</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• SaaS teams selling to enterprise customers</li>
                <li>• Founders or sales teams answering questionnaires themselves</li>
                <li>• Deals blocked or slowed down by security reviews</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Evaluate one questionnaire with VendorQ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}