import Link from 'next/link';

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-[var(--frost)]">Contributor Covenant 3.0 Code of Conduct</h1>
      
      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[var(--frost)]">Our Pledge</h2>
          <p className="mb-4">We pledge to make our community welcoming, safe, and equitable for all.</p>
          <p>We are committed to fostering an environment that respects and promotes the dignity, rights, and contributions of all individuals, regardless of characteristics including race, ethnicity, caste, color, age, physical characteristics, neurodiversity, disability, sex or gender, gender identity or expression, sexual orientation, language, philosophy or religion, national or social origin, socio-economic position, level of education, or other status. The same privileges of participation are extended to everyone who participates in good faith and in accordance with this Covenant.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[var(--frost)]">Encouraged Behaviors</h2>
          <p className="mb-4">While acknowledging differences in social norms, we all strive to meet our community expectations for positive behavior. We also understand that our words and actions may be interpreted differently than we intend based on culture, background, or native language.</p>
          <p className="mb-4">With these considerations in mind, we agree to behave mindfully toward each other and act in ways that center our shared values, including:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Respecting the purpose of our community, our activities, and our ways of gathering.</li>
            <li>Engaging kindly and honestly with others.</li>
            <li>Respecting different viewpoints and experiences.</li>
            <li>Taking responsibility for our actions and contributions.</li>
            <li>Gracefully giving and accepting constructive feedback.</li>
            <li>Committing to repairing harm when it occurs.</li>
            <li>Behaving in other ways that promote and sustain the well-being of our community.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[var(--frost)]">Restricted Behaviors</h2>
          <p className="mb-4">We agree to restrict the following behaviors in our community. Instances, threats, and promotion of these behaviors are violations of this Code of Conduct.</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Harassment. Violating explicitly expressed boundaries or engaging in unnecessary personal attention after any clear request to stop.</li>
            <li>Character attacks. Making insulting, demeaning, or pejorative comments directed at a community member or group of people.</li>
            <li>Stereotyping or discrimination. Characterizing anyone personality or behavior on the basis of immutable identities or traits.</li>
            <li>Sexualization. Behaving in a way that would generally be considered inappropriately intimate in the context or purpose of the community.</li>
            <li>Violating confidentiality. Sharing or acting on someone personal or private information without their permission.</li>
            <li>Endangerment. Causing, encouraging, or threatening violence or other harm toward any person or group.</li>
            <li>Behaving in other ways that threaten the well-being of our community.</li>
          </ol>

          <h3 className="text-xl font-bold mt-6 mb-3 text-[var(--frost)]">Other Restrictions</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Misleading identity. Impersonating someone else for any reason, or pretending to be someone else to evade enforcement actions.</li>
            <li>Failing to credit sources. Not properly crediting the sources of content you contribute.</li>
            <li>Promotional materials. Sharing marketing or other commercial content in a way that is outside the norms of the community.</li>
            <li>Irresponsible communication. Failing to responsibly present content which includes, links or describes any other restricted behaviors.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[var(--frost)]">Reporting an Issue</h2>
          <p className="mb-4">Tensions can occur between community members even when they are trying their best to collaborate. Not every conflict represents a code of conduct violation, and this Code of Conduct reinforces encouraged behaviors and norms that can help avoid conflicts and minimize harm.</p>
          <p className="mb-4">When an incident does occur, it is important to report it promptly. To report a possible violation, We have dedicated channels about WOCS on our Discord Server where you can report any issues you face.</p>
          <p>Community Moderators take reports of violations seriously and will make every effort to respond in a timely manner. They will investigate all reports of code of conduct violations, reviewing messages, logs, and recordings, or interviewing witnesses and other participants. Community Moderators will keep investigation and enforcement actions as transparent as possible while prioritizing safety and confidentiality. In order to honor these values, enforcement actions are carried out in private with the involved parties, but communicating to the whole community may be part of a mutually agreed upon resolution.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[var(--frost)]">Attribution</h2>
          <p className="mb-4">This Code of Conduct is adapted from the Contributor Covenant, version 3.0.</p>
          <p>For more information, visit the Contributor Covenant website.</p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}
