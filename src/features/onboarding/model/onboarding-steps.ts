import type { LabSummary } from "@/entities/lab";

type OnboardingQuestionId =
  | "purpose"
  | "lab"
  | "coreTime"
  | "meetingFrequency"
  | "activities"
  | "coffeeChat"
  | "contact";

type OnboardingQuestion = {
  helper?: string;
  id: OnboardingQuestionId;
  options?: Array<{ label: string; value: string }>;
  question: string;
  type: "choice" | "text";
};

const DEFAULT_LAB: LabSummary = {
  id: "intelligent-data-systems",
  name: "지능형 데이터 시스템 연구실",
  professorName: "김OO",
  department: "컴퓨터공학부",
  tags: ["데이터베이스", "빅데이터"],
};

const ONBOARDING_QUESTIONS: OnboardingQuestion[] = [
  {
    id: "purpose",
    question: "어떤 목적으로 방문하셨나요?",
    helper: "선택하신 역할에 맞춰 가장 적합한 연구실 정보를 보여드릴게요",
    type: "choice",
    options: [
      { label: "연구실을 알아보고 있어요", value: "연구실을 알아보고 있어요" },
      {
        label: "학부연구생 / 대학원생이에요",
        value: "학부연구생 / 대학원생이에요",
      },
    ],
  },
  {
    id: "lab",
    question: "좋아요! 소속된 연구실이 어디신가요?",
    helper: "연구실 이름이나 교수님 성함을 입력하면 찾을 수 있어요",
    type: "choice",
    options: [{ label: DEFAULT_LAB.name, value: DEFAULT_LAB.id }],
  },
  {
    id: "coreTime",
    question: "연구실에 코어타임이 있나요?",
    type: "choice",
    options: [
      { label: "네, 있어요", value: "네, 있어요" },
      { label: "아니요, 없어요", value: "아니요, 없어요" },
    ],
  },
  {
    id: "meetingFrequency",
    question: "미팅은 얼마나 자주 갖나요?",
    type: "choice",
    options: [
      { label: "주 1회", value: "주 1회" },
      { label: "주 2회 이상", value: "주 2회 이상" },
      { label: "필요할 때만", value: "필요할 때만" },
    ],
  },
  {
    id: "activities",
    question: "마지막으로, 주로 하는 일을 알려주세요!",
    helper: "여러 개 선택할 수 있어요",
    type: "choice",
    options: [
      {
        label: "논문 리딩, 코딩/프로그래밍, 학회 발표",
        value: "논문 리딩, 코딩/프로그래밍, 학회 발표",
      },
      { label: "실험 및 데이터 분석", value: "실험 및 데이터 분석" },
    ],
  },
  {
    id: "coffeeChat",
    question: "커피챗을 허용하시겠어요?",
    helper: "연구실이 궁금한 후배들에게 자세한 얘기를 해줄 수 있어요",
    type: "choice",
    options: [
      { label: "네, 좋아요", value: "네, 좋아요" },
      { label: "아니요, 괜찮아요", value: "아니요, 괜찮아요" },
    ],
  },
  {
    id: "contact",
    question: "연락 가능한 오픈채팅 링크를 남겨주세요",
    helper: "연구실이 궁금한 후배들이 편하게 연락할 수 있어요",
    type: "text",
  },
];

export { DEFAULT_LAB, ONBOARDING_QUESTIONS };
export type { OnboardingQuestion, OnboardingQuestionId };
