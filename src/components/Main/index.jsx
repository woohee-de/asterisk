import MainContent from './MainContent';
import MainSidebar from './MainSidebar';

function Main() {
  return (
    <main className="main">
      <div className="main__layout">
        <MainSidebar />
        <MainContent />
      </div>
    </main>
  );
}

export default Main;
