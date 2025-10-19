import ReactGA from "react-ga4";

/**
 * Google Analytics 4の測定ID
 */
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Google Analytics初期化
 * production環境でのみGoogle Analyticsを読み込む
 */
export const initializeAnalytics = () => {
  if (import.meta.env.PROD && GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    });
  }
};

/**
 * ページビューを送信
 * @param path ページパス
 * @param title ページタイトル
 */
export const sendPageView = (path: string, title?: string) => {
  if (import.meta.env.PROD && GA_MEASUREMENT_ID) {
    ReactGA.send({ hitType: "pageview", page: path, title });
  }
};

/**
 * イベントを送信
 * @param category イベントカテゴリ
 * @param action イベントアクション
 * @param label イベントラベル（オプション）
 * @param value イベント値（オプション）
 */
export const sendEvent = (category: string, action: string, label?: string, value?: number) => {
  if (import.meta.env.PROD && GA_MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};
