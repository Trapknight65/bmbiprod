import React, { useState, useEffect } from 'react';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import MultiStepForm from './components/forms/MultiStepForm';
import Discover from './pages/Discover';
import ClientFeedback from './pages/ClientFeedback';
import CookieSettings from './pages/CookieSettings';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';

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
