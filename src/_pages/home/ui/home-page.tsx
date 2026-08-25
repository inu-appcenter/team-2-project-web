import { SiteHeader } from "@/widgets/site-header";

export function HomePage() {
  return (
    <div className="min-h-screen bg-bg-default">
      <SiteHeader activeItem="home" />
    </div>
  );
}
