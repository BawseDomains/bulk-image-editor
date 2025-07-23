import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Uploader from './components/Uploader';
import RenamePanel from './components/RenamePanel';
import ResizePanel from './components/ResizePanel.jsx';
import Queue from './components/Queue';
import Gallery from './components/Gallery';
import Download from './components/Download';
import useDarkMode from './hooks/useDarkMode';

export default function App() {
  const [images, setImages] = useState([]);
  const [queue, setQueue] = useState([]);
  const [settings, setSettings] = useState({});

  useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200">
      <header className="bg-white dark:bg-slate-800 shadow px-4 py-4">
        <h1 className="text-2xl font-bold">Bulk Image Editor Pro</h1>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        <Uploader onAdd={setImages} />
        {images.length > 0 && (
          <>
            <RenamePanel onChange={s => setSettings(p => ({ ...p, rename: s }))} />
            <ResizePanel onChange={s => setSettings(p => ({ ...p, resize: s }))} />
            <Queue images={images} settings={settings} queue={queue} setQueue={setQueue} />
            <Gallery queue={queue} />
            <Download queue={queue} />
          </>
        )}
      </main>

      <Toaster position="bottom-right" />
    </div>
  );
}