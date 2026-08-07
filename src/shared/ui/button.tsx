"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isLoading?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-button-primary text-text-inverse hover:bg-button-primary-hover active:bg-button-primary-press",
  secondary:
    "bg-button-secondary text-text-default hover:bg-button-secondary-hover active:bg-button-secondary-press",
  tertiary:
    "bg-button-tertiary text-text-default hover:bg-button-tertiary-hover active:bg-button-tertiary-press",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-[32px] px-[calc(var(--spacing-spacing-2)*1px)] py-[calc(var(--spacing-spacing-1)*1px)] text-[length:calc(var(--typography-font-size-label1)*1px)]",
  md: "min-h-[37px] px-[calc(var(--spacing-spacing-2)*1px)] py-[calc(var(--spacing-spacing-1-5)*1px)] text-[length:calc(var(--typography-font-size-body1)*1px)]",
};

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-[calc(var(--radius-md)*1px)] font-semibold leading-[1.5] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""}`}
      disabled={isDisabled}
      {...props}
    >
      {isLoading ? "처리 중..." : children}
    </button>
  );
}
