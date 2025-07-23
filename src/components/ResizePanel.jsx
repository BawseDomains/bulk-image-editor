import { useState } from 'react';

export default function ResizePanel({ onChange }) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [lock, setLock] = useState(true);
  onChange({ width, height, lock });
  return (
    <section className="p-4 bg-white dark:bg-slate-800 rounded shadow">
      <h2 className="font-bold mb-2">Custom Resize (px)</h2>
      <div className="flex gap-2 items-center">
        <input className="input w-24" type="number" placeholder="Width" value={width} onChange={e => setWidth(e.target.value)} />
        <span>×</span>
        <input className="input w-24" type="number" placeholder="Height" value={height} onChange={e => setHeight(e.target.value)} />
        <label className="flex items-center gap-1 text-sm">
          <input type="checkbox" checked={lock} onChange={e => setLock(e.target.checked)} />
          Lock ratio
        </label>
      </div>
    </section>
  );
}