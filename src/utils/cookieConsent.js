document.addEventListener("DOMContentLoaded", () => {
    const consentElement = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');
    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
      consentElement?.classList?.remove('hidden');
    }

    const setCookieConsent = (value) => {
      localStorage.setItem('cookieConsent', value);
      consentElement?.classList?.add('hidden');
    };

    acceptButton?.addEventListener('click', () => setCookieConsent('accepted'));
    rejectButton?.addEventListener('click', () => setCookieConsent('rejected'));
  });