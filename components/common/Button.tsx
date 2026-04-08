import React from "react";
import Link from "next/link";
import { ButtonProps, ButtonVariant, ButtonSize } from "@/types/components/common/Button";

/**
 * Variant base classes — only includes styles that are
 * safe to combine additively (no conflicts with className overrides).
 *
 * - primary: Orange filled CTA (color + transition only)
 * - outline: Bordered button with hover fill
 * - ghost:   Transparent, minimal hover
 * - icon:    Icon-only button (small padding + rounded)
 * - close:   Modal/panel close button (white glass style)
 */
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-[#f29111] hover:bg-[#e08b1a] text-white transition-all",
  outline: "border border-gray-200 transition-all duration-300",
  ghost: "transition-colors",
  icon: "p-2 transition-colors",
  close: "p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors",
};

/**
 * Size presets — optional convenience for common padding/font-size combos.
 * Use EITHER a size prop OR custom padding in className, not both.
 */
const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "py-2 px-6 text-sm",
  md: "py-[10px] px-[30px] text-[15px]",
  lg: "px-8 py-3 text-base",
};

/**
 * Reusable Button component.
 *
 * - Renders as `<button>` by default.
 * - Renders as Next.js `<Link>` when `href` is provided.
 * - Variant sets base color scheme; all other styling goes via `className`.
 * - Size is optional; omit it when using custom padding in className.
 */
export function Button({
  children,
  variant = "primary",
  size,
  className = "",
  href,
  target,
  fullWidth = false,
  type = "button",
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const isIconVariant = variant === "icon" || variant === "close";

  const classes = [
    VARIANT_CLASSES[variant],
    !isIconVariant && size ? SIZE_CLASSES[size] : "",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={classes}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
