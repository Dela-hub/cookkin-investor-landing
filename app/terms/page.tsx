import Link from "next/link";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

async function readLegalFile(filename: string) {
  const filePath = join(process.cwd(), "content", "legal", filename);
  return readFile(filePath, "utf8");
}

function renderParagraphs(text: string) {
  return text
    .split(/\n\s*\n/g)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
}

export default async function TermsPage() {
  const text = await readLegalFile("terms.txt");
  const paragraphs = renderParagraphs(text);

  return (
    <main className="min-h-screen bg-[var(--background)] text-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-medium text-[#B04123] hover:text-[#381C08]">
            Back to home
          </Link>
        </div>
        <article className="rounded-3xl border border-[var(--landing-border)] bg-[var(--landing-surface)] p-6 sm:p-8">
          <h1 className="font-serif text-3xl tracking-tight text-slate-900 sm:text-5xl">Terms &amp; Conditions</h1>
          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-700 sm:text-base">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
