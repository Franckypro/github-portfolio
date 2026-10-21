import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { impact } from "../data/profile.ts";

/** Counts up to the real figure the first time it becomes visible. */
function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        el.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, prefix, suffix]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {`${prefix}${value}${suffix}`}
    </span>
  );
}

export default function Impact() {
  return (
    <section aria-label="Résultats en chiffres" className="border-y border-line bg-ink">
      <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-4 xl:divide-x">
        {impact.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col gap-3 px-6 py-10 md:px-10 ${index % 2 === 1 ? "sm:border-l sm:border-line xl:border-l-0" : ""} ${
              index >= 2 ? "sm:border-t sm:border-line xl:border-t-0" : ""
            }`}
          >
            <dt className="order-2 text-[15px] leading-snug text-fg/90">{item.label}</dt>
            <dd className="order-1 font-display text-5xl leading-none text-gold md:text-6xl">
              <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} />
            </dd>
            <dd className="order-3 font-mono text-[12px] text-muted">{item.source}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
