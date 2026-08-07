import type { HTMLAttributes, ReactNode } from "react";

type TagTone = "neutral" | "primary" | "success" | "warning" | "error";

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: TagTone;
};

const toneClasses: Record<TagTone, string> = {
  neutral: "bg-bg-neutral text-text-subtle",
  primary: "bg-bg-primary text-text-inverse",
  success: "bg-bg-success text-text-success",
  warning: "bg-bg-warning text-text-warning",
  error: "bg-bg-error text-text-error",
};

export function Tag({ children, className, tone = "neutral", ...props }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-[calc(var(--spacing-spacing-2-5)*1px)] py-[calc(var(--spacing-spacing-0-5)*1px)] text-[length:calc(var(--typography-font-size-label2)*1px)] font-semibold leading-normal ${toneClasses[tone]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </span>
  );
}

export type RecruitmentStatus = "open" | "upcoming" | "closed";

const recruitmentStatus: Record<RecruitmentStatus, { label: string; tone: TagTone }> = {
  open: { label: "모집 중", tone: "success" },
  upcoming: { label: "모집 예정", tone: "warning" },
  closed: { label: "모집 마감", tone: "error" },
};

export function RecruitmentStatusTag({ status }: { status: RecruitmentStatus }) {
  const currentStatus = recruitmentStatus[status];

  return <Tag tone={currentStatus.tone}>{currentStatus.label}</Tag>;
}
