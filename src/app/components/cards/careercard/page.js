import styles from "./careercard.module.css";

export default function CareerCard({ title, duration, dueDate, qualifications, roles }) {
  return (
    <div className={styles.mainCard}>
      
      {/* Header */}
      <div className={styles.header}>
        <h2>{title}</h2>
        <span>{duration}</span>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.section}>
          <h3>Qualifications</h3>
          <ul className={styles.list}>
            {qualifications.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Roles</h3>
          <ul className={styles.list}>
            {roles.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span>Closing: {dueDate}</span>
        <button className={styles.applyBtn}>Apply</button>
      </div>

    </div>
  );
}
