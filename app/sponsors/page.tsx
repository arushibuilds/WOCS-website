import { Users } from 'lucide-react';
import { Building, Heart, Star, Award, ExternalLink, Check } from 'lucide-react';

const sponsorTiers = [
  {
    name: 'Platinum',
    price: '$5,000+',
    color: 'from-purple-400 to-pink-400',
    benefits: [
      'Logo prominently displayed on all materials',
      'Dedicated social media posts',
      'Access to participant resume database',
      'Keynote speaking opportunity',
      'Custom workshop hosting',
      'Direct mentor recruitment access'
    ]
  },
  {
    name: 'Gold',
    price: '$2,500+',
    color: 'from-yellow-400 to-orange-400',
    benefits: [
      'Logo on website and materials',
      'Social media mentions',
      'Access to participant networking',
      'Workshop hosting opportunity',
      'Recruitment booth access'
    ]
  },
  {
    name: 'Silver',
    price: '$1,000+',
    color: 'from-gray-300 to-gray-500',
    benefits: [
      'Logo on website',
      'Newsletter mentions',
      'Community forum access',
      'Talent pipeline access'
    ]
  },
  {
    name: 'Bronze',
    price: '$500+',
    color: 'from-orange-400 to-red-400',
    benefits: [
      'Logo on website',
      'Community recognition',
      'Event updates'
    ]
  }
];

const inKindSponsors = [
  {
    type: 'Cloud Credits',
    description: 'AWS, GCP, Azure credits for project hosting',
    icon: '☁️'
  },
  {
    type: 'Development Tools',
    description: 'IDE licenses, monitoring tools, CI/CD platforms',
    icon: '🛠️'
  },
  {
    type: 'Swag & Prizes',
    description: 'T-shirts, stickers, books, hardware for winners',
    icon: '🎁'
  },
  {
    type: 'Learning Resources',
    description: 'Course subscriptions, certification vouchers',
    icon: '📚'
  }
];

const currentSponsors = [
  { name: 'GitHub', tier: 'Platinum', logo: '🐙' },
  { name: 'Microsoft', tier: 'Gold', logo: '🏢' },
  { name: 'Google', tier: 'Gold', logo: '🔍' },
  { name: 'AWS', tier: 'Silver', logo: '☁️' },
  { name: 'Vercel', tier: 'Bronze', logo: '▲' },
  { name: 'Netlify', tier: 'Bronze', logo: '🌊' }
];

export default function Sponsors() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[var(--frost)]">Sponsors</span>
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Partner with us to support the next generation of open source developers and showcase your commitment to innovation.
          </p>
        </div>

        {/* Sponsor Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Sponsorship Tiers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorTiers.map((tier, index) => (
              <div key={tier.name} className="panel p-6 rounded-lg relative overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`}></div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-2xl font-bold text-[var(--frost)]">{tier.price}</div>
                </div>

                <ul className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2">
                      <Check size={16} className="text-[var(--frost)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--muted)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* In-Kind Sponsorship */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">In-Kind Sponsorship</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inKindSponsors.map((sponsor, index) => (
              <div key={index} className="panel p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{sponsor.icon}</div>
                <h3 className="font-semibold mb-2">{sponsor.type}</h3>
                <p className="text-sm text-[var(--muted)]">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Sponsors */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Amazing Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentSponsors.map((sponsor, index) => (
              <div key={index} className="panel p-6 rounded-lg text-center hover:frost-glow transition-all duration-300">
                <div className="text-4xl mb-3">{sponsor.logo}</div>
                <div className="font-semibold text-sm">{sponsor.name}</div>
                <div className="text-xs text-[var(--muted)] mt-1">{sponsor.tier}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Sponsor */}
        <div className="mb-20">
          <div className="panel p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">Why Sponsor Winter of Code Social?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users size={48} className="mx-auto text-[var(--frost)] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Reach Top Talent</h3>
                <p className="text-[var(--muted)]">
                  Connect with 8k+ passionate developers, from students to experienced professionals.
                </p>
              </div>
              <div className="text-center">
                <Heart size={48} className="mx-auto text-[var(--frost)] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Give Back</h3>
                <p className="text-[var(--muted)]">
                  Support open source education and help build the next generation of developers.
                </p>
              </div>
              <div className="text-center">
                <Star size={48} className="mx-auto text-[var(--frost)] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Visibility</h3>
                <p className="text-[var(--muted)]">
                  Get recognition across our community and social media channels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="panel p-8 rounded-2xl">
            <Building size={64} className="mx-auto text-[var(--frost)] mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Become a Sponsor?</h2>
            <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              Join industry leaders in supporting open source innovation. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_FORM_SPONSOR || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Become a Sponsor
                <ExternalLink size={16} />
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'codesocialcommunity@gmail.com'}`}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}