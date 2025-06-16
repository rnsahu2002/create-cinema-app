// src/serviceWorker.js
const isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname === '127.0.0.1');

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      if (isLocalhost) {
        // Check for service worker on localhost
        fetch(swUrl).then((response) => {
          if (response.status === 404) {
            console.log('Service worker not found.');
          } else {
            navigator.serviceWorker.register(swUrl).then((registration) => {
              console.log('Service worker registered:', registration);
            });
          }
        });
      } else {
        navigator.serviceWorker.register(swUrl).then((registration) => {
          console.log('Service worker registered:', registration);
        });
      }
    });
  }
};

export default registerServiceWorker;
