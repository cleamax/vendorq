"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Step = {
    title: string;
    body: string;
};

type Props = {
    eyebrow?: string;
    stickyTitle: string;
    stickyBody?: string;
    steps: Step[];
};

function StepItem({
    index,
    title,
    body,
    isActive,
    onEnter,
}: {
    index: number;
    title: string;
    body: string;
    isActive: boolean;
    onEnter: (index: number) => void;
}) {
    const reduce = useReducedMotion();
    const ref = useRef<HTMLDivElement | null>(null);

    const inView = useInView(ref, { amount: 0.6, margin: "-10% 0px -40% 0px" });

    useEffect(() => {
        if (inView) onEnter(index);
    }, [inView, index, onEnter]);

    const base =
        "rounded-xl border border-zinc-200 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]";

    return (
        <motion.div
            ref={ref}
            className={base}
            initial={false}
            animate={
                reduce
                    ? { opacity: 1 }
                    : {
                        opacity: isActive ? 1 : 0.32,
                        y: isActive ? 0 : 6,
                    }
            }
            transition={reduce ? { duration: 0 } : { duration: 0.28, ease: "easeOut" }}
        >
            <p className="text-xs font-medium text-zinc-500">Point {index + 1}</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">{title}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
        </motion.div>
    );
}

export function ScrollNarrative({ eyebrow, stickyTitle, stickyBody, steps }: Props) {
    const reduce = useReducedMotion();
    const [active, setActive] = useState(0);

    const safeSteps = useMemo(() => steps.slice(0, 6), [steps]);

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

                    {/* Subtle active indicator */}
                    <div className="mt-6 hidden md:block">
                        <p className="text-xs font-medium text-zinc-500">Currently</p>
                        <p className="mt-1 text-sm font-medium text-zinc-900">
                            {safeSteps[active]?.title}
                        </p>
                        <div className="mt-3 h-px w-full bg-zinc-200" />
                    </div>
                </div>
            </div>

            {/* Scrolling right */}
            <div className="space-y-4">
                {safeSteps.map((s, i) => (
                    <StepItem
                        key={s.title}
                        index={i}
                        title={s.title}
                        body={s.body}
                        isActive={i === active}
                        onEnter={(idx) => setActive(idx)}
                    />
                ))}

                <div className={reduce ? "h-0" : "hidden md:block md:h-6"} />
            </div>
        </div>
    );
}