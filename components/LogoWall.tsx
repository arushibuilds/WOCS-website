import Image from 'next/image';
import Link from 'next/link';

interface Sponsor {
  name: string;
  logo: string;
  website: string;
}

interface Partner {
  name: string;
  logo: string;
  website: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'ChaChing Social',
    logo: '/ccl.png',
    website: 'https://www.chaching.social/',
  },
];

const communityPartners: Partner[] = [
  {
    name: 'Focus Faces',
    logo: '/sp1.png',
    website: 'https://focusfaces.com/',
  },
  {
    name: 'IntelligenZ Talks',
    logo: '/sp2.jpg',
    website: 'https://www.linkedin.com/in/sanskritikadam/',
  },
  {
    name: 'GDG KJU',
    logo: '/sp3.png',
    website: 'https://www.instagram.com/gdg.kristujayanti',
  },
  {
    name: 'Chicago Startup Events',
    logo: '/sp4.png',
    website: 'https://www.chicagostartupevents.com/',
  },
  {
    name: 'GDG PESCOE',
    logo: '/sp5.png',
    website: 'https://www.linkedin.com/company/gdgcpescoe/',
  },
  {
    name: 'Byte Brigade',
    logo: '/sp6.png',
    website: 'https://linktr.ee/ByteBrigade2025',
  },
  {
    name: 'SheFi Chicago',
    logo: '/sp7.jpg',
    website: 'https://www.shefi.org/',
  },
  {
    name: 'Code Your Dreams',
    logo: '/sp8.jpg',
    website: 'https://www.codeyourdreams.org/',
  }
];

export default function LogoWall() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
        <p className="text-[var(--muted)] mb-16 max-w-2xl mx-auto">
          Join the companies and organizations supporting the next generation of open source developers.
        </p>

        {/* Sponsors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-[var(--frost)]">Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group panel p-6 rounded-lg hover:frost-glow transition-all duration-300 flex items-center justify-center min-h-[120px]"
              >
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto relative opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm font-medium text-[var(--muted)] group-hover:text-[var(--frost)]">
                    {sponsor.name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Community Partners Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-[var(--frost)]">Community Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {communityPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group panel p-6 rounded-lg hover:frost-glow transition-all duration-300 flex items-center justify-center min-h-[120px]"
              >
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto relative opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm font-medium text-[var(--muted)] group-hover:text-[var(--frost)]">
                    {partner.name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div>
      {/* Register Now Dropdown */}
      <div className="relative inline-block text-left">
        <button className="btn-dropdown">
          Register Now
        </button>
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link
              href="https://forms.gle/UNzHDjYAMkYpoYPy6"
              className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Contributors
            </Link>
            <Link
              href="https://forms.gle/PWRP2BM4DqGbqh6w5"
              className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Mentors
            </Link>
            <Link
              href="https://forms.gle/PT1db4BeP4kQDNrG8"
              className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Project Admins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}