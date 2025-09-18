import styles from "./servicecard.module.css"

export default function CompactServiceCard({icon: Icon, title}) {
    return(
        <div className={styles.compactCard}>
            {Icon && (
                <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} size={24} strokeWidth={1.5} />
                </div>
            )}
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}