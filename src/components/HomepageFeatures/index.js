import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { BookOpen, Users, Award } from 'lucide-react';

const FeatureList = [
  {
    title: 'Pedoman Studio',
    Icon: BookOpen,
    description: (
      <>
        Baca pedoman studio arsitektur.
      </>
    ),
    link: '/panduan/pedoman',
  },
  {
    title: 'Asistensi',
    Icon: Users,
    description: (
      <>
        Baca panduan asistensi studio arsitektur.
      </>
    ),
    link: '/panduan/asistensi',
  },
  {
    title: 'Penilaian',
    Icon: Award,
    description: (
      <>
        Baca ketentuan penilaian studio arsitektur.
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
