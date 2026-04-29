import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import '@/assets/scss/index.scss';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/asterisk">
    <div className="app">
      <App />
    </div>
  </BrowserRouter>,
);
