import styles from "../styles/Home.module.css";

export default function ArticleTitle(props) {
  const { title = '' } = props;
  return (
    <div className={styles.row} style={{width:"100%",alignItems:"center"}}>
        <div className={styles.border} style={{flex:2,margin:"0 50px"}}></div>
        <h1>{title}</h1>
        <div className={styles.border} style={{flex:2,margin:"0 50px"}}></div>
    </div>
  )
}

