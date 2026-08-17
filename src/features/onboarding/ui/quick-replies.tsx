"use client";

import { useId } from "react";

import { Radio } from "@/shared/ui";

type QuickReplyOption = {
  label: string;
  value: string;
};

type QuickRepliesProps = {
  name?: string;
  onValueChange?: (value: string) => void;
  options: QuickReplyOption[];
  value?: string;
};

export function QuickReplies({
  name,
  onValueChange,
  options,
  value,
}: QuickRepliesProps) {
  const generatedName = useId();
  const groupName = name ?? generatedName;

  return (
    <div className="flex flex-wrap justify-end gap-2" role="radiogroup">
      {options.map((option) => (
        <Radio
          appearance="chip"
          checked={value === option.value}
          className="text-[length:var(--font-size-body1)] font-normal leading-[1.5] tracking-normal"
          key={option.value}
          name={groupName}
          onChange={() => onValueChange?.(option.value)}
          value={option.value}
        >
          {option.label}
        </Radio>
      ))}
    </div>
  );
}

export type { QuickReplyOption, QuickRepliesProps };
