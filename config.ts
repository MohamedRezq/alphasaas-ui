//-------------------------------------------------------------------//
//--> ALPHA MICRO-SERVICES
export const MS_AlphaInsights_BASE_URL =
  process.env.NEXT_PUBLIC_MS_AlphaInsights_BASEURL || "";
export const MS_AlphaIdentity_BASE_URL =
  process.env.NEXT_PUBLIC_MS_AlphaIdentity_BASEURL || "";
//-------------------------------------------------------------------//
//--> TOKENS LIFETIME
export const REFRESH_TOKEN_LIFETIME = 14 * 24 * 60 * 60; // 14 Days
export const ACCESS_TOKEN_LIFETIME = 24 * 60 * 60; // 1 Day
//-------------------------------------------------------------------//
//--> VERSIONING
export const VERSION_NUMBER = "1.0.0";
//-------------------------------------------------------------------//
//-------------------------------------------------------------------//
