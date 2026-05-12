# Graph Report - local-search-ally  (2026-05-11)

## Corpus Check
- 218 files · ~4,159,397 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1054 nodes · 1337 edges · 40 communities detected
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 93 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 45|Community 45]]

## God Nodes (most connected - your core abstractions)
1. `run_comparison()` - 28 edges
2. `buildOGImage()` - 25 edges
3. `generate_report()` - 19 edges
4. `_make_finding()` - 19 edges
5. `generate_report()` - 18 edges
6. `validate_url()` - 13 edges
7. `load_config()` - 12 edges
8. `get_oauth_credentials()` - 12 edges
9. `Google Business Profile Optimization Guide for Contractors` - 12 edges
10. `Local SEO for Contractors: The Complete Guide` - 12 edges

## Surprising Connections (you probably didn't know these)
- `main()` --calls--> `validate_url()`  [INFERRED]
  claude-seo/scripts/bing_webmaster.py → claude-seo/scripts/google_auth.py
- `get_moz_api_key()` --calls--> `main()`  [INFERRED]
  claude-seo/scripts/backlinks_auth.py → claude-seo/scripts/moz_api.py
- `get_cache_dir()` --calls--> `_get_cache_path()`  [INFERRED]
  claude-seo/scripts/backlinks_auth.py → claude-seo/scripts/commoncrawl_graph.py
- `get_cache_dir()` --calls--> `get_graph_info()`  [INFERRED]
  claude-seo/scripts/backlinks_auth.py → claude-seo/scripts/commoncrawl_graph.py
- `load_config()` --calls--> `main()`  [INFERRED]
  claude-seo/scripts/google_auth.py → claude-seo/scripts/ga4_report.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (59): capture_baseline(), fetch_cwv_data(), fetch_page_data(), hash_content(), init_db(), main(), normalize_url(), Fetch and parse a page using the project's existing scripts.      Returns dict w (+51 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (51): _build_css(), _build_cwv_section(), _build_executive_summary(), _build_gsc_section(), _build_indexation_section(), _build_methodology_footer(), _build_recommendations(), _build_title_page() (+43 more)

