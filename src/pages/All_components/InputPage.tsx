import styles from './Styles.module.css'
import { Input } from 'neo-ram-prisma';
import { useState } from 'react';

const InputPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  const codeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input variant='secondary' placeholder="Enter your text"></Input>
  );
}`;

  const disabledCodeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input variant='secondary' disabled placeholder="Disabled input"></Input>
  );
}`;

  const sizeCodeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input variant='secondary' inputSize='lg' placeholder="Large input"></Input>
  );
}`;

  const typographyCodeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input variant='secondary' fontSize='fs-lg' placeholder="Large text"></Input>
  );
}`;

  const protanopiaCodeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input variant='secondary' colorVision='protanopia' placeholder="Protanopia support"></Input>
  );
}`;

  const deuteranopiaCodeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input variant='secondary' colorVision='deuteranopia' placeholder="Deuteranopia support"></Input>
  );
}`;

  const tritanopiaCodeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input variant='secondary' colorVision='tritanopia' placeholder="Tritanopia support"></Input>
  );
}`;

  const lowVisionCodeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input variant='secondary' accessibility='low-vision' placeholder="Low vision support"></Input>
  );
}`;

  const highContrastCodeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input variant='secondary' accessibility='high-contrast' placeholder="High contrast"></Input>
  );
}`;

  const customColorsCodeString = `import { Input } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Input
      variant='custom'
      type='email'
      colorVision='deuteranopia'
      placeholder='Email'
      customColors={{
        // Normal vision
        defaultBorder: '#007BFF',
        defaultBorderFocus: '#0056B3',
        defaultColor: '#222222',
        defaultBg: '#FFFFFF',
        // Protanopia
        protanopiaBorder: '#3399FF',
        protanopiaBorderFocus: '#2673B6',
        protanopiaColor: '#222222',
        protanopiaBg: '#FFFFFF',
        // Deuteranopia
        deuteranopiaBorder: '#4F83CC',
        deuteranopiaBorderFocus: '#3A5C99',
        deuteranopiaColor: '#222222',
        deuteranopiaBg: '#FFFFFF',
        // Tritanopia
        tritanopiaBorder: '#D946EF',
        tritanopiaBorderFocus: '#BE185D',
        tritanopiaColor: '#222222',
        tritanopiaBg: '#FFFFFF'
      }}
    />
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
        <h1>Input</h1>
        <h3>Interactive input component with comprehensive accessibility support</h3>
        <p>A versatile Input component designed for form inputs with built-in accessibility features and WCAG compliance. 
          Supports multiple variants, input types, states, and customization options to meet diverse design requirements.</p>
        
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>Props</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>Variant</span> <span className={styles.operator}>=</span> <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'custom'</span>;<br/>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>ColorVision</span> <span className={styles.operator}>=</span> <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span>;<br/>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>AccessibilityMode</span> <span className={styles.operator}>=</span> <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span>;<br/>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>InputSize</span> <span className={styles.operator}>=</span> <span className={styles.string}>'xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'xl'</span>;<br/>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>FontSize</span> <span className={styles.operator}>=</span> <span className={styles.string}>'fs-xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-xl'</span>;
            </code>
          </div>
        </div>

        <div className={styles.centered}>
        <Input placeholder="Enter your name"></Input>
        <Input variant='secondary' type="email" placeholder="your.email@example.com"></Input>
        <Input variant='success' type="number" placeholder="Enter a number"></Input>
        <Input variant='warning' type="text" placeholder="Warning state"></Input>
        <Input variant='danger' type="password" placeholder="Enter password"></Input>
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Enter your text"</span>&gt;&lt;/<span className={styles.component}>Input</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Disabled State</h3>
        <p>Disabled inputs prevent user interaction and provide visual indication when fields are temporarily unavailable or not permitted.</p>
        <div className={styles.centered}>
          <Input disabled placeholder="Disabled text input"></Input>
          <Input variant='secondary' disabled type="email" placeholder="Disabled email input"></Input>
          <Input variant='success' disabled type="number" placeholder="Disabled number input"></Input>
          <Input variant='warning' disabled type="text" placeholder="Disabled warning input"></Input>
          <Input variant='danger' disabled type="password" placeholder="Disabled password input"></Input>
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>disabled</span> <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Disabled input"</span>&gt;&lt;/<span className={styles.component}>Input</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Size Variants</h3>
        <p>Choose from multiple size options to maintain visual hierarchy and adapt to different layout contexts and touch targets.</p>
        <div className={styles.centered}>
          <Input inputSize='xs' type="text" placeholder="Extra small input"></Input>
          <Input variant='secondary' inputSize='sm' type="email" placeholder="small.input@example.com"></Input>
          <Input variant='success' inputSize='md' type="number" placeholder="Medium number input"></Input>
          <Input variant='warning' inputSize='lg' type="text" placeholder="Large text input"></Input>
          <Input variant='danger' inputSize='xl' type="password" placeholder="Extra large password"></Input>
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>inputSize</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span> <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Large input"</span>&gt;&lt;/<span className={styles.component}>Input</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Typography Scale</h3>
        <p>Adjust text size independently from input dimensions to optimize readability and maintain consistent typography across your interface.</p>
        <div className={styles.centered}>
          <Input variant='primary' fontSize='fs-xs' type="text" placeholder="Extra small text"></Input>
          <Input variant='secondary' fontSize='fs-sm' type="email" placeholder="small.text@example.com"></Input>
          <Input variant='success' fontSize='fs-md' type="number" placeholder="Medium text size"></Input>
          <Input variant='warning' fontSize='fs-lg' type="text" placeholder="Large text input"></Input>
          <Input variant='danger' fontSize='fs-xl' type="password" placeholder="Extra large text"></Input>
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>fontSize</span><span className={styles.operator}>=</span><span className={styles.string}>'fs-lg'</span> <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Large text"</span>&gt;&lt;/<span className={styles.component}>Input</span>&gt;<br/>
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
          <Input variant='primary' colorVision='protanopia' type="text" placeholder="Primary protanopia"></Input>
          <Input variant='secondary' colorVision='protanopia' type="email" placeholder="secondary@protanopia.com"></Input>
          <Input variant='success' colorVision='protanopia' type="number" placeholder="Success number"></Input>
          <Input variant='warning' colorVision='protanopia' type="text" placeholder="Warning protanopia"></Input>
          <Input variant='danger' colorVision='protanopia' type="password" placeholder="Danger password"></Input>
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span> <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Protanopia support"</span>&gt;&lt;/<span className={styles.component}>Input</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Input variant='primary' colorVision='deuteranopia' type="text" placeholder="Primary deuteranopia"></Input>
          <Input variant='secondary' colorVision='deuteranopia' type="email" placeholder="secondary@deuteranopia.com"></Input>
          <Input variant='success' colorVision='deuteranopia' type="number" placeholder="Success number"></Input>
          <Input variant='warning' colorVision='deuteranopia' type="text" placeholder="Warning deuteranopia"></Input>
          <Input variant='danger' colorVision='deuteranopia' type="password" placeholder="Danger password"></Input>
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span> <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Deuteranopia support"</span>&gt;&lt;/<span className={styles.component}>Input</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation.</p>
        <div className={styles.centered}>
          <Input variant='primary' colorVision='tritanopia' type="text" placeholder="Primary tritanopia"></Input>
          <Input variant='secondary' colorVision='tritanopia' type="email" placeholder="secondary@tritanopia.com"></Input>
          <Input variant='success' colorVision='tritanopia' type="number" placeholder="Success number"></Input>
          <Input variant='warning' colorVision='tritanopia' type="text" placeholder="Warning tritanopia"></Input>
          <Input variant='danger' colorVision='tritanopia' type="password" placeholder="Danger password"></Input>
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span> <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Tritanopia support"</span>&gt;&lt;/<span className={styles.component}>Input</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Input variant='primary' accessibility='low-vision' type="text" placeholder="Primary low vision"></Input>
          <Input variant='secondary' accessibility='low-vision' type="email" placeholder="lowvision@example.com"></Input>
          <Input variant='success' accessibility='low-vision' type="number" placeholder="Success number"></Input>
          <Input variant='warning' accessibility='low-vision' type="text" placeholder="Warning low vision"></Input>
          <Input variant='danger' accessibility='low-vision' type="password" placeholder="Danger password"></Input>
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span> <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Low vision support"</span>&gt;&lt;/<span className={styles.component}>Input</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
      <h3>High Contrast Mode</h3>
      <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity.</p>
      <div className={styles.centered}>
          <Input variant='primary' accessibility='high-contrast' type="text" placeholder="Primary high contrast"></Input>
          <Input variant='secondary' accessibility='high-contrast' type="email" placeholder="highcontrast@example.com"></Input>
          <Input variant='success' accessibility='high-contrast' type="number" placeholder="Success number"></Input>
          <Input variant='warning' accessibility='high-contrast' type="text" placeholder="Warning high contrast"></Input>
          <Input variant='danger' accessibility='high-contrast' type="password" placeholder="Danger password"></Input>
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span> <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"High contrast"</span>&gt;&lt;/<span className={styles.component}>Input</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>

        <h3>Custom Colors</h3>
        <p>The <code>customColors</code> property allows you to define custom colors for all color vision accessibility modes:</p>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>CustomInputColors Interface</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>CustomInputColors</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorder</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Default border color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorderFocus</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Focus border color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Text color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBg</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Background color</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors (Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorderFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBg</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors (Most Common Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBg</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors (Blue-Yellow Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>

        <div className={styles.centered}>
          <Input variant='custom' type='email' placeholder='Blue' customColors={{
            defaultBorder: '#007BFF',
            defaultBorderFocus: '#0056B3',
            defaultColor: '#222222',
            defaultBg: '#FFFFFF',
            protanopiaBorder: '#007BFF',
            protanopiaBorderFocus: '#0056B3',
            protanopiaColor: '#222222',
            protanopiaBg: '#FFFFFF',
            deuteranopiaBorder: '#007BFF',
            deuteranopiaBorderFocus: '#0056B3',
            deuteranopiaColor: '#222222',
            deuteranopiaBg: '#FFFFFF',
            tritanopiaBorder: '#007BFF',
            tritanopiaBorderFocus: '#0056B3',
            tritanopiaColor: '#222222',
            tritanopiaBg: '#FFFFFF'
          }} />
          <Input variant='custom' type='email' placeholder='Orange' colorVision='protanopia' customColors={{
            defaultBorder: '#FF8C00',
            defaultBorderFocus: '#E07B00',
            defaultColor: '#222222',
            defaultBg: '#FFFFFF',
            protanopiaBorder: '#FFB84D',
            protanopiaBorderFocus: '#FFA500',
            protanopiaColor: '#222222',
            protanopiaBg: '#FFFFFF',
            deuteranopiaBorder: '#FFB84D',
            deuteranopiaBorderFocus: '#FFA500',
            deuteranopiaColor: '#222222',
            deuteranopiaBg: '#FFFFFF',
            tritanopiaBorder: '#FFB84D',
            tritanopiaBorderFocus: '#FFA500',
            tritanopiaColor: '#222222',
            tritanopiaBg: '#FFFFFF'
          }} />
          <Input variant='custom' type='email' placeholder='Green' colorVision='deuteranopia' customColors={{
            defaultBorder: '#28A745',
            defaultBorderFocus: '#1e7e34',
            defaultColor: '#222222',
            defaultBg: '#FFFFFF',
            protanopiaBorder: '#28A745',
            protanopiaBorderFocus: '#1e7e34',
            protanopiaColor: '#222222',
            protanopiaBg: '#FFFFFF',
            deuteranopiaBorder: '#4CAF50',
            deuteranopiaBorderFocus: '#388E3C',
            deuteranopiaColor: '#222222',
            deuteranopiaBg: '#FFFFFF',
            tritanopiaBorder: '#4CAF50',
            tritanopiaBorderFocus: '#388E3C',
            tritanopiaColor: '#222222',
            tritanopiaBg: '#FFFFFF'
          }} />
          <Input variant='custom' type='email' placeholder='Purple' colorVision='tritanopia' customColors={{
            defaultBorder: '#A855F7',
            defaultBorderFocus: '#7c3aed',
            defaultColor: '#222222',
            defaultBg: '#FFFFFF',
            protanopiaBorder: '#A855F7',
            protanopiaBorderFocus: '#7c3aed',
            protanopiaColor: '#222222',
            protanopiaBg: '#FFFFFF',
            deuteranopiaBorder: '#A855F7',
            deuteranopiaBorderFocus: '#7c3aed',
            deuteranopiaColor: '#222222',
            deuteranopiaBg: '#FFFFFF',
            tritanopiaBorder: '#D946EF',
            tritanopiaBorderFocus: '#BE185D',
            tritanopiaColor: '#222222',
            tritanopiaBg: '#FFFFFF'
          }} />
          <Input variant='custom' type='email' placeholder='Pink' inputSize='lg' customColors={{
            defaultBorder: '#EC4899',
            defaultBorderFocus: '#be185d',
            defaultColor: '#222222',
            defaultBg: '#FFFFFF',
            protanopiaBorder: '#F472B6',
            protanopiaBorderFocus: '#EC4899',
            protanopiaColor: '#222222',
            protanopiaBg: '#FFFFFF',
            deuteranopiaBorder: '#F472B6',
            deuteranopiaBorderFocus: '#EC4899',
            deuteranopiaColor: '#222222',
            deuteranopiaBg: '#FFFFFF',
            tritanopiaBorder: '#F472B6',
            tritanopiaBorderFocus: '#EC4899',
            tritanopiaColor: '#222222',
            tritanopiaBg: '#FFFFFF'
          }} />
        </div>

        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>CustomDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(customColorsCodeString, 'custom')}>
              {copiedButton === 'custom' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Input</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Input</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'custom'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>type</span><span className={styles.operator}>=</span><span className={styles.string}>'email'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>'Email'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>customColors</span><span className={styles.operator}>={'{'}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Normal vision</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorder</span>: <span className={styles.string}>'#007BFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorderFocus</span>: <span className={styles.string}>'#0056B3'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.string}>'#222222'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBg</span>: <span className={styles.string}>'#FFFFFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Protanopia</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBorder</span>: <span className={styles.string}>'#3399FF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBorderFocus</span>: <span className={styles.string}>'#2673B6'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.string}>'#222222'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBg</span>: <span className={styles.string}>'#FFFFFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorder</span>: <span className={styles.string}>'#4F83CC'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderFocus</span>: <span className={styles.string}>'#3A5C99'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.string}>'#222222'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBg</span>: <span className={styles.string}>'#FFFFFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Tritanopia</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBorder</span>: <span className={styles.string}>'#D946EF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderFocus</span>: <span className={styles.string}>'#BE185D'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.string}>'#222222'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBg</span>: <span className={styles.string}>'#FFFFFF'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        </div>
      

    </>
  );
};

export default InputPage;
