import React, { Suspense } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Layout, NotFound } from './components/Layout';

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Layout>
          {/* Mirrors the <Suspense> boundary App.jsx wraps <Routes> in for the
              lazy-loaded About route — the client tree shape must match this
              one for hydration to succeed, even though nothing suspends here. */}
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/o-nas" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </StaticRouter>
    </HelmetProvider>
  );
  return { html, helmet: helmetContext.helmet };
}
