"use client";

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

type NativeButtonProps = BaseProps &
  Omit<HTMLMotionProps<"button">, "children" | "className"> & {
    href?: undefined;
  };

type LinkButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type MagneticButtonProps = NativeButtonProps | LinkButtonProps;

const variants = {
  primary:
    "bg-amber-500 text-zinc-950 shadow-[0_0_0_rgba(245,158,11,0)] hover:bg-amber-400 hover:shadow-[0_0_42px_rgba(245,158,11,0.34)]",
  ghost:
    "border border-zinc-800 bg-zinc-900/50 text-zinc-100 backdrop-blur hover:border-zinc-700 hover:bg-zinc-900",
};

const baseClass =
  "focus-ring inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-sm font-bold tracking-tight transition-colors active:scale-95 disabled:pointer-events-none disabled:opacity-50";

export function MagneticButton(props: MagneticButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.25 });
  const classes = `${baseClass} ${variants[variant]} ${className}`;

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.16);
    y.set(offsetY * 0.16);
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  if (typeof props.href === "string") {
    const rest = { ...props };
    delete rest.children;
    delete rest.className;
    delete rest.variant;

    return (
      <motion.div style={{ x: springX, y: springY }} whileTap={{ scale: 0.95 }}>
        <Link
          className={classes}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetPosition}
          {...(rest as LinkButtonProps)}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  const rest = { ...props };
  delete rest.children;
  delete rest.className;
  delete rest.variant;

  return (
    <motion.button
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      {...(rest as Omit<NativeButtonProps, "children" | "className" | "variant">)}
    >
      {children}
    </motion.button>
  );
}
