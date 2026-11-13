import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Layout, NotFound } from './components/Layout';
import { ServicePage } from './components/ServicePage';

const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })));

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/o-nas"
              element={<About />}
            />
            <Route
              path="/sluzby/:slug"
              element={<ServicePage />}
            />
            {/* 404 */}
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
