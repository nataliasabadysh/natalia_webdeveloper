import Image from 'next/image';
import styles from './about.module.css';

export function HobbyList() {
  return (
    <div className={styles.wrapper}>
      <strong className={styles.label}>Sparkle Together</strong>
      <p className={styles.label_text}>
        Explore my journey of unity and innovation. With every team, a unique
        sparkle of value emerges, showcasing a blend of expertise and
        friendship. Together, we don’t just work, we create wonders with smiles.
      </p>
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
    </div>
  );
}
