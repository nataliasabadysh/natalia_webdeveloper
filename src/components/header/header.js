import { Navigation } from '../navigation/navigation';
import styles from './header.module.css';
import UIButton from '../button/UIButton';

export default function Header({ backgroundColor }) {
  return (
    <header
      className={`${styles.header} container`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.logo}>Natalia S.</div>
      {/* <Navigation /> */}
      <UIButton
        href="https://drive.google.com/file/d/1nIUuQNFWVcjX2Dne9_Tstd69AlhZ7l3E/view?usp=sharing"
        label="CV"
      />
    </header>
  );
}
