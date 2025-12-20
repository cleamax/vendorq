import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-16">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-sm font-semibold text-slate-900 hover:underline">
                        ← VendorQ AI
                    </Link>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                        Placeholder
                    </span>
                </div>

                <h1 className="mt-4 text-2xl font-semibold tracking-tight">Login</h1>
                <p className="mt-2 text-sm text-slate-600">
                    Phase 1 UI only. We’ll add Supabase Auth next (email magic link / SSO later).
                </p>

                <div className="mt-6 space-y-3">
                    <div>
                        <label className="text-sm font-medium text-slate-700">Work email</label>
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-400"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-slate-700">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-400"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                        Sign in
                    </button>

                    <p className="text-xs text-slate-500">
                        Trying to open <span className="font-medium">/dashboard</span> will redirect here until auth cookies exist.
                    </p>

                    <div className="pt-2">
                        <Link
                            href="/"
                            className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            Back to landing
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
