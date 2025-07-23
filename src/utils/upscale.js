export async function upscale(file, width, height) {
  // Placeholder: just return a 2× upscaled version via canvas
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const scale = 2;
      canvas.width = width ? +width : img.width * scale;
      canvas.height = height ? +height : img.height * scale;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/png'));
    };
    img.src = URL.createObjectURL(file);
  });
}