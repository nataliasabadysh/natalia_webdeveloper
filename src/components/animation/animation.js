import styles from './animation.module.css';

export function Animation({ children }) {
  return (
    <>
      <div className={styles.content}>{children}</div>
    </>
  );
}
