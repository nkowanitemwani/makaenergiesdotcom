"use client"

import React from "react";
import { useRouter } from "next/navigation";
import buttonStyles from "./button.module.css"


export default function Button ({
    children,
    onClick,
    href,
    className = "",
    disabled = false,
    type = "button",
    variant = "primary",
    ...props
}){
   const router = useRouter();

   const handleClick = (e) => {
     if(disabled) return;

     if(href) {
     router.push(href);
     }
   else if (onClick){
    onClick(e);
   }
   };

  const buttonClass = `${buttonStyles.hplcCta} ${buttonStyles[variant]} ${className}`.trim();

  return (
    <button 
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );

}