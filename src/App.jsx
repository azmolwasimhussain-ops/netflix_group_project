import { useState } from 'react';
import './index.css';
import Banner from './components/Banner';

export default function App() {
  return (
    <div className="bg-black min-h-screen font-netflix">
      <Banner />
    </div>
  );
}
