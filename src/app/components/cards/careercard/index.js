"use client"

import styles from "./careercard.module.css";
import { useRouter } from "next/navigation";

const slugify = (text) => text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""); 

export default function CareerCard({ 
  title = "Untitled Role",
  duration = "N/A", 
  dueDate = "TBA", 
  qualifications = [], 
  roles = [] }) {

  const router = useRouter();

  const handleApply = () => {
    const slug = slugify(title);
    router.push(`./apply/${slug}`)
  }




  return (
    <div className={styles.mainCard}>
      
      
      <div className={styles.header}>
        <h2>{title}</h2>
        <span>{duration}</span>
      </div>

      
      <div className={styles.body}>
        <div className={styles.section}>
          <h3>Qualifications</h3>
        <ul className={styles.list}>
          {(qualifications || []).map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
        </div>
        <div className={styles.section}>
          <h3>Roles</h3>
        <ul className={styles.list}>
          {(roles || []).map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        </div>
      </div>

      
      <div className={styles.footer}>
        <span>Closing: {dueDate}</span>
        <button className={styles.applyBtn} onClick={handleApply}>Apply</button>
      </div>

    </div>
  );
}
