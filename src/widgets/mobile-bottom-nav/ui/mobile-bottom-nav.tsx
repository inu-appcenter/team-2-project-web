import Image from "next/image";
import Link from "next/link";

type MobileBottomNavItem = {
  href: string;
  icon: string;
  iconSize: number;
  label: string;
};

const items: MobileBottomNavItem[] = [
  {
    href: "/",
    icon: "/icons/home/mobile/home.svg",
    iconSize: 24,
    label: "홈",
  },
  {
    href: "/recommendations",
    icon: "/icons/home/mobile/sparkles.svg",
    iconSize: 24,
    label: "AI추천",
  },
  {
    href: "/mypage",
    icon: "/icons/home/mobile/profile.svg",
    iconSize: 22,
    label: "MY",
  },
];

export function MobileBottomNav() {
  return (
    <nav
      aria-label="모바일 주요 메뉴"
      className="fixed inset-x-0 bottom-0 z-40 flex h-[calc(72px+env(safe-area-inset-bottom))] items-start justify-center gap-[30px] bg-bg-default px-4 pb-[env(safe-area-inset-bottom)] pt-3 shadow-[0_-2px_8px_var(--color-opacity-black-5)] md:hidden"
    >
      {items.map((item) => (
        <Link
          className="flex w-10 flex-col items-center gap-0.5 rounded-sm text-text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary"
          href={item.href}
          key={item.href}
        >
          <span
            className="relative flex shrink-0 items-center justify-center"
            style={{ height: item.iconSize, width: item.iconSize }}
          >
            <Image alt="" fill sizes={`${item.iconSize}px`} src={item.icon} />
          </span>
          <span className="whitespace-nowrap text-[length:var(--font-size-label1)] font-semibold leading-[1.5]">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
