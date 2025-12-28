import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pricing | VendorQ",
    description:
        "Pilot-friendly pricing for SaaS teams selling to enterprise customers. Evaluate VendorQ on a real security questionnaire.",
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
                        VendorQ is evaluated through real security questionnaires — not demos.
                    </p>
                    <p className="mt-3 text-sm text-zinc-500">
                        All plans are designed for pilot usage and early-stage adoption. If
                        VendorQ is not a fit for your workflow, we will tell you directly.
                    </p>
                </div>
            </section>

            {/* Pricing tiers */}
            <section className="mx-auto max-w-6xl px-6 pb-16">
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Starter */}
                    <div className="rounded-xl border border-zinc-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-zinc-900">Starter</h2>
                        <p className="mt-1 text-sm text-zinc-600">
                            Founder-led or early-stage SaaS teams.
                        </p>

                        <p className="mt-4 text-3xl font-semibold text-zinc-900">
                            €129 <span className="text-base font-normal text-zinc-600">/ month</span>
                        </p>

                        <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Up to 10 questionnaires per month</li>
                            <li>• Policy uploads (PDF / DOCX)</li>
                            <li>• Reusable answers with source references</li>
                            <li>• Export to Excel</li>
                            <li>• Email support</li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-flex w-full items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                            >
                                Run a pilot security questionnaire
                            </Link>
                        </div>
                    </div>

                    {/* Team */}
                    <div className="relative rounded-xl border-2 border-zinc-900 bg-white p-6">
                        <div className="absolute -top-3 left-6 rounded-md bg-zinc-900 px-2 py-0.5 text-xs font-medium text-white">
                            Most common pilot
                        </div>

                        <h2 className="text-lg font-semibold text-zinc-900">Team</h2>
                        <p className="mt-1 text-sm text-zinc-600">
                            Teams running multiple enterprise deals in parallel.
                        </p>

                        <p className="mt-4 text-3xl font-semibold text-zinc-900">
                            €349 <span className="text-base font-normal text-zinc-600">/ month</span>
                        </p>

                        <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Up to 50 questionnaires per month</li>
                            <li>• 3 seats included</li>
                            <li>• Review workflow (edit & approve)</li>
                            <li>• Shared answer library</li>
                            <li>• Priority support during pilot</li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-flex w-full items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                            >
                                Run a pilot security questionnaire
                            </Link>
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                        <h2 className="text-lg font-semibold text-zinc-900">Enterprise</h2>
                        <p className="mt-1 text-sm text-zinc-600">
                            Higher volume or advanced requirements.
                        </p>

                        <p className="mt-4 text-3xl font-semibold text-zinc-900">
                            Contact us
                        </p>

                        <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Custom questionnaire volume</li>
                            <li>• SSO / SAML (planned)</li>
                            <li>• Custom retention & deletion</li>
                            <li>• Audit logs (planned)</li>
                            <li>• SLA & security review support</li>
                        </ul>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-flex w-full items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
                            >
                                Discuss an enterprise pilot
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}