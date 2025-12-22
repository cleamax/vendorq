import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Imprint | VendorQ",
    description: "Legal notice and imprint information for VendorQ.",
};

export default function ImprintPage() {
    return (
        <main className="bg-white text-zinc-900">
            <section className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-semibold tracking-tight">Imprint</h1>

                {/* Operator */}
                <section className="mt-10">
                    <h2 className="text-lg font-semibold">Website operator</h2>
                    <p className="mt-4 text-sm leading-6">
                        Maximilian Richter
                        <br />
                        Ahornweg&nbsp;1
                        <br />
                        87549 Rettenberg
                        <br />
                        Germany
                    </p>
                </section>

                {/* Contact */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">Contact</h2>
                    <p className="mt-4 text-sm leading-6">
                        Email:&nbsp;
                        <a
                            href="mailto:security@vendorq.app"
                            className="underline"
                        >
                            security@vendorq.app
                        </a>
                    </p>
                </section>

                {/* Legal status */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">Legal status</h2>
                    <p className="mt-4 text-sm leading-6">
                        This website and the SaaS product “VendorQ” are operated by a private
                        individual. At the time of publication, VendorQ is not operated by a
                        registered company or legal entity.
                    </p>
                </section>

                {/* Content liability */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">Liability for content</h2>
                    <p className="mt-4 text-sm leading-6">
                        The contents of this website have been created with due care.
                        However, no guarantee is given for the accuracy, completeness, or
                        timeliness of the information provided. As a service provider, the
                        operator is responsible for own content on these pages in accordance
                        with §7 para.1 TMG under general laws. According to §§8 to 10 TMG, the
                        operator is not obligated to monitor transmitted or stored
                        third-party information or to investigate circumstances that
                        indicate illegal activity.
                    </p>
                </section>

                {/* External links */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">Liability for external links</h2>
                    <p className="mt-4 text-sm leading-6">
                        This website may contain links to external third-party websites, over
                        whose contents the operator has no control. Therefore, no liability
                        can be assumed for these external contents. The respective provider
                        or operator of the linked pages is always responsible for their
                        content. Linked pages were checked for possible legal violations at
                        the time of linking. Illegal content was not identifiable at the
                        time of linking.
                    </p>
                </section>

                {/* Jurisdiction */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">Jurisdiction</h2>
                    <p className="mt-4 text-sm leading-6">
                        This imprint is subject to the laws of the Federal Republic of
                        Germany. Place of jurisdiction is Germany.
                    </p>
                </section>

                {/* Hosting */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">Hosting</h2>
                    <p className="mt-4 text-sm leading-6">
                        This website is hosted by Vercel Inc. as a technical service provider.
                    </p>
                </section>
            </section>
        </main>
    );
}
