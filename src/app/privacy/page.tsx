import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | VendorQ",
    description: "Privacy policy explaining how personal data is processed when using VendorQ.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-white text-zinc-900">
            <section className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                    This Privacy Policy explains how personal data is processed when you
                    visit or use VendorQ, a B2B SaaS product operated from Germany. The
                    policy is written in accordance with the General Data Protection
                    Regulation (GDPR).
                </p>

                {/* 1. Data controller */}
                <section className="mt-10">
                    <h2 className="text-lg font-semibold">1. Data controller</h2>
                    <p className="mt-4 text-sm leading-6">
                        The data controller responsible for processing personal data on this
                        website is:
                        <br />
                        <br />
                        Maximilian Richter
                        <br />
                        Ahornweg&nbsp;1
                        <br />
                        87549 Rettenberg
                        <br />
                        Germany
                        <br />
                        <br />
                        Email:&nbsp;
                        <a href="mailto:security@vendorq.app" className="underline">
                            security@vendorq.app
                        </a>
                    </p>
                </section>

                {/* 2. Hosting and server log files */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        2. Hosting and server log files
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        This website is hosted by Vercel Inc. When you access the website,
                        Vercel automatically processes technical data in so-called server
                        log files. This may include the IP address, date and time of access,
                        requested page, browser type, operating system, and referrer URL.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                        This data is required to deliver the website, ensure stability and
                        security, and troubleshoot technical issues. The legal basis for
                        this processing is Art. 6(1)(f) GDPR (legitimate interest in secure
                        and reliable operation).
                    </p>
                </section>

                {/* 3. User accounts and authentication */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        3. User accounts and authentication
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        VendorQ allows users to create accounts using an email address and
                        password. Authentication and account management are handled via
                        Supabase.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                        The following data is processed for this purpose:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm leading-6 text-zinc-700">
                        <li>• Email address</li>
                        <li>• Hashed password</li>
                        <li>• Basic account metadata (e.g. account creation date)</li>
                    </ul>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                        This processing is necessary to provide the service and is based on
                        Art. 6(1)(b) GDPR (performance of a contract).
                    </p>
                </section>

                {/* 4. Contact form */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        4. Contact form and inquiries
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        If you contact us via the contact form, the information you provide
                        (such as name, email address, optional company name, and message) is
                        processed to respond to your inquiry. Contact submissions are stored
                        in the database operated via Supabase.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                        The legal basis for this processing is Art. 6(1)(b) GDPR (pre-
                        contractual communication) or Art. 6(1)(f) GDPR (legitimate interest
                        in responding to inquiries).
                    </p>
                </section>

                {/* 5. Use of OpenAI API */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        5. Use of OpenAI API
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        VendorQ uses the OpenAI API to assist users with drafting answers to
                        security questionnaires. This functionality is only available after
                        a user has logged in.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                        For this purpose, user-provided content (such as parts of uploaded
                        documents or questions) may be transmitted to OpenAI for processing.
                        Only the data necessary for the requested operation is shared.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                        Customer data is not used by VendorQ to train models. The legal basis
                        for this processing is Art. 6(1)(b) GDPR (performance of a contract).
                    </p>
                </section>

                {/* 6. Cookies */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        6. Cookies and technical storage
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        VendorQ uses only technically necessary cookies and similar storage
                        mechanisms. These are required for authentication, session handling,
                        and basic functionality of the application.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                        No analytics cookies, advertising trackers, or third-party marketing
                        tools are used at this time.
                    </p>
                </section>

                {/* 7. Data retention */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        7. Data retention
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        Personal data is retained only for as long as necessary to fulfill
                        the purposes described in this policy.
                    </p>
                    <ul className="mt-2 space-y-1 text-sm leading-6 text-zinc-700">
                        <li>• Account data is stored while the account is active.</li>
                        <li>• Uploaded content can be deleted by the user.</li>
                        <li>
                            • Contact inquiries are retained as long as required to handle the
                            request.
                        </li>
                    </ul>
                </section>

                {/* 8. User rights */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        8. Your rights under GDPR
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        Under the GDPR, you have the right to request access to your personal
                        data, rectification, deletion, restriction of processing, data
                        portability, and to object to processing based on legitimate
                        interests.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                        You also have the right to lodge a complaint with a supervisory
                        authority.
                    </p>
                </section>

                {/* 9. Data security */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        9. Data security
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        Appropriate technical and organizational measures are implemented to
                        protect personal data against unauthorized access, loss, or
                        alteration. These measures include encrypted connections, access
                        controls, and the use of established infrastructure providers.
                    </p>
                </section>

                {/* 10. Changes */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        10. Changes to this privacy policy
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        This privacy policy may be updated to reflect changes in the product,
                        legal requirements, or data processing practices. The current
                        version will always be published on this page.
                    </p>
                </section>

                {/* 11. Contact */}
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">
                        11. Contact for privacy-related requests
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                        If you have questions about this privacy policy or wish to exercise
                        your rights, please contact:
                    </p>
                    <p className="mt-2 text-sm leading-6">
                        <a href="mailto:security@vendorq.app" className="underline">
                            security@vendorq.app
                        </a>
                    </p>
                </section>
            </section>
        </main>
    );
}
