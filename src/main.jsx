import React from 'react';
import './index.scss';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(<App />);
}
