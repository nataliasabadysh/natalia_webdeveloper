import Image from 'next/image';
import styles from './project.module.css';
import adamex from '../../../public/images/adamex.png';
import hub from '../../../public/images/hub.png';

export default function Project() {
  return (
    <section>
      <div>
        <h2 className="section_title">project:</h2>
      </div>
      <ul className={styles.tech_container}>
        <li className={styles.tech_item}>
          <a
            title="Adamex page"
            rel="noopener"
            href="https://example.com"
            className={styles.tech_card}
          >
            <Image src={adamex} alt="adamex" className={styles.adamex_view} />

            <h3>Adamex</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing
            </p>
            <div className={styles.tech_list}>
              <span>JavaScrip</span>
              <span>React</span>
              <span>Tailwind</span>
              <span>UI/UX</span>
            </div>
          </a>
        </li>
        <li className={styles.tech_item}>
          <a
            title="Educating Platform page"
            rel="noopener"
            href="https://example.com"
            className={styles.tech_card}
          >
            <Image
              src={hub}
              alt="Educating Platform"
              className={styles.hub_view}
            />

            <h3>Educating Platform </h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing
            </p>

            <div className={styles.tech_list}>
              <span>JavaScrip</span>
              <span>React</span>
              <span>Tailwind</span>
              <span>UI/UX</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
