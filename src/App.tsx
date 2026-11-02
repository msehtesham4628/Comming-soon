import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <main className="page">
      <div className="grain" />
      <Header />
      <Hero />
      <Footer />
    </main>
  );
};

export default App;
