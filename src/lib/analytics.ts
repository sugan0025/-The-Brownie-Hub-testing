// ============================================
// THE BROWNIE HUB — GA4 Telemetry & Attribution Helper
// Enhanced E-Commerce & Growth Event Dispatcher
// ============================================

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

// Parse and store UTMs from current window URL
export function captureAndStoreUtm(): UtmParams {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  const utmKeys: (keyof UtmParams)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
  ];

  const captured: UtmParams = {};
  let hasUtm = false;

  utmKeys.forEach((key) => {
    const val = urlParams.get(key);
    if (val) {
      captured[key] = val;
      hasUtm = true;
    }
  });

  if (hasUtm) {
    try {
      localStorage.setItem('tbh_utm_params', JSON.stringify(captured));
    } catch (e) {
      console.warn('Unable to persist UTM parameters to localStorage', e);
    }
    return captured;
  }

  // Fallback to stored UTM
  try {
    const stored = localStorage.getItem('tbh_utm_params');
    if (stored) return JSON.parse(stored);
  } catch (e) {
    // ignore
  }

  return {};
}

// GA4 Safe Event Dispatcher
export function trackEvent(eventName: string, eventParams: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    const utms = captureAndStoreUtm();
    window.gtag('event', eventName, {
      ...eventParams,
      ...utms,
      send_to: 'G-GWTWBBBDQ2',
    });
  } else {
    // Debug log in dev
    console.debug(`[GA4 Track Event]: ${eventName}`, eventParams);
  }
}

// E-Commerce Tracking Actions
export const Analytics = {
  viewItemList: (items: any[], category: string = 'Brownies') => {
    trackEvent('view_item_list', {
      item_list_name: category,
      items: items.map((item, idx) => ({
        item_id: item.id || `item_${idx}`,
        item_name: item.name,
        price: item.price,
        item_category: 'Brownie (Contains Farm Egg)',
        index: idx + 1,
      })),
    });
  },

  selectItem: (item: any) => {
    trackEvent('select_item', {
      item_id: item.id || item.name,
      item_name: item.name,
      price: item.price,
    });
  },

  addToCart: (item: { name: string; price: number; qty?: number; breakdown?: string[] }) => {
    trackEvent('add_to_cart', {
      currency: 'INR',
      value: item.price * (item.qty || 1),
      items: [
        {
          item_name: item.name,
          price: item.price,
          quantity: item.qty || 1,
        },
      ],
      custom_breakdown: item.breakdown ? item.breakdown.join(', ') : undefined,
    });
  },

  customizeBox: (boxSize: number, selectedFlavors: string[], price: number) => {
    trackEvent('customize_box', {
      box_size: boxSize,
      flavors_count: selectedFlavors.length,
      selected_flavors: selectedFlavors.join(', '),
      value: price,
      currency: 'INR',
    });
  },

  beginCheckout: (cartItems: any[], totalValue: number) => {
    trackEvent('begin_checkout', {
      currency: 'INR',
      value: totalValue,
      items: cartItems.map((item) => ({
        item_name: item.name,
        price: item.price,
        quantity: item.qty,
      })),
    });
  },

  purchase: (orderId: string, totalValue: number, items: any[], paymentMethod: string) => {
    trackEvent('purchase', {
      transaction_id: orderId,
      value: totalValue,
      currency: 'INR',
      payment_type: paymentMethod,
      items: items.map((item) => ({
        item_name: item.name,
        price: item.price,
        quantity: item.qty,
      })),
    });
  },

  bookWorkshop: (workshopName: string, date: string, seats: number, totalValue: number) => {
    trackEvent('book_workshop', {
      workshop_name: workshopName,
      selected_date: date,
      seats_count: seats,
      value: totalValue,
      currency: 'INR',
    });
  },

  whatsappOrderClick: (totalValue: number, itemsCount: number) => {
    trackEvent('whatsapp_order_click', {
      value: totalValue,
      items_count: itemsCount,
      currency: 'INR',
    });
  },
};
