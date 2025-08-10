"use client"

import React from "react";
import { useState } from "react";
import { ChevronDown } from 'lucide-react';
import styles from "./quoteform.module.css";
import Button from "../../button/page";



export default function QuoteForm(){

const [selectedService,setSelectedService] = useState("");
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

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


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToPrivacy) {
      alert('Please agree to the privacy policy');
      return;
    }

    // Handle form submission
    console.log('Form submitted');
  };


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formCard}>
         <div className={styles.form}>
            <div className={styles.formTop}>
              <input
                type="text"
                placeholder="Name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
              />
              <input
                type="text"
                placeholder="Company/Organization"
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
                placeholder="leave a detailed description of your project or inquiry..."
                required
                rows={6}
                className={styles.textarea}
              ></textarea>
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
                <a href="#" className={styles.privacyLink}>
                  Privacy Policy
                </a>{' '}
                and consent to being contacted by Maka Energies regarding my inquiry. 
                <span className={styles.required}>*</span>
              </label>
            </div>
            <Button
              type="submit"
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

}