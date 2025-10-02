import { Carousel } from '@mantine/carousel';
import CardComponent from '../CardComponent/CardComponent';
import Eye from '../../assets/Eye.png';
import Aa from '../../assets/Aa.png';
import ReactLogo from '../../assets/React.png';
import WCAG from '../../assets/WCAG.png';

function CarouselComponent() {
  return (
    <Carousel
      withIndicators
      height={320}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'xs', md: 'xs' }} 
      emblaOptions={{ loop: true, align: 'center' }}
    >
      <Carousel.Slide>
        <CardComponent
          imagelink={Eye}
          alt="Eye"
          title="Color modes"
          description="Support for different types of color blindness with predefined themes."
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <CardComponent
          imagelink={Aa}
          alt="A"
          title="Scalable text"
          description="Adjustable font sizes to improve readability for people with low vision."
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <CardComponent
          imagelink={ReactLogo}
          alt="React"
          title="Easy integration"
          description="Lightweight components that work out of the box in any React project."
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <CardComponent
          imagelink={WCAG}
          alt="WCAG"
          title="WCAG compliance"
          description="Built following basic accessibility guidelines to improve inclusiveness."
        />
      </Carousel.Slide>
    </Carousel>
  );
}

export default CarouselComponent;