import Link from "next/link";
import { Sparkle } from "./Icons";

export function Wordmark({ withDot = false }: { withDot?: boolean }) {
  return (
    <Link className="wordmark" href="/" aria-label="The Styloria home">
      <span className="brand-the">the</span>styloria
      {withDot && <Sparkle className="wordmark-dot" size={23} strokeWidth={1.6} />}
    </Link>
  );
}
