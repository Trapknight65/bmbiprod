import React, { useState } from 'react';
import Header from '../Header';

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        description: '',
        budget: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Project Type: ${formData.projectType}\n` +
            `Budget: ${formData.budget}\n\n` +
            `Description:\n${formData.description}`
        );
        window.location.href = `mailto:info@bambi-productions.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screen text-white p-6 md:p-12 flex items-center justify-center">
            <Header />

            <div className="pt-20 w-full flex items-center justify-center">
                <div className="max-w-2xl w-full">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-tangerine mb-2">Let us Work Together</h1>
                        <p className="text-neutral-300">Say more about your project</p>
                    </div>

                    <div className="flex justify-center items-center gap-3 mb-8">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="flex items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${step >= num
                                        ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white scale-110'
                                        : 'bg-neutral-700 text-neutral-400'
                                        }`}
                                    style={
                                        step >= num
                                            ? { boxShadow: '0 4px 20px rgba(220,38,38,0.5)' }
                                            : {}
                                    }
                                >
                                    {num}
                                </div>
                                {num < 3 && (
                                    <div
                                        className={`w-12 md:w-20 h-1 transition-all duration-300 ${step > num ? 'bg-gradient-to-r from-orange-500 to-red-600' : 'bg-neutral-700'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div
                        className="rounded-3xl p-8 md:p-12 backdrop-blur-lg transition-all duration-500"
                        style={{
                            background: 'rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                        }}
                    >
                        {step === 1 && (
                            <div className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-200">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-200">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-neutral-200">
                                        Project Type *
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                    >
                                        <option value="">Select a type...</option>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Music Video">Music Video</option>
                                        <option value="Documentary">Documentary</option>
                                        <option value="Event Coverage">Event Coverage</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium mb-2 text-neutral-200">
                                        Budget Range
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                    >
                                        <option value="">Select a range...</option>
                                        <option value="< €1,000">{"< €1,000"}</option>
                                        <option value="€1,000 - €5,000">€1,000 - €5,000</option>
                                        <option value="€5,000 - €10,000">€5,000 - €10,000</option>
                                        <option value="€10,000+">€10,000+</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium mb-2 text-neutral-200">
                                        Project Description *
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                                        placeholder="Tell us about your vision..."
                                    />
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-semibold mb-6">Review Your Information</h2>
                                <div className="space-y-4 bg-black/20 rounded-xl p-6 border border-white/10">
                                    <div>
                                        <p className="text-sm text-neutral-400 mb-1">Name</p>
                                        <p className="text-lg font-medium">{formData.name || '—'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-400 mb-1">Email</p>
                                        <p className="text-lg font-medium">{formData.email || '—'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-400 mb-1">Project Type</p>
                                        <p className="text-lg font-medium">{formData.projectType || '—'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-400 mb-1">Budget</p>
                                        <p className="text-lg font-medium">{formData.budget || '—'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-400 mb-1">Description</p>
                                        <p className="text-lg font-medium whitespace-pre-wrap">{formData.description || '—'}</p>
                                    </div>
                                </div>
                                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4">
                                    <p className="text-sm text-neutral-200">
                                        <strong>Note:</strong> Clicking "Send" will open your default email client with this information pre-filled.
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between mt-8 gap-4">
                            {step > 1 && (
                                <button
                                    onClick={prevStep}
                                    className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                    style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.2)'
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                                    </svg>
                                    Previous
                                </button>
                            )}

                            {step < 3 ? (
                                <button
                                    onClick={nextStep}
                                    disabled={
                                        (step === 1 && (!formData.name || !formData.email)) ||
                                        (step === 2 && (!formData.projectType || !formData.description))
                                    }
                                    className="ml-auto px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(220,38,38,0.8), rgba(234,88,12,0.8))',
                                        border: '1px solid rgba(220,38,38,0.4)',
                                        boxShadow: '0 4px 20px rgba(220,38,38,0.3)'
                                    }}
                                >
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    className="ml-auto px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(16,185,129,0.8), rgba(5,150,105,0.8))',
                                        border: '1px solid rgba(16,185,129,0.4)',
                                        boxShadow: '0 4px 20px rgba(16,185,129,0.4)'
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                    </svg>
                                    Send
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
