import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/shared/ui";

export type HeaderActiveItem = "ai" | "home" | "search";

export type SiteHeaderProps = {
  activeItem?: HeaderActiveItem;
  isAuthenticated?: boolean;
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
    iconSize: 18,
    id: "home",
    label: "홈",
  },
  {
    activeIcon: "/icons/header/search-active.svg",
    href: "/search",
    icon: "/icons/header/search.svg",
    iconSize: 18,
    id: "search",
    label: "연구실 검색",
  },
  {
    activeIcon: "/icons/header/ai-active.svg",
    href: "/recommendations",
    icon: "/icons/header/ai.svg",
    iconSize: 20,
    id: "ai",
    label: "AI 추천",
  },
];

export function SiteHeader({
  activeItem,
  isAuthenticated = false,
}: SiteHeaderProps) {
  return (
    <header className="relative z-50 w-full bg-bg-default shadow-[0_2px_8px_var(--color-opacity-black-10)]">
      <div className="mx-auto flex min-h-[68px] w-full max-w-[1440px] min-w-0 items-center justify-between px-6 py-[var(--spacing-spacing-1)] max-md:w-screen max-md:max-w-[100vw] md:px-[clamp(24px,8.89vw,128px)]">
        <div className="flex min-w-0 items-center gap-[clamp(16px,3.33vw,48px)] py-[var(--spacing-spacing-2-5)]">
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
                    className={`whitespace-nowrap text-[length:var(--font-size-heading2)] font-semibold leading-[1.5] tracking-[-0.01em] ${
                      isActive
                        ? isAi
                          ? "bg-[linear-gradient(90deg,#a7c0db_0%,#b4bade_33%,#c2aed6_66%,#d699c5_100%)] bg-clip-text text-transparent"
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

        <div className="ml-auto flex shrink-0 items-center overflow-hidden">
          {isAuthenticated ? (
            <Link
              className="flex cursor-pointer items-center gap-[var(--spacing-spacing-0-5)] rounded-sm px-[var(--spacing-spacing-1)] text-[22px] font-semibold leading-[1.5] tracking-[-0.01em] text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary"
              href="/mypage"
            >
              <Image alt="" height={22} src="/icons/header/profile.svg" width={22} />
              마이페이지
            </Link>
          ) : (
            <Link
              className="flex h-10 cursor-pointer items-center justify-center rounded-[var(--radius-md)] bg-bg-primary px-[var(--spacing-spacing-6)] text-[22px] font-semibold leading-[1.5] tracking-[-0.01em] text-text-inverse transition-colors hover:bg-bg-primary-hover active:bg-bg-primary-press focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary"
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
