import * as React from "react";

/**
 * The outlined amber diamond mark.
 * Per canonical spec (mockups/chassis.html .rr-brand .mark):
 *   24x24, 1.5px solid amber border, rotate(45deg), "RR" text in Geist Mono,
 *   rotated back -45deg so it reads upright.
 * The small variant (.rr-foot-meta .mark-sm) is 16x16 with 1px border.
 */
export function DiamondMark({
  size = 24,
  color = "#FF6A1F",
  label = "RR",
  borderWidth = 1.5,
  fontSize,
}: {
  size?: number;
  color?: string;
  label?: string;
  borderWidth?: number;
  fontSize?: number;
}) {
  const fs = fontSize ?? Math.round(size * 0.42);
  return (
    <span
      aria-hidden="true"
      className="inline-grid place-items-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `${borderWidth}px solid ${color}`,
        transform: "rotate(45deg)",
        color,
        fontFamily: '"Geist Mono", ui-monospace, monospace',
        fontSize: `${fs}px`,
        fontWeight: 600,
        flexShrink: 0,
      }}
    >
      <span style={{ transform: "rotate(-45deg)", lineHeight: 1 }}>{label}</span>
    </span>
  );
}
