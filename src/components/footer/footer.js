import Link from 'next/link';
import styles from './footer.module.css';
import { SVG } from '../../app/svg';

export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <section className={styles.section}>
        <ul className={styles.link_container}>
          <li className={styles.list__item}>
            <a
              className={styles.email_link__mobile}
              href="mailto: nataliasabadysh@gmail.com"
              target="_blank"
            >
              nataliasabadysh@gmail.com
            </a>
          </li>
          <li className={styles.list__item}>
            <a
              className={styles.list__item}
              href="phone:+16048410810"
              target="_blank"
            >
              +16048410810
            </a>
          </li>
          <li className={styles.list__item}>
            <a
              className={styles.list__item}
              href="mailto: nataliasabadysh@gmail.com"
              target="_blank"
            >
              333 Seymour St, Vancouver, BC V6B 5A6
            </a>
          </li>
        </ul>

        <ul className={styles.link_container}>
          <li className={styles.list__item}>
            <a href="">Facebook {SVG.arrow}</a>
          </li>
          <li className={styles.list__item}>
            <a href="">Twitter {SVG.arrow} </a>
          </li>
          <li className={styles.list__item}>
            <a href="">Instagram{SVG.arrow} </a>
          </li>
          <li className={styles.list__item}>
            <a href="https://www.upwork.com/freelancers/~010998805a2e6befc2">
              Upwork {SVG.arrow}
            </a>
          </li>
        </ul>
      </section>

      <div className={styles.footer_container}>
        <span className={styles.copyright}> copyright &copy; 2023</span>
      </div>
    </footer>
  );
}
