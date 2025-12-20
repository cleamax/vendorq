import Link from "next/link";

function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
            VQ
          </span>
          <span>VendorQ AI</span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Login
          </Link>
          <Link
            href="#early-access"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Request early access
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} VendorQ AI</p>
        <p className="text-slate-500">Built for security, compliance, and sales velocity.</p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                Vendor security questionnaires, automated
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Answer Security Questionnaires in minutes — not days.
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                Upload your policies and past responses, then generate consistent, audit-ready answers for
                SIG, CAIQ, and custom customer questionnaires.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                    ✓
                  </span>
                  <span>
                    <span className="font-medium">Faster turnaround:</span> reduce back-and-forth and unblock deals.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                    ✓
                  </span>
                  <span>
                    <span className="font-medium">Consistent answers:</span> grounded in your policies and evidence.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                    ✓
                  </span>
                  <span>
                    <span className="font-medium">Export-ready:</span> deliver formatted outputs your customers expect.
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#early-access"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Request early access
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-6 text-xs text-slate-500">
                Early access is limited. We’ll prioritize teams actively handling vendor security reviews.
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">How it works</p>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                    Phase 1
                  </span>
                </div>

                <ol id="how" className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold">
                      1
                    </span>
                    <span>Upload policies / evidence (PDFs, docs, exports).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold">
                      2
                    </span>
                    <span>Upload the customer questionnaire (SIG/CAIQ/custom).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold">
                      3
                    </span>
                    <span>Generate answers with citations to your source docs.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold">
                      4
                    </span>
                    <span>Export to share with customers and auditors.</span>
                  </li>
                </ol>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-600">Coming next</p>
                  <p className="mt-1 text-sm text-slate-700">
                    Roles, evidence mapping, answer libraries, and secure collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section id="early-access" className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Request early access</h2>
                <p className="mt-1 text-sm text-slate-600">
                  For now this is a placeholder. We’ll wire up auth + waitlist next.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Request early access
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Go to dashboard
                </Link>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}