import styles from './clients.module.css';

import Bank from '../../../public/tech/bank.png';
import BC from '../../../public/tech/bc.png';
import Mofa from '../../../public/tech/mofa.png';
import North from '../../../public/tech/north.png';
import Onm from '../../../public/tech/onm.png';
import Adamex from '../../../public/tech/adamex.png';
import Honeywell from '../../../public/tech/honeywell.png';
import RR from '../../../public/tech/rr.svg';
import Image from 'next/image';

const image_list = [
  {
    src: Bank,
    alt: 'bank',
  },
  {
    src: BC,
    alt: 'bc',
  },
  {
    src: Mofa,
    alt: 'Mofa',
  },
  {
    src: North,
    alt: 'North',
  },
  {
    src: Onm,
    alt: 'Onm',
  },
  {
    src: RR,
    alt: 'RR',
  },
  {
    src: Onm,
    alt: 'Onm',
  },
  {
    src: Adamex,
    alt: 'Adamex',
  },
  {
    src: Honeywell,
    alt: 'Honeywell',
  },
];

export default function Clients() {
  return (
    <section className={styles.container}>
      <h2 className="section_title">clients:</h2>
      <ul className={styles.list_companies}>
        {image_list.map(item => (
          <li key={item.alt}>
            <Image src={item.src} alt="bank" width={150} />
          </li>
        ))}
      </ul>
    </section>
  );
}
