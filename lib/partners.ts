export interface Organization {
  name: string;
  /** Website or main social link. */
  url: string;
  /** One short line about the organization. */
  description: string;
  /** Optional partnership title, e.g. 'Innovation Partner'. */
  role?: string;
  /** Optional logo in /public, e.g. '/truvigil.png'. */
  logo?: string;
  /** 'white' puts the logo on a white circle (for logos on a white background). */
  logoBg?: 'white';
  /** Wide logos are shown in a wide box instead of a circle. */
  logoWide?: boolean;
}

// WOCS 2026 sponsors and community partners, shown on the homepage.
// Add confirmed organizations only. While both lists are empty the homepage
// shows an "announced soon" state instead.
export const sponsors: Organization[] = [
  {
    name: 'Fueler',
    role: 'Career & Portfolio Partner',
    url: 'https://fueler.io/',
    logo: '/FuelerLogo.jpeg',
    logoBg: 'white',
    description: 'A platform that lets professionals build their portfolio and get hired.',
  },
  {
    name: 'SuperPlane',
    role: 'Innovation Partner',
    url: 'https://superplane.com/',
    logo: '/SuperPlane-sign-black-on-orange.png',
    description: 'Open source factory for one-shot engineering.',
  },
];

export const communityPartners: Organization[] = [
  {
    name: 'TruVigil Solutions',
    url: 'https://truvigilsolutions.com/',
    description:
      'Helps growing organizations strengthen operations, manage risk, and adopt AI and emerging technology securely, responsibly, and with confidence.',
    logo: '/truvigil.png',
    logoBg: 'white',
  },
  {
    name: 'Builders Tribe',
    url: 'https://builderstribe.xyz/',
    logo: '/Logo_BT%20Vertical-%20white.png',
    logoWide: true,
    description:
      'An entrepreneur support ecosystem enabling startups, tech talent, and innovators across the GCC and Africa.',
  },
  {
    name: 'WashUX',
    url: 'https://washuxclub.com/designathon',
    logo: '/washux-logo.png',
    description: 'Designs human-centered digital products through interdisciplinary collaboration.',
  },
];
