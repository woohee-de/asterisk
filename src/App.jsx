import MainLayout from '@/components/layout/MainLayout';
import CustomCursor from './components/common/CustomCursor';
import DialogViewer from '@/components/common/DialogViewer';

import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Work from '@/pages/Work';
import Contact from '@/pages/Contact';
import Detail from '@/pages/Detail';
import Intro from '@/pages/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited && location.pathname === '/') {
      setShowIntro(true);
      // localStorage.setItem('hasVisited', 'true');

      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location]);

  if (showIntro) {
    return <Intro />;
  }

  return (
    <>
      <CustomCursor />
      <DialogViewer />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Work />} />
          <Route path="work" element={<Work />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
