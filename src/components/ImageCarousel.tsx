import { useState } from "preact/hooks";

export default function ImageCarousel({ images }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div class="space-y-2">
      <div
        class="relative w-full mx-auto overflow-hidden rounded-lg bg-gray-900"
        style={"height: 20rem"}
      >
        {/* <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} class="w-full h-full object-cover" /> */}
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          class="w-full h-full object-contain"
        />

        <button
          class="absolute top-1/2 left-0 transform -translate-y-1/2 p-2"
          onClick={prevImage}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button
          class="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
          onClick={nextImage}
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div class="flex justify-center space-x-2 mt-4">
        {images.map((_: any, index: number): any => (
          <button
            key={index}
            class={`h-4 w-4 rounded-full ${
              currentIndex === index ? "bg-green-700" : "bg-gray-300"
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
