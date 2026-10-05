import Image from 'next/image';

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
  // Coming soon - will add new sponsors for 2026
];

const communityPartners: Partner[] = [
  // Coming soon - will add new community partners for 2026
];

export default function LogoWall() {
  // Nothing to show until 2026 sponsors are confirmed.
  if (sponsors.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Sponsors</h2>
        <p className="text-[var(--muted)] mb-16 max-w-2xl mx-auto">
          Join the companies and organizations supporting the next generation of open source developers.
        </p>

        {/* Sponsors Section */}
        {(
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
        )}

        {/* Community Partners Section intentionally omitted on homepage */}
      </div>
    </section>
  );
}
