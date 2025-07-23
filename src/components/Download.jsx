import { saveAs } from 'file-saver';
import JSZip from 'jszip';

export default function Download({ queue }) {
  const done = queue.filter(i => i.status === 'Done');
  if (!done.length) return null;

  const downloadZip = async () => {
    const zip = new JSZip();
    for (const item of done) {
      const blob = await fetch(item.result).then(r => r.blob());
      zip.file(item.file.name, blob);
    }
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'bulk-images.zip');
  };

  return (
    <button onClick={downloadZip} className="btn-primary">
      Download ZIP ({done.length})
    </button>
  );
}