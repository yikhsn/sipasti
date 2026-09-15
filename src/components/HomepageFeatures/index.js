import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { BookOpen, Users, Award } from 'lucide-react';

const FeatureList = [
  {
    title: 'Profil & Pedoman Studio',
    Icon: BookOpen,
    description: (
      <>
        Baca profil dan pedoman studio arsitektur.
      </>
    ),
  },
  {
    title: 'Asistensi',
    Icon: Users,
    description: (
      <>
        Baca panduan asistensi studio arsitektur.
      </>
    ),
  },
  {
    title: 'Penilaian',
    Icon: Award,
    description: (
      <>
        Baca ketentuan penilaian studio arsitektur.
      </>
    ),
  },
];

function Feature({Icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.featureSvg} style={{ color: 'var(--ifm-color-primary)', width: '120px', height: '120px', margin: '20px 0' }} strokeWidth={1.5} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
