"use client";

import styles from "./carrerform.module.css"
import formStyle from "../quoteform/quoteform.module.css"
import { useState } from "react";
import Button from "../../button";
import Alert from "../../alert";
import { ThumbsUp,ThumbsDown } from "lucide-react";



export default function CareerForm (){

    const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [showAlertSuccess,setShowAlertSuccess] = useState(false);
    const [showAlertFail,setShowAlertFail] = useState(false);


    const [formData,setFormData] = useState({
        name:"",
        email: "",
        phone:"",
        nrc:"",
        address:"",
        cv: null

    });



   const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    // If the input is a file input, store the file instead of a string
    if (files) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0] // store the first selected file
      }));
    } else {
          let newValue = value;

    // For NRC input, auto-insert slashes
    if (name === "nrc") {
      // Remove anything that's not a digit
      newValue = newValue.replace(/\D/g, "");

      // Insert slashes after 6th and 8th digit
      if (newValue.length > 6) {
        newValue = newValue.slice(0, 6) + "/" + newValue.slice(6);
      }
      if (newValue.length > 9) {
        newValue = newValue.slice(0, 9) + "/" + newValue.slice(9);
      }
    }

      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };
  

const handleSubmit = async (e) => {
    e.preventDefault();

   if (!agreedToPrivacy) {
      alert('Please agree to the privacy policy');
      return;
    }    

    setIsSubmitting(true);
}

























    return(
        <div className={formStyle.container}>
         <div className={formStyle.wrapper}>
          <div className={formStyle.formCard}>
            <form onSubmit={handleSubmit} className={formStyle.form}>
                <div className={styles.infoSection}>
                                  <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="nrc"
                placeholder="123567/78/9"
                value={formData.nrc}
                onChange={handleInputChange}
                maxLength={11}
              />
                </div>

            <div className={styles.cvinput}>
                <input
                type="file"
                name="cv"
                accept="application/pdf"
                onChange={handleInputChange}
                required></input>
            </div>
            </form>

          </div>
         </div>

        </div>
    );
}