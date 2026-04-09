import React from "react";

export type ButtonVariant = "primary" | "outline" | "ghost" | "icon" | "close";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** Button content */
  children: React.ReactNode;
  /** Visual variant — controls base color scheme */
  variant?: ButtonVariant;
  /** Predefined size preset (padding + font-size). Omit if using custom padding via className */
  size?: ButtonSize;
  /** Custom Tailwind classes – appended to variant/size classes */
  className?: string;
  /** If provided, renders as Next.js <Link> instead of <button> */
  href?: string;
  /** Link target (e.g. "_blank") – only used when href is set */
  target?: string;
  /** Makes the button full-width */
  fullWidth?: boolean;
  /** HTML button type – defaults to "button" */
  type?: "button" | "submit" | "reset";
}
