import React, { Suspense, lazy } from "react";

// Lazy load remote components
const Header = lazy(() => import('header/Header'));
const Container = lazy(() => import("container/Container"));
const Footer = lazy(() => import("footer/Footer"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />  
        <Container />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
