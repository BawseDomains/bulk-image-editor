import { useEffect } from 'react';
import { upscale } from '../utils/upscale';
import toast from 'react-hot-toast';

export default function Queue({ images, settings, queue, setQueue }) {
  useEffect(() => {
    images.forEach(async img => {
      if (queue.find(q => q.id === img.id)) return;

      const item = { id: img.id, file: img.file, status: 'Pending', result: null };
      setQueue(q => [...q, item]);

      try {
        setQueue(q => q.map(i => (i.id === img.id ? { ...i, status: 'Processing' } : i)));
        const url = await upscale(img.file, settings.resize?.width, settings.resize?.height);
        setQueue(q => q.map(i => (i.id === img.id ? { ...i, status: 'Done', result: url } : i)));
      } catch {
        toast.error('Upscale failed');
        setQueue(q => q.map(i => (i.id === img.id ? { ...i, status: 'Failed' } : i)));
      }
    });
  }, [images, settings, queue, setQueue]);

  const pending = queue.filter(i => i.status !== 'Done').length;
  return (
    <section className="p-4 bg-white dark:bg-slate-800 rounded shadow">
      <h2 className="font-bold mb-2">Queue ({pending})</h2>
      <ul className="text-sm space-y-1">
        {queue.map(i => (
          <li key={i.id} className="flex justify-between">
            <span>{i.file.name}</span>
            <span className="font-medium">{i.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}