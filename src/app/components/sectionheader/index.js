import React from 'react';
import styles from './sectionheader.module.css';

export default function SectionHeader({ title, subtitle, align = 'center' , ...props}) {
  return (
    <div className={`${styles.sectionHeader} ${styles[align]}`} {...props}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}