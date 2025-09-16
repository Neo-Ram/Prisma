import { HeroTitle } from "../components/HeroTitle";
import { HeroBullets } from "../components/HeroBullets";
import CardComponent from "../components/CardComponent";
import styles from "../pages/MainPage.module.css";
import Eye from "../assets/Eye.png";
import Aa from "../assets/Aa.png";
import React from "../assets/React.png";
import WCAG from "../assets/WCAG.png";
function MainPage() {
  return (
    <>
      <HeroTitle />
      <HeroBullets />
      <div className={styles.cards}>
        <CardComponent
          imagelink={Eye}
          alt="Eye"
          title="Color modes"
          description="Support for different types of color blindness with predefined themes."
        />
        <CardComponent
          imagelink={Aa}
          alt="A"
          title="Scalable text"
          description="Adjustable font sizes to improve readability for people with low vision."
        />
        <CardComponent
          imagelink={React}
          alt="React"
          title="Easy integration"
          description="Lightweight components that work out of the box in any React project."
        />
        <CardComponent
          imagelink={WCAG}
          alt="WCAG"
          title="WCAG compliance"
          description="Built following basic accessibility guidelines to improve inclusiveness."
        />
      </div>
      
    </>
  );
}

export default MainPage;