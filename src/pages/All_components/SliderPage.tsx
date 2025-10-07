import styles from './Styles.module.css'
import { Slider } from 'neo-ram-prisma';
import { useState } from 'react';

const SliderPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);

  const codeString = `import { Slider } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Slider variant='secondary' min={0} max={100} step={1} label="Secondary Slider" />
  );
}`;

  const disabledCodeString = `import { Slider } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Slider variant='secondary' min={0} max={100} step={1} disabled label="Disabled Slider" />
  );
}`;

  const valueCodeString = `import { Slider } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Slider variant='secondary' min={0} max={100} step={1} showValue label="Show Value" />
  );
}`;

  const stepCodeString = `import { Slider } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Slider variant='secondary' min={0} max={100} step={25} label="Step 25" />
  );
}`;

  const protanopiaCodeString = `import { Slider } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Slider variant='secondary' colorVision='protanopia' min={0} max={100} step={1} label="Protanopia" />
  );
}`;

  const deuteranopiaCodeString = `import { Slider } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Slider variant='secondary' colorVision='deuteranopia' min={0} max={100} step={1} label="Deuteranopia" />
  );
}`;

  const tritanopiaCodeString = `import { Slider } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Slider variant='secondary' colorVision='tritanopia' min={0} max={100} step={1} label="Tritanopia" />
  );
}`;

  const lowVisionCodeString = `import { Slider } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Slider variant='secondary' accessibility='low-vision' min={0} max={100} step={1} label="Low Vision" />
  );
}`;

  const highContrastCodeString = `import { Slider } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Slider variant='secondary' accessibility='high-contrast' min={0} max={100} step={1} label="High Contrast" />
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
        <h1>Slider</h1>
        <h3>Interactive range slider component with comprehensive accessibility support</h3>
        <p>A versatile slider component that allows users to select values from a continuous range with built-in accessibility features and WCAG compliance. 
          Supports multiple variants, customizable ranges, steps, and accessibility options to meet diverse design requirements.</p>
        
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>Props</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>type</span> <span className={styles.component}>Variant</span> <span className={styles.operator}>=</span> <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>ColorVision</span> <span className={styles.operator}>=</span> <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>AccessibilityMode</span> <span className={styles.operator}>=</span> <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span><br/>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>SliderProps</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.property}>min</span>?: <span className={styles.keyword}>number</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>max</span>?: <span className={styles.keyword}>number</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>step</span>?: <span className={styles.keyword}>number</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>label</span>?: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>variant</span>?: <span className={styles.component}>Variant</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>colorVision</span>?: <span className={styles.component}>ColorVision</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>accessibility</span>?: <span className={styles.component}>AccessibilityMode</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>disabled</span>?: <span className={styles.keyword}>boolean</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>showValue</span>?: <span className={styles.keyword}>boolean</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>
        
        <h3>Slider variants</h3>
        <p>The slider component supports different variants such as primary, secondary, success, warning, and danger.</p>
        <div className={styles.centered}>
          <Slider min={0} max={100} step={1} label="Primary" value={50} onChange={() => {}} />
          <Slider variant='secondary' min={0} max={100} step={1} label="Secondary" value={50} onChange={() => {}} />
          <Slider variant='success' min={0} max={100} step={1} label="Success" value={50} onChange={() => {}} />
          <Slider variant='warning' min={0} max={100} step={1} label="Warning" value={50} onChange={() => {}} />
          <Slider variant='danger' min={0} max={100} step={1} label="Danger" value={50} onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Slider</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Slider</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>min</span><span className={styles.operator}>=</span>{'{'}0{'}'} <span className={styles.property}>max</span><span className={styles.operator}>=</span>{'{'}100{'}'} <span className={styles.property}>step</span><span className={styles.operator}>=</span>{'{'}1{'}'} <span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Secondary Slider"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Disabled State</h3>
        <p>Disabled sliders prevent user interaction and provide visual indication when actions are temporarily unavailable or not permitted.</p>
        <div className={styles.centered}>
          <Slider disabled min={0} max={100} step={1} label="Disabled Primary" value={30} onChange={() => {}} />
          <Slider variant='secondary' disabled min={0} max={100} step={1} label="Disabled Secondary" value={30} onChange={() => {}} />
          <Slider variant='success' disabled min={0} max={100} step={1} label="Disabled Success" value={30} onChange={() => {}} />
          <Slider variant='warning' disabled min={0} max={100} step={1} label="Disabled Warning" value={30} onChange={() => {}} />
          <Slider variant='danger' disabled min={0} max={100} step={1} label="Disabled Danger" value={30} onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Slider</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Slider</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>min</span><span className={styles.operator}>=</span>{'{'}0{'}'} <span className={styles.property}>max</span><span className={styles.operator}>=</span>{'{'}100{'}'} <span className={styles.property}>step</span><span className={styles.operator}>=</span>{'{'}1{'}'} <span className={styles.property}>disabled</span> <span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Disabled Slider"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Show Value Display</h3>
        <p>Display the current slider value to provide immediate feedback to users about their selection.</p>
        <div className={styles.centered}>
          <Slider showValue min={0} max={100} step={1} label="Show Value Primary" value={25} onChange={() => {}} />
          <Slider variant='secondary' showValue min={0} max={100} step={1} label="Show Value Secondary" value={50} onChange={() => {}} />
          <Slider variant='success' showValue min={0} max={100} step={1} label="Show Value Success" value={75} onChange={() => {}} />
          <Slider variant='warning' showValue min={0} max={100} step={1} label="Show Value Warning" value={60} onChange={() => {}} />
          <Slider variant='danger' showValue min={0} max={100} step={1} label="Show Value Danger" value={40} onChange={() => {}} />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>ShowValueDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(valueCodeString, 'showValue')}>
              {copiedButton === 'showValue' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Slider</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Slider</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>min</span><span className={styles.operator}>=</span>{'{'}0{'}'} <span className={styles.property}>max</span><span className={styles.operator}>=</span>{'{'}100{'}'} <span className={styles.property}>step</span><span className={styles.operator}>=</span>{'{'}1{'}'} <span className={styles.property}>showValue</span> <span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Show Value"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Step Configuration</h3>
        <p>Configure step increments to control the granularity of value selection, useful for specific use cases like volume controls or progress indicators.</p>
        <div className={styles.centered}>
          <Slider min={0} max={100} step={5} label="Step 5" value={25} onChange={() => {}} />
          <Slider variant='secondary' min={0} max={100} step={10} label="Step 10" value={50} onChange={() => {}} />
          <Slider variant='success' min={0} max={100} step={25} label="Step 25" value={75} onChange={() => {}} />
          <Slider variant='warning' min={0} max={50} step={2} label="Max 50, Step 2" value={20} onChange={() => {}} />
          <Slider variant='danger' min={10} max={90} step={20} label="Min 10, Max 90, Step 20" value={50} onChange={() => {}} />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>StepDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(stepCodeString, 'step')}>
              {copiedButton === 'step' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Slider</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Slider</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>min</span><span className={styles.operator}>=</span>{'{'}0{'}'} <span className={styles.property}>max</span><span className={styles.operator}>=</span>{'{'}100{'}'} <span className={styles.property}>step</span><span className={styles.operator}>=</span>{'{'}25{'}'} <span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Step 25"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Color Vision Accessibility</h3>
        <p>Specialized color palettes designed for users with different types of color vision deficiencies, ensuring optimal contrast and usability.</p>
        
        <h3>Protanopia Support</h3>
        <p>Optimized color scheme for users with red-green color blindness (protanopia), enhancing distinction between interactive elements.</p>
        <div className={styles.centered}>
          <Slider variant='primary' colorVision='protanopia' min={0} max={100} step={1} label="Primary" value={20} onChange={() => {}} />
          <Slider variant='secondary' colorVision='protanopia' min={0} max={100} step={1} label="Secondary" value={40} onChange={() => {}} />
          <Slider variant='success' colorVision='protanopia' min={0} max={100} step={1} label="Success" value={60} onChange={() => {}} />
          <Slider variant='warning' colorVision='protanopia' min={0} max={100} step={1} label="Warning" value={80} onChange={() => {}} />
          <Slider variant='danger' colorVision='protanopia' min={0} max={100} step={1} label="Danger" value={30} onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Slider</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Slider</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span> <span className={styles.property}>min</span><span className={styles.operator}>=</span>{'{'}0{'}'} <span className={styles.property}>max</span><span className={styles.operator}>=</span>{'{'}100{'}'} <span className={styles.property}>step</span><span className={styles.operator}>=</span>{'{'}1{'}'} <span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Protanopia"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Slider variant='primary' colorVision='deuteranopia' min={0} max={100} step={1} label="Primary" value={25} onChange={() => {}} />
          <Slider variant='secondary' colorVision='deuteranopia' min={0} max={100} step={1} label="Secondary" value={45} onChange={() => {}} />
          <Slider variant='success' colorVision='deuteranopia' min={0} max={100} step={1} label="Success" value={65} onChange={() => {}} />
          <Slider variant='warning' colorVision='deuteranopia' min={0} max={100} step={1} label="Warning" value={85} onChange={() => {}} />
          <Slider variant='danger' colorVision='deuteranopia' min={0} max={100} step={1} label="Danger" value={35} onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Slider</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Slider</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span> <span className={styles.property}>min</span><span className={styles.operator}>=</span>{'{'}0{'}'} <span className={styles.property}>max</span><span className={styles.operator}>=</span>{'{'}100{'}'} <span className={styles.property}>step</span><span className={styles.operator}>=</span>{'{'}1{'}'} <span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Deuteranopia"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation.</p>
        <div className={styles.centered}>
          <Slider variant='primary' colorVision='tritanopia' min={0} max={100} step={1} label="Primary" value={30} onChange={() => {}} />
          <Slider variant='secondary' colorVision='tritanopia' min={0} max={100} step={1} label="Secondary" value={50} onChange={() => {}} />
          <Slider variant='success' colorVision='tritanopia' min={0} max={100} step={1} label="Success" value={70} onChange={() => {}} />
          <Slider variant='warning' colorVision='tritanopia' min={0} max={100} step={1} label="Warning" value={90} onChange={() => {}} />
          <Slider variant='danger' colorVision='tritanopia' min={0} max={100} step={1} label="Danger" value={40} onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Slider</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Slider</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span> <span className={styles.property}>min</span><span className={styles.operator}>=</span>{'{'}0{'}'} <span className={styles.property}>max</span><span className={styles.operator}>=</span>{'{'}100{'}'} <span className={styles.property}>step</span><span className={styles.operator}>=</span>{'{'}1{'}'} <span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Tritanopia"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Slider variant='primary' accessibility='low-vision' min={0} max={100} step={1} label="Primary" value={15} onChange={() => {}} />
          <Slider variant='secondary' accessibility='low-vision' min={0} max={100} step={1} label="Secondary" value={35} onChange={() => {}} />
          <Slider variant='success' accessibility='low-vision' min={0} max={100} step={1} label="Success" value={55} onChange={() => {}} />
          <Slider variant='warning' accessibility='low-vision' min={0} max={100} step={1} label="Warning" value={75} onChange={() => {}} />
          <Slider variant='danger' accessibility='low-vision' min={0} max={100} step={1} label="Danger" value={95} onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Slider</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Slider</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span> <span className={styles.property}>min</span><span className={styles.operator}>=</span>{'{'}0{'}'} <span className={styles.property}>max</span><span className={styles.operator}>=</span>{'{'}100{'}'} <span className={styles.property}>step</span><span className={styles.operator}>=</span>{'{'}1{'}'} <span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Low Vision"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>High Contrast Mode</h3>
        <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity.</p>
        <div className={styles.centered}>
          <Slider variant='primary' accessibility='high-contrast' min={0} max={100} step={1} label="Primary" value={10} onChange={() => {}} />
          <Slider variant='secondary' accessibility='high-contrast' min={0} max={100} step={1} label="Secondary" value={30} onChange={() => {}} />
          <Slider variant='success' accessibility='high-contrast' min={0} max={100} step={1} label="Success" value={50} onChange={() => {}} />
          <Slider variant='warning' accessibility='high-contrast' min={0} max={100} step={1} label="Warning" value={70} onChange={() => {}} />
          <Slider variant='danger' accessibility='high-contrast' min={0} max={100} step={1} label="Danger" value={90} onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Slider</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Slider</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span> <span className={styles.property}>min</span><span className={styles.operator}>=</span>{'{'}0{'}'} <span className={styles.property}>max</span><span className={styles.operator}>=</span>{'{'}100{'}'} <span className={styles.property}>step</span><span className={styles.operator}>=</span>{'{'}1{'}'} <span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"High Contrast"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderPage;
