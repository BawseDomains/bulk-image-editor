import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

export default function Uploader({ onAdd }) {
  const onDrop = useCallback(
    acceptedFiles => {
      const valid = acceptedFiles.filter(f => /image\/(jpeg|png|webp|bmp|tiff)/.test(f.type));
      if (!valid.length) return toast.error('Unsupported file type.');
      onAdd(prev => [...prev, ...valid.map(file => ({ file, id: crypto.randomUUID() }))]);
    },
    [onAdd]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
    >
      <input {...getInputProps()} />
      <p className="text-lg font-medium">{isDragActive ? 'Drop here' : 'Drag & drop or click to upload'}</p>
      <small>JPG, PNG, WEBP, BMP, TIFF</small>
    </div>
  );
}