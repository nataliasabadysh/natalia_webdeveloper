import styles from './contact.module.css';
import Button from '../elements/button';

export default function Contact({ onClick }) {
  return (
    <section className={styles.container}>
      <h2>Let's work together</h2>
      <br />
      <Button onClick={onClick} name="contact me" />
    </section>
  );
}
