import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';

export default function TermsConditions() {
    return (
        <div className="min-h-screen text-white">
            <Header />
            <FloatingActionButtons />

            <div className="pt-24 pb-12 px-6">
                <main className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>

                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl prose prose-invert max-w-none">
                        <p className="lead text-lg text-neutral-300">Last updated: {new Date().toLocaleDateString()}</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">1. Introduction</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">Welcome to Bambi Visuals. By accessing our website and services, you agree to be bound by these Terms and&nbsp;Conditions.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">2. Intellectual Property</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly&nbsp;prohibited.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">3. Services</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">Bambi Visuals provides video production, editing, and creative direction services. Specific terms for projects will be outlined in separate service&nbsp;agreements.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">4. Limitation of Liability</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">In no event will Bambi Visuals be liable for any incidental, indirect, consequential, or special damages of any kind, or any damages whatsoever, including, without limitation, those resulting from loss of profit, loss of contracts, goodwill, data, information, income, anticipated savings, or business&nbsp;relationships.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">5. Governing Law</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">These Terms shall be governed and construed in accordance with the laws of Portugal, without regard to its conflict of law&nbsp;provisions.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">6. Changes to Terms</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole&nbsp;discretion.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">7. Contact Us</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">If you have any questions about these Terms, please contact us at <a href="mailto:info@bambi-productions.com" className="text-orange-400 hover:text-orange-300 transition-colors">info@bambi-productions.com</a>.</p>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
