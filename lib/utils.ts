/**
 * Utility functions for the portfolio website
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Smooth scroll to an element by ID
 */
export function scrollToSection(sectionId: string) {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Format date range
 */
export function formatDateRange(start: string, end?: string): string {
  if (!end) return start;
  return `${start} - ${end}`;
}

