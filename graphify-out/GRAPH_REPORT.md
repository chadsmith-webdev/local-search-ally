# Graph Report - src  (2026-05-01)

## Corpus Check
- 152 files · ~97,704 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 365 nodes · 322 edges · 8 communities detected
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 27 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `Google Business Profile Optimization Guide for Contractors` - 12 edges
2. `Local SEO for Contractors: The Complete Guide` - 12 edges
3. `How to Get More Google Reviews as a Contractor` - 10 edges
4. `How to Get Into the Google Map Pack` - 9 edges
5. `Local SEO for HVAC Companies` - 8 edges
6. `Local SEO for Roofing Companies` - 8 edges
7. `Local SEO for Plumbers` - 8 edges
8. `Contractor Google Reviews NWA: Specific Reviews Over Star Ratings` - 7 edges
9. `getAllPosts()` - 6 edges
10. `What Are Citations and Why NWA Contractors Need Them` - 6 edges

## Surprising Connections (you probably didn't know these)
- `sitemap()` --calls--> `getAllPosts()`  [INFERRED]
  app/sitemap.js → lib/posts.js
- `GET()` --calls--> `getAllPosts()`  [INFERRED]
  app/llms.txt/route.js → lib/posts.js
- `BlogPage()` --calls--> `getAllPosts()`  [INFERRED]
  app/blog/page.js → lib/posts.js
- `generateStaticParams()` --calls--> `getAllPosts()`  [INFERRED]
  app/blog/[slug]/page.js → lib/posts.js
- `generateStaticParams()` --calls--> `getAllPosts()`  [INFERRED]
  app/blog/[slug]/opengraph-image.js → lib/posts.js

## Hyperedges (group relationships)
- **NWA Contractor Local SEO Content Cluster** — local_seo_for_contractors_doc, local_seo_for_hvac_companies_doc, local_seo_for_plumbers_doc, local_seo_for_roofing_companies_doc, why_contractors_lose_jobs_doc, rogers_service_area_doc [INFERRED 0.95]
- **Local Search Ranking Signal Framework** — concept_google_business_profile, concept_nap_citations, concept_google_reviews, concept_map_pack, concept_ai_overviews, concept_service_area_pages [EXTRACTED 1.00]
- **Local Search Ally Website Build Case Study (Parts 1-3)** — how_i_built_this_website_doc, local_search_ally_brand_identity_doc, local_search_ally_seo_foundation_doc [EXTRACTED 1.00]
- **GBP Optimization and AI Overviews Content Cluster** — gbp_optimization_guide_doc, gbp_ai_overviews_doc, contractor_google_reviews_nwa_doc, how_to_get_more_google_reviews_doc, concept_google_business_profile, concept_review_text_quality [INFERRED 0.90]
- **Local Search Ally Brand Icon Assets** — apple_icon_img, icon1_img, icon0_svg_img, concept_local_search_ally_brand [EXTRACTED 1.00]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.0
Nodes (30): Apple Business: What NWA Contractors Need to Know, Google AI Overviews in Local Search, Apple Maps and Apple Business Platform, Contractor Website Conversion and Design, Google Business Profile (GBP), Google Reviews and Reputation Signals, HVAC Local SEO and Seasonal Strategy, Local SEO (+22 more)

### Community 1 - "Community 1"
Cohesion: 0.0
Nodes (10): sitemap(), BlogPage(), getAllPosts(), getPostBySlug(), GET(), generateStaticParams(), OGImage(), BlogPost() (+2 more)

### Community 2 - "Community 2"
Cohesion: 0.0
Nodes (7): displace(), dot3(), fade(), InvisibilityHologram(), lerp(), perlin3(), useDynamicData()

### Community 3 - "Community 3"
Cohesion: 0.0
Nodes (2): FunnelLabels(), useCountUp()

### Community 4 - "Community 4"
Cohesion: 0.0
Nodes (7): email1Html(), email2Html(), email3Html(), email4Html(), footer(), logoBlock(), POST()

### Community 5 - "Community 5"
Cohesion: 0.0
Nodes (8): Apple Icon - Local Search Ally Location Pin Logo, Local Search Ally Brand Identity, Next.js 15 + MDX + Vercel Tech Stack, StoryBrand Framework for Contractor Marketing, How I Built the Local Search Ally Website Part 1: Stack and Design, Icon0 SVG - Local Search Ally LSA Pin Icon, Icon1 - Local Search Ally Location Pin Logo Variant, Local Search Ally Website Build Part 2: Brand Identity

### Community 7 - "Community 7"
Cohesion: 0.0
Nodes (2): fadeUp(), Listing()

### Community 11 - "Community 11"
Cohesion: 0.0
Nodes (2): SearchFunnel(), useCountUp()

## Knowledge Gaps
- **Thin community `Community 3`** (10 nodes): `BottomGlow()`, `FunnelLabels()`, `FunnelScene()`, `FunnelTier()`, `SearchFunnel3D.jsx`, `Particles()`, `RotatingGroup()`, `SearchFunnel3D()`, `TierRing()`, `useCountUp()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (7 nodes): `fadeUp()`, `GhostListing()`, `GhostSlot()`, `GhostListing.jsx`, `Listing()`, `NWAMap()`, `StarRating()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (4 nodes): `FunnelParticle()`, `SearchFunnel.jsx`, `SearchFunnel()`, `useCountUp()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.