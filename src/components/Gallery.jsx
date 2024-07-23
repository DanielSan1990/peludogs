import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageModules = import.meta.glob(
        "/public/assets/images/carousel/*.{jpg,png,webp,avif}",
        { eager: true }
      );
      const imagePaths = Object.keys(imageModules).map((path, index) => ({
        original: path.replace("/public", "/peludogs"),
        thumbnail: path.replace("/public", "/peludogs"),
        originalAlt: `Gallery image ${index + 1}`,
        thumbnailAlt: `Thumbnail image ${index + 1}`,
        loading: "lazy"
      }));
      setImages(imagePaths);
    };

    fetchImages();
  }, []);

  if (!images.length) {
    return <p>Loading images...</p>;
  }

  return (
    <div className="slider-container">
      <ImageGallery
        items={images}
        showThumbnails
        thumbnailPosition={"left"}
        showPlayButton={false}
        autoPlay
        lazyLoad={true}  // Habilita lazy loading
      />
    </div>
  );
};

export default Gallery;
