import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen text-white">
            <Header />
            <FloatingActionButtons />

            <div className="pt-24 pb-12 px-6">
                <main className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl prose prose-invert max-w-none">
                        <p className="lead text-lg text-neutral-300">Last updated: {new Date().toLocaleDateString()}</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We&nbsp;Collect</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and project&nbsp;details.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">2. How We Use Your&nbsp;Information</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information including invoices and technical&nbsp;notices.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">3. Cookies</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">We use cookies to improve your experience on our site. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our&nbsp;Service.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">4. Data Security</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute&nbsp;security.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">5. Third-Party Services</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is&nbsp;used.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">6. Changes to This Privacy&nbsp;Policy</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this&nbsp;page.</p>

                        <h3 className="text-2xl font-bold text-white mt-12 mb-4">7. Contact Us</h3>
                        <p className="text-lg leading-relaxed text-balance text-neutral-300">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@bambi-productions.com" className="text-orange-400 hover:text-orange-300 transition-colors">info@bambi-productions.com</a>.</p>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
