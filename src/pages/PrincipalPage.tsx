import { HeroTitle } from "../components/HeroTitle/HeroTitle";
import { HeroBullets } from "../components/HeroBullets/HeroBullets";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import styles from './PrincipalPage.module.css';

import AboutCard from "../components/AboutCard/AboutCard";
import  FooterLinks  from "../components/FooterLinks/FooterLinks";
import { Button } from "neo-ram-prisma";

interface PrincipalPageProps {
  onNavigate: (page: string) => void;
}

function PrincipalPage({ onNavigate }: PrincipalPageProps) {
  return (
    <>
      <HeroTitle onNavigate={onNavigate} />
      <HeroBullets onNavigate={onNavigate} />
      <div className={styles.cardsdiv}>
      <CarouselComponent />
      </div>
      <div className={styles.examplediv}>
        <div>
          <h1 className={styles.texth1}>Example</h1>
          <pre className={styles.codeblock}>
            <code>
{`import { Button } from 'neo-ram-prisma';

// Accessible for colorblind users
<Button 
  variant="danger" 
  colorVision="protanopia"
  accessibility="low-vision"
>
  Hello World!
</Button>
`}
            </code>
          </pre>
        </div>
        <Button variant="danger" colorVision="protanopia" accessibility="low-vision">Hello World!</Button>
        
      </div>
      <div className={styles.howtousediv}>
        <h1>How start to use</h1>
        <pre className={styles.codeblock}>
          <code>
            npm install 
            <span className={styles.gradientText}>neo-ram-prisma</span>
            
          </code>
        </pre>
      </div>
      <AboutCard />
      <FooterLinks />
    </>
  );
}

export default PrincipalPage;