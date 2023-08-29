const configuration = {
  // Cookies related configs
  SESSION_COOKIE_DOMAIN: process.env.SESSION_COOKIE_DOMAIN,
  REGISTER_CONVERSION_COOKIE_NAME: process.env.REGISTER_CONVERSION_COOKIE_NAME || null,
  // Features
  DISABLE_ENTERPRISE_LOGIN: process.env.DISABLE_ENTERPRISE_LOGIN || '',
  ENABLE_DYNAMIC_REGISTRATION_FIELDS: true,
  ENABLE_PROGRESSIVE_PROFILING_ON_AUTHN: true,
  ENABLE_POST_REGISTRATION_RECOMMENDATIONS: true,
  MARKETING_EMAILS_OPT_IN: true,
  SHOW_CONFIGURABLE_EDX_FIELDS: true,
  // Links
  ACTIVATION_EMAIL_SUPPORT_LINK: process.env.ACTIVATION_EMAIL_SUPPORT_LINK || null,
  AUTHN_PROGRESSIVE_PROFILING_SUPPORT_LINK: process.env.AUTHN_PROGRESSIVE_PROFILING_SUPPORT_LINK || null,
  LOGIN_ISSUE_SUPPORT_LINK: process.env.LOGIN_ISSUE_SUPPORT_LINK || null,
  PASSWORD_RESET_SUPPORT_LINK: process.env.PASSWORD_RESET_SUPPORT_LINK || null,
  POST_REGISTRATION_REDIRECT_URL: process.env.POST_REGISTRATION_REDIRECT_URL || '',
  PRIVACY_POLICY: process.env.PRIVACY_POLICY || null,
  SEARCH_CATALOG_URL: process.env.SEARCH_CATALOG_URL || null,
  TOS_AND_HONOR_CODE: process.env.TOS_AND_HONOR_CODE || null,
  TOS_LINK: process.env.TOS_LINK || null,
  // Base container images
  BANNER_IMAGE_LARGE: process.env.BANNER_IMAGE_LARGE || '',
  BANNER_IMAGE_MEDIUM: process.env.BANNER_IMAGE_MEDIUM || '',
  BANNER_IMAGE_SMALL: process.env.BANNER_IMAGE_SMALL || '',
  BANNER_IMAGE_EXTRA_SMALL: process.env.BANNER_IMAGE_EXTRA_SMALL || '',
  // Recommendation constants
  GENERAL_RECOMMENDATIONS: process.env.GENERAL_RECOMMENDATIONS || '[]',
  POPULAR_PRODUCTS: process.env.POPULAR_PRODUCTS || '[]',
  TRENDING_PRODUCTS: process.env.TRENDING_PRODUCTS || '[]',
  // Miscellaneous
  INFO_EMAIL: process.env.INFO_EMAIL || '',
  ZENDESK_KEY: process.env.ZENDESK_KEY,
  ZENDESK_LOGO_URL: process.env.ZENDESK_LOGO_URL,
  ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID || '',
  ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY || '',
};

export default configuration;
