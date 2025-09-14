import Image from 'next/image';

interface Sponsor {
  name: string;
  logo: string;
  website: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

const sponsors: Sponsor[] = [
  {
    name: 'GitHub',
    logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200',
    website: 'https://github.com',
    tier: 'platinum'
  },
  {
    name: 'Microsoft',
    logo: 'https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=200',
    website: 'https://microsoft.com',
    tier: 'gold'
  },
  {
    name: 'Google',
    logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=200',
    website: 'https://google.com',
    tier: 'gold'
  },
  {
    name: 'AWS',
    logo: 'https://images.pexels.com/photos/11035378/pexels-photo-11035378.jpeg?auto=compress&cs=tinysrgb&w=200',
    website: 'https://aws.amazon.com',
    tier: 'silver'
  },
  {
    name: 'Vercel',
    logo: 'https://images.pexels.com/photos/11035467/pexels-photo-11035467.jpeg?auto=compress&cs=tinysrgb&w=200',
    website: 'https://vercel.com',
    tier: 'bronze'
  },
  {
    name: 'Netlify',
    logo: 'https://images.pexels.com/photos/11035472/pexels-photo-11035472.jpeg?auto=compress&cs=tinysrgb&w=200',
    website: 'https://netlify.com',
    tier: 'bronze'
  },
];

export default function LogoWall() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
        <p className="text-[var(--muted)] mb-12 max-w-2xl mx-auto">
          Join the companies and organizations supporting the next generation of open source developers.
        </p>

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
                <div className="w-16 h-16 mx-auto bg-[var(--muted)] rounded-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-xs font-bold text-[var(--bg)]">
                    {sponsor.name.substring(0, 2)}
                  </span>
                </div>
                <div className="text-sm font-medium text-[var(--muted)] group-hover:text-[var(--frost)]">
                  {sponsor.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}