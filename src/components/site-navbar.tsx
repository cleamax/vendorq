import Link from "next/link";

const navItems = [
    { href: "/how-it-works", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
    { href: "/contact", label: "Contact" },
];

export function SiteNavbar() {
    return (
        <header className="border-b border-zinc-200 bg-white">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <div className="flex items-center gap-10">
                    <Link
                        href="/"
                        className="text-sm font-semibold tracking-tight text-zinc-900"
                    >
                        VendorQ
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-zinc-900"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <Link
                    href="/contact"
                    className="text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
                >
                    Run a pilot questionnaire
                </Link>
            </div>
        </header>
    );
}
