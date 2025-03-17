// src/analytics.js
import ReactGA from "react-ga4";
import { GA_CREDENTIALS } from "./paths";

ReactGA.initialize(GA_CREDENTIALS.trackingId);

export const trackPageView = (pagePath) => {
  ReactGA.send({ hitType: "pageview", page: pagePath });
};

export const trackEvent = (action, category, label, value) => {
  ReactGA.event({ action, category, label, value });
};
