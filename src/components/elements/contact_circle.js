import Image from 'next/image';
import styles from './elements.module.css';

import CircleImg from '../../../public/images/contact_circle.png';
import SayHiImg from '../../../public/images/icons8-waving-hand-light-skin-tone-48.png';

export default function Circle() {
  return (
    <div className={styles.container}>
      <Image
        src={CircleImg}
        width={120}
        height={120}
        className={styles.rotate}
      />
      <div className={styles.bg}>
        <Image
          src={SayHiImg}
          width={20}
          height={20}
          className={styles.contact_hand__img}
        />
      </div>
      <div />
    </div>
  );
}
