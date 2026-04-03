import Link from "next/link";

export function PrimaryBtn({ href, children }) {
  return <Link href={href}>{children}</Link>;
}

export function OutlineBtn({ href, children }) {
  return <Link href={href}>{children}</Link>;
}
