// loadImages.ts
import { readdir } from 'fs/promises';
import { join } from 'path';

// Define el tipo para la función que carga imágenes
async function loadImages(path: string, folder: string): Promise<string[]> {
  const imagesDirPath: string = join(process.cwd(), path, folder); // Asegúrate de ajustar esta ruta

  try {
    const fileNames: string[] = await readdir(imagesDirPath);
    const imageFiles: string[] = fileNames.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
    return imageFiles;
  } catch (err) {
    console.error('Error loading images:', err);
    return [];
  }
}

export default loadImages;
