import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", icon = true, className }: ButtonProps) {
  const base = "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out";
  const variants = {
    primary: "bg-rose-600 text-white shadow-soft hover:bg-rose-500 hover:shadow-lift hover:-translate-y-0.5",
    secondary: "bg-white text-rose-600 border border-bloom-border hover:border-rose-400 hover:-translate-y-0.5",
    ghost: "text-rose-600 hover:text-rose-500",
  };
  return (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {children}
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
