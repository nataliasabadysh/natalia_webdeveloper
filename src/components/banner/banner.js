import styles from './banner.module.css';

export default function Banner() {
  return (
    <>
      <section className={styles.contaier}>
        <div className={styles.title}>
          <h2>Software</h2>
          <h2>Developer </h2>
        </div>

        <div className={styles.description}>
          <h1>
            Your Complexity, My Specialty. <br />
            I’m not just your developer but your companion.
          </h1>
        </div>
      </section>
    </>
  );
}
