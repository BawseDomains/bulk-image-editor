import CompareImage from 'react-compare-image';

export default function Gallery({ queue }) {
  const done = queue.filter(i => i.status === 'Done');
  if (!done.length) return null;

  return (
    <section className="p-4 bg-white dark:bg-slate-800 rounded shadow">
      <h2 className="font-bold mb-2">Before / After</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {done.map(item => (
          <div key={item.id} className="border rounded overflow-hidden">
            <CompareImage leftImage={URL.createObjectURL(item.file)} rightImage={item.result} sliderPosition={0.5} />
          </div>
        ))}
      </div>
    </section>
  );
}