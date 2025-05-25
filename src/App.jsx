import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import MainLayout from '@/components/layout/MainLayout';
import CustomCursor from './components/common/CustomCursor';
import DialogViewer from '@/components/common/DialogViewer';
import PageLoader from '@/components/common/PageLoader';

import Work from '@/pages/Work';
import Contact from '@/pages/Contact';
import Detail from '@/pages/Detail';
import Intro from '@/pages/Intro';

function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);

  // 인트로
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited && location.pathname === '/') {
      setShowIntro(true);
      localStorage.setItem('hasVisited', 'true');

      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location]);

  // 인트로 보여줄 때
  if (showIntro) return <Intro />;

  return (
    <>
      <CustomCursor />
      <DialogViewer />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PageLoader><Work /></PageLoader>} />
            <Route path="work" element={<PageLoader><Work /></PageLoader>} />
            <Route path="detail/:id" element={<PageLoader><Detail /></PageLoader>} />
            <Route path="contact" element={<PageLoader><Contact /></PageLoader>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
