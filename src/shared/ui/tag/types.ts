import type { HTMLAttributes, ReactNode } from "react";

export type TagTone = "neutral" | "primary" | "success" | "warning" | "error";

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: TagTone;
};

export type RecruitmentStatus = "open" | "upcoming" | "closed";
