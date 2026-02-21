import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Layout, NotFound } from './components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
}
