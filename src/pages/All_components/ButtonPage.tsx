import styles from './Styles.module.css'
import { Button } from 'neo-ram-prisma';
import { useState } from 'react';

const ButtonPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  const codeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary'>Secondary</Button>
  );
}`;

  const loadingCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary' isLoading>Loading</Button>
  );
}`;

  const disabledCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary' disabled>Disabled</Button>
  );
}`;

  const sizeCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary' size='lg'>Large Button</Button>
  );
}`;

  const typographyCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary' fontSize='fs-lg'>Large Text</Button>
  );
}`;

  const protanopiaCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary' colorVision='protanopia'>Protanopia</Button>
  );
}`;

  const deuteranopiaCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary' colorVision='deuteranopia'>Deuteranopia</Button>
  );
}`;

  const tritanopiaCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary' colorVision='tritanopia'>Tritanopia</Button>
  );
}`;

  const lowVisionCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary' accessibility='low-vision'>Low Vision</Button>
  );
}`;

  const highContrastCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Button variant='secondary' accessibility='high-contrast'>High Contrast</Button>
  );
}`;

  const customColorsCodeString = `import { Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const customButtonColors = {
    // Normal vision
    defaultColor: '#FFFFFF',
    defaultColorHover: '#E0E0E0',
    defaultColorActive: '#C0C0C0',
    
    // Protanopia (Red-blind)
    protanopiaColor: '#FFAA33',
    protanopiaColorHover: '#FF6600',
    protanopiaColorActive: '#CC4400',
    
    // Deuteranopia (Green-blind)
    deuteranopiaColor: '#00AA00',
    deuteranopiaColorHover: '#008800',
    deuteranopiaColorActive: '#005500',
    
    // Tritanopia (Blue-blind)
    tritanopiaColor: '#FF00FF',
    tritanopiaColorHover: '#DD00DD',
    tritanopiaColorActive: '#BB00BB',
    
    textColor: '#FFFFFF'
  };

  return (
    <Button 
      variant='custom'
      colorVision='protanopia'
      size='lg'
      customColors={customButtonColors}
    >
      Botón Personalizado
    </Button>
  );
}`;

  const copyToClipboard = (code: string, buttonId: string) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedButton(buttonId);
        setTimeout(() => setCopiedButton(null), 2000);
      })
      .catch(err => {
        console.error('Error al copiar:', err);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Button</h1>
        <h3>Interactive button component with comprehensive accessibility support</h3>
        <p>A versatile button component designed to trigger user actions with built-in accessibility features and WCAG compliance. 
          Supports multiple variants, states, and customization options to meet diverse design requirements.</p>
        
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>Props</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>type</span> <span className={styles.component}>Variant</span> <span className={styles.operator}>=</span> <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'custom'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>ColorVision</span> <span className={styles.operator}>=</span> <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>AccessibilityMode</span> <span className={styles.operator}>=</span> <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>Size</span> <span className={styles.operator}>=</span> <span className={styles.string}>'xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'xl'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>FontSize</span> <span className={styles.operator}>=</span> <span className={styles.string}>'fs-xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-xl'</span>
            </code>
          </div>
        </div>
        <h3>Button variants</h3>
        <p>The button component supports different variants such as primary, secondary, success, warning, and danger.</p>
        <div className={styles.centered}>
        <Button>Click Me</Button>
        <Button variant='secondary'> Secondary</Button>
        <Button variant='success'> Success</Button>
        <Button variant='warning'> Warning</Button>
        <Button variant='danger'> Danger</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>Demo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(codeString, 'main')}>
              {copiedButton === 'main' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span>&gt;Secondary&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Loading State</h3>
        <p>Display loading indicators to provide visual feedback during asynchronous operations. The button becomes non-interactive while in loading state.</p>
        <div className={styles.centered}>
          <Button isLoading>Loading</Button>
          <Button variant='secondary'isLoading>Loading</Button>
          <Button variant='success'isLoading>Loading</Button>
          <Button variant='warning'isLoading>Loading</Button>
          <Button variant='danger'isLoading>Loading</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>LoadingDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(loadingCodeString, 'loading')}>
              {copiedButton === 'loading' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>isLoading</span>&gt;Loading&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Disabled State</h3>
        <p>Disabled buttons prevent user interaction and provide visual indication when actions are temporarily unavailable or not permitted.</p>
        <div className={styles.centered}>
          <Button disabled>Disabled</Button>
          <Button variant='secondary' disabled>Disabled</Button>
          <Button variant='success' disabled>Disabled</Button>
          <Button variant='warning' disabled>Disabled</Button>
          <Button variant='danger' disabled>Disabled</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>DisabledDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(disabledCodeString, 'disabled')}>
              {copiedButton === 'disabled' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>disabled</span>&gt;Disabled&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Size Variants</h3>
        <p>Choose from multiple size options to maintain visual hierarchy and adapt to different layout contexts and touch targets.</p>
        <div className={styles.centered}>
          <Button size='xs'>Very small</Button>
          <Button variant='secondary' size='sm'>Small</Button>
          <Button variant='success' size='md'>Medium</Button>
          <Button variant='warning' size='lg'>Large</Button>
          <Button variant='danger' size='xl'>X-Large</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>SizeDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(sizeCodeString, 'size')}>
              {copiedButton === 'size' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span>&gt;Large Button&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Typography Scale</h3>
        <p>Adjust text size independently from button dimensions to optimize readability and maintain consistent typography across your interface.</p>
        <div className={styles.centered}>
          <Button variant='primary' fontSize='fs-xs'>Very small</Button>
          <Button variant='secondary' fontSize='fs-sm'>Small</Button>
          <Button variant='success' fontSize='fs-md'>Medium</Button>
          <Button variant='warning' fontSize='fs-lg'>Large</Button>
          <Button variant='danger' fontSize='fs-xl'>X-Large</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>TypographyDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(typographyCodeString, 'typography')}>
              {copiedButton === 'typography' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>fontSize</span><span className={styles.operator}>=</span><span className={styles.string}>'fs-lg'</span>&gt;Large Text&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Color Vision Accessibility</h3>
        <p>Specialized color palettes designed for users with different types of color vision deficiencies, ensuring optimal contrast and usability.</p>
        <h3>Protanopia Support</h3>
        <p>Optimized color scheme for users with red-green color blindness (protanopia), enhancing distinction between interactive elements.</p>
        <div className={styles.centered}>
          <Button variant='primary' colorVision='protanopia'>Primary</Button>
          <Button variant='secondary' colorVision='protanopia'>Secondary</Button>
          <Button variant='success' colorVision='protanopia'>Success</Button>
          <Button variant='warning' colorVision='protanopia'>Warning</Button>
          <Button variant='danger' colorVision='protanopia'>Danger</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>ProtanopiaDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(protanopiaCodeString, 'protanopia')}>
              {copiedButton === 'protanopia' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span>&gt;Protanopia&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Button variant='primary' colorVision='deuteranopia'>Primary</Button>
          <Button variant='secondary' colorVision='deuteranopia'>Secondary</Button>
          <Button variant='success' colorVision='deuteranopia'>Success</Button>
          <Button variant='warning' colorVision='deuteranopia'>Warning</Button>
          <Button variant='danger' colorVision='deuteranopia'>Danger</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>DeuteranopiaDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(deuteranopiaCodeString, 'deuteranopia')}>
              {copiedButton === 'deuteranopia' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span>&gt;Deuteranopia&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation.</p>
        <div className={styles.centered}>
          <Button variant='primary' colorVision='tritanopia'>Primary</Button>
          <Button variant='secondary' colorVision='tritanopia'>Secondary</Button>
          <Button variant='success' colorVision='tritanopia'>Success</Button>
          <Button variant='warning' colorVision='tritanopia'>Warning</Button>
          <Button variant='danger' colorVision='tritanopia'>Danger</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>TritanopiaDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(tritanopiaCodeString, 'tritanopia')}>
              {copiedButton === 'tritanopia' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span>&gt;Tritanopia&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Button variant='primary' accessibility='low-vision'>Primary</Button>
          <Button variant='secondary' accessibility='low-vision'>Secondary</Button>
          <Button variant='success' accessibility='low-vision'>Success</Button>
          <Button variant='warning' accessibility='low-vision'>Warning</Button>
          <Button variant='danger' accessibility='low-vision'>Danger</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>LowVisionDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(lowVisionCodeString, 'low-vision')}>
              {copiedButton === 'low-vision' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span>&gt;Low Vision&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
      <h3>High Contrast Mode</h3>
      <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity.</p>
      <div className={styles.centered}>
          <Button variant='primary' accessibility='high-contrast'>Primary</Button>
          <Button variant='secondary' accessibility='high-contrast'>Secondary</Button>
          <Button variant='success' accessibility='high-contrast'>Success</Button>
          <Button variant='warning' accessibility='high-contrast'>Warning</Button>
          <Button variant='danger' accessibility='high-contrast'>Danger</Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>HighContrastDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(highContrastCodeString, 'high-contrast')}>
              {copiedButton === 'high-contrast' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span>&gt;High Contrast&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        
        <h3>Custom Colors</h3>
        <p>Complete customization of button colors across all color vision modes with customizable text and background colors for each vision type.</p>
        
        <h3>Custom Colors Interface</h3>
        <p>The <code>customColors</code> property allows you to define custom colors for all color vision accessibility modes:</p>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>CustomButtonColors Interface</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>CustomButtonColors</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Button color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColorHover</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Hover color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColorActive</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Active/pressed color</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors (Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColorHover</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColorActive</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors (Most Common Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColorHover</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColorActive</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors (Blue-Yellow Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColorHover</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColorActive</span>: <span className={styles.keyword}>string</span>;<br/><br/>
              
              &nbsp;&nbsp;<span className={styles.comment}>// Text color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>textColor</span>: <span className={styles.keyword}>string</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Custom Colors Example</h3>
        <p>Define a custom color palette to create buttons with completely custom styling across all accessibility modes:</p>
        <div className={styles.centered}>
          <Button 
            variant='custom'
            colorVision='normal'
            customColors={{
              defaultColor: '#FF5733',
              defaultColorHover: '#C41E3A',
              defaultColorActive: '#8B0000',
              protanopiaColor: '#FFAA33',
              protanopiaColorHover: '#FF6600',
              protanopiaColorActive: '#CC4400',
              deuteranopiaColor: '#00AA00',
              deuteranopiaColorHover: '#008800',
              deuteranopiaColorActive: '#005500',
              tritanopiaColor: '#FF00FF',
              tritanopiaColorHover: '#DD00DD',
              tritanopiaColorActive: '#BB00BB',
              textColor: '#FFFFFF'
            }}
          >
            Custom Orange Button
          </Button>
        </div>
        <div className={styles.centered}>
          <Button 
            variant='custom'
            colorVision='protanopia'
            customColors={{
              defaultColor: '#FFAA33',
              defaultColorHover: '#FF6600',
              defaultColorActive: '#CC4400',
              protanopiaColor: '#FFAA33',
              protanopiaColorHover: '#FF6600',
              protanopiaColorActive: '#CC4400',
              deuteranopiaColor: '#00AA00',
              deuteranopiaColorHover: '#008800',
              deuteranopiaColorActive: '#005500',
              tritanopiaColor: '#0000FF',
              tritanopiaColorHover: '#0000CC',
              tritanopiaColorActive: '#000099',
              textColor: '#FFFFFF'
            }}
          >
            Custom Yellow Button
          </Button>
        </div>
        <div className={styles.centered}>
          <Button 
            variant='custom'
            colorVision='deuteranopia'
            customColors={{
              defaultColor: '#FF5733',
              defaultColorHover: '#C41E3A',
              defaultColorActive: '#8B0000',
              protanopiaColor: '#FFAA33',
              protanopiaColorHover: '#FF6600',
              protanopiaColorActive: '#CC4400',
              deuteranopiaColor: '#00AA00',
              deuteranopiaColorHover: '#008800',
              deuteranopiaColorActive: '#005500',
              tritanopiaColor: '#FF00FF',
              tritanopiaColorHover: '#DD00DD',
              tritanopiaColorActive: '#BB00BB',
              textColor: '#FFFFFF'
            }}
          >
            Custom Green Button
          </Button>
        </div>
        <div className={styles.centered}>
          <Button 
            variant='custom'
            colorVision='tritanopia'
            customColors={{
              defaultColor: '#FF5733',
              defaultColorHover: '#C41E3A',
              defaultColorActive: '#8B0000',
              protanopiaColor: '#FFAA33',
              protanopiaColorHover: '#FF6600',
              protanopiaColorActive: '#CC4400',
              deuteranopiaColor: '#00AA00',
              deuteranopiaColorHover: '#008800',
              deuteranopiaColorActive: '#005500',
              tritanopiaColor: '#FF00FF',
              tritanopiaColorHover: '#DD00DD',
              tritanopiaColorActive: '#BB00BB',
              textColor: '#FFFFFF'
            }}
          >
            Custom Purple Button
          </Button>
        </div>
        <div className={styles.centered}>
          <Button 
            variant='custom'
            size='lg'
            colorVision='normal'
            customColors={{
              defaultColor: '#003366',
              defaultColorHover: '#004080',
              defaultColorActive: '#002244',
              protanopiaColor: '#336699',
              protanopiaColorHover: '#4477BB',
              protanopiaColorActive: '#224466',
              deuteranopiaColor: '#0066CC',
              deuteranopiaColorHover: '#0052A3',
              deuteranopiaColorActive: '#003D7A',
              tritanopiaColor: '#0099FF',
              tritanopiaColorHover: '#0077CC',
              tritanopiaColorActive: '#005599',
              textColor: '#FFFFFF'
            }}
          >
            Custom Blue Button
          </Button>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>CustomColorsDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(customColorsCodeString, 'customColors')}>
              {copiedButton === 'customColors' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Button</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>customButtonColors</span> <span className={styles.operator}>=</span> &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Normal vision</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.string}>'#ffffff'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBg</span>: <span className={styles.string}>'#007bff'</span>,<br/><br/>

              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Protanopia (Red-blind)</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.string}>'#ffffff'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBg</span>: <span className={styles.string}>'#3399ff'</span>,<br/><br/>

              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia (Green-blind)</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.string}>'#ffffff'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBg</span>: <span className={styles.string}>'#4f83cc'</span>,<br/><br/>

              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Tritanopia (Blue-blind)</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.string}>'#000000'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBg</span>: <span className={styles.string}>'#ffcc00'</span><br/>
              &nbsp;&nbsp;&#125;;<br/><br/>

              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'custom'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'normal'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>customColors</span><span className={styles.operator}>=</span>&#123;customButtonColors&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fully Customizable Button<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        </div>
      

    </>
  );
};

export default ButtonPage;
