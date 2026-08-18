"use client";

import { OnboardingFlow } from "@/features/onboarding";
import { LabSearchCombobox } from "@/features/search-lab";

import { OnboardingHeader } from "./onboarding-header";

export function OnboardingChat() {
  return (
    <main className="min-h-screen bg-bg-default">
      <OnboardingHeader />
      <OnboardingFlow
        renderLabSearch={({ onSelect, selectedLabId }) => (
          <LabSearchCombobox
            onClearSelection={() => onSelect("")}
            onSelect={(lab) => onSelect(lab.id)}
            selectedLabId={selectedLabId}
          />
        )}
      />
    </main>
  );
}
