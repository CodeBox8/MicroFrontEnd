import React, { Suspense } from "react";

// Lazy load remote components
const Header = React.lazy(() => import("header/Header"));
const Container = React.lazy(() => import("container/Container"));
const Footer = React.lazy(() => import("footer/Footer"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading Content...</div>}>
        <Container />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
