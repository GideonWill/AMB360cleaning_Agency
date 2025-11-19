import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import logoFavicon from './assets/AMB360 CLEANING LOGO.png';

const ensureFavicon = () => {
  const existing = document.querySelector("link[rel='icon']");
  if (existing) {
    existing.setAttribute('href', logoFavicon);
    existing.setAttribute('type', 'image/png');
  } else {
    const link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    link.setAttribute('type', 'image/png');
    link.setAttribute('href', logoFavicon);
    document.head.appendChild(link);
  }
};

ensureFavicon();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
