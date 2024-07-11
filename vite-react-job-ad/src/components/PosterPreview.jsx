// PosterPreview.jsx
import React from 'react';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import styles from '../styles/PosterPreview.module.css';

const PosterPreview = ({ formData, template }) => {
    const renderTemplate = () => {
        switch (template) {
            case 1:
                return <Template1 formData={formData} />;
            case 2:
                return <Template2 formData={formData} />;
            case 3:
                return <Template3 formData={formData} />;
            default:
                return null;
        }
    };

    return <div className={styles.poster}>{renderTemplate()}</div>;
};

export default PosterPreview;
