"use client";

import type { HTMLAttributes, ReactNode } from "react";

export type BottomSheetProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  children: ReactNode;
  onClose?: () => void;
  showCloseButton?: boolean;
  title: ReactNode;
};

export function BottomSheet({
  children,
  className,
  onClose,
  showCloseButton = true,
  title,
  ...props
}: BottomSheetProps) {
  return (
    <section
      {...props}
      aria-label={typeof title === "string" ? title : undefined}
      className={`flex w-full max-w-[402px] flex-col gap-[var(--spacing-spacing-4)] overflow-hidden rounded-t-[var(--radius-2xl)] bg-bg-default pb-[var(--spacing-spacing-6)] pt-[var(--spacing-spacing-4)] shadow-[0_2px_8px_var(--color-opacity-black-10)] ${className ?? ""}`}
      role="dialog"
    >
      <header className="flex w-full items-center justify-between px-[var(--spacing-spacing-5)]">
        <h2 className="text-[length:var(--font-size-headline1)] font-semibold leading-[1.4] tracking-[-0.01em] text-text-default">
          {title}
        </h2>
        {showCloseButton ? (
          <button
            aria-label="닫기"
            className="flex size-[18px] shrink-0 cursor-pointer items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary"
            onClick={onClose}
            type="button"
          >
            <svg aria-hidden="true" className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d="m13.5 4.5-9 9m0-9 9 9" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : null}
      </header>
      <div className="flex w-full flex-col gap-[var(--spacing-spacing-1)] px-[var(--spacing-spacing-5)]">
        {children}
      </div>
    </section>
  );
}
