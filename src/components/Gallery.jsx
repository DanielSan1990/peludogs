import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Cargar las imágenes desde el servidor
    const fetchImages = async () => {
      const imageModules = import.meta.glob('/public/assets/images/carousel/*.{jpg,png}', { eager: true });
      const imagePaths = Object.keys(imageModules).map((path) => {
        //  Ajustar el path para que sea accesible desde el navegador
        return path.replace('/public', '');
      });
      setImages(imagePaths);
    };

    fetchImages();
  }, []);


  if (!images.length) {
    return <p>Loading images...</p>;
  }


  return (
    <div className="slider-container">
      <Carousel showIndicators={false} showStatus={false} showArrows={false} autoPlay infiniteLoop >
        {images && images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Gallery image ${index + 1}`}  style={{borderRadius: '5px'}}/>
     
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
