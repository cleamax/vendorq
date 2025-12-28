"use client";

import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Props = {
    eyebrow?: string;
    stickyTitle: string;
    stickyBody?: string;
    beforeTitle?: string;
    afterTitle?: string;
    before: string[];
    after: string[];
};

function Sentinel({
    onEnter,
}: {
    onEnter: () => void;
}) {
    const [el, setEl] = useState<HTMLDivElement | null>(null);
    const inView = useInView(el, { amount: 0.6, margin: "-20% 0px -40% 0px" });

    useEffect(() => {
        if (inView) onEnter();
    }, [inView, onEnter]);

    return <div ref={setEl} className="h-2" aria-hidden="true" />;
}

export function TransformationScroll({
    eyebrow,
    stickyTitle,
    stickyBody,
    beforeTitle = "Before",
    afterTitle = "After",
    before,
    after,
}: Props) {
    const reduce = useReducedMotion();
    const [mode, setMode] = useState<"before" | "after">("before");

    const panelBase =
        "rounded-xl border border-zinc-200 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]";

    return (
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Sticky left */}
            <div className="md:pr-6">
                <div className="md:sticky md:top-24">
                    {eyebrow ? (
                        <p className="text-xs font-medium text-zinc-500">{eyebrow}</p>
                    ) : null}
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                        {stickyTitle}
                    </h2>
                    {stickyBody ? (
                        <p className="mt-3 text-sm leading-6 text-zinc-600">{stickyBody}</p>
                    ) : null}

                    <div className="mt-6 hidden md:flex gap-3">
                        <span
                            className={[
                                "inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium",
                                mode === "before"
                                    ? "border-zinc-900 bg-zinc-900 text-white"
                                    : "border-zinc-200 bg-white text-zinc-700",
                            ].join(" ")}
                        >
                            {beforeTitle}
                        </span>
                        <span
                            className={[
                                "inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium",
                                mode === "after"
                                    ? "border-zinc-900 bg-zinc-900 text-white"
                                    : "border-zinc-200 bg-white text-zinc-700",
                            ].join(" ")}
                        >
                            {afterTitle}
                        </span>
                    </div>
                </div>
            </div>

            {/* Scrolling right */}
            <div className="space-y-4">
                {/* BEFORE block */}
                <div className={panelBase}>
                    <Sentinel onEnter={() => setMode("before")} />
                    <p className="text-xs font-medium text-zinc-500">{beforeTitle}</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">
                        What it feels like
                    </p>

                    <motion.ul
                        className="mt-3 space-y-2 text-sm leading-6 text-zinc-700"
                        initial={false}
                        animate={
                            reduce
                                ? { opacity: 1 }
                                : { opacity: mode === "before" ? 1 : 0.35, y: mode === "before" ? 0 : 6 }
                        }
                        transition={reduce ? { duration: 0 } : { duration: 0.28, ease: "easeOut" }}
                    >
                        {before.slice(0, 6).map((b) => (
                            <li key={b}>• {b}</li>
                        ))}
                    </motion.ul>
                </div>

                {/* AFTER block */}
                <div className={panelBase}>
                    <Sentinel onEnter={() => setMode("after")} />
                    <p className="text-xs font-medium text-zinc-500">{afterTitle}</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">
                        What changes in practice
                    </p>

                    <motion.ul
                        className="mt-3 space-y-2 text-sm leading-6 text-zinc-700"
                        initial={false}
                        animate={
                            reduce
                                ? { opacity: 1 }
                                : { opacity: mode === "after" ? 1 : 0.35, y: mode === "after" ? 0 : 6 }
                        }
                        transition={reduce ? { duration: 0 } : { duration: 0.28, ease: "easeOut" }}
                    >
                        {after.slice(0, 6).map((a) => (
                            <li key={a}>• {a}</li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </div>
    );
}
