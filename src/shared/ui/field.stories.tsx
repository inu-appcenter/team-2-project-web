import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Field } from "./field";

const meta = {
  title: "Shared/UI/Field",
  component: Field,
  args: { placeholder: "연구실명 · 교수명 · 키워드 검색" },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithLabel: Story = { args: { label: "검색" } };
export const WithError: Story = { args: { error: "검색어를 입력해 주세요." } };
export const Disabled: Story = { args: { disabled: true } };
