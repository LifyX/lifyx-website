import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col" style={{ position: 'relative' }}>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main className="relative flex-1" style={{ position: 'relative' }}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}