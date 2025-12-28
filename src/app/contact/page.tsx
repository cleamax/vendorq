import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
    title: "Contact | VendorQ",
    description:
        "Discuss a real enterprise security questionnaire and evaluate whether VendorQ fits your sales workflow.",
};

export default function ContactPage() {
    return (
        <main className="bg-white text-zinc-950">
            <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-20">
                <div className="grid gap-12 md:grid-cols-2">
                    {/* LEFT: Context & qualification */}
                    <div>
                        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                            Contact
                        </h1>

                        <p className="mt-4 text-base leading-7 text-zinc-600">
                            Discuss a real enterprise security questionnaire and evaluate
                            whether VendorQ fits your workflow.
                        </p>

                        <p className="mt-4 max-w-prose text-sm leading-6 text-zinc-600">
                            VendorQ is early-stage. Conversations are exploratory and focused
                            on fit — not on pressure or demos. If VendorQ isn’t right for your
                            workflow, we’ll tell you directly.
                        </p>

                        {/* When it makes sense */}
                        <div className="mt-10">
                            <h2 className="text-lg font-semibold text-zinc-900">
                                When it makes sense to contact us
                            </h2>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                                <li>• You regularly answer security questionnaires for enterprise customers</li>
                                <li>• Security reviews slow down late-stage sales conversations</li>
                                <li>• You want consistent, source-backed answers</li>
                                <li>• You want to evaluate VendorQ on one real questionnaire</li>
                            </ul>
                        </div>

                        {/* When it probably doesn’t */}
                        <div className="mt-8">
                            <h2 className="text-lg font-semibold text-zinc-900">
                                When it probably doesn’t
                            </h2>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                                <li>• You are looking for a full GRC or compliance platform</li>
                                <li>• You don’t deal with customer security questionnaires</li>
                                <li>• You need enterprise-wide compliance automation today</li>
                            </ul>
                        </div>

                        <div className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                            <p className="text-sm font-semibold text-zinc-900">
                                What to include (to make this useful)
                            </p>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                                <li>• What kind of customers you sell to (enterprise / mid-market)</li>
                                <li>• The format you receive (Excel, portal, doc)</li>
                                <li>• Whether you have policies available to reference</li>
                                <li>• A short example of the bottleneck (clarification loops, ownership, speed)</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: Form */}
                    <div>
                        <ContactForm />

                        {/* What happens next */}
                        <div className="mt-6 text-sm leading-6 text-zinc-600">
                            <p className="font-medium text-zinc-900">What happens next</p>
                            <ul className="mt-2 space-y-1">
                                <li>• We typically respond within 1–2 business days</li>
                                <li>• We may ask a few follow-up questions</li>
                                <li>• If VendorQ isn’t a fit, we’ll tell you directly</li>
                            </ul>
                        </div>

                        {/* Alternative contact */}
                        <div className="mt-6 text-sm text-zinc-500">
                            Or email us directly at{" "}
                            <a
                                href="mailto:security@vendorq.app"
                                className="underline underline-offset-4 hover:text-zinc-700"
                            >
                                security@vendorq.app
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}