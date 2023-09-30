import Image from 'next/image';
import Link from 'next/link';
import styles from './tech.module.css';
import { SVG } from '../../app/svg';

const content = {
  about:
    'Hi, I am Natalia software engineer for 6 years , Hi, Iam Natalia  software engineer for 6 years',
  tech_skills: {
    title: 'TECH STACK',
    p: 'we create immersive and interactive digital experiences that are both easy to use and a joy to engage with.',
    list: [
      {
        title: 'JavaScript',
        button: ['export'],
        items: null,
        desc: 'Frontend / backend ',
        years: '+ 6 years',
        color: '#FFCC4A',
      },
      {
        title: 'python',
        button: ['beginner'],
        items: null,
        desc: 'Frontend / backend ',
        years: '+ 6 years',
        color: '#87ADCD',
      },
      // {
      //   title: 'sql',
      //   button: ['beginner'],
      //   desc: 'Frontend / backend ',
      //   years: '+ 6 years',
      //   color: '#15182D',
      // },
      // {
      //   title: 'Ui/Ux lover',
      //   button: ['beginner'],
      //   items: null,
      //   desc: 'Frontend / backend ',
      //   years: '+ 6 years',
      //   color: '#',
      // },
      // {
      //   title: 'TypeScript',
      //   button: null,
      //   items: ['libraries', 'tools', 'pet projects', 'valontues'],
      //   desc: 'Frontend / backend ',
      //   years: '+ 6 years',
      //   color: '#TypeScript',
      // },
      {
        title: 'React',
        button: null,
        items: ['libraries', 'tools', 'pet projects', 'valontues'],
        desc: 'Frontend / backend ',
        years: '+ 6 years',
        color: '#557EE4',
      },
      {
        title: 'GraphQL',
        button: null,
        items: ['libraries', 'tools', 'pet projects', 'valontues'],
        desc: 'Frontend / backend ',
        years: '+ 6 years',
        color: '#CC46A2',
      },
    ],
  },
};

const ViewCard = ({ name = '', color = '' }) => {
  const bg = { backgroundColor: color };

  return (
    <div className={styles.view_card_wrapper}>
      <div className={styles.card_container} style={bg}>
        <span className={styles.card_name}>{name}</span>
        <span className={styles.card_name}>{name}</span>
        <span className={styles.card_name}>{name}</span>
        <span className={styles.card_name}>{name}</span>
      </div>
      {/* <Link href={'/url/url'} className={styles.btn}>
        read more
        <span>{SVG.arrow}</span>
      </Link> */}
    </div>
  );
};

export default function Tech() {
  return (
    <section>
      <div>
        <h2 className="section_title">tech stack:</h2>
      </div>

      <ul className={styles.container}>
        {content.tech_skills.list.map((item, index) => (
          <li className={styles.element} key={index}>
            <ViewCard name={item.title} color={item.color} />
          </li>
        ))}
      </ul>
    </section>
  );
}
