import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                    <p className="text-sm text-zinc-600 max-w-sm leading-6">
                        VendorQ helps SaaS teams selling to enterprise customers
                        respond to security questionnaires with clarity and consistency.
                    </p>

                    <nav className="flex flex-wrap gap-8 text-sm text-zinc-500">
                        <Link href="/how-it-works">How it works</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/security">Security</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/imprint">Imprint</Link>
                    </nav>
                </div>

                <p className="mt-16 text-xs text-zinc-400">
                    © {new Date().getFullYear()} VendorQ
                </p>
            </div>
        </footer>
    );
}
