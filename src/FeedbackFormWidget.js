import React, { useState } from 'react';

export default function FeedbackFormWidget({ compact = false }) {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        rating: 5,
        feedback: '',
        permission: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New Client Feedback from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Role: ${formData.role}\n` +
            `Rating: ${formData.rating}/5 Stars\n` +
            `Permission to Publish: ${formData.permission ? 'Yes' : 'No'}\n\n` +
            `Feedback:\n${formData.feedback}`
        );
        window.location.href = `mailto:info@bambi-productions.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="w-full h-full flex flex-col">
            {/* Header - Hidden if compact is true */}
            {!compact && (
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">Share Your Experience</h2>
                    <p className="text-neutral-300 text-sm">We value your feedback</p>
                </div>
            )}

            <div
                className={`rounded-2xl p-6 md:p-8 backdrop-blur-lg transition-all duration-500 flex-1 overflow-y-auto ${compact ? 'bg-transparent shadow-none border-0 p-0' : ''}`}
                style={!compact ? {
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                } : {}}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium mb-2 text-neutral-200">
                                Role / Company
                            </label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                placeholder="Director at Studio X"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-neutral-200">
                            Rating
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => handleRatingChange(star)}
                                    className="focus:outline-none transition-transform hover:scale-110"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className={`w-8 h-8 ${star <= formData.rating ? 'text-orange-400' : 'text-neutral-600'}`}
                                    >
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="feedback" className="block text-sm font-medium mb-2 text-neutral-200">
                            Your Feedback *
                        </label>
                        <textarea
                            id="feedback"
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                            placeholder="Tell us about your experience working with us..."
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="permission"
                            name="permission"
                            checked={formData.permission}
                            onChange={handleChange}
                            className="w-5 h-5 rounded border-white/20 bg-black/30 text-orange-500 focus:ring-orange-500 focus:ring-offset-0"
                        />
                        <label htmlFor="permission" className="text-sm text-neutral-300">
                            I give permission to publish this testimonial on the website.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        style={{
                            background: 'linear-gradient(135deg, rgba(220,38,38,0.8), rgba(234,88,12,0.8))',
                            border: '1px solid rgba(220,38,38,0.4)',
                            boxShadow: '0 4px 20px rgba(220,38,38,0.3)'
                        }}
                    >
                        Submit Feedback
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}
