import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Layout, NotFound } from './components/Layout';

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
