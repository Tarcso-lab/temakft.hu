import { Info } from "lucide-react";
import type { ContentBlock } from "@/lib/content";
import { huTypo } from "@/lib/typography";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-tema">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i}>{huTypo(block.text)}</h2>;
          case "h3":
            return <h3 key={i}>{huTypo(block.text)}</h3>;
          case "p":
            return <p key={i}>{huTypo(block.text)}</p>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{huTypo(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{huTypo(item)}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="not-prose my-8 rounded-card border border-signal-200 bg-signal-50/70 p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 h-[18px] w-[18px] shrink-0 text-signal-700" />
                  <div>
                    <p className="text-[0.92rem] font-bold tracking-[-0.01em] text-ink-900">
                      {huTypo(block.title)}
                    </p>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-stone-600">
                      {huTypo(block.text)}
                    </p>
                  </div>
                </div>
              </aside>
            );
          case "table":
            return (
              <div key={i} className="not-prose my-8 overflow-x-auto rounded-card border border-stone-200">
                <table className="w-full min-w-[540px] border-collapse text-left">
                  <thead>
                    <tr className="bg-stone-50">
                      {block.head.map((cell, j) => (
                        <th
                          key={j}
                          scope="col"
                          className="border-b border-stone-200 px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-stone-600"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="align-top">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className={`border-b border-stone-100 px-4 py-3.5 text-[0.87rem] leading-relaxed ${
                              k === 0 ? "font-semibold text-ink-900" : "text-stone-600"
                            }`}
                          >
                            {huTypo(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
