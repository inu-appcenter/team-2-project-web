"use client";

import type { InputHTMLAttributes, ReactNode } from "react";

export type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  trailing?: ReactNode;
};

export function Field({
  className,
  error,
  id,
  label,
  trailing,
  ...props
}: FieldProps) {
  const inputId = id ?? "field";

  return (
    <label className="flex w-full flex-col gap-2 text-text-default" htmlFor={inputId}>
      {label ? <span className="text-[length:calc(var(--typography-font-size-label1)*1px)] font-semibold">{label}</span> : null}
      <span className="flex min-h-[43px] items-center overflow-hidden rounded-[calc(var(--radius-xl)*1px)] border border-border-subtle bg-bg-default px-[calc(var(--spacing-spacing-3)*1px)] py-[calc(var(--spacing-spacing-2)*1px)] transition-colors focus-within:border-border-primary focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-border-primary">
        <input
          className={`min-w-0 flex-1 bg-transparent text-[length:calc(var(--typography-font-size-headline1)*1px)] font-bold outline-none placeholder:text-text-subtlest ${className ?? ""}`}
          id={inputId}
          {...props}
        />
        {trailing ? <span className="ml-2 shrink-0">{trailing}</span> : null}
      </span>
      {error ? <span className="text-[length:calc(var(--typography-font-size-label1)*1px)] text-text-error">{error}</span> : null}
    </label>
  );
}
