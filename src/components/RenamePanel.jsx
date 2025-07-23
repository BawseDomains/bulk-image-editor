import { useState } from 'react';

export default function RenamePanel({ onChange }) {
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [start, setStart] = useState(1);
  onChange({ prefix, suffix, start });
  return (
    <section className="p-4 bg-white dark:bg-slate-800 rounded shadow">
      <h2 className="font-bold mb-2">Bulk Rename</h2>
      <div className="grid grid-cols-3 gap-4">
        <input className="input" placeholder="Prefix" value={prefix} onChange={e => setPrefix(e.target.value)} />
        <input className="input" placeholder="Suffix" value={suffix} onChange={e => setSuffix(e.target.value)} />
        <input className="input" type="number" min="0" value={start} onChange={e => setStart(Number(e.target.value))} />
      </div>
    </section>
  );
}