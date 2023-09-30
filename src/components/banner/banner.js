import styles from './banner.module.css';

export default function Banner() {
  return (
    <>
      <section className={styles.contaier}>
        <div className={styles.title}>
          <h1> Software Developer </h1>
        </div>

        <div className={styles.description}>
          <p>
            Your Complexity, My Specialty. <br />
            I’m not just your developer but your companion.
          </p>
        </div>
      </section>
    </>
  );
}
