"use client"

import React from "react";
import { useState } from "react";
import { ChevronDown } from 'lucide-react';
import styles from "./quoteform.module.css";
import Button from "../../button";



export default function QuoteForm(){

const [selectedService,setSelectedService] = useState("");
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
const [isSubmitting,setIsSubmitting] = useState(false);

const [formData, setFormData] = useState({
  name:"",
  email: "",
  phone:"",
  company:"",
  message:""
});

const services = ["Electrical Supplies and Maintenance",
    "Transformer Installations",
    "Solar Product Installation",
    "High/Medium Voltage Line Construction",
    "Generator and Auto-Electrical Maintenance",
    "Mining Tools,Office Equipment and PPE Supply"];

const handleServiceSelect = (service) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};


  const handleSubmit =async (e) => {
    e.preventDefault();

    if (!agreedToPrivacy) {
      alert('Please agree to the privacy policy');
      return;
    }

    if(!selectedService){
      alert("Please select a service");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('../api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: selectedService
        }),
      });

      if (response.ok) {
        alert('Quote request sent successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        setSelectedService('');
        setAgreedToPrivacy(false);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }



    // Handle form submission
    console.log('Form submitted');
  };

return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formCard}>
         <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formTop}>
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
                name="company"
                placeholder="Company/Organization"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.serviceSection}>
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={styles.dropdown}
              >
                <span className={selectedService ? styles.dropdownText : styles.dropdownPlaceholder}>
                  {selectedService || 'Select a service'}
                </span>
                <ChevronDown
                  className={`${styles.chevron} ${
                    isDropdownOpen ? styles.chevronOpen : ''
                  }`}
                />
              </div>
              
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {services.map((service, index) => (
                    <div
                      key={index}
                      onClick={() => handleServiceSelect(service)}
                      className={styles.dropdownItem}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className={styles.messageSection}>
              <textarea
                name="message"
                placeholder="leave a detailed description of your project or inquiry..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={styles.textarea}
              />
            </div>
            
            <div className={styles.checkboxSection}>
              <input
                type="checkbox"
                id="privacy"
                checked={agreedToPrivacy}
                onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                className={styles.checkbox}
                required
              />
              <label htmlFor="privacy" className={styles.checkboxLabel}>
                I agree to the{' '}
                <a href="../pages/policies" className={styles.privacyLink}>
                  Privacy Policy
                </a>{' '}
                and consent to being contacted by Maka Energies regarding my inquiry. 
                <span className={styles.required}>*</span>
              </label>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

}