import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Security | VendorQ",
    description:
        "How VendorQ handles data, access, and security for enterprise security questionnaire workflows.",
};

export default function SecurityPage() {
    return (
        <main className="bg-white text-zinc-950">
            {/* HERO + TRUST SUMMARY */}
            <section className="mx-auto max-w-6xl px-6 pb-16 pt-16">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Security at VendorQ
                    </h1>
                    <p className="mt-4 text-base leading-7 text-zinc-600">
                        Built for enterprise security reviews. Calm, private, and controlled.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Private storage by default",
                            desc: "Customer data is isolated and not shared between tenants.",
                        },
                        {
                            title: "Encryption in transit",
                            desc: "All traffic is protected using HTTPS and TLS.",
                        },
                        {
                            title: "Tenant isolation",
                            desc: "Row Level Security enforces strict separation of customer data.",
                        },
                        {
                            title: "Customer-controlled retention",
                            desc: "You control when documents and accounts are deleted.",
                        },
                        {
                            title: "Not used for training",
                            desc: "Customer data is not used to train language models.",
                        },
                        {
                            title: "Delete anytime",
                            desc: "Documents and associated data can be removed on request.",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-lg border border-zinc-200 bg-white p-4"
                        >
                            <p className="text-sm font-medium text-zinc-900">{item.title}</p>
                            <p className="mt-1 text-sm text-zinc-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* DATA FLOW */}
            <section className="bg-zinc-50">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        Data flow overview
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-5">
                        {[
                            {
                                step: "Upload",
                                desc: "Documents are uploaded through the browser using encrypted connections.",
                            },
                            {
                                step: "Store",
                                desc: "Files are stored in private, managed infrastructure.",
                            },
                            {
                                step: "Process",
                                desc: "Server-side processing extracts structured text.",
                            },
                            {
                                step: "Generate",
                                desc: "Language models assist with drafting answers using limited context.",
                            },
                            {
                                step: "Export / Delete",
                                desc: "Customers export reviewer-ready files or delete their data.",
                            },
                        ].map((item, index) => (
                            <div
                                key={item.step}
                                className="rounded-lg border border-zinc-200 bg-white p-4"
                            >
                                <p className="text-xs font-medium text-zinc-500">
                                    Step {index + 1}
                                </p>
                                <p className="mt-1 text-sm font-medium text-zinc-900">
                                    {item.step}
                                </p>
                                <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 max-w-3xl text-sm text-zinc-600">
                        Processing happens server-side. Sensitive documents and keys are not
                        exposed to the client.
                    </p>
                </div>
            </section>

            {/* WHAT WE DO / WHAT WE DON’T */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="text-lg font-semibold text-zinc-900">
                            What we do
                        </h2>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Store customer documents privately</li>
                            <li>• Enforce tenant isolation via Row Level Security</li>
                            <li>• Encrypt data in transit</li>
                            <li>• Allow export and deletion of customer data</li>
                            <li>• Restrict internal access based on role and necessity</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-zinc-900">
                            What we don’t do
                        </h2>
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                            <li>• Train language models on customer data</li>
                            <li>• Sell or share customer information</li>
                            <li>• Provide public access to private documents</li>
                            <li>• Retain data after confirmed deletion</li>
                            <li>• Claim certifications we do not yet hold</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECURITY CONTROLS */}
            <section className="bg-zinc-50">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        Security controls
                    </h2>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Authentication",
                                items: [
                                    "Email-based authentication via Supabase",
                                    "Session-based access control",
                                ],
                            },
                            {
                                title: "Authorization",
                                items: [
                                    "Row Level Security (RLS)",
                                    "Tenant-isolated data access",
                                ],
                            },
                            {
                                title: "Encryption",
                                items: [
                                    "HTTPS / TLS for data in transit",
                                    "Managed encrypted storage at rest",
                                ],
                            },
                            {
                                title: "Retention & deletion",
                                items: [
                                    "Customer-controlled document deletion",
                                    "Account-level data removal",
                                ],
                            },
                            {
                                title: "AI usage",
                                items: [
                                    "Draft assistance only",
                                    "Human review required before export",
                                ],
                            },
                            {
                                title: "Subprocessors",
                                items: [
                                    "Vercel, Supabase, OpenAI",
                                    "Purpose-limited data usage",
                                ],
                            },
                        ].map((card) => (
                            <div
                                key={card.title}
                                className="rounded-lg border border-zinc-200 bg-white p-5"
                            >
                                <p className="text-sm font-medium text-zinc-900">
                                    {card.title}
                                </p>
                                <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                                    {card.items.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DETAILS */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <h2 className="text-lg font-semibold text-zinc-900">
                    Additional details
                </h2>

                <div className="mt-6 max-w-3xl space-y-4">
                    <details className="rounded-lg border border-zinc-200 p-4">
                        <summary className="cursor-pointer text-sm font-medium text-zinc-900">
                            AI and language model usage
                        </summary>
                        <p className="mt-3 text-sm text-zinc-600">
                            Language models assist with drafting answers. Users review and
                            approve all content before export. Customer data is not used for
                            training, and only necessary context is shared.
                        </p>
                    </details>

                    <details className="rounded-lg border border-zinc-200 p-4">
                        <summary className="cursor-pointer text-sm font-medium text-zinc-900">
                            Compliance and certifications
                        </summary>
                        <p className="mt-3 text-sm text-zinc-600">
                            VendorQ does not currently hold formal certifications. Security is
                            implemented in alignment with SOC 2 and ISO 27001 best practices.
                            Certifications may be pursued as the product matures.
                        </p>
                    </details>

                    <details className="rounded-lg border border-zinc-200 p-4">
                        <summary className="cursor-pointer text-sm font-medium text-zinc-900">
                            Infrastructure and subprocessors
                        </summary>
                        <p className="mt-3 text-sm text-zinc-600">
                            VendorQ uses Vercel for hosting, Supabase for database and storage,
                            and OpenAI for language model assistance. Each provider is used for
                            a clearly defined purpose.
                        </p>
                        <p className="mt-2 text-sm text-zinc-600">
                            See our{" "}
                            <Link href="/privacy" className="underline">
                                privacy policy
                            </Link>{" "}
                            for more information.
                        </p>
                    </details>

                    <details className="rounded-lg border border-zinc-200 p-4">
                        <summary className="cursor-pointer text-sm font-medium text-zinc-900">
                            Responsible disclosure
                        </summary>
                        <p className="mt-3 text-sm text-zinc-600">
                            Security vulnerabilities can be reported responsibly via email.
                        </p>
                        <p className="mt-2 text-sm text-zinc-600">
                            Contact:{" "}
                            <a href="mailto:security@vendorq.app" className="underline">
                                security@vendorq.app
                            </a>
                        </p>
                        <p className="mt-2 text-sm text-zinc-600">
                            We aim to acknowledge reports within 72 hours.
                        </p>
                    </details>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-zinc-50">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <h2 className="text-lg font-semibold text-zinc-900">
                        Security FAQ
                    </h2>

                    <div className="mt-6 max-w-3xl space-y-4">
                        {[
                            {
                                q: "Do you use our data for training?",
                                a: "No. Customer data is not used to train language models.",
                            },
                            {
                                q: "Can we delete all our data?",
                                a: "Yes. Documents and accounts can be deleted at any time.",
                            },
                            {
                                q: "Where is data hosted?",
                                a: "Data is hosted with our infrastructure providers in supported regions.",
                            },
                            {
                                q: "Who can access our data internally?",
                                a: "Access is limited to authorized personnel following the principle of least privilege.",
                            },
                            {
                                q: "Can we sign a DPA?",
                                a: "Yes. A Data Processing Agreement is available upon request.",
                            },
                            {
                                q: "Do you support SSO or SAML?",
                                a: "SSO and SAML are planned for enterprise customers.",
                            },
                            {
                                q: "Is VendorQ self-hosted?",
                                a: "No. VendorQ is provided as a managed SaaS.",
                            },
                        ].map((item) => (
                            <details
                                key={item.q}
                                className="rounded-lg border border-zinc-200 bg-white p-4"
                            >
                                <summary className="cursor-pointer text-sm font-medium text-zinc-900">
                                    {item.q}
                                </summary>
                                <p className="mt-3 text-sm text-zinc-600">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}