import { HeroTitle } from "../components/HeroTitle/HeroTitle";
import { HeroBullets } from "../components/HeroBullets/HeroBullets";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import styles from './PrincipalPage.module.css';
import example from '../assets/example.png';
import AboutCard from "../components/AboutCard/AboutCard";
import  FooterLinks  from "../components/FooterLinks/FooterLinks";
function PrincipalPage() {
  return (
    <>
      <HeroTitle />
      <HeroBullets />
      <div className={styles.cardsdiv}>
      <CarouselComponent />
      </div>
      <div className={styles.examplediv}>
        <div>
          <h1 className={styles.texth1}>Example</h1>
          <pre className={styles.codeblock}>
            <code>
{`import { PrismaProvider } from '@prisma/client';

function Demo() {
  return (
    <PrismaProvider defaultColorScheme="dark">
      <App />
    </PrismaProvider>
  );
}`}
            </code>
          </pre>
        </div>
        <img src={example} alt="" />
      </div>
      <div className={styles.howtousediv}>
        <h1>How start to use</h1>
        <pre className={styles.codeblock}>
          <code>
            npm install @
            <span className={styles.gradientText}>prisma</span>
            /client
          </code>
        </pre>
      </div>
      <AboutCard />
      <FooterLinks />
    </>
  );
}


export default PrincipalPage;