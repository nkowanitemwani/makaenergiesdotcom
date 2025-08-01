
import styles from "./infocard.module.css"


export default function InfoCard ({icon: Icon, title}){
    return(
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <Icon className={styles.icon} size={32} strokeWidth={1.5}></Icon>
            </div>
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}