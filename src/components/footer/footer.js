import Link from 'next/link';
import styles from './footer.module.css';
import { SVG } from '../../app/svg';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/nataliasabadysh',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/natalia-sabadysh/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/natalia.developer/reels/',
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~010998805a2e6befc2',
  },
];

const contacts = [
  {
    type: 'Email',
    value: 'nataliasabadysh@gmail.com',
    href: 'mailto:nataliasabadysh@gmail.com',
    className: styles.email_link__mobile,
  },
  {
    type: 'Phone',
    value: '+16048410810',
    href: `tel:+16048410810`,
    className: styles.list__item,
  },
  {
    type: 'Address',
    value: '333 Seymour St, Vancouver, BC V6B 5A6',
    href: `https://www.google.com/maps?q=333+Seymour+St,+Vancouver,+BC+V6B+5A6`,
    className: styles.list__item,
  },
];

export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <section className={styles.section}>
        <ul className={styles.link_container}>
          {contacts.map((contact, index) => (
            <li className={styles.list__item} key={index}>
              <a
                className={contact.className}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.link_container}>
          {socialLinks.map(link => (
            <li className={styles.list__item} key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name} {SVG.arrow}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.footer_container}>
        {/* <span className={styles.copyright}> copyright &copy; 2023</span> */}

        <span className={styles.copyright}>
          designed & developed with ♥️ by Natalia Sabadysh
        </span>
      </div>
    </footer>
  );
}
