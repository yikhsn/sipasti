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
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/panduan/overview">
              Profil dan Pedoman Studio 📐👷🏻‍♂️📐👷🏻‍♀️ 

          </Link>
        </div> */}
      </div>
    </header>
  );
}

function HomepageAbout() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <Heading as="h2" className="margin-bottom--lg">
              Program Studi Arsitektur<br/>
              Fakultas Teknik – Universitas Negeri Medan
            </Heading>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'justify' }}>
              SiPASTI merupakan portal terintegrasi yang mendukung pelaksanaan pembelajaran Studio Perancangan Arsitektur agar lebih terarah, konsisten, transparan, dan terdokumentasi. Portal ini menyediakan akses terhadap Pedoman Pelaksanaan Studio, Logbook Asistensi, Rubrik Penilaian, serta informasi pendukung pembelajaran studio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Panduan pengguna Rawat ID, sistem informasi rumah sakit dan klinik andalan!">
      <HomepageHeader />
      <main>
        <HomepageAbout />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
