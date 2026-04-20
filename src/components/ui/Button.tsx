import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

const variantClasses = {
  primary:
    "bg-[#007AFF] text-white hover:bg-[#006EE6] active:bg-[#005FCC] shadow-[0_10px_30px_rgba(0,122,255,0.22)]",
  secondary:
    "border border-[#E5E5E5] bg-white text-black hover:border-black/25 hover:bg-[#FAFAFA] active:bg-[#F3F3F3]",
};

const baseClasses =
  "focus-ring inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-50";

export function Button(props: ButtonProps | LinkButtonProps) {
  if (typeof props.href === "string") {
    const { children, variant = "primary", className = "", ...rest } =
      props as LinkButtonProps;
    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, variant = "primary", className = "", ...rest } =
    props as ButtonProps;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
