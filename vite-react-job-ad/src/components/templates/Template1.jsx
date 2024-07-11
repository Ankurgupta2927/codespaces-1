import React from 'react';
import chairImage from './chair.png';
import styles from '../../styles/templates/Template1.module.css';

const Template1 = ({ formData }) => {
    return (
        <div className={styles.Template1}>
            <div className={styles.posterContainer}>
                <div className={styles.poster}>
                    <div className={styles.leftSection}>
                        <h1>We Are Hiring!</h1>
                        <h2>Job Opportunity: {formData.jobRole}</h2>
                        <p>About the company: {formData.companyName}</p>
                        <p>Job Description: {formData.jobDescription}</p>
                        <p>Experience Level: {formData.experience}</p>
                        <p>Contact us at Email: {formData.email} or Phone: {formData.phoneNumber}</p>
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.vacancy}>
                            <img src={chairImage} alt="Vacancy" className={styles.chairImage} />
                            <div className={styles.vacancyTag}>Vacancy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template1;
