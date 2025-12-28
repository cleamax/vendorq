"use client";

import { motion, useReducedMotion } from "framer-motion";

type Step = {
    step: string;
    title: string;
    body: string;
};

type Props = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    steps: Step[];
};

export function FlowSteps({ eyebrow, title, subtitle, steps }: Props) {
    const reduce = useReducedMotion();

    return (
        <div className="border-t border-zinc-200 pt-10">
            <div className="max-w-2xl">
                {eyebrow ? (
                    <p className="text-xs font-medium text-zinc-500">{eyebrow}</p>
                ) : null}
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                    {title}
                </h2>
                {subtitle ? (
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{subtitle}</p>
                ) : null}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {steps.slice(0, 6).map((s, idx) => (
                    <motion.div
                        key={`${s.step}-${s.title}`}
                        className={[
                            "rounded-xl border border-zinc-200 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]",
                            idx % 2 === 1 ? "bg-zinc-50" : "bg-white",
                        ].join(" ")}
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ amount: 0.6, once: true }}
                        transition={reduce ? undefined : { duration: 0.28, ease: "easeOut" }}
                    >
                        <p className="text-xs font-medium text-zinc-500">{s.step}</p>
                        <p className="mt-1 text-sm font-semibold text-zinc-900">{s.title}</p>
                        <p className="mt-2 text-sm leading-6 text-zinc-600">{s.body}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
