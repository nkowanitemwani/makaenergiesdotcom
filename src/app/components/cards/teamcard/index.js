import styles from "./teamcard.module.css"
import Image from "next/image"


export default function TeamCard({name,title}){
    return(
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
             <Image className={styles.image} src="/images/person.jpg" width={100} height={100} alt="team member image"></Image>
          </div>
          <h2 className={styles.name}>{name}</h2>
          <h3 className={styles.title}>{title}</h3>
        </div>
    );

}