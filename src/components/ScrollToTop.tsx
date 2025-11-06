import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const SCROLL_TARGET_KEY = "scrollTarget";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Only scroll to top if the pathname actually changed (not just hash)
    if (prevPathname.current !== pathname) {
      // Check if there's a scroll target set (from NavBar navigation)
      const scrollTarget = sessionStorage.getItem(SCROLL_TARGET_KEY);
      if (!scrollTarget) {
        // No target, scroll to top as normal
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // If there's a scroll target, let NavBar handle the scrolling
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
