import React from 'react';
import generatePDF from '../utils/pdfGenerator';
import './DownloadButton.css'; // Import the CSS file for responsiveness

const DownloadButton = ({ formData, template }) => {
    const handleDownload = () => {
        generatePDF(formData, template);
    };

    // Inline styles for centering the button
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={centerStyle}>
            <button className="responsiveButton" onClick={handleDownload}>Download PDF</button>
        </div>
    );
};

export default DownloadButton;
