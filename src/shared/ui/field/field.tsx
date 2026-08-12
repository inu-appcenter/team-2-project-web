"use client";

import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import { useId } from "react";

type FieldBaseProps = {
  label?: string;
  error?: string;
  trailing?: ReactNode;
};

export type FieldProps = InputHTMLAttributes<HTMLInputElement> & FieldBaseProps;
export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<FieldBaseProps, "trailing">;

const labelClassName =
  "text-[length:calc(var(--font-size-label1)*1px)] font-[600] leading-[1.5]";

const fieldStateClassName =
  "border-border-subtle bg-bg-default hover:bg-bg-subtle focus-within:border-border-primary";

function ErrorMessage({ error, id }: { error?: string; id: string }) {
  return error ? (
    <span
      className="text-[length:calc(var(--font-size-caption1)*1px)] leading-[1.5] text-text-error"
      id={id}
    >
      {error}
    </span>
  ) : null;
}

export function Field({
  className,
  disabled,
  error,
  id,
  label,
  trailing,
  ...props
}: FieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  return (
    <label
      className="flex w-full flex-col gap-[calc(var(--spacing-spacing-1)*1px)] text-text-default"
      htmlFor={inputId}
    >
      {label ? <span className={labelClassName}>{label}</span> : null}
      <span
        className={`flex h-[44px] items-center overflow-hidden rounded-[calc(var(--radius-xl)*1px)] border py-[calc(var(--spacing-spacing-3)*1px)] pl-[calc(var(--spacing-spacing-4)*1px)] pr-[calc(var(--spacing-spacing-3)*1px)] transition-colors ${fieldStateClassName} ${error ? "border-border-error focus-within:border-border-error" : ""} ${disabled ? "border-border-disabled bg-bg-disabled" : ""}`}
      >
        <input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={Boolean(error)}
          className={`min-w-0 flex-1 bg-transparent text-[length:calc(var(--font-size-label2)*1px)] font-normal leading-[1.5] text-text-default outline-none placeholder:text-text-subtle disabled:cursor-not-allowed disabled:text-text-disabled disabled:placeholder:text-text-disabled ${className ?? ""}`}
          disabled={disabled}
          id={inputId}
          {...props}
        />
        {trailing ? (
          <span className="ml-[calc(var(--spacing-spacing-1)*1px)] flex shrink-0 items-center">
            {trailing}
          </span>
        ) : null}
      </span>
      <ErrorMessage error={error} id={errorId} />
    </label>
  );
}

export function Textarea({
  className,
  disabled,
  error,
  id,
  label,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const errorId = `${textareaId}-error`;

  return (
    <label
      className="flex w-full flex-col gap-[calc(var(--spacing-spacing-1)*1px)] text-text-default"
      htmlFor={textareaId}
    >
      {label ? <span className={labelClassName}>{label}</span> : null}
      <textarea
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className={`h-[96px] w-full resize-none rounded-[calc(var(--radius-xl)*1px)] border p-[calc(var(--spacing-spacing-3)*1px)] text-[length:calc(var(--font-size-caption1)*1px)] font-normal leading-[1.5] text-text-default outline-none transition-colors placeholder:text-text-subtle hover:bg-bg-subtle focus:border-border-primary disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-bg-disabled disabled:text-text-disabled disabled:placeholder:text-text-disabled ${error ? "border-border-error focus:border-border-error" : "border-border-subtle"} ${className ?? ""}`}
        disabled={disabled}
        id={textareaId}
        {...props}
      />
      <ErrorMessage error={error} id={errorId} />
    </label>
  );
}
