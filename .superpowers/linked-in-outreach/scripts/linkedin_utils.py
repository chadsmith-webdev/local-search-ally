import sys
import re

def validate_linkedin_post(text):
    """
    Validates a LinkedIn post for length, formatting, and hashtag best practices.
    """
    max_length = 3000
    char_count = len(text)
    
    # Check length
    status = "✅ PASS" if char_count <= max_length else "❌ FAIL (Too long)"
    print(f"Post Length: {char_count}/{max_length} {status}")

    # Check for mobile-friendly formatting (single-line paragraphs)
    paragraphs = text.split('\n\n')
    avg_para_len = sum(len(p) for p in paragraphs) / len(paragraphs) if paragraphs else 0
    formatting_status = "✅ PASS" if avg_para_len < 300 else "⚠️ WARNING (Consider shorter paragraphs for mobile)"
    print(f"Mobile Formatting: {formatting_status}")

    # Check hashtags
    hashtags = re.findall(r'#\w+', text)
    hashtag_count = len(hashtags)
    hashtag_status = "✅ PASS" if 3 <= hashtag_count <= 5 else "⚠️ WARNING (Aim for 3-5 hashtags)"
    print(f"Hashtag Count: {hashtag_count} {hashtag_status}")
    if hashtags:
        print(f"Hashtags detected: {', '.join(hashtags)}")

    # Check for hook (first line length)
    first_line = text.split('\n')[0]
    hook_status = "✅ PASS" if len(first_line) < 100 else "⚠️ WARNING (Hook may be too long)"
    print(f"Scroll-Stop Hook: {hook_status}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        with open(sys.argv[1], 'r') as f:
            content = f.read()
        validate_linkedin_post(content)
    else:
        print("Usage: python linkedin_utils.py <post_file.txt>")
