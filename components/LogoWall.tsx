import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { FORM_COMMUNITY_PARTNER } from '@/lib/links';
import { communityPartners, sponsors, type Organization } from '@/lib/partners';

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function OrganizationCard({ org }: { org: Organization }) {
  return (
    <a
      href={org.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group panel p-6 rounded-lg hover:frost-glow transition-all duration-300 flex flex-col items-center text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
    >
      {org.logo && org.logoWide ? (
        <div className="h-16 w-44 mb-4 relative flex-shrink-0">
          <Image src={org.logo} alt="" fill sizes="176px" className="object-contain" />
        </div>
      ) : org.logo ? (
        <div
          className={`w-16 h-16 mb-4 rounded-full overflow-hidden relative flex-shrink-0 ${
            org.logoBg === 'white' ? 'bg-white' : ''
          }`}
        >
          <Image
            src={org.logo}
            alt=""
            fill
            sizes="64px"
            className={org.logoBg === 'white' ? 'object-contain p-1' : 'object-cover'}
          />
        </div>
      ) : (
        <div
          className="w-16 h-16 mb-4 rounded-full frost-border bg-[var(--bg)] flex items-center justify-center text-lg font-semibold text-[var(--frost)] flex-shrink-0"
          aria-hidden="true"
        >
          {getInitials(org.name)}
        </div>
      )}
      {org.role && (
        <span className="mb-2 px-3 py-1 rounded-full text-xs bg-[var(--frost)]/20 text-[var(--frost)]">{org.role}</span>
      )}
      <h4 className="font-semibold group-hover:text-[var(--frost)] transition-colors duration-200">{org.name}</h4>
      <p className="text-sm text-[var(--muted)] mt-1 flex-1">{org.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--frost)]">
        Visit website
        <ExternalLink size={14} aria-hidden="true" />
      </span>
    </a>
  );
}

function Group({ title, orgs }: { title: string; orgs: Organization[] }) {
  if (orgs.length === 0) return null;
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-[var(--frost)]">{title}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {orgs.map((org) => (
          <OrganizationCard key={org.name} org={org} />
        ))}
      </div>
    </div>
  );
}

export default function LogoWall() {
  const hasAny = sponsors.length > 0 || communityPartners.length > 0;

  return (
    <section id="partners" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20" aria-labelledby="partners-heading">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold">
            Sponsors & <span className="text-[var(--frost)]">Community Partners</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            The organizations supporting the next generation of open source developers.
          </p>
        </div>

        {hasAny ? (
          <>
            <Group title="Sponsors" orgs={sponsors} />
            <Group title="Community Partners" orgs={communityPartners} />
          </>
        ) : (
          <div className="panel rounded-2xl p-8 md:p-12 space-y-4">
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Our WOCS 2026 sponsors and community partners will be announced soon.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/sponsors" className="btn-primary inline-flex items-center gap-2">
            Become a Sponsor
          </Link>
          <a
            href={FORM_COMMUNITY_PARTNER}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Become a Community Partner
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
