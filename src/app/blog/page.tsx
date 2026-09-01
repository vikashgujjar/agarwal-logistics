import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTA from "@/components/sections/CTA";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Moving Tips & Guides | Agarwal Logistics Packers Blog",
  description:
    "Expert advice on home shifting, packing, moving costs and more — from India's trusted packers and movers.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHero
        breadcrumb="Blog"
        eyebrow="Expert Moving Advice"
        heading="Moving Tips &"
        highlight="Guides."
        description="Practical advice from years of moving experience across India. Save money, avoid mistakes, and move smarter."
      />

      {/* Featured post */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative min-h-[280px] lg:min-h-[380px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
              <span className="absolute top-6 left-6 bg-orange text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center px-8 sm:px-10 py-10 sm:py-12 bg-bg-light">
              <span className="inline-block self-start bg-orange/10 text-orange text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                {featured.category}
              </span>
              <h2 className="font-extrabold text-navy text-xl sm:text-2xl leading-tight mb-4 group-hover:text-orange transition-colors">
                {featured.title}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-navy text-white font-bold text-xs shrink-0">
                  {featured.author.charAt(0)}
                </span>
                <div>
                  <div className="text-navy text-xs font-bold">{featured.author}</div>
                  <div className="text-text-secondary/70 text-[10px]">
                    {featured.date} &middot; {featured.readTime}
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-orange text-xs font-extrabold uppercase tracking-wider group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Category pills */}
      <section className="pb-2 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {BLOG_CATEGORIES.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                  i === 0 ? "bg-navy text-white" : "bg-bg-light text-navy border border-border"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-[210px] overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                  <span className="absolute top-4 left-4 bg-orange text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6 bg-white">
                  <h3 className="font-extrabold text-navy text-base leading-snug mb-3 group-hover:text-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-navy text-white font-bold text-[10px] shrink-0">
                        {post.author.charAt(0)}
                      </span>
                      <div>
                        <div className="text-navy text-[10px] font-bold">{post.author}</div>
                        <div className="text-text-secondary/70 text-[9px]">{post.readTime}</div>
                      </div>
                    </div>
                    <span className="text-text-secondary/60 text-[9px]">{post.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* <CTA /> */}
    </>
  );
}
