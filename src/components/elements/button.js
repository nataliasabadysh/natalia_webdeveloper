import styles from './elements.module.css';

export default function Button({ onClick, name }) {
  return (
    <button className="btn" onClick={onClick}>
      {name}
    </button>
  );
}
