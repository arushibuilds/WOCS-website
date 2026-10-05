import { Users, Building, Heart, Star, Check } from 'lucide-react';
import { CONTACT_EMAIL, FORM_COMMUNITY_PARTNER } from '@/lib/links';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'Sponsor or partner with Winter of Code Social to support the next generation of open source developers.',
  alternates: { canonical: '/sponsors' },
};


const sponsorTiers = [
  {
    name: 'Sponsor',
    price: 'Flexible (Monetary or In-Kind)',
    color: 'from-purple-400 to-pink-400',
    benefits: [
      'Logo featured on website & event updates',
      'Recognition across social media & community spaces',
      'Visibility in resource/swag posts',
      'Support helps fund swags, logistics, and contributor programs',
      'Flexible options: financial support, tool credits, software licenses, swag, or mentorship hours'
    ]
  },
  {
    name: 'Community Partner',
    price: 'Non-monetary',
    color: 'from-green-400 to-blue-400',
    benefits: [
      'Logo featured on website',
      'Cross-promotion & speaker contributions',
      'Co-hosting rights & mutual promotion'
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

// TODO: add 2026 sponsors and community partners here once secured, then render
// them above "Why Sponsor". 2025 logos are still in /public (ccl.png, sp1-sp10).

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
          <div className="flex flex-wrap justify-center gap-6">
            {sponsorTiers.map((tier, index) => (
              <div key={tier.name} className="panel p-6 rounded-lg relative overflow-hidden w-full max-w-xs flex flex-col items-center">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`}></div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-xl font-bold text-[var(--frost)]">{tier.price}</div>
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
          {/* Info message below sponsorship tiers */}
          <div className="mt-12 max-w-2xl mx-auto text-center panel p-6 rounded-xl bg-gradient-to-br from-[var(--frost)]/10 to-transparent shadow-lg">
            <p className="text-lg font-semibold mb-2">We welcome <span className="text-[var(--frost)]">In-Kind Sponsors</span>, <span className="text-[var(--frost)]">Monetary Sponsors</span>, and <span className="text-[var(--frost)]">Community Partners</span> to support Winter of Code Social.</p>
            <p className="mb-4 text-[var(--muted)]">Your support helps us empower thousands of contributors worldwide.</p>
            <div className="text-left md:text-center space-y-2">
              <div><span aria-hidden="true">👉</span> <span className="font-medium">Interested in sponsoring?</span></div>
              <div><span aria-hidden="true">📩</span> Reach out directly at <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-[var(--frost)]">{CONTACT_EMAIL}</a></div>
              <div><span aria-hidden="true">👉</span> <span className="font-medium">Want to collaborate as a community partner?</span></div>
              <div><span aria-hidden="true">📝</span> Fill out our <a href={FORM_COMMUNITY_PARTNER} target="_blank" rel="noopener noreferrer" className="underline text-[var(--frost)]">Community Partner Form</a> to get started.</div>
            </div>
          </div>
        </div>

        {/* In-Kind Sponsorship */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">In-Kind Sponsorship</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inKindSponsors.map((sponsor, index) => (
              <div key={index} className="panel p-6 rounded-lg text-center">
                <div className="text-4xl mb-4" aria-hidden="true">{sponsor.icon}</div>
                <h3 className="font-semibold mb-2">{sponsor.type}</h3>
                <p className="text-sm text-[var(--muted)]">{sponsor.description}</p>
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
                  Connect with thousands of passionate developers, from students to experienced professionals.
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
              Join industry leaders in supporting open source innovation. Let’s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn-secondary inline-flex items-center gap-2 border-2 border-[var(--frost)]"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}