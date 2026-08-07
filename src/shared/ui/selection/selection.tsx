"use client";

import type { InputHTMLAttributes, ReactNode } from "react";

type SelectionProps = InputHTMLAttributes<HTMLInputElement> & {
  children: ReactNode;
};

export function Radio({ children, className, ...props }: SelectionProps) {
  return (
    <label className="inline-flex min-h-7 cursor-pointer items-center gap-2 text-text-default">
      <input className="peer sr-only" type="radio" {...props} />
      <span className="relative size-5 rounded-full border border-border-default bg-bg-default after:absolute after:inset-[5px] after:rounded-full after:bg-text-inverse peer-checked:border-border-primary peer-checked:bg-bg-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-primary peer-disabled:opacity-50" />
      <span className={className}>{children}</span>
    </label>
  );
}

export function Checkbox({ children, className, ...props }: SelectionProps) {
  return (
    <label className="inline-flex min-h-7 cursor-pointer items-center gap-2 text-text-default">
      <input className="peer sr-only" type="checkbox" {...props} />
      <span className="relative size-5 rounded-[calc(var(--radius-sm)*1px)] border border-border-default bg-bg-default after:absolute after:left-[5px] after:top-[2px] after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-text-inverse peer-checked:border-border-primary peer-checked:bg-bg-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-primary peer-disabled:opacity-50" />
      <span className={className}>{children}</span>
    </label>
  );
}

export function Toggle({ children, className, ...props }: SelectionProps) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-text-default">
      <input className="peer sr-only" type="checkbox" role="switch" {...props} />
      <span className="relative h-5 w-10 rounded-full bg-bg-neutral transition-colors peer-checked:bg-bg-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-primary peer-disabled:opacity-50 after:absolute after:left-0.5 after:top-0.5 after:size-4 after:rounded-full after:bg-bg-default after:shadow-sm after:transition-transform peer-checked:after:translate-x-5" />
      <span className={className}>{children}</span>
    </label>
  );
}
