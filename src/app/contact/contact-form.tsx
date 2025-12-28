"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    const canSubmit = useMemo(() => {
        if (status === "submitting") return false;
        if (name.trim().length < 2) return false;
        if (!isValidEmail(email)) return false;
        if (message.trim().length < 10) return false;
        return true;
    }, [status, name, email, message]);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        if (!canSubmit) {
            setError("Please complete the required fields.");
            return;
        }

        setStatus("submitting");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    company: company.trim() || null,
                    message: message.trim(),
                    source: "contact_page",
                }),
            });

            if (!res.ok) {
                const data = (await res.json().catch(() => null)) as
                    | { error?: string }
                    | null;
                throw new Error(data?.error || "Request failed.");
            }

            setStatus("success");
        } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "Something went wrong.");
        }
    }

    if (status === "success") {
        return (
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">Message sent</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Thanks — we’ll get back to you shortly. If it’s useful, include a
                    questionnaire format and an example of what typically slows you down.
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <form className="space-y-4" onSubmit={onSubmit}>
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
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                    <p className="mt-1 text-xs text-zinc-500">
                        We use this only to reply to your message.
                    </p>
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
                        autoComplete="organization"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
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
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe the questionnaire format (Excel/portal/doc), who owns answers today, and what typically causes delays."
                        className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                </div>

                {error ? <p className="text-sm text-red-600">{error}</p> : null}

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={!canSubmit}
                        className={[
                            "inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white",
                            !canSubmit
                                ? "cursor-not-allowed bg-zinc-400"
                                : "bg-zinc-900 hover:bg-zinc-800",
                        ].join(" ")}
                    >
                        Run a pilot security questionnaire
                    </button>
                </div>

                <p className="text-xs leading-5 text-zinc-500">
                    This is a pilot conversation. No sales deck, no pressure.
                </p>
            </form>
        </div>
    );
}
