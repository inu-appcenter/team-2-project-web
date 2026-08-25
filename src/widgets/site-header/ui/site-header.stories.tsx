import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SiteHeader } from "./site-header";

const meta = {
  title: "Widgets/SiteHeader",
  component: SiteHeader,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};
export const Search: Story = { args: { activeItem: "search" } };
export const AiRecommendation: Story = { args: { activeItem: "ai" } };
export const Authenticated: Story = { args: { isAuthenticated: true } };
