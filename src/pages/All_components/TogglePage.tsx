import styles from './Styles.module.css'
import { Toggle } from 'neo-ram-prisma';
import { useState } from 'react';

const TogglePage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  
  // Toggle states - all default to true (activated)
  const [primaryToggle, setPrimaryToggle] = useState(true);
  const [secondaryToggle, setSecondaryToggle] = useState(true);
  const [successToggle, setSuccessToggle] = useState(true);
  const [warningToggle, setWarningToggle] = useState(true);
  const [dangerToggle, setDangerToggle] = useState(true);
  
  // Toggle states section
  const [primaryStateToggle, setPrimaryStateToggle] = useState(true);
  const [secondaryStateToggle, setSecondaryStateToggle] = useState(true);
  const [successStateToggle, setSuccessStateToggle] = useState(true);
  const [warningStateToggle, setWarningStateToggle] = useState(true);
  const [dangerStateToggle, setDangerStateToggle] = useState(true);
  
  // Disabled toggles (these remain disabled but can show different states)
  const [disabledPrimaryToggle, setDisabledPrimaryToggle] = useState(true);
  const [disabledSecondaryToggle, setDisabledSecondaryToggle] = useState(true);
  const [disabledSuccessToggle, setDisabledSuccessToggle] = useState(true);
  const [disabledWarningToggle, setDisabledWarningToggle] = useState(true);
  const [disabledDangerToggle, setDisabledDangerToggle] = useState(true);
  
  // Protanopia toggles
  const [protanopiaPrimaryToggle, setProtanopiaPrimaryToggle] = useState(true);
  const [protanopiaSecondaryToggle, setProtanopiaSecondaryToggle] = useState(true);
  const [protanopiaSuccessToggle, setProtanopiaSuccessToggle] = useState(true);
  const [protanopiaWarningToggle, setProtanopiaWarningToggle] = useState(true);
  const [protanopiaDangerToggle, setProtanopiaDangerToggle] = useState(true);
  
  // Deuteranopia toggles
  const [deuteranopiaPrimaryToggle, setDeuteranopiaPrimaryToggle] = useState(true);
  const [deuteranopiaSecondaryToggle, setDeuteranopiaSecondaryToggle] = useState(true);
  const [deuteranopiaSuccessToggle, setDeuteranopiaSuccessToggle] = useState(true);
  const [deuteranopiaWarningToggle, setDeuteranopiaWarningToggle] = useState(true);
  const [deuteranopiaDangerToggle, setDeuteranopiaDangerToggle] = useState(true);
  
  // Tritanopia toggles
  const [tritanopiaPrimaryToggle, setTritanopiaPrimaryToggle] = useState(true);
  const [tritanopiaSecondaryToggle, setTritanopiaSecondaryToggle] = useState(true);
  const [tritanopiaSuccessToggle, setTritanopiaSuccessToggle] = useState(true);
  const [tritanopiaWarningToggle, setTritanopiaWarningToggle] = useState(true);
  const [tritanopiaDangerToggle, setTritanopiaDangerToggle] = useState(true);
  
  // Low vision toggles
  const [lowVisionPrimaryToggle, setLowVisionPrimaryToggle] = useState(true);
  const [lowVisionSecondaryToggle, setLowVisionSecondaryToggle] = useState(true);
  const [lowVisionSuccessToggle, setLowVisionSuccessToggle] = useState(true);
  const [lowVisionWarningToggle, setLowVisionWarningToggle] = useState(true);
  const [lowVisionDangerToggle, setLowVisionDangerToggle] = useState(true);
  
  // High contrast toggles
  const [highContrastPrimaryToggle, setHighContrastPrimaryToggle] = useState(true);
  const [highContrastSecondaryToggle, setHighContrastSecondaryToggle] = useState(true);
  const [highContrastSuccessToggle, setHighContrastSuccessToggle] = useState(true);
  const [highContrastWarningToggle, setHighContrastWarningToggle] = useState(true);
  const [highContrastDangerToggle, setHighContrastDangerToggle] = useState(true);

  // Custom toggles
  const [isToggleCustom1, setIsToggleCustom1] = useState(false);
  const [isToggleCustom2, setIsToggleCustom2] = useState(false);
  const [isToggleCustom3, setIsToggleCustom3] = useState(false);
  const [isToggleCustom4, setIsToggleCustom4] = useState(false);
  const [isToggleCustom5, setIsToggleCustom5] = useState(false);

  const codeString = `import { Toggle } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle 
      variant='secondary' 
      checked={isChecked}
      onChange={setIsChecked}
    />
  );
}`;

  const disabledCodeString = `import { Toggle } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Toggle 
      variant='secondary' 
      checked={false}
      onChange={() => {}}
      disabled
    />
  );
}`;

  const protanopiaCodeString = `import { Toggle } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle 
      variant='secondary' 
      colorVision='protanopia' 
      checked={isChecked}
      onChange={setIsChecked}
    />
  );
}`;

  const deuteranopiaCodeString = `import { Toggle } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle 
      variant='secondary' 
      colorVision='deuteranopia' 
      checked={isChecked}
      onChange={setIsChecked}
    />
  );
}`;

  const tritanopiaCodeString = `import { Toggle } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle 
      variant='secondary' 
      colorVision='tritanopia' 
      checked={isChecked}
      onChange={setIsChecked}
    />
  );
}`;

  const lowVisionCodeString = `import { Toggle } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle 
      variant='secondary' 
      accessibility='low-vision' 
      checked={isChecked}
      onChange={setIsChecked}
    />
  );
}`;

  const highContrastCodeString = `import { Toggle } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle 
      variant='secondary' 
      accessibility='high-contrast' 
      checked={isChecked}
      onChange={setIsChecked}
    />
  );
}`;

  const customColorsCodeString = `import { Toggle } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';
import { useState } from 'react';

function Demo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle 
      variant='custom' 
      colorVision='tritanopia'
      checked={isChecked}
      onChange={setIsChecked}
      customColors={{
        defaultBg: '#f0f0f0',
        defaultBorder: '#d0d0d0',
        defaultBgOn: '#00BCD4',
        defaultBorderOn: '#00897B',
        defaultKnob: '#ffffff',
        tritanopiaBg: '#f0f0f0',
        tritanopiaBorder: '#d0d0d0',
        tritanopiaBgOn: '#FF6F00',
        tritanopiaBorderOn: '#E65100',
        tritanopiaKnob: '#ffffff'
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
        <h1>Toggle</h1>
        <h3>Interactive toggle switch component with comprehensive accessibility support</h3>
        <p>A versatile toggle component that allows users to switch between two states (on/off) with built-in accessibility features and WCAG compliance. 
          Supports multiple variants, visual feedback, and customization options to meet diverse design requirements.</p>
        
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
              <span className={styles.keyword}>interface</span> <span className={styles.component}>ToggleProps</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.property}>checked</span>: <span className={styles.keyword}>boolean</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>onChange</span>: (<span className={styles.property}>checked</span>: <span className={styles.keyword}>boolean</span>) <span className={styles.operator}>=&gt;</span> <span className={styles.keyword}>void</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>variant</span>?: <span className={styles.component}>Variant</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>colorVision</span>?: <span className={styles.component}>ColorVision</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>accessibility</span>?: <span className={styles.component}>AccessibilityMode</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>disabled</span>?: <span className={styles.keyword}>boolean</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>
        
        <h3>Toggle variants</h3>
        <p>The toggle component supports different variants such as primary, secondary, success, warning, and danger.</p>
        <div className={styles.centered}>
          <Toggle checked={primaryToggle} onChange={setPrimaryToggle} />
          <Toggle variant='secondary' checked={secondaryToggle} onChange={setSecondaryToggle} />
          <Toggle variant='success' checked={successToggle} onChange={setSuccessToggle} />
          <Toggle variant='warning' checked={warningToggle} onChange={setWarningToggle} />
          <Toggle variant='danger' checked={dangerToggle} onChange={setDangerToggle} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Toggle</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>isChecked</span>, <span className={styles.component}>setIsChecked</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>false</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Toggle</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>checked</span><span className={styles.operator}>=</span>{'{'}isChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>{'{'}setIsChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Toggle States</h3>
        <p>Demonstrate both checked and unchecked states across different variants to show visual feedback.</p>
        <div className={styles.centered}>
          <Toggle checked={primaryStateToggle} onChange={setPrimaryStateToggle} />
          <Toggle variant='secondary' checked={secondaryStateToggle} onChange={setSecondaryStateToggle} />
          <Toggle variant='success' checked={successStateToggle} onChange={setSuccessStateToggle} />
          <Toggle variant='warning' checked={warningStateToggle} onChange={setWarningStateToggle} />
          <Toggle variant='danger' checked={dangerStateToggle} onChange={setDangerStateToggle} />
        </div>

        <h3>Disabled State</h3>
        <p>Disabled toggles prevent user interaction and provide visual indication when the toggle is temporarily unavailable or not permitted.</p>
        <div className={styles.centered}>
          <Toggle disabled checked={disabledPrimaryToggle} onChange={setDisabledPrimaryToggle} />
          <Toggle variant='secondary' disabled checked={disabledSecondaryToggle} onChange={setDisabledSecondaryToggle} />
          <Toggle variant='success' disabled checked={disabledSuccessToggle} onChange={setDisabledSuccessToggle} />
          <Toggle variant='warning' disabled checked={disabledWarningToggle} onChange={setDisabledWarningToggle} />
          <Toggle variant='danger' disabled checked={disabledDangerToggle} onChange={setDisabledDangerToggle} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Toggle</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Toggle</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>checked</span><span className={styles.operator}>=</span>{'{'}false{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>{'{'}() =&gt; {'{}'}{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>disabled</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Color Vision Accessibility</h3>
        <p>Specialized color palettes designed for users with different types of color vision deficiencies, ensuring optimal contrast and usability.</p>
        
        <h3>Protanopia Support</h3>
        <p>Optimized color scheme for users with red-green color blindness (protanopia), enhancing distinction between on and off states.</p>
        <div className={styles.centered}>
          <Toggle variant='primary' colorVision='protanopia' checked={protanopiaPrimaryToggle} onChange={setProtanopiaPrimaryToggle} />
          <Toggle variant='secondary' colorVision='protanopia' checked={protanopiaSecondaryToggle} onChange={setProtanopiaSecondaryToggle} />
          <Toggle variant='success' colorVision='protanopia' checked={protanopiaSuccessToggle} onChange={setProtanopiaSuccessToggle} />
          <Toggle variant='warning' colorVision='protanopia' checked={protanopiaWarningToggle} onChange={setProtanopiaWarningToggle} />
          <Toggle variant='danger' colorVision='protanopia' checked={protanopiaDangerToggle} onChange={setProtanopiaDangerToggle} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Toggle</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>isChecked</span>, <span className={styles.component}>setIsChecked</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>false</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Toggle</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>checked</span><span className={styles.operator}>=</span>{'{'}isChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>{'{'}setIsChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Toggle variant='primary' colorVision='deuteranopia' checked={deuteranopiaPrimaryToggle} onChange={setDeuteranopiaPrimaryToggle} />
          <Toggle variant='secondary' colorVision='deuteranopia' checked={deuteranopiaSecondaryToggle} onChange={setDeuteranopiaSecondaryToggle} />
          <Toggle variant='success' colorVision='deuteranopia' checked={deuteranopiaSuccessToggle} onChange={setDeuteranopiaSuccessToggle} />
          <Toggle variant='warning' colorVision='deuteranopia' checked={deuteranopiaWarningToggle} onChange={setDeuteranopiaWarningToggle} />
          <Toggle variant='danger' colorVision='deuteranopia' checked={deuteranopiaDangerToggle} onChange={setDeuteranopiaDangerToggle} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Toggle</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>isChecked</span>, <span className={styles.component}>setIsChecked</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>false</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Toggle</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>checked</span><span className={styles.operator}>=</span>{'{'}isChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>{'{'}setIsChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation between states.</p>
        <div className={styles.centered}>
          <Toggle variant='primary' colorVision='tritanopia' checked={tritanopiaPrimaryToggle} onChange={setTritanopiaPrimaryToggle} />
          <Toggle variant='secondary' colorVision='tritanopia' checked={tritanopiaSecondaryToggle} onChange={setTritanopiaSecondaryToggle} />
          <Toggle variant='success' colorVision='tritanopia' checked={tritanopiaSuccessToggle} onChange={setTritanopiaSuccessToggle} />
          <Toggle variant='warning' colorVision='tritanopia' checked={tritanopiaWarningToggle} onChange={setTritanopiaWarningToggle} />
          <Toggle variant='danger' colorVision='tritanopia' checked={tritanopiaDangerToggle} onChange={setTritanopiaDangerToggle} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Toggle</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>isChecked</span>, <span className={styles.component}>setIsChecked</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>false</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Toggle</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>checked</span><span className={styles.operator}>=</span>{'{'}isChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>{'{'}setIsChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Toggle variant='primary' accessibility='low-vision' checked={lowVisionPrimaryToggle} onChange={setLowVisionPrimaryToggle} />
          <Toggle variant='secondary' accessibility='low-vision' checked={lowVisionSecondaryToggle} onChange={setLowVisionSecondaryToggle} />
          <Toggle variant='success' accessibility='low-vision' checked={lowVisionSuccessToggle} onChange={setLowVisionSuccessToggle} />
          <Toggle variant='warning' accessibility='low-vision' checked={lowVisionWarningToggle} onChange={setLowVisionWarningToggle} />
          <Toggle variant='danger' accessibility='low-vision' checked={lowVisionDangerToggle} onChange={setLowVisionDangerToggle} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Toggle</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>isChecked</span>, <span className={styles.component}>setIsChecked</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>false</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Toggle</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>checked</span><span className={styles.operator}>=</span>{'{'}isChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>{'{'}setIsChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>High Contrast Mode</h3>
        <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity between on and off states.</p>
        <div className={styles.centered}>
          <Toggle variant='primary' accessibility='high-contrast' checked={highContrastPrimaryToggle} onChange={setHighContrastPrimaryToggle} />
          <Toggle variant='secondary' accessibility='high-contrast' checked={highContrastSecondaryToggle} onChange={setHighContrastSecondaryToggle} />
          <Toggle variant='success' accessibility='high-contrast' checked={highContrastSuccessToggle} onChange={setHighContrastSuccessToggle} />
          <Toggle variant='warning' accessibility='high-contrast' checked={highContrastWarningToggle} onChange={setHighContrastWarningToggle} />
          <Toggle variant='danger' accessibility='high-contrast' checked={highContrastDangerToggle} onChange={setHighContrastDangerToggle} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Toggle</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>isChecked</span>, <span className={styles.component}>setIsChecked</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>false</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Toggle</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>checked</span><span className={styles.operator}>=</span>{'{'}isChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>{'{'}setIsChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Custom Colors</h3>
        <p>The <code>customColors</code> property allows you to define custom colors for all color vision accessibility modes:</p>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>CustomToggleColors Interface</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>CustomToggleColors</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBg</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Background color (off state)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorder</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Border color (off state)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBgOn</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Background color (on state)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorderOn</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Border color (on state)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultKnob</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Toggle knob color</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors (Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBgOn</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorderOn</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaKnob</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors (Most Common Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBgOn</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderOn</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaKnob</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors (Blue-Yellow Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBgOn</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderOn</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaKnob</span>: <span className={styles.keyword}>string</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>

        <div className={styles.centered}>
          <Toggle variant='custom' checked={isToggleCustom1} onChange={setIsToggleCustom1} customColors={{ defaultBg: '#FFFFFF', defaultBorder: '#007BFF', defaultBgOn: '#0056B3', defaultBorderOn: '#003D82', defaultKnob: '#FFFFFF', protanopiaBg: '#FFFFFF', protanopiaBorder: '#FFA500', protanopiaBgOn: '#FF8C00', protanopiaBorderOn: '#E67E00', protanopiaKnob: '#FFFFFF', deuteranopiaBg: '#FFFFFF', deuteranopiaBorder: '#9C27B0', deuteranopiaBgOn: '#7B1FA2', deuteranopiaBorderOn: '#4A0080', deuteranopiaKnob: '#FFFFFF', tritanopiaBg: '#FFFFFF', tritanopiaBorder: '#00BCD4', tritanopiaBgOn: '#0097A7', tritanopiaBorderOn: '#006064', tritanopiaKnob: '#FFFFFF' }} />
          <Toggle variant='custom' colorVision='protanopia' checked={isToggleCustom2} onChange={setIsToggleCustom2} customColors={{ defaultBg: '#FFFFFF', defaultBorder: '#FF8C00', defaultBgOn: '#E67E00', defaultBorderOn: '#CC6600', defaultKnob: '#FFFFFF', protanopiaBg: '#FFFFFF', protanopiaBorder: '#FFA500', protanopiaBgOn: '#FF8C00', protanopiaBorderOn: '#E67E00', protanopiaKnob: '#FFFFFF', deuteranopiaBg: '#FFFFFF', deuteranopiaBorder: '#FFA500', deuteranopiaBgOn: '#FF8C00', deuteranopiaBorderOn: '#E67E00', deuteranopiaKnob: '#FFFFFF', tritanopiaBg: '#FFFFFF', tritanopiaBorder: '#FFA500', tritanopiaBgOn: '#FF8C00', tritanopiaBorderOn: '#E67E00', tritanopiaKnob: '#FFFFFF' }} />
          <Toggle variant='custom' colorVision='deuteranopia' checked={isToggleCustom3} onChange={setIsToggleCustom3} customColors={{ defaultBg: '#FFFFFF', defaultBorder: '#28A745', defaultBgOn: '#1E7E34', defaultBorderOn: '#155724', defaultKnob: '#FFFFFF', protanopiaBg: '#FFFFFF', protanopiaBorder: '#28A745', protanopiaBgOn: '#1E7E34', protanopiaBorderOn: '#155724', protanopiaKnob: '#FFFFFF', deuteranopiaBg: '#FFFFFF', deuteranopiaBorder: '#4CAF50', deuteranopiaBgOn: '#2E7D32', deuteranopiaBorderOn: '#1B5E20', deuteranopiaKnob: '#FFFFFF', tritanopiaBg: '#FFFFFF', tritanopiaBorder: '#4CAF50', tritanopiaBgOn: '#2E7D32', tritanopiaBorderOn: '#1B5E20', tritanopiaKnob: '#FFFFFF' }} />
          <Toggle variant='custom' colorVision='tritanopia' checked={isToggleCustom4} onChange={setIsToggleCustom4} customColors={{ defaultBg: '#FFFFFF', defaultBorder: '#A855F7', defaultBgOn: '#7E22CE', defaultBorderOn: '#581C87', defaultKnob: '#FFFFFF', protanopiaBg: '#FFFFFF', protanopiaBorder: '#A855F7', protanopiaBgOn: '#7E22CE', protanopiaBorderOn: '#581C87', protanopiaKnob: '#FFFFFF', deuteranopiaBg: '#FFFFFF', deuteranopiaBorder: '#A855F7', deuteranopiaBgOn: '#7E22CE', deuteranopiaBorderOn: '#581C87', deuteranopiaKnob: '#FFFFFF', tritanopiaBg: '#FFFFFF', tritanopiaBorder: '#D946EF', tritanopiaBgOn: '#A855F7', tritanopiaBorderOn: '#7E22CE', tritanopiaKnob: '#FFFFFF' }} />
          <Toggle variant='custom' checked={isToggleCustom5} onChange={setIsToggleCustom5} customColors={{ defaultBg: '#FFFFFF', defaultBorder: '#EC4899', defaultBgOn: '#BE185D', defaultBorderOn: '#831843', defaultKnob: '#FFFFFF', protanopiaBg: '#FFFFFF', protanopiaBorder: '#F472B6', protanopiaBgOn: '#EC4899', protanopiaBorderOn: '#BE185D', protanopiaKnob: '#FFFFFF', deuteranopiaBg: '#FFFFFF', deuteranopiaBorder: '#F472B6', deuteranopiaBgOn: '#EC4899', deuteranopiaBorderOn: '#BE185D', deuteranopiaKnob: '#FFFFFF', tritanopiaBg: '#FFFFFF', tritanopiaBorder: '#F472B6', tritanopiaBgOn: '#EC4899', tritanopiaBorderOn: '#BE185D', tritanopiaKnob: '#FFFFFF' }} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Toggle</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>useState</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'react'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>isChecked</span>, <span className={styles.component}>setIsChecked</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>false</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Toggle</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'custom'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>checked</span><span className={styles.operator}>=</span>{'{'}isChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>{'{'}setIsChecked{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>customColors</span><span className={styles.operator}>={'{'}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBg</span>: <span className={styles.string}>'#f0f0f0'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorder</span>: <span className={styles.string}>'#d0d0d0'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBgOn</span>: <span className={styles.string}>'#00BCD4'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorderOn</span>: <span className={styles.string}>'#00897B'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultKnob</span>: <span className={styles.string}>'#ffffff'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBg</span>: <span className={styles.string}>'#f0f0f0'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBorder</span>: <span className={styles.string}>'#d0d0d0'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBgOn</span>: <span className={styles.string}>'#FF6F00'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderOn</span>: <span className={styles.string}>'#E65100'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaKnob</span>: <span className={styles.string}>'#ffffff'</span><br/>
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

export default TogglePage;
