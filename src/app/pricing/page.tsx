import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pricing | VendorQ",
    description:
        "Enterprise-ready pricing for answering security questionnaires faster with consistent, source-backed responses.",
};

export default function PricingPage() {
    return (
        <main className="bg-white text-zinc-950">
            {/* Header */}
            <section className="mx-auto max-w-6xl px-6 pb-12 pt-16">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Pricing
                    </h1>
                    <p className="mt-4 text-base leading-7 text-zinc-600">
                        Close enterprise deals faster by answering security questionnaires
                        with consistent, source-backed responses.
                    </p>
                    <p className="mt-3 text-sm text-zinc-500">
                        All plans include policy uploads, evidence-backed answers, and
                        export-ready outputs.
                    </p>
                </div>
            </section>

            {/* Pricing tiers */}
            <section className="mx-auto max-w-6xl px-6 pb-16">
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Starter */}
                    <div className="rounded-xl border border-zinc-200 bg-white p-6">
                        <div>
                            <h2 className="text-lg font-semibold text-zinc-900">Starter</h2>
                            <p className="mt-1 text-sm text-zinc-600">
                                For early-stage SaaS and founder-led sales.
                            </p>
                            <p className="mt-4 text-3xl font-semibold text-zinc-900">
                                €129<span className="text-base font-normal text-zinc-600"> / month</span>
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Up to 10 questionnaires per month</li>
                            <li>• Policy uploads (PDF / DOCX)</li>
                            <li>• Answer reuse with clear sources</li>
                            <li>• Export to Excel</li>
                            <li>• Email support</li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/login"
                                className="inline-flex w-full items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                            >
                                Start Starter
                            </Link>
                        </div>
                    </div>

                    {/* Team */}
                    <div className="relative rounded-xl border-2 border-zinc-900 bg-white p-6">
                        <div className="absolute -top-3 left-6 rounded-md bg-zinc-900 px-2 py-0.5 text-xs font-medium text-white">
                            Most popular
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-zinc-900">Team</h2>
                            <p className="mt-1 text-sm text-zinc-600">
                                For teams running multiple enterprise deals.
                            </p>
                            <p className="mt-4 text-3xl font-semibold text-zinc-900">
                                €349<span className="text-base font-normal text-zinc-600"> / month</span>
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Up to 50 questionnaires per month</li>
                            <li>• 3 seats included</li>
                            <li>• Review workflow (edit &amp; approve)</li>
                            <li>• Shared answer library</li>
                            <li>• Priority support</li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/login"
                                className="inline-flex w-full items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                            >
                                Start Team
                            </Link>
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                        <div>
                            <h2 className="text-lg font-semibold text-zinc-900">Enterprise</h2>
                            <p className="mt-1 text-sm text-zinc-600">
                                For higher volume and advanced requirements.
                            </p>
                            <p className="mt-4 text-3xl font-semibold text-zinc-900">
                                Contact us
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Custom questionnaire volume</li>
                            <li>• SSO / SAML (planned)</li>
                            <li>• Custom retention &amp; deletion controls</li>
                            <li>• Audit logs (planned)</li>
                            <li>• SLA &amp; security review support</li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-flex w-full items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
                            >
                                Contact sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How billing works */}
            <section className="mx-auto max-w-6xl px-6 pb-14">
                <div className="max-w-3xl border-t border-zinc-200 pt-10">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        How billing works
                    </h2>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                        <li>• Monthly subscription, billed in advance</li>
                        <li>• Cancel anytime</li>
                        <li>• Usage is counted per questionnaire</li>
                        <li>• Re-exporting the same questionnaire does not count twice</li>
                        <li>• Prices exclude VAT where applicable</li>
                    </ul>
                </div>
            </section>

            {/* Paywall moment */}
            <section className="mx-auto max-w-6xl px-6 pb-14">
                <div className="max-w-3xl border-t border-zinc-200 pt-10">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        Where you get value
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                        Most teams try VendorQ on a real security questionnaire. The value
                        becomes clear when you export a reviewer-ready file with consistent
                        answers and exact policy references.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="max-w-3xl border-t border-zinc-200 pt-10">
                    <h2 className="text-lg font-semibold text-zinc-900">FAQ</h2>

                    <div className="mt-6 space-y-6">
                        <div>
                            <p className="text-sm font-medium text-zinc-900">
                                Is VendorQ a GRC platform?
                            </p>
                            <p className="mt-2 text-sm text-zinc-600">
                                No. VendorQ is intentionally narrow and focused on answering
                                security questionnaires. It is not a full GRC or compliance
                                management platform.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-zinc-900">
                                Do you use our data to train models?
                            </p>
                            <p className="mt-2 text-sm text-zinc-600">
                                No. Your data is stored privately and is never used for training
                                models.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-zinc-900">
                                Can I cancel anytime?
                            </p>
                            <p className="mt-2 text-sm text-zinc-600">
                                Yes. All plans are monthly and can be canceled at any time.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-zinc-900">
                                What counts as a questionnaire?
                            </p>
                            <p className="mt-2 text-sm text-zinc-600">
                                A questionnaire is a single customer-provided security review
                                document, regardless of length or format.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-zinc-900">
                                Do you support SOC 2 or ISO 27001 formats?
                            </p>
                            <p className="mt-2 text-sm text-zinc-600">
                                VendorQ works with common security questionnaire documents
                                (Excel, Word, PDF). Support for specific frameworks will expand
                                over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}