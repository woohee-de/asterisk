import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DialogViewer from '@/components/common/DialogViewer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <DialogViewer />
    </>
  );
}

export default MainLayout;
