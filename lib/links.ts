// Single source of truth for external URLs. Each can be overridden with the
// matching NEXT_PUBLIC_* env var (see .env.example).

export const FORM_CONTRIBUTOR =
  process.env.NEXT_PUBLIC_FORM_CONTRIBUTOR || 'https://forms.gle/oi7tGi6jieeFDMxL9';
export const FORM_MENTOR =
  process.env.NEXT_PUBLIC_FORM_MENTOR || 'https://forms.gle/ajbo3poma75onXWWA';
export const FORM_PROJECT =
  process.env.NEXT_PUBLIC_FORM_PROJECT || 'https://forms.gle/28NPGQ65L6JJp7Du8';
export const FORM_TEAM =
  process.env.NEXT_PUBLIC_FORM_TEAM || 'https://forms.gle/WSFhJUNJzGxQ2ZfG8';
export const FORM_COMMUNITY_PARTNER =
  process.env.NEXT_PUBLIC_FORM_COMMUNITY_PARTNER || 'https://forms.gle/GzPmSA5h5Mv5QJgm8';

export const DISCORD_INVITE =
  process.env.NEXT_PUBLIC_DISCORD_INVITE || 'https://discord.gg/MSTNyRSPYW';
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'codesocialcommunity@gmail.com';
export const CODE_SOCIAL_URL = 'https://codesocial.tech';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://woc.codesocial.tech').replace(/\/$/, '');
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-DS7XFCSFE5';
