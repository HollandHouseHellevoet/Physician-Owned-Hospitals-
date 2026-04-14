"use client";

import * as React from "react";

/**
 * ⌘K entity lookup affordance — top-right of .rr-top.
 * MVP stub: renders the visual affordance and listens for the shortcut.
 * Full implementation (cmdk + entity index) lands in a later phase.
 */
export function CommandPalette({
  placeholder = "Look up an entity",
}: {
  placeholder?: string;
}) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        // TODO: open palette overlay
        const el = document.getElementById("rr-cmdk-stub");
        if (el) el.style.borderColor = "#FF6A1F";
        setTimeout(() => {
          if (el) el.style.borderColor = "";
        }, 400);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <button
      type="button"
      id="rr-cmdk-stub"
      className="rr-cmdk"
      aria-label="Open entity lookup"
    >
      {placeholder}
      <kbd>⌘K</kbd>
    </button>
  );
}
