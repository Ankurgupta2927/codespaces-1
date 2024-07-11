import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './routes/FormPage';
import PreviewPage from './routes/PreviewPage';
import './App.css'; // Ensure you're importing your CSS file

const App = () => {
    const [formData, setFormData] = useState(null);

    return (
        <Router>
            <div className="app"> {/* Wrap your routes in a div with the class "app" */}
                <div className='Text'>Job Advertisement Poster</div>
                <Routes>
                    <Route path="/preview" element={<PreviewPage formData={formData} />} />
                    <Route path="/" element={<FormPage setFormData={setFormData} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
