import Image from 'next/image';
import styles from './about.module.css';
import InsightRoll from './insight_roll';

import Ava from '../../../public/avatar.jpg';
import { SVG } from '../../app/svg';
import { useState } from 'react';
import { Modal } from '../modal/modal';
import YouTubePlayer from '../YouTubePlayer/YouTubePlayer';
import { Animation } from '../animation/animation';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showModalJsx = isModalOpen && (
    <Modal onClose={closeModal} isOpen={isModalOpen}>
      <YouTubePlayer videoId="SjDZIxnke6M" />
    </Modal>
  );

  return (
    <>
      <section className={styles.container}>
        <div className={styles.about_photo}>
          <Image src={Ava} alt="personal photo for the web site " width={320} />
        </div>

        <div className={styles.play_el} onClick={openModal}>
          {SVG.play}
        </div>
        {showModalJsx}
        <div className={styles.about_text}>
          <div>
            <p>
              {' '}
              Hi, My name is Natalia
              <br />
              I’m a Software Developer. I have 6 years experience working with
              clients such as BCPark, Honeywell, Rolls-Royce, Nordstrom, and
              many more government projects, lots of CRM and MVP projects.
            </p>
          </div>

          <div className={styles.tags_actions}>
            <ul className={styles.tag_list}>
              <li className={styles.tag}>
                <span>React </span>
              </li>
              <li className={styles.tag}>
                <span>Web developer</span>
              </li>
              <li className={styles.tag}>
                <span>JavaScript</span>
              </li>
              <li className={styles.tag}>
                <span>UX/UI Lover</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <InsightRoll /> */}
    </>
  );
}
