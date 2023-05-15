import styles from "../Styles/Contact.module.css";

interface props {
  onClick: React.MouseEventHandler;
}

export default function PlusBtn({ onClick }: props) {
  return (
    <button className={styles.addBtn} onClick={onClick}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
    </button>
  );
}
