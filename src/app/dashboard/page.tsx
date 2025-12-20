import Link from "next/link";

export default function DashboardPage() {
    return (
        <main className="mx-auto min-h-screen max-w-6xl px-4 py-10">
            <header className="flex flex-col gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
                    <p className="mt-1 text-sm text-slate-600">
                        Placeholder app shell for Phase 1. Next: upload flows + answer generation pipeline.
                    </p>
                </div>

                <div className="flex gap-2">
                    <Link
                        href="/"
                        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                    >
                        Home
                    </Link>
                    <Link
                        href="/login"
                        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                        Logout
                    </Link>
                </div>
            </header>

            <section className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                    {
                        title: "Upload policies",
                        desc: "Add security policies, SOC 2 reports, and evidence docs.",
                    },
                    {
                        title: "Upload questionnaire",
                        desc: "Import SIG, CAIQ, or a custom spreadsheet / doc questionnaire.",
                    },
                    {
                        title: "Generate answers",
                        desc: "Draft consistent answers grounded in your uploaded evidence.",
                    },
                    {
                        title: "Export",
                        desc: "Export back to the customer’s format (CSV/XLSX/DOCX later).",
                    },
                ].map((card) => (
                    <div
                        key={card.title}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <h2 className="text-lg font-semibold tracking-tight">{card.title}</h2>
                        <p className="mt-2 text-sm text-slate-600">{card.desc}</p>

                        <button
                            type="button"
                            className="mt-4 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            Coming soon
                        </button>
                    </div>
                ))}
            </section>

            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Protected route note</p>
                <p className="mt-2 text-sm text-slate-700">
                    This page is protected by <code className="rounded bg-white px-1 py-0.5">middleware.ts</code>.
                    Until Supabase auth is wired, you’ll be redirected to <code className="rounded bg-white px-1 py-0.5">/login</code>
                    unless auth cookies exist.
                </p>
            </section>
        </main>
    );
}