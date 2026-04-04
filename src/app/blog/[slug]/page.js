import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./BlogPost.module.css";

const SITE_URL = "https://localsearchally.com";

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
  const ogImage = metadata.image
    ? `${SITE_URL}${metadata.image}`
    : `${SITE_URL}/images/og-default.png`;

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
      images: [{ url: ogImage, width: 1200, height: 630, alt: metadata.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const { metadata, content } = getPostBySlug(slug);
  const readTime = Math.ceil(content.trim().split(/\s+/).length / 200);
  const url = `${SITE_URL}/blog/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    url,
    datePublished: metadata.date,
    author: {
      "@type": "Person",
      name: "Chad Smith",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Local Search Ally",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    ...(metadata.image && {
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}${metadata.image}`,
      },
    }),
  };

  return (
    <div className={styles.page}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.inner}>
        {/* Feature Image */}
        {metadata.image && (
          <div className={styles.featureImage}>
            <Image
              src={metadata.image}
              alt={metadata.title}
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
              src='/images/chad.avif'
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
              src='/images/chad.avif'
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
          <Link href='/audit' className={styles.navCta}>
            Run Free Audit →
          </Link>
        </div>
      </div>
    </div>
  );
}
