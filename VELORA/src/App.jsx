import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, matchRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import PageTransition from './components/layout/PageTransition';
import LoadingScreen from './components/common/LoadingScreen';
import ButtonToTop from './components/common/ButtonTotop';
import ServiceDetail from './pages/Servicedetail';

// Lazy-Loaded Route Pages for Optimized Performance & Code-Splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Work = lazy(() => import('./pages/Work'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Process = lazy(() => import('./pages/Process'));
const About = lazy(() => import('./pages/About'));
const LifeAtCompany = lazy(() => import('./pages/LifeAtCompany'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const Team = lazy(() => import('./pages/Team'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Single source of truth: used both to render the routes and to detect unknown URLs.
const pages = [
  { path: '/', Component: Home },
  { path: '/services', Component: Services },
  { path: '/services/:slug', Component: ServiceDetail },
  { path: '/work', Component: Work },
  { path: '/work/:slug', Component: CaseStudy },
  { path: '/process', Component: Process },
  { path: '/about', Component: About },
  { path: '/life-at-company', Component: LifeAtCompany },
  { path: '/careers', Component: Careers },
  { path: '/Team', Component: Team },
  { path: '/contact', Component: Contact },
  { path: '/privacy-policy', Component: PrivacyPolicy },
  { path: '/terms', Component: Terms },
];

export default function App() {
  const location = useLocation();

  // false on any URL that is not in `pages` -> the 404 page is shown on its own
  const isKnownRoute = Boolean(matchRoutes(pages, location));

  return (
    <div className="flex flex-col min-h-screen bg-cream text-nearblack selection:bg-orange selection:text-white">
      <ScrollToTop />
      {isKnownRoute && <ButtonToTop />}
      {isKnownRoute && <Navbar />}

      <div className="flex-grow">
        <Suspense fallback={<LoadingScreen />}>
          <AnimatePresence mode="wait">
            
            <Routes location={location} key={location.pathname}>
              {pages.map(({ path, Component }) => (
                <Route key={path} path={path} element={ <PageTransition> <Component /></PageTransition> }/>
              ))}

              <Route path="*" element={ <PageTransition> <NotFound /> </PageTransition> } />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>

      {isKnownRoute && <Footer />}
    </div>
  );
}