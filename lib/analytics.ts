/**
 * Analytics utility for tracking user interactions
 * Supports GA4, PostHog, or custom analytics providers
 */

export type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

/**
 * Track an analytics event
 * Configure your analytics provider (GA4, PostHog, etc.) in this function
 */
export function trackEvent(event: AnalyticsEvent) {
  // Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }

  // PostHog
  if (typeof window !== "undefined" && (window as any).posthog) {
    (window as any).posthog.capture(event.action, {
      category: event.category,
      label: event.label,
      value: event.value,
    });
  }

  // Console log for development (remove in production)
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics Event:", event);
  }
}

/**
 * Track CTA clicks
 */
export function trackCTA(ctaName: string, location: string) {
  trackEvent({
    action: "cta_click",
    category: "engagement",
    label: `${ctaName}_${location}`,
  });
}

/**
 * Track booking intent
 */
export function trackBookingIntent(source: string) {
  trackEvent({
    action: "booking_intent",
    category: "conversion",
    label: source,
  });
}

/**
 * Track section views
 */
export function trackSectionView(sectionName: string) {
  trackEvent({
    action: "section_view",
    category: "engagement",
    label: sectionName,
  });
}

