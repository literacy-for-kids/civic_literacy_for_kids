import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

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

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="A structured, nonpartisan civic literacy curriculum for ages 8–12 — teaching kids how communities organize, governments work, and citizens participate.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}