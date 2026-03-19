import { getAllPosts } from "@/lib/posts";
import { locations } from "@/lib/locations";
import { siteConfig } from "@/lib/metadata";

export default function sitemap() {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const locationUrls = locations.map((location) => ({
    url: `${siteConfig.url}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    prioty: 0.8,
  }));

  const staticUrls = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
  url: `${siteConfig.url}/portfolio`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
  ];

  return [...staticUrls, ...blogUrls, ...locationUrls];
}