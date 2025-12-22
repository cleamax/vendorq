import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How VendorQ works | VendorQ",
    description:
        "A practical walkthrough of how VendorQ helps SaaS teams answer enterprise security questionnaires.",
};

export default function HowItWorksPage() {
    return (
        <main className="bg-white text-zinc-950">
            {/* Header */}
            <section className="mx-auto max-w-6xl px-6 pb-14 pt-16">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        How VendorQ works
                    </h1>
                    <p className="mt-4 text-base leading-7 text-zinc-600">
                        VendorQ helps teams answer security questionnaires by reusing
                        consistent, source-backed answers.
                    </p>
                    <p className="mt-4 text-sm leading-6 text-zinc-600">
                        VendorQ fits into late-stage sales workflows where security reviews
                        can slow deals down. It supports humans doing the work — it does not
                        replace ownership or judgment.
                    </p>
                </div>
            </section>

            {/* Workflow at a glance */}
            <section className="bg-zinc-50">
                <div className="mx-auto max-w-6xl px-6 py-12">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        The workflow at a glance
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-4">
                        {[
                            "Upload",
                            "Answer",
                            "Review",
                            "Export",
                        ].map((step, idx) => (
                            <div
                                key={step}
                                className="rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700"
                            >
                                <p className="text-xs font-medium text-zinc-500">
                                    Step {idx + 1}
                                </p>
                                <p className="mt-1 font-medium text-zinc-900">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Step 1 */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="max-w-3xl">
                    <p className="text-xs font-medium text-zinc-500">Step 1</p>
                    <h2 className="mt-1 text-lg font-semibold text-zinc-900">
                        Upload your existing security material
                    </h2>

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>• Upload internal security policies and documentation</li>
                        <li>• Add customer-provided questionnaires</li>
                        <li>• Include supporting evidence if needed</li>
                        <li>• Files remain private and isolated to your account</li>
                    </ul>

                    <p className="mt-4 text-sm text-zinc-600">
                        <span className="font-medium text-zinc-900">What this solves:</span>{" "}
                        no more searching through old folders or past deals to find the
                        right document.
                    </p>
                </div>
            </section>

            {/* Step 2 */}
            <section className="bg-zinc-50">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="max-w-3xl">
                        <p className="text-xs font-medium text-zinc-500">Step 2</p>
                        <h2 className="mt-1 text-lg font-semibold text-zinc-900">
                            Build a reusable answer library
                        </h2>

                        <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Write answers once instead of per customer</li>
                            <li>• Link each answer to a specific policy or source</li>
                            <li>• Reuse answers across multiple questionnaires</li>
                        </ul>

                        <p className="mt-4 text-sm text-zinc-600">
                            <span className="font-medium text-zinc-900">What this solves:</span>{" "}
                            consistent answers and significantly less manual copy-paste work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step 3 */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="max-w-3xl">
                    <p className="text-xs font-medium text-zinc-500">Step 3</p>
                    <h2 className="mt-1 text-lg font-semibold text-zinc-900">
                        Review answers before sharing
                    </h2>

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>• AI can assist with drafting responses where helpful</li>
                        <li>• Humans review and edit every answer</li>
                        <li>• Sources remain visible for each response</li>
                    </ul>

                    <p className="mt-4 text-sm text-zinc-600">
                        <span className="font-medium text-zinc-900">What this solves:</span>{" "}
                        no vague or hand-wavy answers sent to security reviewers.
                    </p>
                </div>
            </section>

            {/* Step 4 */}
            <section className="bg-zinc-50">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="max-w-3xl">
                        <p className="text-xs font-medium text-zinc-500">Step 4</p>
                        <h2 className="mt-1 text-lg font-semibold text-zinc-900">
                            Export and respond to reviewers
                        </h2>

                        <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Export answers to Excel or document formats</li>
                            <li>• Reviewer-ready structure with sources included</li>
                            <li>• Faster follow-ups when questions come back</li>
                        </ul>

                        <p className="mt-4 text-sm text-zinc-600">
                            <span className="font-medium text-zinc-900">What this solves:</span>{" "}
                            fewer back-and-forth emails and shorter security review cycles.
                        </p>
                    </div>
                </div>
            </section>

            {/* What it does / doesn’t */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
                    <div>
                        <h2 className="text-lg font-semibold text-zinc-900">
                            VendorQ helps with
                        </h2>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Answering security questionnaires faster</li>
                            <li>• Maintaining consistent responses across customers</li>
                            <li>• Linking answers to internal sources</li>
                            <li>• Reducing manual work during sales cycles</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-zinc-900">
                            VendorQ does not try to do
                        </h2>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Replace full compliance programs</li>
                            <li>• Act as a GRC or audit management system</li>
                            <li>• Automatically approve or submit answers</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Who it’s for */}
            <section className="bg-zinc-50">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="max-w-3xl">
                        <h2 className="text-lg font-semibold text-zinc-900">
                            Who this workflow is for
                        </h2>

                        <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• SaaS teams selling to enterprise customers</li>
                            <li>• Founder-led or small sales teams</li>
                            <li>• Deals slowed down by security reviews</li>
                        </ul>

                        <p className="mt-4 text-sm text-zinc-600">
                            If you are running full compliance programs or continuous
                            monitoring, this is likely not the right tool.
                        </p>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="max-w-3xl">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        Clear answers, fewer delays
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                        VendorQ is designed to make security reviews predictable and easier
                        to manage — without adding unnecessary process.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                        >
                            See pricing
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}