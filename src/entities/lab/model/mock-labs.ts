import type { LabSummary } from "./lab";

export const MOCK_LABS: LabSummary[] = [
  {
    id: "intelligent-data-systems",
    name: "지능형 데이터 시스템 연구실",
    professorName: "김OO",
    department: "컴퓨터공학부",
    tags: ["데이터베이스", "빅데이터"],
  },
  {
    id: "applied-ai",
    name: "인공지능 응용 연구실",
    professorName: "이OO",
    department: "산업공학부",
    tags: ["인공지능", "최적화"],
  },
  {
    id: "data-mining",
    name: "데이터마이닝 연구실",
    professorName: "박OO",
    department: "컴퓨터공학부",
    tags: ["데이터마이닝", "추천시스템"],
  },
  {
    id: "machine-learning-theory",
    name: "머신러닝 이론 연구실",
    professorName: "최OO",
    department: "산업공학부",
    tags: ["머신러닝", "딥러닝"],
  },
  {
    id: "robotics",
    name: "로보틱스 연구실",
    professorName: "정OO",
    department: "기계공학부",
    tags: ["로보틱스", "제어"],
  },
];
