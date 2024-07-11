import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const FormPage = ({ setFormData }) => {
    const navigate = useNavigate();

    const handleSubmit = (formData) => {
        setFormData(formData);
        navigate('/preview');
    };

    return <Form onSubmit={handleSubmit} />;
};

export default FormPage;
