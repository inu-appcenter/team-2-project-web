import type { InputHTMLAttributes, ReactNode } from "react";

export type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  trailing?: ReactNode;
};
