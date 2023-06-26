import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ImageGalleryProvider } from 'providers/ImageGalleryProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageGalleryProvider>
      <App />
    </ImageGalleryProvider>
  </React.StrictMode>
);
