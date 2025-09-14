import { Carousel } from '@mantine/carousel';

function CarouselComponent() {
  return (
    <Carousel
      withIndicators
      height={350}
      emblaOptions={{ dragFree: true, align: 'start' }}
      slideGap="md"
    >
      <Carousel.Slide>
        <img
          src="/src/assets/Prisma_logo_white.png"
          alt="Prisma Logo"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Carousel.Slide>
      {/* Puedes agregar más slides con otras imágenes si quieres */}
    </Carousel>
  );
}

export default CarouselComponent;