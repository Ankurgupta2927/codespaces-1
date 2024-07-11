import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        jobRole: '', 
        experience: '',
        jobDescription: '',
        email: '', 
        phoneNumber: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); 
        console.log(formData);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
                <input type="text" name="jobRole" placeholder="Job Role" value={formData.jobRole} onChange={handleChange} /> {/* Added jobRole input */}
                <input type="text" name="experience" placeholder="Experience (e.g., 5 years)" value={formData.experience} onChange={handleChange} />
                <textarea name="jobDescription" placeholder="Job Description" value={formData.jobDescription} onChange={handleChange}></textarea>
                <input type="text" name="email" placeholder="Email (e.g., email@example.com)" value={formData.email} onChange={handleChange} /> {/* Changed from contactDetails to email */}
                <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} /> {/* Added phoneNumber field */}
                <button type="submit" className={styles.submitButton}>Generate Poster</button>
            </form>
        </div>
    );
};

export default Form;
