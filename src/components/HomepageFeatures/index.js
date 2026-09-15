import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { BookOpen, Users, Award } from 'lucide-react';

const FeatureList = [
  {
    title: 'PEDOMAN STUDIO',
    Icon: BookOpen,
    description: (
      <>
        Pelajari mekanisme, ketentuan, dan tata tertib pelaksanaan Studio Perancangan Arsitektur.
      </>
    ),
    link: '/panduan/pedoman',
  },
  {
    title: 'LOGBOOK ASISTENSI',
    Icon: Users,
    description: (
      <>
        Catat dan pantau proses asistensi serta perkembangan rancangan secara berkala.
      </>
    ),
    link: '/panduan/asistensi',
  },
  {
    title: 'RUBRIK PENILAIAN',
    Icon: Award,
    description: (
      <>
        Ketahui aspek, kriteria, dan indikator yang digunakan dalam penilaian studio.
      </>
    ),
    link: '/panduan/penilaian',
  },
];

function Feature({Icon, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <div className="text--center">
          <Icon className={styles.featureSvg} style={{ color: 'var(--ifm-color-primary)', width: '120px', height: '120px', margin: '20px 0' }} strokeWidth={1.5} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="margin-bottom--lg text--center">
          Akses Cepat
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
