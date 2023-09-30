import Image from 'next/image';
import styles from './about.module.css';

import work from '../../../public/images/bg_d.png';
import workM from '../../../public/images/bg_mb.png';

import hobby from '../../../public/images/ds_tr.png';
import hobby_m from '../../../public/images/mob_bgt.png';

export function HobbyList() {
  return (
    <div className={styles.wrapper}>
      <strong className={styles.label}>Sparkle Together</strong>
      <p className={styles.label_text}>
        Explore my journey of unity and innovation. With every team, a unique
        sparkle of value emerges, showcasing a blend of expertise and
        friendship. Together, we don’t just work, we create wonders with smiles.
      </p>

      <div className={styles.bg}>
        <Image src={workM} alt="work" />
      </div>

      <div className={styles.bg_M}>
        <Image src={work} alt="work" />
      </div>
    </div>
  );
}

export function TeamBuildings() {
  return (
    <div className={styles.wrapper}>
      <strong className={styles.label}> Adventures Unleashed</strong>
      <p className={styles.label_text}>
        Explore my adventurous escapades that inspire innovation. Each dive and
        jump is not just a thrill, but a source of creativity, motivating a
        seamless blend of technology and life.
      </p>

      <div className={styles.bg}>
        <Image src={hobby_m} alt="work" />
      </div>

      <div className={styles.bg_M}>
        <Image src={hobby} alt="work" />
      </div>
    </div>
  );
}
