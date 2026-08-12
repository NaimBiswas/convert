export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    acceptCookies: () => void;
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "amp-auto-ads": {
        type?: string;
        "data-ad-client"?: string;
        children?: unknown;
      };
    }
  }
}