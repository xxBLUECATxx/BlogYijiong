import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>

        </div>
      </div>
    </header>
  );
}
import Mywords from './_mywords.md';
import MyBell from './ring-the-bell.html';


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
        title = 'BlogYijiong'
        description="Congrads, you found it.">
        <HomepageHeader />
         <div className={styles.markdownContainer}>
            <Mywords/>
            <div>
               put a bel here to let you ring
            </div>
        </div>

    </Layout>
  );
}

