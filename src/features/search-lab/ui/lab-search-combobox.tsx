"use client";

import Image from "next/image";
import { useId, useState } from "react";

import { LabSearchResultItem, MOCK_LABS } from "@/entities/lab";
import type { LabSummary } from "@/entities/lab";

import { useLabSearch } from "../model/use-lab-search";

type LabSearchComboboxProps = {
  labs?: LabSummary[];
  onSelect: (lab: LabSummary) => void;
  selectedLabId?: string;
};

export function LabSearchCombobox({
  labs = MOCK_LABS,
  onSelect,
  selectedLabId,
}: LabSearchComboboxProps) {
  const { query, results, setQuery } = useLabSearch(labs);
  const [activeIndex, setActiveIndex] = useState(0);
  const listboxId = useId();
  const isOpen = query.trim().length > 0;
  const activeResult = results[activeIndex];
  const activeOptionId = activeResult ? `${listboxId}-option-${activeResult.id}` : undefined;

  function selectLab(lab: LabSummary) {
    setQuery(lab.name);
    onSelect(lab);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!isOpen || results.length === 0) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((currentIndex) => (currentIndex + 1) % results.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(
        (currentIndex) => (currentIndex - 1 + results.length) % results.length,
      );
    }

    if (event.key === "Enter" && activeResult) {
      event.preventDefault();
      selectLab(activeResult);
    }

    if (event.key === "Escape") {
      setQuery("");
    }
  }

  return (
    <div className="ml-auto w-full max-w-[300px] md:max-w-[444px]">
      <div
        className={`overflow-hidden bg-bg-default shadow-[0_4px_16px_var(--color-opacity-black-10)] ${isOpen ? "rounded-[var(--radius-xl)]" : "rounded-[var(--radius-xl)] shadow-none"}`}
      >
        <label className="sr-only" htmlFor={`${listboxId}-input`}>
          연구실 이름 또는 교수명 검색
        </label>
        <div
          className={`flex h-12 items-center border border-border-primary bg-bg-default px-[20px] ${isOpen ? "rounded-t-[var(--radius-xl)]" : "rounded-[var(--radius-xl)]"}`}
        >
          <input
            aria-activedescendant={activeOptionId}
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-expanded={isOpen}
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-[length:var(--font-size-body2)] font-normal leading-[1.5] text-text-default outline-none placeholder:text-text-subtle"
            id={`${listboxId}-input`}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="연구실 이름 또는 교수명"
            role="combobox"
            value={query}
          />
          <Image alt="" height={18} src="/icons/search.svg" width={18} />
        </div>

        {isOpen ? (
          <ul
            className="max-h-[248px] overflow-y-auto bg-bg-default"
            id={listboxId}
            role="listbox"
          >
            {results.length > 0 ? (
              results.map((lab, index) => (
                <LabSearchResultItem
                  active={index === activeIndex}
                  key={lab.id}
                  lab={lab}
                  onSelect={selectLab}
                  optionId={`${listboxId}-option-${lab.id}`}
                  selected={lab.id === selectedLabId}
                />
              ))
            ) : (
              <li
                className="px-[var(--spacing-spacing-4)] py-[var(--spacing-spacing-6)] text-center text-[length:var(--font-size-body3)] text-text-subtle"
                role="option"
                aria-selected="false"
              >
                검색 결과가 없어요
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export type { LabSearchComboboxProps };
