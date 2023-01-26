import styles from "../styles/Home.module.css";

export default function ArticleTitle(props) {
  const { title = '' } = props;
  return (
    <div className={styles.row} style={{width:"100%", margin:"0 5% 0 5%",alighItems:"center",justifyContent:"center"}}>
        <div className={styles.border} style={{flex:2}}></div>
        <h1 style={{margin:"0 5% 0 5%"}}>{title}</h1>
        <div className={styles.border} style={{flex:2}}></div>
    </div>
  )
}

