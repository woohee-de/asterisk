import MainLayout from '@/components/layout/MainLayout';
import CustomCursor from './components/common/CustomCursor';
import DialogViewer from '@/components/common/DialogViewer';

import { Routes, Route } from 'react-router-dom';
import Work from '@/pages/Work';
import Contact from '@/pages/Contact';
import Detail from '@/pages/Detail';

function App() {
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
