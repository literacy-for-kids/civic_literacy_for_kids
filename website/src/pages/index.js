import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const literacyLinks = [
  {
    label: 'Decision Literacy',
    emoji: '🧠',
    description:
      'How to think clearly, evaluate choices, and understand consequences.',
    href: 'https://zcohen-nerd.github.io/decision_literacy_for_kids/',
  },
  {
    label: 'Computer Literacy',
    emoji: '💻',
    description:
      'How computers work and how to use them responsibly.',
    href: 'https://zcohen-nerd.github.io/computer_literacy_for_kids/',
  },
  {
    label: 'Media Literacy',
    emoji: '📰',
    description:
      'How to evaluate information and recognize bias.',
    href: 'https://zcohen-nerd.github.io/media_literacy_for_kids/',
  },
  {
    label: 'Financial Literacy',
    emoji: '💰',
    description:
      'How money works and how to make responsible financial decisions.',
    href: 'https://zcohen-nerd.github.io/financial_literacy_for_kids/',
  },
  {
    label: 'Civic Literacy',
    emoji: '🏛',
    description:
      'How societies organize themselves and how citizens shape their communities.',
    href: 'https://zcohen-nerd.github.io/civic_literacy_for_kids/',
  },
];

function HomepageHeader() {
  const heroImageUrl = useBaseUrl('/img/hero-image.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Free and open educational curriculum</p>
          <h1 className="hero__title">Civic Literacy for Kids</h1>
          <p className="hero__subtitle">
            A structured, nonpartisan curriculum for ages 8–12 that teaches kids how communities and government actually work.
          </p>
          <p className={styles.heroLead}>
            Many children grow up in communities without understanding how decisions
            are made, how laws work, or how they can participate. This curriculum
            introduces civic ideas through engaging activities that help students
            explore, question, and participate in the world around them.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start the Curriculum
            </Link>
            <Link
              className="button button--outline button--lg"
              to="https://github.com/zcohen-nerd/civic_literacy_for_kids">
              View on GitHub
            </Link>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img
            className={styles.heroImage}
            src={heroImageUrl}
            alt="Illustrated classroom-style hero image for the civic literacy curriculum"
          />
        </div>
      </div>
    </header>
  );
}

function LiteracyProjectSection() {
  return (
    <section className={styles.projectSection}>
      <div className="container">
        <div className={styles.projectSectionHeader}>
          <h2>Part of the Literacy for Kids Project</h2>
          <p>
            This curriculum is part of Literacy for Kids, a collection of
            open-source curricula designed to help children ages 8–12 understand
            the systems that shape the modern world.
          </p>
          <p>
            Each curriculum focuses on a different foundational life skill.
          </p>
          <p>
            You can explore the full curriculum collection here:{' '}
            <Link href="https://zcohen-nerd.github.io/literacy_for_kids/">
              Literacy for Kids Hub
            </Link>
          </p>
        </div>
        <div className={styles.projectSectionHeader}>
          <h3>Explore the Other Literacies</h3>
        </div>
        <div className={styles.literacyGrid}>
          {literacyLinks.map((literacy) => (
            <Link
              key={literacy.label}
              className={styles.literacyCard}
              href={literacy.href}>
              <span className={styles.literacyLabel}>
                <span aria-hidden="true">{literacy.emoji}</span> {literacy.label}
              </span>
              <span className={styles.literacyDescription}>
                {literacy.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="A structured, nonpartisan civic literacy curriculum for ages 8–12 — teaching kids how communities organize, governments work, and citizens participate.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LiteracyProjectSection />
      </main>
    </Layout>
  );
}
