import styles from "../styles/Home.module.css";

export default function Button(props) {
  const { title = '', href='' } = props;
  return (
    <a href="/about">
      <button className={styles.button}>{title}</button>
    </a>
  )
}