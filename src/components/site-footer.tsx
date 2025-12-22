import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-zinc-900">VendorQ</p>
                        <p className="mt-1 max-w-sm text-xs leading-5 text-zinc-500">
                            VendorQ helps SaaS teams selling to enterprise customers reduce time
                            spent on security questionnaires with consistent, source-backed
                            answers.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer navigation">
                        <Link href="/how-it-works" className="text-zinc-600 hover:text-zinc-900">
                            How it works
                        </Link>
                        <Link href="/pricing" className="text-zinc-600 hover:text-zinc-900">
                            Pricing
                        </Link>
                        <Link href="/security" className="text-zinc-600 hover:text-zinc-900">
                            Security
                        </Link>
                        <Link href="/contact" className="text-zinc-600 hover:text-zinc-900">
                            Contact
                        </Link>
                        <Link href="/privacy" className="text-zinc-600 hover:text-zinc-900">
                            Privacy
                        </Link>
                        <Link href="/imprint" className="text-zinc-600 hover:text-zinc-900">
                            Imprint
                        </Link>
                    </nav>
                </div>

                <div className="mt-8 flex flex-col gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                    <div>© {new Date().getFullYear()} VendorQ</div>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="underline underline-offset-4 hover:text-zinc-700">
                            Privacy
                        </Link>
                        <Link href="/imprint" className="underline underline-offset-4 hover:text-zinc-700">
                            Imprint
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}