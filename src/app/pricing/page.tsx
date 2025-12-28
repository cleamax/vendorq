import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pricing | VendorQ",
    description:
        "Close enterprise deals faster by answering security questionnaires with consistent, source-backed responses. Pilot-friendly plans for SaaS teams.",
};

export default function PricingPage() {
    return (
        <main className="bg-white text-zinc-950">
            {/* Header */}
            <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 sm:pt-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Pricing
                    </h1>

                    <p className="mt-4 text-base leading-7 text-zinc-600">
                        Close enterprise deals faster by answering security questionnaires
                        with consistent, source-backed responses.
                    </p>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                        All plans include policy uploads, evidence-backed answers, and
                        export-ready outputs.
                    </p>

                    <p className="mt-5 text-sm text-zinc-500">
                        Pilot-friendly pricing. If VendorQ isn’t a fit for your workflow, we
                        will tell you directly.
                    </p>
                </div>
            </section>

            {/* Pricing tiers */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Starter */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                        <h2 className="text-lg font-semibold text-zinc-900">Starter</h2>
                        <p className="mt-1 text-sm text-zinc-600">
                            For early-stage SaaS and founder-led sales.
                        </p>

                        <p className="mt-5 text-3xl font-semibold text-zinc-900">
                            €129{" "}
                            <span className="text-base font-normal text-zinc-600">/ month</span>
                        </p>

                        <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Up to 10 questionnaires / month</li>
                            <li>• Policy uploads (PDF/DOCX)</li>
                            <li>• Answer reuse + sources</li>
                            <li>• Export to Excel</li>
                            <li>• Email support</li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-flex w-full items-center justify-center rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                            >
                                Run a pilot security questionnaire
                            </Link>
                        </div>
                    </div>

                    {/* Team */}
                    <div className="relative rounded-2xl border-2 border-zinc-900 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                        <div className="absolute -top-3 left-6 rounded-md bg-zinc-900 px-2 py-0.5 text-xs font-medium text-white">
                            Most popular
                        </div>

                        <h2 className="text-lg font-semibold text-zinc-900">Team</h2>
                        <p className="mt-1 text-sm text-zinc-600">
                            For teams running multiple enterprise deals.
                        </p>

                        <p className="mt-5 text-3xl font-semibold text-zinc-900">
                            €349{" "}
                            <span className="text-base font-normal text-zinc-600">/ month</span>
                        </p>

                        <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Up to 50 questionnaires / month</li>
                            <li>• 3 seats included</li>
                            <li>• Review workflow (edit + approve)</li>
                            <li>• Shared answer library</li>
                            <li>• Priority support</li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-flex w-full items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                            >
                                Run a pilot security questionnaire
                            </Link>
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                        <h2 className="text-lg font-semibold text-zinc-900">Enterprise</h2>
                        <p className="mt-1 text-sm text-zinc-600">
                            For higher volume or additional requirements.
                        </p>

                        <p className="mt-5 text-3xl font-semibold text-zinc-900">
                            Contact us
                        </p>

                        <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Custom volume</li>
                            <li>• SSO/SAML (planned)</li>
                            <li>• Custom retention & deletion controls</li>
                            <li>• Audit logs (planned)</li>
                            <li>• SLA & security review support</li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-flex w-full items-center justify-center rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                            >
                                Run a pilot security questionnaire
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Billing */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        How billing works
                    </h2>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>• Monthly subscription</li>
                        <li>• Cancel anytime</li>
                        <li>• VAT may apply depending on your location</li>
                        <li>• Usage is counted per questionnaire</li>
                        <li>• Re-exporting the same questionnaire does not count twice</li>
                    </ul>
                </div>
            </section>

            {/* Value moment */}
            <section className="mx-auto max-w-6xl px-6 pb-12">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        Where you get value
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-700">
                        Most teams try VendorQ on a real questionnaire. The value shows up
                        when you export a reviewer-ready file with sources — and your answers
                        stay consistent the next time a similar questionnaire arrives.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                    <h2 className="text-lg font-semibold text-zinc-900">FAQ</h2>

                    <div className="mt-6 space-y-4">
                        <div>
                            <p className="text-sm font-semibold text-zinc-900">
                                Is VendorQ a GRC platform?
                            </p>
                            <p className="mt-1 text-sm leading-6 text-zinc-600">
                                No. VendorQ is intentionally narrow: it helps vendors answer
                                customer security questionnaires with consistent, source-backed
                                responses.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-zinc-900">
                                Do you use our data to train models?
                            </p>
                            <p className="mt-1 text-sm leading-6 text-zinc-600">
                                No. Customer data is not used for training.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-zinc-900">
                                Can I cancel anytime?
                            </p>
                            <p className="mt-1 text-sm leading-6 text-zinc-600">
                                Yes. Plans are monthly and can be canceled at any time.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-zinc-900">
                                What counts as a questionnaire?
                            </p>
                            <p className="mt-1 text-sm leading-6 text-zinc-600">
                                One customer questionnaire file or form you complete and export
                                as a response. Re-exporting the same questionnaire does not count
                                twice.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-zinc-900">
                                Do you support SOC 2 / ISO 27001 formats?
                            </p>
                            <p className="mt-1 text-sm leading-6 text-zinc-600">
                                VendorQ works with common document formats used in enterprise
                                reviews (such as spreadsheets and policy documents). Coverage
                                expands over time based on pilot feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
