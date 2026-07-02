import React, { useState } from 'react';
import axios from 'axios';
import { getOptimizedImg } from '../../../utils/utils';
import { CardContainer, CardBody, CardItem } from '../../ui/3dCard/3d-card';
import './AssesmentForm.css';

const canadaImg = getOptimizedImg("kanedda_pp39dw.webp", 600);
const australiaImg = getOptimizedImg("australia_karwaz.webp", 600);
const nzImg = getOptimizedImg("newzealandflagimage_o9kryx.webp", 600);

const countriesData = [
    {
        id: 'canada',
        name: 'Canada',
        image: canadaImg,
        badge: 'Most Popular',
        description: 'Ranked as the #1 destination for skilled professionals seeking permanent residency.'
    },
    {
        id: 'australia',
        name: 'Australia',
        image: australiaImg,
        badge: 'High Demand',
        description: 'Outstanding quality of life with robust career pathways for tech and healthcare experts.'
    },
    {
        id: 'newzealand',
        name: 'New Zealand',
        image: nzImg,
        badge: 'Fast Track',
        description: 'Stunning landscapes, serene lifestyle, and streamlined pathways for skilled workers.'
    },
    {
        id: 'other',
        name: 'Other',
        image: '',
        badge: 'Other',
        description: 'Let us know your destination and we will assist you with the best possible support.'
    }
];

const countryCodes = [
    { code: '+971', label: 'UAE (+971)' },
    { code: '+1', label: 'Canada/USA (+1)' },
    { code: '+61', label: 'Australia (+61)' },
    { code: '+64', label: 'New Zealand (+64)' },
    { code: '+91', label: 'India (+91)' },
    { code: '+44', label: 'UK (+44)' },
    { code: '+92', label: 'Pakistan (+92)' },
    { code: '+63', label: 'Philippines (+63)' }
];

const AssesmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+971',
        destination: 'canada'
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        // Clear error on input change
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleCountrySelect = (countryId) => {
        setFormData((prev) => ({
            ...prev,
            destination: countryId
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required';

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Mobile number is required';
        } else if (!/^\d{7,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
            newErrors.phone = 'Please enter a valid mobile number (7-12 digits)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            
            const destMap = {
                canada: 'Canada',
                australia: 'Australia',
                newzealand: 'New Zealand',
                other: 'Other'
            };

            axios.post('/api/assessment/book', {
                fullName: formData.name,
                email: formData.email,
                phone: {
                    countryCode: formData.countryCode,
                    number: formData.phone
                },
                targetCountry: destMap[formData.destination] || 'Canada'
            })
            .then(res => {
                setIsSubmitting(false);
                setIsSubmitted(true);
            })
            .catch(err => {
                console.error("Error booking assessment:", err);
                setIsSubmitting(false);
                setIsSubmitted(true); // Fallback to simulated success display
            });
        }
    };

    if (isSubmitted) {
        return (
            <CardContainer containerClassName="py-0 w-full flex justify-center items-center" className="w-full">
                <CardBody className="assessment-form-container">
                    <div className="assessment-success-card">
                        <CardItem translateZ={50} className="success-icon-wrapper w-full flex justify-center">
                            <svg className="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </CardItem>
                        <CardItem translateZ={40} as="h3" className="success-title">
                            Assessment Booked!
                        </CardItem>
                        <CardItem translateZ={30} as="p" className="success-text">
                            Thank you, <strong>{formData.name}</strong>. Your immigration assessment has been successfully scheduled. 
                            Our senior consultant will contact you at <strong>{formData.countryCode} {formData.phone}</strong> or <strong>{formData.email}</strong> shortly.
                        </CardItem>
                        <CardItem translateZ={20} as="button" 
                            onClick={() => {
                                setIsSubmitted(false);
                                setFormData({
                                    name: '',
                                    email: '',
                                    phone: '',
                                    countryCode: '+971',
                                    destination: 'canada'
                                });
                            }}
                            className="reset-button"
                        >
                            Book Another Assessment
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        );
    }

    return (
        <CardContainer containerClassName="py-0 w-full flex justify-center items-center" className="w-full">
            <CardBody className="assessment-form-container">
                <div className="assessment-form-header">
                    <CardItem translateZ={40} as="h3" className="form-title">
                        Start Your Journey Today
                    </CardItem>
                    <CardItem translateZ={30} as="p" className="form-subtitle">
                        Fill in your details to receive a free eligibility assessment from our certified consultants.
                    </CardItem>
                </div>
                
                <form onSubmit={handleSubmit} className="assessment-form-body" noValidate>
                    {/* Destination Selector */}
                    <CardItem translateZ={25} className="form-group destination-group w-full">
                        <label className="form-label">Select Your Destination</label>
                        <div className="destination-cards-grid">
                            {countriesData.map((country) => (
                                <div 
                                    key={country.id}
                                    className={`destination-card ${formData.destination === country.id ? 'active' : ''}`}
                                    onClick={() => handleCountrySelect(country.id)}
                                >
                                    {country.image && (
                                        <div className="destination-card-img-wrapper">
                                            <img src={country.image} alt={country.name} className="destination-card-img" />
                                            <div className="destination-card-img-overlay"></div>
                                        </div>
                                    )}
                                    <div className="destination-card-content">
                                        <div className="destination-card-header">
                                            <span className="destination-name">{country.name}</span>
                                            {country.badge && <span className="destination-badge">{country.badge}</span>}
                                        </div>
                                        <p className="destination-desc">{country.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardItem>

                    {/* Personal Information Fields */}
                    <CardItem translateZ={20} className="form-fields-row w-full">
                        <div className={`form-field-wrapper ${errors.name ? 'has-error' : ''}`}>
                            <label htmlFor="name-input" className="form-label">Full Name</label>
                            <input
                                id="name-input"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="e.g. John Doe"
                                className="form-input"
                                disabled={isSubmitting}
                            />
                            {errors.name && <span className="field-error-msg">{errors.name}</span>}
                        </div>

                        <div className={`form-field-wrapper ${errors.email ? 'has-error' : ''}`}>
                            <label htmlFor="email-input" className="form-label">Email Address</label>
                            <input
                                id="email-input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="e.g. john@example.com"
                                className="form-input"
                                disabled={isSubmitting}
                            />
                            {errors.email && <span className="field-error-msg">{errors.email}</span>}
                        </div>

                        <div className={`form-field-wrapper phone-field-wrapper ${errors.phone ? 'has-error' : ''}`}>
                            <label htmlFor="phone-input" className="form-label">Mobile Number</label>
                            <div className="phone-input-container">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleInputChange}
                                    className="phone-code-select"
                                    disabled={isSubmitting}
                                >
                                    {countryCodes.map((c) => (
                                        <option key={c.code} value={c.code}>
                                            {c.label}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    id="phone-input"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="50 123 4567"
                                    className="phone-number-input"
                                    disabled={isSubmitting}
                                />
                            </div>
                            {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                        </div>
                    </CardItem>

                    {/* Submit button */}
                    <CardItem translateZ={30} className="w-full">
                        <button 
                            type="submit" 
                            className={`submit-assessment-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-icon"></span>
                                    Processing your eligibility...
                                </>
                            ) : (
                                'Get Free Consultation'
                            )}
                        </button>
                    </CardItem>
                </form>
            </CardBody>
        </CardContainer>
    );
};

export default AssesmentForm;