import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function FeatureCard({title, description}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">What Students Learn</Heading>
          <p className={styles.sectionLead}>
            Over 18 weeks, students explore five big units — from why communities need
            rules, to how government works, to solving a real problem in their own neighborhood.
          </p>
          <div className={styles.cardGrid}>
            <FeatureCard
              title="Why Rules Exist"
              description="Weeks 1–4 explore why humans need agreements, how cooperation scales from families to nations, and what rights and responsibilities really mean."
            />
            <FeatureCard
              title="How Government Works"
              description="Weeks 5–8 cover the Constitution, three branches, how laws are made, and why checks and balances protect citizens."
            />
            <FeatureCard
              title="Your Local Government"
              description="Weeks 9–11 bring it home — mayors, city councils, public services, budgets, and how to participate in local decisions."
            />
          </div>
          <div className={styles.cardGrid}>
            <FeatureCard
              title="The Global Community"
              description="Weeks 12–14 explore diplomacy, trade, treaties, and the global challenges that require countries to work together."
            />
            <FeatureCard
              title="The Community Patch"
              description="Weeks 15–18 are the capstone — students identify a real community problem, research it, write a proposal, and present it."
            />
            <FeatureCard
              title="Bonus: Mock Trial"
              description="An optional 2-week module where students learn how courts work and run their own mock trial."
            />
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Five Core Mental Models</Heading>
          <p className={styles.sectionLead}>
            Every lesson connects to five ideas that build across the course:
          </p>
          <div className={styles.cardGrid}>
            <FeatureCard
              title="1. Rules Exist for Reasons"
              description="Every rule was created to solve a problem. Understanding why helps you evaluate whether it's working."
            />
            <FeatureCard
              title="2. Rights Come with Responsibilities"
              description="Members of a community have protections and duties. These two things work together."
            />
            <FeatureCard
              title="3. Power Flows from the People"
              description="In a democracy, authority comes from the consent of the governed. Leaders serve because people choose them."
            />
          </div>
          <div className={styles.cardGrid}>
            <FeatureCard
              title="4. Shared Power Prevents Abuse"
              description="When power is divided and checked, it's harder for any person or group to act unfairly."
            />
            <FeatureCard
              title="5. Participation Keeps Communities Healthy"
              description="Voting, speaking up, and serving are how citizens keep the system working."
            />
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Get Started</Heading>
          <p className={styles.sectionLead}>
            Everything you need is here — 18 weeks of lessons, activities, and projects.
            No paid materials required.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start the Curriculum
            </Link>
            <Link className="button button--outline button--lg" to="/docs/curriculum-overview">
              See the Full Overview
            </Link>
          </div>
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/zcohen-nerd/civic_literacy_for_kids/issues">
              Open an issue on GitHub.
            </Link>
          </p>
          <div className={styles.versionNote}>
            <p className={styles.versionLabel}>Version 1.0</p>
            <p>
              This curriculum is an open project — free to use, share, and improve.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
