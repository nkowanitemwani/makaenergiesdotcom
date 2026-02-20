
import styles from "./infocard.module.css"

export default function InfoCard ({icon: Icon, title, subTitle,...props}){

    const {p, ...validProps} = props;

    return(
        <div className={styles.card} {...validProps}>
              {Icon && (
                <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} size={32} strokeWidth={1.5} />
                </div>
            )}
            <h3 className={styles.title}>{title}</h3>
                <div className={styles.subTitle}>
                {Array.isArray(subTitle) ? (
                    <ul>
                        {subTitle.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    subTitle
                )}
            </div>
        </div>
    )
}