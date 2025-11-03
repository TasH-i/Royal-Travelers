"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "mb-8 md:mb-12 px-6 md:px-8 py-2 cursor-pointer border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-semibold text-sm md:text-lg",
        className
      )}
    >
      {children}
    </Link>
  );
}
