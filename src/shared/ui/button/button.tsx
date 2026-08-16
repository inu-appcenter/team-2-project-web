"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  isLoading?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-button-primary text-text-inverse hover:bg-button-primary-hover active:bg-button-primary-press",
  secondary:
    "bg-button-secondary text-[color:var(--color-bg-primary)] hover:bg-button-secondary-hover active:bg-button-secondary-press",
  tertiary:
    "bg-button-tertiary text-text-inverse hover:bg-button-tertiary-hover active:bg-button-tertiary-press",
  outline:
    "border border-[color:var(--color-bg-primary-hover)] bg-bg-default text-[color:var(--color-bg-primary-hover)] hover:bg-[var(--color-opacity-black-10)] active:bg-[var(--color-opacity-black-25)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[37px] px-[var(--spacing-spacing-4)] text-[length:var(--font-size-body3)]",
  md: "h-[44px] px-[var(--spacing-spacing-5)] text-[length:var(--font-size-body2)]",
  lg: "h-[51px] px-[var(--spacing-spacing-6)] text-[length:var(--font-size-body1)]",
};

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  leadingIcon,
  size = "md",
  trailingIcon,
  variant = "primary",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`inline-flex shrink-0 items-center justify-center gap-[var(--spacing-spacing-1)] rounded-[var(--radius-md)] font-normal leading-[1.5] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-bg-disabled disabled:text-text-disabled ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""}`}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {leadingIcon ? (
        <span className="flex size-[18px] shrink-0 items-center justify-center [&>img]:size-full">
          {leadingIcon}
        </span>
      ) : null}
      <span className="whitespace-nowrap">{isLoading ? "처리 중..." : children}</span>
      {trailingIcon ? (
        <span className="flex size-[18px] shrink-0 items-center justify-center [&>img]:size-full">
          {trailingIcon}
        </span>
      ) : null}
    </button>
  );
}
