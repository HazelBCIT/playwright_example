import styles from "../styles/Home.module.css";

export default function ArrowIcon(props) {
  const { src='', href='' } = props;

  return (
    <a href={href}>
      <span>
        <img 
          className={styles.icon} 
          style={{padding:"0 5px", margin:"15px 0"}}
          src={src}
        />
      </span>
    </a>
  )
}

