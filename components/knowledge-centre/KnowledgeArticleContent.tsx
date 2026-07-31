import type { ReactNode } from "react";
import Link from "next/link";
import { slugifyKnowledgeHeading } from "@/lib/knowledge-centre";

function renderInline(text: string): ReactNode[] {
  return text
    .split(/(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))/)
    .map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const className =
        "font-medium text-red-400 underline decoration-red-500/40 underline-offset-4 transition-colors hover:text-red-300";

      if (/^https?:\/\//.test(href)) {
        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        );
      }

      return (
        <Link key={index} href={href} className={className}>
          {label}
        </Link>
      );
    }

    return part;
  });
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableDivider(line: string): boolean {
  return parseTableRow(line).every((cell) => /^:?-{3,}:?$/.test(cell));
}

export default function KnowledgeArticleContent({
  content,
}: {
  content: string;
}) {
  const lines = content.trim().split("\n");
  const elements: ReactNode[] = [];
  let index = 0;
  let key = 0;

  while (index < lines.length) {
    const trimmed = lines[index].trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed === "---") {
      elements.push(
        <hr key={`hr-${key++}`} className="my-10 border-hive-border" />,
      );
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(##|###)\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1] === "##" ? 2 : 3;
      const title = headingMatch[2].replace(/\*\*/g, "");
      const id = slugifyKnowledgeHeading(title);
      elements.push(
        level === 2 ? (
          <h2
            key={`h2-${key++}`}
            id={id}
            className="scroll-mt-28 text-2xl font-bold tracking-tight text-white mt-12 mb-5"
          >
            {title}
          </h2>
        ) : (
          <h3
            key={`h3-${key++}`}
            id={id}
            className="scroll-mt-28 text-xl font-semibold text-white mt-8 mb-4"
          >
            {title}
          </h3>
        ),
      );
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }

      const rows = tableLines.filter((line) => !isTableDivider(line));
      if (rows.length > 0) {
        const [header, ...body] = rows.map(parseTableRow);
        elements.push(
          <div
            key={`table-${key++}`}
            className="my-8 overflow-x-auto rounded-2xl border border-hive-border"
          >
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead className="bg-hive-elevated">
                <tr>
                  {header.map((cell, cellIndex) => (
                    <th
                      key={cellIndex}
                      scope="col"
                      className="border-b border-hive-border px-4 py-3 font-semibold text-white"
                    >
                      {renderInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-hive-border last:border-b-0"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-3 align-top text-hive-muted"
                      >
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }
      continue;
    }

    if (/^- \[[x ]\]\s+/.test(trimmed)) {
      const items: { checked: boolean; text: string }[] = [];
      while (
        index < lines.length &&
        /^- \[[x ]\]\s+/.test(lines[index].trim())
      ) {
        const item = lines[index].trim();
        items.push({
          checked: item.startsWith("- [x]"),
          text: item.replace(/^- \[[x ]\]\s+/, ""),
        });
        index += 1;
      }
      elements.push(
        <ul key={`checklist-${key++}`} className="mb-6 space-y-2">
          {items.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="flex items-start gap-3 text-hive-muted"
            >
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-hive-accent/50">
                {item.checked && (
                  <span className="h-2 w-2 rounded-sm bg-hive-accent" />
                )}
              </span>
              <span>{renderInline(item.text)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (
        index < lines.length &&
        /^[-*]\s+/.test(lines[index].trim()) &&
        !/^- \[[x ]\]\s+/.test(lines[index].trim())
      ) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
        index += 1;
      }
      elements.push(
        <ul key={`list-${key++}`} className="mb-6 space-y-2">
          {items.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="flex items-start gap-3 text-hive-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hive-accent" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      elements.push(
        <ol
          key={`ordered-list-${key++}`}
          className="mb-6 list-decimal space-y-2 pl-6 text-hive-muted marker:font-semibold marker:text-hive-accent"
        >
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    const emphasisLabel = trimmed.startsWith("**") && trimmed.includes(":**");
    elements.push(
      <p
        key={`paragraph-${key++}`}
        className={
          emphasisLabel
            ? "mb-2 mt-6 font-semibold text-hive-text"
            : "mb-5 leading-relaxed text-hive-muted"
        }
      >
        {renderInline(trimmed)}
      </p>,
    );
    index += 1;
  }

  return <>{elements}</>;
}
