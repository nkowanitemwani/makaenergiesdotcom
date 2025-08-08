import Button from "../../button/page";
import styles from "./careercard.module.css"



export default function CareerCard({title,duration,dueDate,qualifications,roles}){
    return(
        <div className={styles.mainCard}>
            <div className={styles.innerCard}>
              <h2>{title}</h2>
              <h3>{duration}</h3>
            </div>
            <div className={styles.listCard}>
              <h2>Qualifications</h2>
              <div className={styles.list}>
                {Array.isArray(qualifications) ? (
                    <ul>
                        {qualifications.map((qlctn,index) => (
                            <li key={index}>{qlctn}</li>
                        ))}
                    </ul>
                ) : (qualifications)}
              </div>
            </div>
            <div className={styles.innerCard}>
             <h2>Closing: {dueDate}</h2>
             <Button style={{padding: "5px 5px",background:"#1a2332"}}>Apply</Button>
            </div>
            <div className={styles.listCard}>
            <h2>Roles</h2>
            <div className={styles.list}>
            {Array.isArray(roles) ? (
                    <ul>
                        {roles.map((rls,index) => (
                            <li key={index}>{rls}</li>
                        ))}
                    </ul>
                ) : (roles)}              
            </div>
            </div>
        </div>
    );
}