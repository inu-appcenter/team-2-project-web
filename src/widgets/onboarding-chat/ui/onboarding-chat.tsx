import { OnboardingFlow } from "@/features/onboarding";

import { OnboardingHeader } from "./onboarding-header";

export function OnboardingChat() {
  return (
    <main className="min-h-screen bg-bg-default">
      <OnboardingHeader />
      <OnboardingFlow />
    </main>
  );
}
