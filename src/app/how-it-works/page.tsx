import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How VendorQ works",
    description:
        "A calm walkthrough of how SaaS teams use VendorQ to answer enterprise security questionnaires with consistent, source-backed responses.",
};

const glance = [
    { title: "Upload", body: "Bring the questionnaire and the security material you already have." },
    { title: "Answer", body: "Reuse consistent answers linked to specific sources." },
    { title: "Review", body: "Humans review and edit before anything is shared." },
    { title: "Export", body: "Send a reviewer-ready file with sources included." },
];

const steps = [
    {
        n: "Step 1",
        title: "Upload your existing security material",
        bullets: [
            "Upload policies, prior questionnaires, and supporting documents.",
            "Treat this as your source of truth for writing answers once.",
            "Files remain private and are used to reference sources during review.",
        ],
        solves: "No more digging through old docs every time a new questionnaire arrives.",
    },
    {
        n: "Step 2",
        title: "Build a reusable answer library",
        bullets: [
            "Write an answer once and keep it consistent across customers.",
            "Link each answer to a specific source (policy section or document fragment).",
            "Reuse answers in new questionnaires without rewriting from scratch.",
        ],
        solves: "Consistency improves reviewer trust and reduces clarification loops.",
    },
    {
        n: "Step 3",
        title: "Review answers before sharing",
        bullets: [
            "Draft assistance can help with phrasing, but humans stay in control.",
            "Review and edit answers in context, including source references.",
            "Avoid vague statements by keeping answers tied to evidence.",
        ],
        solves: "Reviewers get clear, verifiable answers instead of hand-wavy language.",
    },
    {
        n: "Step 4",
        title: "Export and respond to reviewers",
        bullets: [
            "Export to a reviewer-ready format (e.g. Excel) with sources included.",
            "Respond faster without starting new email threads for every question.",
            "Keep follow-ups contained because the source is already visible.",
        ],
        solves: "Fewer back-and-forth emails and less deal slowdown in late-stage sales.",
    },
];

export default function HowItWorksPage() {
    return (
        <main className="bg-white text-zinc-950">
            {/* Header */}
            <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 sm:pt-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        How VendorQ works
                    </h1>
                    <p className="mt-4 text-base leading-7 text-zinc-600">
                        VendorQ helps teams answer security questionnaires by reusing
                        consistent, source-backed answers.
                    </p>
                    <p className="mt-5 text-sm leading-6 text-zinc-600">
                        It fits into late-stage sales workflows where security reviews can
                        stall a deal. VendorQ supports humans with organization and reuse —
                        it does not replace judgment or ownership.
                    </p>
                </div>
            </section>

            {/* Workflow at a glance */}
            <section className="mx-auto max-w-6xl px-6 pb-10">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                    <div className="max-w-2xl">
                        <p className="text-xs font-medium text-zinc-500">Overview</p>
                        <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900">
                            The workflow at a glance
                        </h2>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-4">
                        {glance.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
                            >
                                <p className="text-sm font-semibold text-zinc-900">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-zinc-600">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Step-by-step */}
            <section className="mx-auto max-w-6xl px-6 pb-16">
                <div className="space-y-6">
                    {steps.map((s, idx) => (
                        <div
                            key={s.title}
                            className={[
                                "rounded-2xl border border-zinc-200 p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]",
                                idx % 2 === 0 ? "bg-white" : "bg-zinc-50",
                            ].join(" ")}
                        >
                            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                                <div className="lg:col-span-4">
                                    <p className="text-xs font-medium text-zinc-500">{s.n}</p>
                                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900">
                                        {s.title}
                                    </h3>
                                </div>

                                <div className="lg:col-span-8">
                                    <ul className="space-y-2 text-sm leading-6 text-zinc-700">
                                        {s.bullets.map((b) => (
                                            <li key={b}>• {b}</li>
                                        ))}
                                    </ul>

                                    <div className="mt-4 rounded-lg border border-zinc-200 bg-white/60 p-4">
                                        <p className="text-xs font-medium text-zinc-500">
                                            What this solves
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-zinc-700">
                                            {s.solves}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What it is / isn't */}
            <section className="bg-zinc-50">
                <div className="mx-auto max-w-6xl px-6 py-14">
                    <div className="max-w-2xl">
                        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                            What VendorQ does — and what it doesn’t
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-zinc-600">
                            The product is intentionally narrow so it stays useful during real
                            enterprise reviews.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 lg:grid-cols-2">
                        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                VendorQ helps with
                            </h3>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                                <li>• Reusing consistent answers across customers</li>
                                <li>• Linking answers to sources for verification</li>
                                <li>• Reducing back-and-forth with reviewers</li>
                                <li>• Exporting responses in reviewer-ready formats</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                VendorQ does not try to do
                            </h3>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                                <li>• Run a full GRC program</li>
                                <li>• Automate audits or continuous compliance monitoring</li>
                                <li>• Replace ownership or security judgment</li>
                                <li>• Act as a compliance dashboard for the whole company</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who it’s for + CTA */}
            <section className="mx-auto max-w-6xl px-6 pb-20 pt-14">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-7">
                        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                            Who this workflow is for
                        </h2>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• SaaS teams selling to enterprise customers</li>
                            <li>• Founder-led or small sales teams handling questionnaires themselves</li>
                            <li>• Teams seeing deals slow down during security review</li>
                        </ul>
                        <p className="mt-4 text-sm leading-6 text-zinc-600">
                            If you are running a full compliance program, this is likely not
                            the right tool.
                        </p>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                            <h3 className="text-sm font-semibold text-zinc-900">
                                Try it on one real questionnaire
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-zinc-600">
                                Most teams understand the fit after running VendorQ on a single
                                customer file.
                            </p>
                            <div className="mt-6">
                                <Link
                                    href="/pricing"
                                    className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                                >
                                    See pricing
                                </Link>
                            </div>
                            <p className="mt-3 text-xs leading-5 text-zinc-500">
                                No sales pitch. We focus on fit and workflow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}