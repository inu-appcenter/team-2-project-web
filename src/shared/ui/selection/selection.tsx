"use client";

import Image from "next/image";
import type { InputHTMLAttributes, ReactNode } from "react";

type SelectionProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  children: ReactNode;
};

export type RadioProps = SelectionProps & {
  appearance?: "card" | "chip";
};

export function Radio({
  appearance = "card",
  children,
  className,
  disabled,
  ...props
}: RadioProps) {
  const isChip = appearance === "chip";

  return (
    <label
      className={`group inline-flex cursor-pointer items-center text-text-default has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 ${
        isChip
          ? "min-h-[30px] rounded-[var(--radius-full)] border border-text-subtle bg-bg-default px-[14px] py-[var(--spacing-spacing-1)] has-[:checked]:border-bg-primary has-[:checked]:bg-bg-primary has-[:checked]:text-text-inverse"
          : "h-[60px] w-[340px] justify-between rounded-[var(--radius-md)] border border-border-subtle bg-bg-default p-[var(--spacing-spacing-4)] has-[:checked]:border-border-primary"
      }`}
    >
      <input
        className="peer sr-only"
        disabled={disabled}
        type="radio"
        {...props}
      />
      <span
        className={`${
          isChip
            ? "text-[length:var(--font-size-headline2)] font-[600] leading-[1.4] tracking-[-0.01em]"
            : "text-[length:var(--font-size-heading1)] font-[500] leading-[1.5]"
        } ${className ?? ""}`}
      >
        {children}
      </span>
      {isChip ? null : (
        <span className="relative size-5 shrink-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-primary peer-checked:[&_.radio-checked]:block peer-checked:[&_.radio-unchecked]:hidden">
          <Image
            alt=""
            className="radio-checked hidden"
            fill
            src="/icons/radio-checked.svg"
          />
          <Image
            alt=""
            className="radio-unchecked"
            fill
            src="/icons/radio-unchecked.svg"
          />
        </span>
      )}
    </label>
  );
}

export function Checkbox({
  children,
  className,
  disabled,
  ...props
}: SelectionProps) {
  return (
    <label className="inline-flex min-h-6 cursor-pointer items-center gap-[var(--spacing-spacing-1)] text-text-default has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50">
      <input
        className="peer sr-only"
        disabled={disabled}
        type="checkbox"
        {...props}
      />
      <span className="relative size-6 shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-icon-subtlest bg-bg-default peer-checked:border-bg-primary peer-checked:bg-bg-primary peer-checked:[&_.check-icon]:block peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-primary">
        <Image
          alt=""
          className="check-icon hidden p-[3px]"
          fill
          src="/icons/check.svg"
        />
      </span>
      <span
        className={`text-[length:var(--font-size-body2)] font-normal leading-[1.5] ${className ?? ""}`}
      >
        {children}
      </span>
    </label>
  );
}

export function Toggle({
  children,
  className,
  disabled,
  ...props
}: SelectionProps) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-[var(--spacing-spacing-1)] text-text-default has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50">
      <input
        className="peer sr-only"
        disabled={disabled}
        role="switch"
        type="checkbox"
        {...props}
      />
      <span className="relative h-5 w-10 shrink-0 rounded-full bg-icon-subtlest transition-colors peer-checked:bg-bg-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-border-primary after:absolute after:left-0.5 after:top-0.5 after:size-4 after:rounded-full after:bg-bg-default after:transition-transform peer-checked:after:translate-x-5" />
      <span
        className={`text-[length:var(--font-size-body2)] font-normal leading-[1.5] ${className ?? ""}`}
      >
        {children}
      </span>
    </label>
  );
}
