import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { ProcessPage } from './pages/ProcessPage';
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage';
import { TermsPage } from './pages/legal/TermsPage';
import { CookiePolicyPage } from './pages/legal/CookiePolicyPage';
import { DataProtectionPage } from './pages/legal/DataProtectionPage';
import { AcceptableUsePage } from './pages/legal/AcceptableUsePage';
import { DisclaimerPage } from './pages/legal/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ComingSoonPage } from './pages/ComingSoonPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'services', Component: ServicesPage },
      { path: 'portfolio', Component: PortfolioPage },
      { path: 'portfolio/coming-soon', Component: ComingSoonPage },
      { path: 'contact', Component: ContactPage },
      { path: 'faq', Component: FAQPage },
      { path: 'process', Component: ProcessPage },
      { path: 'privacy', Component: PrivacyPolicyPage },
      { path: 'terms', Component: TermsPage },
      { path: 'cookies', Component: CookiePolicyPage },
      { path: 'data-protection', Component: DataProtectionPage },
      { path: 'acceptable-use', Component: AcceptableUsePage },
      { path: 'disclaimer', Component: DisclaimerPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);