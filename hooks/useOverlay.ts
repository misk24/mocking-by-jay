import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export function useOverlay(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const currentUrl = useRef<string>("");
  const pathname = usePathname();
  
  const open = useCallback(() => {
    currentUrl.current = window.location.href;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    isOpen ? close() : open();
  }, [isOpen, open, close]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll Lock
  useEffect(() => {
    const original = document.body.style.overflow;

    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // ESC Key
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // Back Button (Android / Browser)
  useEffect(() => {
    if (!isOpen) return;

    const onPopState = () => {
      window.history.pushState(null, "", currentUrl.current);
      setIsOpen(false);
    };

    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, [isOpen]);

  return {
    isOpen,
    open,
    close,
    toggle
  };
}