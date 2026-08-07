import type { InputHTMLAttributes, ReactNode } from "react";

export type SelectionProps = InputHTMLAttributes<HTMLInputElement> & {
  children: ReactNode;
};
