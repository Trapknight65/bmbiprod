import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import MultiStepForm from './MultiStepForm';
import Discover from './Discover';
import ClientFeedback from './ClientFeedback';
import CookieSettings from './CookieSettings';
import TermsConditions from './TermsConditions';
import PrivacyPolicy from './PrivacyPolicy';

import LoadingScreen from './LoadingScreen';
import Background from './Background';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function onHash() {
      setRoute(window.location.hash || '#/');
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // ---- LOADING SCREEN ----
  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  // ---- ROUTING ----

  if (route.startsWith('#/about')) {
    return (
      <>
        <Background />
        <About />
      </>
    );
  }

  if (route.startsWith('#/contact-form')) {
    return (
      <>
        <Background />
        <MultiStepForm />
      </>
    );
  }

  if (route.startsWith('#/discover')) {
    return (
      <>
        <Background />
        <Discover />
      </>
    );
  }

  if (route.startsWith('#/client-feedback')) {
    return (
      <>
        <Background />
        <ClientFeedback />
      </>
    );
  }

  if (route.startsWith('#/cookie-settings')) {
    return (
      <>
        <Background />
        <CookieSettings />
      </>
    );
  }

  if (route.startsWith('#/terms')) {
    return (
      <>
        <Background />
        <TermsConditions />
      </>
    );
  }

  if (route.startsWith('#/privacy')) {
    return (
      <>
        <Background />
        <PrivacyPolicy />
      </>
    );
  }

  // default to portfolio
  return (
    <>
      <Background />
      <Portfolio />
    </>
  );
}

export default App;
