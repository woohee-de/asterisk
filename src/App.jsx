import AppLayout from './components/AppLayout';

import { Routes, Route, Navigate } from 'react-router-dom';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Detail from './pages/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/work" />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
