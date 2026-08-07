import { Tag } from "./tag";

export type SearchResultItemProps = {
  info?: string;
  name?: string;
  showTags?: boolean;
  tags?: string[];
};

export function SearchResultItem({
  info = "교수명 · 학과",
  name = "연구실 이름",
  showTags = true,
  tags = ["태그1", "태그2"],
}: SearchResultItemProps) {
  return (
    <article className="flex w-full items-center bg-bg-default px-[calc(var(--spacing-spacing-4)*1px)] py-[calc(var(--spacing-spacing-3)*1px)]">
      <div className="flex min-w-0 flex-1 flex-col items-start gap-[calc(var(--spacing-spacing-1-5)*1px)] overflow-hidden">
        <h3 className="truncate text-[length:calc(var(--typography-font-size-body1)*1px)] font-semibold text-text-default">{name}</h3>
        <p className="truncate text-[length:calc(var(--typography-font-size-label2)*1px)] text-text-subtle">{info}</p>
        {showTags ? (
          <div className="flex gap-[calc(var(--spacing-spacing-1-5)*1px)] overflow-hidden">
            {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        ) : null}
      </div>
    </article>
  );
}