### Community 2 - "Community 2"
Cohesion: 0.04
Nodes (25): OGImage(), OGImage(), OGImage(), OGImage(), OGImage(), OGImage(), OGImage(), OGImage() (+17 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (42): detect_trends(), main(), query_history(), Analyze p75 timeseries to detect trends.      Compares the average of the last 4, Query CrUX History API for weekly CWV trends.      Args:         url_or_origin:, fetch_page(), main(), Fetch a web page and return response details.      Args:         url: The URL to (+34 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (45): build_service(), check_credentials(), detect_tier(), _exchange_code(), get_api_key(), get_oauth_credentials(), get_service_account_credentials(), load_config() (+37 more)

### Community 5 - "Community 5"
Cohesion: 0.15
Nodes (38): Apple Business: What NWA Contractors Need to Know, Apple Icon - Local Search Ally Location Pin Logo, Google AI Overviews in Local Search, Apple Maps and Apple Business Platform, Contractor Website Conversion and Design, Google Business Profile (GBP), Google Reviews and Reputation Signals, HVAC Local SEO and Seasonal Strategy (+30 more)

### Community 6 - "Community 6"
Cohesion: 0.1
Nodes (30): check_credentials(), detect_tier(), get_bing_api_key(), get_bing_verified_sites(), get_cache_dir(), get_moz_api_key(), load_config(), main() (+22 more)

### Community 7 - "Community 7"
Cohesion: 0.08
Nodes (26): _load_sync_flow_module(), Tests for scripts/sync_flow.py, _base_headers() must not include an Authorization header (VULN-A02)., _authed_headers() returns base headers if gh CLI is not on PATH (VULN-A06)., _validate_github_url must reject any host other than api.github.com (VULN-A10)., _validate_github_url must block @evil.com userinfo bypass (VULN-A10)., _validate_github_url must not raise for api.github.com URLs (VULN-A10)., record_write must raise ValueError if path escapes the root directory (VULN-A03) (+18 more)

### Community 8 - "Community 8"
Cohesion: 0.11
Nodes (27): compute_statistics(), _default_columns(), extract_items(), format_markdown_table(), main(), _normalize_availability(), _normalize_currency(), normalize_merchant() (+19 more)

### Community 9 - "Community 9"
Cohesion: 0.13
Nodes (26): _auth_header(), cmd_compare(), cmd_search(), cmd_sellers(), _extract_items(), _extract_task_id(), _get_credentials(), _normalize_availability() (+18 more)

### Community 10 - "Community 10"
Cohesion: 0.13
Nodes (24): cmd_check(), cmd_config(), cmd_estimate(), cmd_log(), cmd_reset(), cmd_summary(), cmd_today(), _load_config() (+16 more)

### Community 11 - "Community 11"
Cohesion: 0.14
Nodes (24): api_get(), _atomic_write(), attribution_header(), _authed_headers(), _base_headers(), body_lines_after_frontmatter(), content_url(), escape_cell() (+16 more)

### Community 12 - "Community 12"
Cohesion: 0.17
Nodes (23): _build_architecture_section(), _build_challenge_section(), _build_contributions_section(), _build_css(), _build_executive_summary(), _build_guardrails_section(), _build_next_section(), _build_review_section() (+15 more)

### Community 13 - "Community 13"
Cohesion: 0.14
Nodes (21): _get_cache_path(), get_domain_metrics(), get_graph_info(), _get_latest_release(), _graph_file_url(), _is_cached(), main(), Get the cache file path for a domain's data. (+13 more)

### Community 14 - "Community 14"
Cohesion: 0.14
Nodes (10): sitemap(), BlogPage(), getAllPosts(), getPostBySlug(), GET(), generateStaticParams(), OGImage(), BlogPost() (+2 more)

### Community 15 - "Community 15"
Cohesion: 0.18
Nodes (14): cmd_create(), cmd_delete(), cmd_list(), cmd_show(), _ensure_dir(), _load_preset(), _preset_path(), Ensure presets directory exists. (+6 more)

### Community 16 - "Community 16"
Cohesion: 0.18
Nodes (15): main(), Check H1 findings for misleading data., Check Common Crawl findings for misleading interpretations., Detect reciprocal link patterns (A links to B and B links back)., Validate health score data sufficiency., Run all validations on a backlink report.      Args:         report_data: Dictio, Check schema findings for false positives., Check verification findings for false negatives and inconsistencies. (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.13
Nodes (2): generate(), main()

### Community 18 - "Community 18"
Cohesion: 0.2
Nodes (13): cmd_estimate(), cmd_log(), cmd_reset(), cmd_summary(), cmd_today(), _load_ledger(), _lookup_cost(), Estimate cost for a batch. (+5 more)

### Community 19 - "Community 19"
Cohesion: 0.26
Nodes (13): _build_ga4_client(), country_breakdown(), device_breakdown(), main(), organic_traffic_report(), Get top organic landing pages from GA4.      Args:         property_id: GA4 prop, Organic sessions broken down by device category.      Args:         property_id:, Organic sessions broken down by country.      Args:         property_id: GA4 pro (+5 more)

### Community 20 - "Community 20"
Cohesion: 0.24
Nodes (13): get_anchor_text(), get_linking_domains(), get_top_pages(), get_url_metrics(), main(), _moz_request(), _rate_limit(), Get URL-level metrics: Domain Authority, Page Authority, Spam Score, link counts (+5 more)

### Community 21 - "Community 21"
Cohesion: 0.29
Nodes (11): check_setup(), load_settings(), main(), Load Claude Code settings.json., Save Claude Code settings.json., Check if MCP is already configured., Remove MCP configuration., Configure MCP server in Claude Code settings. (+3 more)

### Community 22 - "Community 22"
Cohesion: 0.24
Nodes (7): displace(), dot3(), fade(), InvisibilityHologram(), lerp(), perlin3(), useDynamicData()

### Community 23 - "Community 23"
Cohesion: 0.33
Nodes (9): batch_notify(), _build_indexing_service(), get_notification_metadata(), main(), notify_url(), Get the latest notification metadata for a URL.      Args:         url: The URL, Batch notify multiple URLs with quota awareness.      Args:         urls: List o, Build the Indexing API v3 service. (+1 more)

### Community 24 - "Community 24"
Cohesion: 0.33
Nodes (9): _build_youtube_service(), get_channel_info(), get_video_details(), main(), Get detailed information about a specific YouTube video.      Args:         vide, Get channel information.      Args:         channel_id: YouTube channel ID., Build the YouTube Data API v3 service., Search YouTube for videos matching a query.      Args:         query: Search que (+1 more)

### Community 25 - "Community 25"
Cohesion: 0.22
Nodes (2): FunnelLabels(), useCountUp()

### Community 26 - "Community 26"
Cohesion: 0.44
Nodes (7): email1Html(), email2Html(), email3Html(), email4Html(), footer(), logoBlock(), POST()

### Community 27 - "Community 27"
Cohesion: 0.39
Nodes (7): _build_ads_client(), generate_keyword_ideas(), get_keyword_volumes(), main(), Generate keyword ideas from seed keywords.      Args:         seed_keywords: Lis, Get search volume for specific keywords.      Args:         keywords: List of ke, Build Google Ads client from config.

### Community 28 - "Community 28"
Cohesion: 0.33
Nodes (3): getCityTradeFAQs(), getCityTradeSignals(), CityTradePage()

### Community 30 - "Community 30"
Cohesion: 0.33
Nodes (2): fadeUp(), Listing()

### Community 31 - "Community 31"
Cohesion: 0.47
Nodes (5): main(), Validate JSON-LD blocks in HTML content., Validate a single schema object., validate_jsonld(), _validate_schema_object()

### Community 32 - "Community 32"
Cohesion: 0.47
Nodes (5): _escape(), generate_html(), main(), HTML-escape a value, handling None., Generate a self-contained HTML report from comparison data.

### Community 33 - "Community 33"
Cohesion: 0.53
Nodes (5): capture_screenshot(), main(), normalize_url(), Normalize URL and return (url, parsed_url)., Capture a screenshot of a web page.      Args:         url: URL to capture

### Community 34 - "Community 34"
Cohesion: 0.47
Nodes (5): analyze_visual(), main(), normalize_url(), Normalize URL and return (url, parsed_url)., Analyze visual aspects of a web page.      Args:         url: URL to analyze

### Community 36 - "Community 36"
Cohesion: 0.67
Nodes (3): generate_image(), main(), Call Gemini API to generate an image.

### Community 37 - "Community 37"
Cohesion: 0.67
Nodes (3): estimate_cost(), main(), Estimate cost for a single image.

### Community 38 - "Community 38"
Cohesion: 0.67
Nodes (3): edit_image(), main(), Call Gemini API to edit an image.

### Community 41 - "Community 41"
Cohesion: 0.67
Nodes (2): SearchFunnel(), useCountUp()

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (2): Main(), Write-Color()

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (2): check(), main()

## Knowledge Gaps
- **228 isolated node(s):** `Tests for scripts/sync_flow.py`, `After a real sync, every FLOW stage directory must contain at least one prompt f`, `Every synced prompt file must start with the CC BY 4.0 attribution comment.`, `agents/seo-flow.md must not grant Bash to the agent (VULN-A01).`, `agents/seo-flow.md must warn the agent that WebFetch responses are untrusted (VU` (+223 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 17`** (16 nodes): `Bullet()`, `Check()`, `CheckCategory()`, `CTA()`, `Divider()`, `FixIt()`, `GBPChecklist()`, `generate()`, `InvisibilityReport()`, `LocalSEOChecklist()`, `Logo()`, `main()`, `generate-pdfs.mjs`, `PageFtr()`, `PageHdr()`, `PhoneNotRinging()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (10 nodes): `BottomGlow()`, `FunnelLabels()`, `FunnelScene()`, `FunnelTier()`, `Particles()`, `RotatingGroup()`, `SearchFunnel3D()`, `TierRing()`, `useCountUp()`, `SearchFunnel3D.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (7 nodes): `fadeUp()`, `GhostListing()`, `GhostSlot()`, `Listing()`, `NWAMap()`, `StarRating()`, `GhostListing.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (4 nodes): `FunnelParticle()`, `SearchFunnel()`, `useCountUp()`, `SearchFunnel.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (3 nodes): `Main()`, `uninstall.ps1`, `Write-Color()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (3 nodes): `validate_setup.py`, `check()`, `main()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `validate_url()` connect `Community 3` to `Community 0`, `Community 4`, `Community 6`, `Community 13`, `Community 20`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Why does `run_comparison()` connect `Community 0` to `Community 3`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `load_config()` connect `Community 4` to `Community 27`, `Community 19`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `run_comparison()` (e.g. with `validate_url()` and `url_hash()`) actually correct?**
  _`run_comparison()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 23 inferred relationships involving `buildOGImage()` (e.g. with `OGImage()` and `OGImage()`) actually correct?**
  _`buildOGImage()` has 23 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Tests for scripts/sync_flow.py`, `After a real sync, every FLOW stage directory must contain at least one prompt f`, `Every synced prompt file must start with the CC BY 4.0 attribution comment.` to the rest of the system?**
  _228 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._