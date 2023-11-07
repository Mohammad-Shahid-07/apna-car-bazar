'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

interface PageProps {
  images: string[];
}

const HeroCarousel = ({ images }: PageProps) => {
  

  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={true}
        showStatus={true}
      >
        {images.map((image) => (
           <div key={image}>
           <div className="w-full h-max-full flex items-center justify-center">
             <Image
               src={image && image}
               alt='car-image'
               
               width={300}
               height={400}
               className="object-contain h-96 w-52"
             />
           </div>
         </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
