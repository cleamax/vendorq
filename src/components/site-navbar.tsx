import Link from "next/link";

const navItems: Array<{ href: string; label: string }> = [
    { href: "/how-it-works", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
    { href: "/contact", label: "Contact" },
];

export function SiteNavbar() {
    return (
        <header className="border-b border-zinc-200 bg-white">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900"
                    >
                        <span
                            className="inline-block h-2 w-2 rounded-full bg-zinc-900"
                            aria-hidden="true"
                        />
                        VendorQ
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm text-zinc-600 hover:text-zinc-900"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                    >
                        Evaluate one questionnaire
                    </Link>

                    <Link
                        href="/login"
                        className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}