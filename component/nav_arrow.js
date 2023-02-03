import styles from "../styles/Home.module.css";

export default function NavArrow(props) {


  return (
    <a href={props.href}>
      <span>
        <img 
          className={styles.icon} 
          style={{padding:"0 5px", margin:"15px 0"}}
          src={props.src}
          onClick={props.onClick}
        />
      </span>
    </a>
  )
}

