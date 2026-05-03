import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./BlogPost.module.css";

const SITE_URL = "https://www.localsearchally.com";

const mdxComponents = {
  img: ({ src, alt }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={450}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: 8,
        margin: "2rem 0",
      }}
    />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { metadata } = getPostBySlug(slug);
  const url = `${SITE_URL}/blog/${slug}`;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: { canonical: url },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url,
      type: "article",
      publishedTime: metadata.date,
      authors: ["Chad Smith"],
      siteName: "Local Search Ally",
      images: [
        {
          url: metadata.image ? `${SITE_URL}${metadata.image}` : `${SITE_URL}/og-default.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image ? `${SITE_URL}${metadata.image}` : `${SITE_URL}/og-default.png`],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const { metadata, content } = getPostBySlug(slug);
  const readTime = Math.ceil(content.trim().split(/\s+/).length / 200);
  const url = `${SITE_URL}/blog/${slug}`;

  const wordCount = content.trim().split(/\s+/).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: metadata.title,
    description: metadata.description,
    url,
    inLanguage: "en-US",
    wordCount,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: metadata.date,
    dateModified: metadata.dateModified || metadata.date,
    image: {
      "@type": "ImageObject",
      url: metadata.image ? `${SITE_URL}${metadata.image}` : `${SITE_URL}/og-default.png`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/about#chad-smith`,
      name: "Chad Smith",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Local Search Ally",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: metadata.title, item: url },
    ],
  };

  const faqJsonLd = metadata.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: metadata.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }
    : null;

  return (
    <div className={styles.page}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className={styles.inner}>
        {/* Feature Image */}
        {metadata.image && (
          <div className={styles.featureImage}>
            <Image
              src={metadata.image}
              alt={metadata.imageAlt || `Featured image for ${metadata.title}`}
              width={1200}
              height={630}
              className={styles.featureImg}
              priority
            />
          </div>
        )}

        {/* Tags */}
        {metadata.tags?.length > 0 && (
          <div className={styles.tags}>
            {metadata.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className={styles.postTitle}>{metadata.title}</h1>
        <p className={styles.postDesc}>{metadata.description}</p>

        {/* Byline */}
        <div className={styles.byline}>
          <div className={styles.bylineAvatar}>
            <Image
              src='/images/chadsmith-profile.png'
              alt='Chad Smith'
              width={36}
              height={36}
              className={styles.bylineAvatarImg}
            />
          </div>
          <div>
            <p className={styles.bylineName}>Chad Smith</p>
            <p className={styles.bylineMeta}>
              {new Date(metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {" · "}
              {readTime} min read
            </p>
          </div>
        </div>

        {/* Content */}
        <div className='prose'>
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        {/* Author bio */}
        <div className={styles.bio}>
          <div className={styles.bioAvatar}>
            <Image
              src='/images/chadsmith-profile.png'
              alt='Chad Smith'
              width={64}
              height={64}
              className={styles.bioAvatarImg}
            />
          </div>
          <div>
            <p className={styles.bioLabel}>Written by</p>
            <p className={styles.bioName}>Chad Smith</p>
            <p className={styles.bioCopy}>
              Founder of Local Search Ally. Helping NWA contractors get found on
              Google. Based in Siloam Springs, AR.
            </p>
          </div>
        </div>

        {/* Nav */}
        <div className={styles.nav}>
          <Link href='/blog' className={styles.navBack}>
            ← Back to Blog
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_AUDIT_URL}
            className={styles.navCta}
          >
            Run Free Audit →
          </Link>
        </div>
      </div>
    </div>
  );
}
