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

    try {
      const form = new FormData();

      form.append("name",formData.name);
      form.append("email",formData.email);
      form.append("phone",formData.phone);
      form.append("nrc",formData.nrc);

      if(formData.cv){
         formData.append("cv",formData.cv)
      }

    const response = await fetch('../api/sendcareerapplication',{
      method:"POST",
      body: form

    });

  if (response.ok) {
    setShowAlertSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      nrc: "",
      cv: null
    });
    setAgreedToPrivacy(false);
  }else{
    throw new Error("Failed to send application")
  } 

    } catch (error) {
     console.error('Error sending email:', error);
      setShowAlertFail(true);      
    }
    finally{
      setIsSubmitting(false);
    }


};

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
                placeholder="NRC : 123567/78/9"
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
                required
                className={styles.cvInput}></input>   
            </div>
            <div className={formStyle.checkboxSection}>
              <input
                type="checkbox"
                id="privacy"
                checked={agreedToPrivacy}
                onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                className={formStyle.checkbox}
                required
              />
              <label htmlFor="privacy" className={formStyle.checkboxLabel}>
                I agree to the{' '}
                <a href="../policies" className={formStyle.privacyLink}>
                  Privacy Policy
                </a>{' '}
                and consent to being contacted by Maka Energies regarding my inquiry. 
                <span className={formStyle.required}>*</span>
              </label>
            </div>            
            <Button
              type="submit"
              disabled={isSubmitting}
            > <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
            </Button>
            {showAlertSuccess && (
            <Alert
            icon={ThumbsUp}
            message="Application sent successfully!"
            onClose={() => setShowAlertSuccess(false)}/>
            )}

          {showAlertFail && (<Alert
              icon={ThumbsDown}
              message={"Failed to send Application. Please try again."}
              onClose={() => setShowAlertFail(false)}></Alert>
          )}             
            
            </form>

          </div>
         </div>

        </div>
    );
}