"use client";

import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/shared/ui";

export type HeaderActiveItem = "ai" | "home" | "search";

export type SiteHeaderProps = {
  activeItem?: HeaderActiveItem;
  isAuthenticated?: boolean;
  onLogout?: () => void;
};

const navigationItems: Array<{
  activeIcon: string;
  href: string;
  icon: string;
  iconSize: number;
  id: HeaderActiveItem;
  label: string;
}> = [
  {
    activeIcon: "/icons/header/home-active.svg",
    href: "/",
    icon: "/icons/header/home.svg",
    iconSize: 22,
    id: "home",
    label: "홈",
  },
  {
    activeIcon: "/icons/header/search-active.svg",
    href: "/search",
    icon: "/icons/header/search.svg",
    iconSize: 22,
    id: "search",
    label: "연구실 검색",
  },
  {
    activeIcon: "/icons/header/ai-active.svg",
    href: "/recommendations",
    icon: "/icons/header/ai.svg",
    iconSize: 24,
    id: "ai",
    label: "AI 추천",
  },
];

export function SiteHeader({
  activeItem = "home",
  isAuthenticated = false,
  onLogout,
}: SiteHeaderProps) {
  return (
    <header className="relative z-50 w-full bg-bg-default shadow-[0_2px_4px_var(--color-opacity-black-10)]">
      <div className="mx-auto flex min-h-[68px] w-full max-w-[1440px] items-center justify-between px-[clamp(24px,8.89vw,128px)] py-[var(--spacing-spacing-1)]">
        <div className="flex items-center gap-[clamp(16px,3.33vw,48px)] p-[var(--spacing-spacing-2-5)]">
          <Link
            aria-label="똑똑 홈"
            className="shrink-0 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary"
            href="/"
          >
            <Logo priority variant="wordmark" />
          </Link>

          <nav aria-label="주요 메뉴" className="hidden items-center gap-[var(--spacing-spacing-6)] md:flex">
            {navigationItems.map((item) => {
              const isActive = activeItem === item.id;
              const isAi = item.id === "ai";

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className="flex cursor-pointer items-center gap-[var(--spacing-spacing-2-5)] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary"
                  href={item.href}
                  key={item.id}
                >
                  <span
                    className="relative shrink-0 overflow-hidden"
                    style={{ height: item.iconSize, width: item.iconSize }}
                  >
                    <Image
                      alt=""
                      fill
                      sizes={`${item.iconSize}px`}
                      src={isActive ? item.activeIcon : item.icon}
                    />
                  </span>
                  <span
                    className={`whitespace-nowrap text-[length:var(--font-size-heading1)] font-semibold leading-[1.5] tracking-[-0.01em] ${
                      isActive
                        ? isAi
                          ? "bg-[linear-gradient(89.7deg,#9bbcc3_1.38%,#abc2e2_54.82%,#cba5d1_145.41%)] bg-clip-text text-transparent"
                          : "text-text-primary"
                        : "text-text-subtlest"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-[var(--spacing-spacing-4)]">
          <Link
            className="hidden cursor-pointer items-center gap-[var(--spacing-spacing-1-5)] rounded-sm text-[length:var(--font-size-headline2)] font-semibold leading-[1.4] tracking-[-0.01em] text-text-disabled focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary lg:flex"
            href="/report"
          >
            <Image alt="" height={16} src="/icons/header/report.svg" width={16} />
            제보하기
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center gap-[var(--spacing-spacing-2)]">
              <button
                className="hidden cursor-pointer items-center gap-[var(--spacing-spacing-1-5)] rounded-sm text-[length:var(--font-size-headline2)] font-semibold leading-[1.4] tracking-[-0.01em] text-text-disabled focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary sm:flex"
                onClick={onLogout}
                type="button"
              >
                <Image alt="" height={16} src="/icons/header/logout.svg" width={16} />
                로그아웃
              </button>
              <Link
                className="flex cursor-pointer items-center gap-[var(--spacing-spacing-0-5)] rounded-sm text-[length:var(--font-size-headline2)] font-semibold leading-[1.4] tracking-[-0.01em] text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary"
                href="/mypage"
              >
                <Image alt="" height={22} src="/icons/header/profile.svg" width={22} />
                마이페이지
              </Link>
            </div>
          ) : (
            <Link
              className="flex h-10 cursor-pointer items-center justify-center rounded-[var(--radius-md)] bg-bg-primary px-[var(--spacing-spacing-6)] text-[length:var(--font-size-headline2)] font-semibold leading-[1.5] text-text-inverse transition-colors hover:bg-bg-primary-hover active:bg-bg-primary-press focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary"
              href="/login"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
