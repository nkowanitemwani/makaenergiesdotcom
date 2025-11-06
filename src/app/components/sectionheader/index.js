import React from 'react';
import styles from './sectionheader.module.css';

export default function SectionHeader({ 
  title, 
  subtitle, 
  align = 'center', 
  titleColor, 
  subtitleColor,
  ...props 
}) {
  return (
    <div className={`${styles.sectionHeader} ${styles[align]}`} {...props}>
      <h1 style={titleColor ? { color: titleColor } : undefined}>
        {title}
      </h1>
      {subtitle && (
        <p style={subtitleColor ? { color: subtitleColor } : undefined}>
          {subtitle}
        </p>
      )}
    </div>
  );
}