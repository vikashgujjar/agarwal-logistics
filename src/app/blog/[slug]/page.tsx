import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Agarwal Logistics Packers Blog`,
    description: post.excerpt,
  };
}

function renderContent(content: string): ReactNode[] {
  const lines = content.trim().split("\n");
  const elements: ReactNode[] = [];
  let i = 0;
  let tableRows: string[][] = [];
  let inTable = false;

  function flushTable() {
    if (tableRows.length < 2) {
      tableRows = [];
      inTable = false;
      return;
    }
    const [header, , ...body] = tableRows;
    elements.push(
      <div key={`table-${i}`} className="overflow-x-auto my-8 rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white">
              {header.map((h, ci) => (
                <th key={ci} className="text-left px-5 py-3.5 font-bold whitespace-nowrap">
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr
                key={ri}
                className={`border-t border-border ${ri % 2 === 0 ? "bg-white" : "bg-bg-light"}`}
              >
                {row.map((cell, ci) => (
                  <td key={ci} className="px-5 py-3 text-text-secondary">
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("|")) {
      inTable = true;
      tableRows.push(
        line.split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
      );
      i++;
      continue;
    }
    if (inTable) {
      flushTable();
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-extrabold text-navy mt-12 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-extrabold text-orange mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*:\s*(.+)$/);
      if (match) {
        elements.push(
          <li key={i} className="flex gap-2.5 text-text-secondary text-sm leading-relaxed mb-2 list-none">
            <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" />
            <span>
              <strong className="text-navy">{match[1]}:</strong> {match[2]}
            </span>
          </li>
        );
      }
    } else if (line.match(/^\d+\. /)) {
      const boldMatch = line.match(/^(\d+)\.\s+\*\*(.+?)\*\*\s*(.*)$/);
      const plainMatch = line.match(/^(\d+)\.\s+(.+)$/);
      const match = boldMatch || plainMatch;
      if (match) {
        elements.push(
          <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed mb-3 list-none">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange text-white text-[11px] font-extrabold shrink-0 mt-0.5">
              {match[1]}
            </span>
            <span>
              {boldMatch ? (
                <>
                  <strong className="text-navy">{match[2]}</strong> {match[3]}
                </>
              ) : (
                match[2]
              )}
            </span>
          </li>
        );
      }
    } else if (line.trim() !== "") {
      elements.push(
        <p key={i} className="text-text-secondary text-sm leading-relaxed mb-4">
          {line}
        </p>
      );
    }
    i++;
  }
  if (inTable) flushTable();
  return elements;
}

export default async function BlogDetailPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={post.category}
        eyebrow={post.category}
        heading={post.title}
        highlight=""
        compact
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            <article className="max-w-2xl">
              <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[340px] mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white font-bold text-sm shrink-0">
                    {post.author.charAt(0)}
                  </span>
                  <div>
                    <div className="text-navy text-sm font-bold">{post.author}</div>
                    <div className="text-text-secondary text-xs">{post.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-text-secondary text-xs">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-current" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div>{renderContent(post.content)}</div>

              <div className="mt-12 pt-6 border-t border-border flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange/5 text-orange border border-orange/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-5 px-6 py-6 rounded-2xl bg-bg-light border border-border">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-navy text-white font-extrabold text-lg shrink-0">
                  {post.author.charAt(0)}
                </span>
                <div>
                  <div className="font-extrabold text-navy text-sm mb-1">{post.author}</div>
                  <div className="text-orange text-xs font-semibold mb-2">{post.authorRole}</div>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Part of the Agarwal Logistics Packers team, bringing
                    firsthand relocation experience to every piece of advice
                    shared on this blog.
                  </p>
                </div>
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="px-6 py-7 rounded-2xl bg-navy text-center">
                <div className="font-extrabold text-white text-lg mb-2 leading-tight">
                  Planning a Move?
                </div>
                <p className="text-white/55 text-xs mb-5">
                  Get a free itemised quote within 30 minutes.
                </p>
                <Button href="/#quote" variant="primary" className="w-full justify-center mb-3">
                  Get Free Quote
                </Button>
                <Button href="tel:+919988245009" variant="outline-light" className="w-full justify-center">
                  <Phone size={15} strokeWidth={2.5} /> Call Now
                </Button>
              </div>

              <div className="px-6 py-6 rounded-2xl bg-bg-light border border-border">
                <div className="font-extrabold text-navy text-sm mb-4">
                  Why Agarwal Logistics Packers?
                </div>
                {[
                  "10+ years — trusted since 2015",
                  "25K+ residential moves completed",
                  "50+ cities covered",
                  "ISO certified operations",
                  "Zero hidden charges",
                ].map((fact) => (
                  <div key={fact} className="flex items-center gap-2.5 mb-2.5 last:mb-0">
                    <CircleCheck size={14} className="text-orange shrink-0" strokeWidth={2} />
                    <span className="text-text-secondary text-xs">{fact}</span>
                  </div>
                ))}
              </div>

              <div className="px-6 py-6 rounded-2xl bg-bg-light border border-border">
                <div className="font-extrabold text-navy text-sm mb-4">Our Services</div>
                {[
                  { label: "Domestic Shifting", href: "/services/domestic-shifting" },
                  { label: "Corporate Relocation", href: "/services/corporate-relocation" },
                  { label: "Car & Bike Transport", href: "/services/car-bike-transport" },
                  { label: "Warehouse Storage", href: "/services/warehouse-storage" },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 text-text-secondary text-xs hover:text-orange transition-colors mb-2.5 last:mb-0"
                  >
                    <ArrowRight size={12} className="text-orange" strokeWidth={2.5} />
                    {s.label}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
      {related.length > 0 && (
        <section className="py-16 bg-bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-navy mb-8">More from Our Blog</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-[180px] overflow-hidden shrink-0">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 bg-orange text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {rel.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-extrabold text-navy text-sm leading-snug mb-2 group-hover:text-orange transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-text-secondary/70 text-xs mt-auto">
                      {rel.date} &middot; {rel.readTime}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

    </>
  );
}
