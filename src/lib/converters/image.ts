export type ImageFormat = 'PNG' | 'JPG' | 'WEBP';

export interface ConvertedImage {
  blob: Blob;
  objectUrl: string;
  width: number;
  height: number;
  size: number;
  format: ImageFormat;
}

const MIME: Record<ImageFormat, string> = {
  PNG: 'image/png',
  JPG: 'image/jpeg',
  WEBP: 'image/webp',
};

const EXT: Record<ImageFormat, string> = {
  PNG: 'png',
  JPG: 'jpg',
  WEBP: 'webp',
};

export const IMAGE_FORMATS: ImageFormat[] = ['PNG', 'JPG', 'WEBP'];

export function imageMime(format: ImageFormat): string {
  return MIME[format];
}

export function imageExt(format: ImageFormat): string {
  return EXT[format];
}

export function isSupportedImageFile(file: File): boolean {
  return file.type.startsWith('image/') || /\.(jpe?g|png|webp|gif|bmp|svg|avif|ico)$/i.test(file.name);
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Could not read this image. It may be corrupted or in an unsupported format.'));
    img.decoding = 'async';
    img.src = src;
  });
}

async function loadImageBitmap(file: File): Promise<ImageBitmap | null> {
  try {
    return await createImageBitmap(file);
  } catch {
    return null;
  }
}

export async function convertImage(
  file: File,
  target: ImageFormat,
  quality = 0.85,
): Promise<ConvertedImage> {
  if (!isSupportedImageFile(file)) {
    throw new Error('Unsupported file type. Please upload a PNG, JPG, WebP, GIF, BMP, SVG, AVIF, or ICO image.');
  }

  let width: number;
  let height: number;
  let canvas: HTMLCanvasElement;
  let source: ImageBitmap | null = null;

  if ('createImageBitmap' in window) {
    source = await loadImageBitmap(file);
  }

  if (source) {
    width = source.width;
    height = source.height;
    canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas is not supported in this browser.');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(source, 0, 0, width, height);
    source.close();
  } else {
    const url = URL.createObjectURL(file);
    try {
      const image = await loadImage(url);
      width = image.naturalWidth;
      height = image.naturalHeight;
      canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas is not supported in this browser.');
      ctx.drawImage(image, 0, 0, width, height);
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  return encodeCanvas(canvas, target, quality);
}

function encodeCanvas(canvas: HTMLCanvasElement, format: ImageFormat, quality: number): Promise<ConvertedImage> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error(`Could not encode your image as ${format}.`));
          return;
        }
        resolve({
          blob,
          objectUrl: URL.createObjectURL(blob),
          width: canvas.width,
          height: canvas.height,
          size: blob.size,
          format,
        });
      },
      MIME[format],
      quality,
    );
  });
}