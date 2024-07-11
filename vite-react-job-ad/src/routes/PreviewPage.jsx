import React, { useState } from 'react';
import PosterPreview from '../components/PosterPreview';
import DownloadButton from '../components/DownloadButton';

const PreviewPage = ({ formData }) => {
    const [selectedTemplate, setSelectedTemplate] = useState(1);

    if (!formData) {
        return <p>No data to preview. Please fill out the form first.</p>;
    }

    return (
        <div>
            <div className='button'>
                <button onClick={() => setSelectedTemplate(1)}>Template 1</button>
                <button onClick={() => setSelectedTemplate(2)}>Template 2</button>
                <button onClick={() => setSelectedTemplate(3)}>Template 3</button>
            </div>
            <PosterPreview formData={formData} template={selectedTemplate} />
            <DownloadButton formData={formData} template={selectedTemplate} />
        </div>
    );
};

export default PreviewPage;
