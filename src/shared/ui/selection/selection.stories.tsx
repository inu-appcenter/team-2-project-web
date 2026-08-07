import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox, Radio, Toggle } from "./selection";

const meta = {
  title: "Shared/UI/Selection",
  component: Checkbox,
  args: { children: "옵션" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox name="department" value="computer">컴퓨터공학부</Checkbox>
      <Checkbox defaultChecked name="department" value="information">정보통신공학과</Checkbox>
      <Checkbox disabled name="department" value="disabled">비활성화</Checkbox>
    </div>
  ),
};

export const RadioStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Radio defaultChecked name="status" value="all">전체</Radio>
      <Radio name="status" value="open">모집 중</Radio>
      <Radio disabled name="status" value="disabled">비활성화</Radio>
    </div>
  ),
};

export const ToggleStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Toggle defaultChecked>AI 추천 사용</Toggle>
      <Toggle>알림 받기</Toggle>
    </div>
  ),
};
