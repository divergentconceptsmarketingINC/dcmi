/**
 * Vercel Web Analytics Initialization
 * This script initializes the Vercel Analytics tracking
 */

// Initialize the analytics queue
window.va = window.va || function(...params) {
  if (!window.vaq) window.vaq = [];
  window.vaq.push(params);
};

// Load the analytics script
(function() {
  // Check if script already exists
  if (document.querySelector('script[src*="/_vercel/insights/script.js"]')) {
    return;
  }

  const script = document.createElement('script');
  script.src = '/_vercel/insights/script.js';
  script.defer = true;
  
  // Add SDK metadata
  script.dataset.sdkn = '@vercel/analytics';
  script.dataset.sdkv = '2.0.1';
  
  script.onerror = function() {
    console.log('[Vercel Web Analytics] Failed to load. Please ensure Web Analytics is enabled in your Vercel project settings.');
  };
  
  document.head.appendChild(script);
})();
