import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | VendorQ",
    description:
        "Get in touch with VendorQ. Exploratory conversations about security questionnaires and sales workflows.",
};

export default function ContactPage() {
    return (
        <main className="bg-white text-zinc-950">
            <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
                <div className="grid gap-12 md:grid-cols-2">
                    {/* LEFT: Context & qualification */}
                    <div>
                        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                            Contact
                        </h1>
                        <p className="mt-4 text-base leading-7 text-zinc-600">
                            Get in touch if security questionnaires are slowing down your sales
                            process.
                        </p>

                        <p className="mt-4 text-sm leading-6 text-zinc-600 max-w-prose">
                            VendorQ is an early-stage product. Conversations are exploratory
                            and focused on understanding whether there is a real fit — not on
                            pitching or pressure.
                        </p>

                        {/* When it makes sense */}
                        <div className="mt-10">
                            <h2 className="text-lg font-semibold text-zinc-900">
                                When it makes sense to contact us
                            </h2>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                                <li>• You regularly answer security questionnaires for enterprise customers</li>
                                <li>• Security reviews slow down late-stage deals</li>
                                <li>• You want consistent, source-backed answers</li>
                                <li>• You are evaluating whether VendorQ fits your workflow</li>
                            </ul>
                        </div>

                        {/* When it probably doesn't */}
                        <div className="mt-8">
                            <h2 className="text-lg font-semibold text-zinc-900">
                                When it probably doesn’t
                            </h2>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                                <li>• You are looking for a full GRC or compliance platform</li>
                                <li>• You do not deal with customer security questionnaires</li>
                                <li>• You need enterprise-wide compliance automation today</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT: Contact form */}
                    <div>
                        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-zinc-900"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-zinc-900"
                                    >
                                        Work email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-zinc-900"
                                    >
                                        Company <span className="text-zinc-500">(optional)</span>
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-zinc-900"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                                    >
                                        Send message
                                    </button>
                                </div>

                                <p className="hidden text-sm text-zinc-600">
                                    Thanks — we’ll get back to you shortly.
                                </p>
                            </form>
                        </div>

                        {/* What happens next */}
                        <div className="mt-6 text-sm leading-6 text-zinc-600">
                            <p className="font-medium text-zinc-900">What happens next</p>
                            <ul className="mt-2 space-y-1">
                                <li>• We usually respond within 1–2 business days</li>
                                <li>• We may ask a few follow-up questions</li>
                                <li>• If VendorQ isn’t a fit, we’ll tell you directly</li>
                            </ul>
                        </div>

                        {/* Alternative contact */}
                        <div className="mt-6 text-sm text-zinc-500">
                            Or email us directly at{" "}
                            <a
                                href="mailto:hello@vendorq.com"
                                className="underline hover:text-zinc-700"
                            >
                                hello@vendorq.com
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}