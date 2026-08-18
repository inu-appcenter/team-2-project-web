"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { MOCK_LABS, SelectedLabCard } from "@/entities/lab";
import { Field } from "@/shared/ui";

import { ONBOARDING_QUESTIONS } from "../model/onboarding-steps";
import { ChatMessage } from "./chat-message";
import { OnboardingProgress } from "./onboarding-progress";
import { OnboardingSubmit } from "./onboarding-submit";
import { MultiQuickReplies, QuickReplies } from "./quick-replies";

type AnswerValue = string | string[];
type Answers = Partial<
  Record<(typeof ONBOARDING_QUESTIONS)[number]["id"], AnswerValue>
>;

type OnboardingFlowProps = {
  renderLabSearch: (props: {
    onSelect: (labId: string) => void;
    selectedLabId?: string;
  }) => ReactNode;
};

function formatAnswer(answer: AnswerValue | undefined) {
  return Array.isArray(answer) ? answer.join(", ") : answer;
}

export function OnboardingFlow({ renderLabSearch }: OnboardingFlowProps) {
  const [answers, setAnswers] = useState<Answers>({});
  const [pendingAnswer, setPendingAnswer] = useState("");
  const [pendingSelections, setPendingSelections] = useState<string[]>([]);

  const completedQuestionCount = ONBOARDING_QUESTIONS.filter(
    (question) => {
      const answer = answers[question.id];
      return Array.isArray(answer) ? answer.length > 0 : Boolean(answer);
    },
  ).length;
  const currentQuestion = ONBOARDING_QUESTIONS[completedQuestionCount];
  const isComplete = currentQuestion === undefined;
  const currentStep = isComplete ? 8 : completedQuestionCount + 1;

  function handleSubmit() {
    if (!currentQuestion) {
      return;
    }

    const nextAnswer =
      currentQuestion.type === "multi-choice"
        ? pendingSelections
        : pendingAnswer.trim();

    if (nextAnswer.length === 0) return;

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: nextAnswer,
    }));
    setPendingAnswer("");
    setPendingSelections([]);
  }

  function handleRestart() {
    setAnswers({});
    setPendingAnswer("");
    setPendingSelections([]);
  }

  return (
    <>
      <OnboardingProgress currentStep={currentStep} />
      <section className="mx-auto flex w-full max-w-[680px] flex-col gap-[var(--spacing-spacing-4)] px-[var(--spacing-spacing-4)] pb-[var(--spacing-spacing-10)] pt-[var(--spacing-spacing-10)] md:px-0">
        {ONBOARDING_QUESTIONS.slice(0, completedQuestionCount).map((question) => (
          <div className="contents" key={question.id}>
            <ChatMessage sender="bot">{question.question}</ChatMessage>
            {question.helper ? (
              <ChatMessage emphasis="subtle" sender="bot">
                {question.helper}
              </ChatMessage>
            ) : null}
            {question.id === "lab" ? (
              <SelectedLabCard
                lab={
                  MOCK_LABS.find((lab) => lab.id === answers.lab) ?? MOCK_LABS[0]
                }
              />
            ) : (
              <ChatMessage sender="user">
                {formatAnswer(answers[question.id])}
              </ChatMessage>
            )}
          </div>
        ))}

        {isComplete ? (
          <div className="rounded-[var(--radius-xl)] bg-bg-neutral px-[var(--spacing-spacing-6)] py-[var(--spacing-spacing-4)] shadow-[0_2px_4px_var(--color-opacity-black-10)]">
            <p className="text-[length:var(--font-size-heading2)] font-semibold leading-[1.5] text-text-default">
              회원가입 축하드려요! 🥳
            </p>
            <p className="mt-[var(--spacing-spacing-3)] text-[length:var(--font-size-body3)] leading-[1.5] text-text-subtle">
              이제 똑똑에서 자세한 연구실 정보를 확인해보세요!
            </p>
            <button
              className="mt-[var(--spacing-spacing-3)] rounded-[var(--radius-md)] border border-border-primary bg-bg-default px-[var(--spacing-spacing-6)] py-[var(--spacing-spacing-3)] text-[length:var(--font-size-headline1)] font-semibold leading-[1.4] text-[color:var(--color-bg-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary"
              onClick={handleRestart}
              type="button"
            >
              다시 시작하기
            </button>
          </div>
        ) : (
          <form
            className="flex flex-col gap-[var(--spacing-spacing-4)]"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <ChatMessage sender="bot">{currentQuestion.question}</ChatMessage>
            {currentQuestion.helper ? (
              <ChatMessage emphasis="subtle" sender="bot">
                {currentQuestion.helper}
              </ChatMessage>
            ) : null}
            {currentQuestion.type === "choice" ? (
              <QuickReplies
                name={currentQuestion.id}
                onValueChange={setPendingAnswer}
                options={currentQuestion.options ?? []}
                value={pendingAnswer}
              />
            ) : currentQuestion.type === "multi-choice" ? (
              <MultiQuickReplies
                maxSelections={3}
                name={currentQuestion.id}
                onValueChange={setPendingSelections}
                options={currentQuestion.options ?? []}
                values={pendingSelections}
              />
            ) : currentQuestion.type === "lab-search" ? (
              renderLabSearch({
                onSelect: setPendingAnswer,
                selectedLabId: pendingAnswer,
              })
            ) : (
              <div className="ml-auto w-full max-w-[444px]">
                <Field
                  aria-label="오픈채팅 링크"
                  onChange={(event) => setPendingAnswer(event.target.value)}
                  placeholder="https://open.kakao.com/..."
                  type="url"
                  value={pendingAnswer}
                />
              </div>
            )}
            <div className="flex justify-end">
              <OnboardingSubmit
                disabled={
                  currentQuestion.type === "multi-choice"
                    ? pendingSelections.length === 0
                    : !pendingAnswer.trim()
                }
              />
            </div>
          </form>
        )}
      </section>
    </>
  );
}

export type { OnboardingFlowProps };
