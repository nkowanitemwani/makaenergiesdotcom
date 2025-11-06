import React from 'react';
import styles from './sectionheader.module.css';

export default function SectionHeader({ title, subtitle, align = 'center' }) {
  return (
    <div className={`${styles.sectionHeader} ${styles[align]}`}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}