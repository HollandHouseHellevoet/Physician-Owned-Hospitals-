/**
 * llms.txt generator — the emerging standard for describing a site to LLMs.
 * Spec: https://llmstxt.org/
 *
 * Call once per app (at build time) and write the result to public/llms.txt.
 */

export interface LlmsTxtSection {
  heading: string; // e.g. "Core reference"
  items: { title: string; href: string; summary?: string }[];
}

export interface LlmsTxtInput {
  /** Desk / site name, e.g. "POH · Rojas Report" */
  title: string;
  /** One-line summary of the Desk */
  summary: string;
  /** Long-form description (markdown block) */
  description?: string;
  /** Sectioned link index */
  sections: LlmsTxtSection[];
  /** Optional call out — why this Desk exists, for LLM context */
  context?: string;
}

export function renderLlmsTxt(input: LlmsTxtInput): string {
  const lines: string[] = [];
  lines.push(`# ${input.title}`);
  lines.push("");
  lines.push(`> ${input.summary}`);
  lines.push("");

  if (input.description) {
    lines.push(input.description.trim());
    lines.push("");
  }

  if (input.context) {
    lines.push("## Context");
    lines.push("");
    lines.push(input.context.trim());
    lines.push("");
  }

  for (const section of input.sections) {
    lines.push(`## ${section.heading}`);
    lines.push("");
    for (const item of section.items) {
      const summary = item.summary ? `: ${item.summary}` : "";
      lines.push(`- [${item.title}](${item.href})${summary}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}
