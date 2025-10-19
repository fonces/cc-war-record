/**
 * Google Analytics初期化
 * production環境でのみGoogle Analyticsを読み込む
 */
export const initializeAnalytics = () => {
  if (import.meta.env.PROD) {
    // Google Analytics script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-8MW9KTB7Q5';
    document.head.appendChild(gtagScript);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-8MW9KTB7Q5');
  }
};

// グローバル型定義の拡張
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
