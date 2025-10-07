import styles from './Styles.module.css'
import { Alert } from 'neo-ram-prisma';
import { useState } from 'react';

const AlertPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  
  // State for interactive alert examples
  const [showDismissibleAlert, setShowDismissibleAlert] = useState(true);
  const [showProtanopiaAlert, setShowProtanopiaAlert] = useState(true);
  const [showDeuteranopiaAlert, setShowDeuteranopiaAlert] = useState(true);
  const [showTritanopiaAlert, setShowTritanopiaAlert] = useState(true);
  const [showLowVisionAlert, setShowLowVisionAlert] = useState(true);
  const [showHighContrastAlert, setShowHighContrastAlert] = useState(true);

  const codeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Alert 
      variant='success'
      title='Success'
      dismissible={true}
      onDismiss={() => console.log('Alert dismissed')}
    >
      Your operation was completed successfully!
    </Alert>
  );
}`;

  const typeCodeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Alert 
      type='warning'
      title='Important Notice'
      showIcon={true}
    >
      Please review your settings before continuing.
    </Alert>
  );
}`;

  const sizeCodeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Alert 
      variant='primary'
      size='lg'
      title='Large Alert'
    >
      This is a larger alert for important messages.
    </Alert>
  );
}`;

  const fontSizeCodeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Alert 
      variant='secondary'
      fontSize='fs-lg'
      title='Large Text'
    >
      This alert has larger text for better readability.
    </Alert>
  );
}`;

  const dismissibleCodeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) return null;

  return (
    <Alert 
      variant='warning'
      title='Dismissible Alert'
      dismissible={true}
      onDismiss={() => setShowAlert(false)}
    >
      Click the X button to dismiss this alert.
    </Alert>
  );
}`;

  const protanopiaCodeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Alert 
      variant='success'
      colorVision='protanopia'
      title='Protanopia Support'
    >
      This alert is optimized for protanopia color vision.
    </Alert>
  );
}`;

  const deuteranopiaCodeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Alert 
      variant='warning'
      colorVision='deuteranopia'
      title='Deuteranopia Support'
    >
      This alert is optimized for deuteranopia color vision.
    </Alert>
  );
}`;

  const tritanopiaCodeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Alert 
      variant='danger'
      colorVision='tritanopia'
      title='Tritanopia Support'
    >
      This alert is optimized for tritanopia color vision.
    </Alert>
  );
}`;

  const lowVisionCodeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Alert 
      variant='primary'
      accessibility='low-vision'
      title='Low Vision Support'
    >
      Enhanced contrast and clarity for low vision users.
    </Alert>
  );
}`;

  const highContrastCodeString = `import { Alert } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Alert 
      variant='secondary'
      accessibility='high-contrast'
      title='High Contrast Mode'
    >
      Maximum contrast for optimal accessibility.
    </Alert>
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
        <h1>Alert</h1>
        <h3>Flexible alert component for displaying important messages and notifications</h3>
        <p>A versatile alert component designed to communicate important information, warnings, errors, and success messages to users. 
          Features comprehensive accessibility support, multiple display variants, dismissible functionality, and customizable styling options 
          to ensure optimal user experience across different contexts and accessibility needs.</p>
        
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>Props</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>AlertProps</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Content properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>children</span>: <span className={styles.component}>React.ReactNode</span>; <span className={styles.comment}>// Alert content</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>title</span>?: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Optional alert title</span><br/><br/>
              
              &nbsp;&nbsp;<span className={styles.comment}>// Styling properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>variant</span>?: <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>type</span>?: <span className={styles.string}>'info'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'error'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'neutral'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>size</span>?: <span className={styles.string}>'xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'xl'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>fontSize</span>?: <span className={styles.string}>'fs-xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-xl'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>className</span>?: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Additional CSS classes</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Accessibility properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>colorVision</span>?: <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>accessibility</span>?: <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>role</span>?: <span className={styles.string}>'alert'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'alertdialog'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'status'</span>; <span className={styles.comment}>// ARIA role</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>ariaLabel</span>?: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Accessibility label</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Interactive properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>dismissible</span>?: <span className={styles.keyword}>boolean</span>; <span className={styles.comment}>// Show dismiss button</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>onDismiss</span>?: () <span className={styles.operator}>=&gt;</span> <span className={styles.keyword}>void</span>; <span className={styles.comment}>// Dismiss handler</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Icon properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>icon</span>?: <span className={styles.component}>React.ReactNode</span>; <span className={styles.comment}>// Custom icon</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>showIcon</span>?: <span className={styles.keyword}>boolean</span>; <span className={styles.comment}>// Show/hide icon</span><br/>
              {'}'}
            </code>
          </div>
        </div>
        
        <h3>Alert Variants</h3>
        <p>Different variants to communicate various types of messages with appropriate visual styling.</p>
        <div className={styles.centered}>
          <Alert variant='primary' title='Primary Alert'>This is a primary alert for general information.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='secondary' title='Secondary Alert'>This is a secondary alert for additional information.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='success' title='Success Alert'>This is a success alert for positive feedback.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='warning' title='Warning Alert'>This is a warning alert for cautionary messages.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='danger' title='Danger Alert'>This is a danger alert for error messages.</Alert>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'success'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'Success'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>dismissible</span><span className={styles.operator}>=</span>{'{'}true{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onDismiss</span><span className={styles.operator}>=</span>{'{'}() =&gt; console.log('Alert dismissed'){'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your operation was completed successfully!<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Alert Types</h3>
        <p>Specialized alert types with semantic meaning and appropriate default styling.</p>
        <div className={styles.centered}>
          <Alert type='info' title='Information'>This is an informational alert.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert type='success' title='Success'>Operation completed successfully.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert type='warning' title='Warning'>Please review this important information.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert type='error' title='Error'>An error occurred during processing.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert type='neutral' title='Neutral'>This is a neutral status message.</Alert>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>TypeDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(typeCodeString, 'type')}>
              {copiedButton === 'type' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>type</span><span className={styles.operator}>=</span><span className={styles.string}>'warning'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'Important Notice'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>showIcon</span><span className={styles.operator}>=</span>{'{'}true{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please review your settings before continuing.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Size Variations</h3>
        <p>Different sizes to accommodate various design needs and content importance levels.</p>
        <div className={styles.centered}>
          <Alert size='xs' title='Extra Small'>Compact alert for minimal space.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert size='sm' title='Small Alert'>Small alert for secondary information.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert size='md' title='Medium Alert'>Standard alert size for most use cases.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert size='lg' title='Large Alert'>Large alert for important messages.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert size='xl' title='Extra Large'>Extra large alert for critical information.</Alert>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'primary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'Large Alert'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a larger alert for important messages.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Font Size Variations</h3>
        <p>Different font sizes for better readability and visual hierarchy.</p>
        <div className={styles.centered}>
          <Alert fontSize='fs-xs' title='Extra Small Text'>Alert with extra small font size.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert fontSize='fs-sm' title='Small Text'>Alert with small font size.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert fontSize='fs-md' title='Medium Text'>Alert with medium font size.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert fontSize='fs-lg' title='Large Text'>Alert with large font size.</Alert>
        </div>
        <div className={styles.centered}>
          <Alert fontSize='fs-xl' title='Extra Large Text'>Alert with extra large font size.</Alert>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>FontSizeDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(fontSizeCodeString, 'fontSize')}>
              {copiedButton === 'fontSize' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>fontSize</span><span className={styles.operator}>=</span><span className={styles.string}>'fs-lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'Large Text'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This alert has larger text for better readability.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Dismissible Alerts</h3>
        <p>Interactive alerts that can be dismissed by users with optional callback handling.</p>
        <div className={styles.centered}>
          {showDismissibleAlert && (
            <Alert 
              variant='warning' 
              title='Dismissible Alert'
              dismissible={true}
              onDismiss={() => setShowDismissibleAlert(false)}
            >
              Click the X button to dismiss this alert.
            </Alert>
          )}
          {!showDismissibleAlert && (
            <button onClick={() => setShowDismissibleAlert(true)} style={{padding: '8px 16px', margin: '10px'}}>
              Show Dismissible Alert
            </button>
          )}
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>DismissibleDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(dismissibleCodeString, 'dismissible')}>
              {copiedButton === 'dismissible' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>showAlert</span>, <span className={styles.component}>setShowAlert</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>true</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>if</span> (!showAlert) <span className={styles.keyword}>return</span> <span className={styles.keyword}>null</span>;<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'warning'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'Dismissible Alert'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>dismissible</span><span className={styles.operator}>=</span>{'{'}true{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onDismiss</span><span className={styles.operator}>=</span>{'{'}() =&gt; setShowAlert(false){'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click the X button to dismiss this alert.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Color Vision Accessibility</h3>
        <p>Specialized color palettes designed for users with different types of color vision deficiencies, ensuring optimal contrast and usability.</p>
        
        <h3>Protanopia Support</h3>
        <p>Optimized color scheme for users with red-green color blindness (protanopia), enhancing distinction between alert types.</p>
        <div className={styles.centered}>
          {showProtanopiaAlert && (
            <Alert variant='primary' colorVision='protanopia' title='Protanopia Primary' dismissible onDismiss={() => setShowProtanopiaAlert(false)}>
              This alert is optimized for protanopia color vision.
            </Alert>
          )}
        </div>
        <div className={styles.centered}>
          <Alert variant='secondary' colorVision='protanopia' title='Protanopia Secondary'>
            Secondary alert with protanopia support.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='success' colorVision='protanopia' title='Protanopia Success'>
            Success message optimized for protanopia.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='warning' colorVision='protanopia' title='Protanopia Warning'>
            Warning alert with protanopia color scheme.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='danger' colorVision='protanopia' title='Protanopia Danger'>
            Danger alert optimized for protanopia vision.
          </Alert>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'success'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'Protanopia Support'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This alert is optimized for protanopia color vision.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          {showDeuteranopiaAlert && (
            <Alert variant='warning' colorVision='deuteranopia' title='Deuteranopia Warning' dismissible onDismiss={() => setShowDeuteranopiaAlert(false)}>
              This alert is optimized for deuteranopia color vision.
            </Alert>
          )}
        </div>
        <div className={styles.centered}>
          <Alert variant='primary' colorVision='deuteranopia' title='Deuteranopia Primary'>
            Primary alert with deuteranopia support.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='secondary' colorVision='deuteranopia' title='Deuteranopia Secondary'>
            Secondary alert optimized for deuteranopia.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='success' colorVision='deuteranopia' title='Deuteranopia Success'>
            Success message with deuteranopia color scheme.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='danger' colorVision='deuteranopia' title='Deuteranopia Danger'>
            Danger alert optimized for deuteranopia vision.
          </Alert>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'warning'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'Deuteranopia Support'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This alert is optimized for deuteranopia color vision.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation between alert types.</p>
        <div className={styles.centered}>
          {showTritanopiaAlert && (
            <Alert variant='danger' colorVision='tritanopia' title='Tritanopia Danger' dismissible onDismiss={() => setShowTritanopiaAlert(false)}>
              This alert is optimized for tritanopia color vision.
            </Alert>
          )}
        </div>
        <div className={styles.centered}>
          <Alert variant='primary' colorVision='tritanopia' title='Tritanopia Primary'>
            Primary alert with tritanopia support.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='secondary' colorVision='tritanopia' title='Tritanopia Secondary'>
            Secondary alert optimized for tritanopia.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='success' colorVision='tritanopia' title='Tritanopia Success'>
            Success message with tritanopia color scheme.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='warning' colorVision='tritanopia' title='Tritanopia Warning'>
            Warning alert optimized for tritanopia vision.
          </Alert>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'danger'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'Tritanopia Support'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This alert is optimized for tritanopia color vision.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          {showLowVisionAlert && (
            <Alert variant='primary' accessibility='low-vision' title='Low Vision Primary' dismissible onDismiss={() => setShowLowVisionAlert(false)}>
              Enhanced contrast and clarity for low vision users.
            </Alert>
          )}
        </div>
        <div className={styles.centered}>
          <Alert variant='secondary' accessibility='low-vision' title='Low Vision Secondary'>
            Secondary alert with low vision enhancements.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='success' accessibility='low-vision' title='Low Vision Success'>
            Success message optimized for low vision.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='warning' accessibility='low-vision' title='Low Vision Warning'>
            Warning alert with low vision support.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='danger' accessibility='low-vision' title='Low Vision Danger'>
            Danger alert enhanced for low vision users.
          </Alert>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'primary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'Low Vision Support'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enhanced contrast and clarity for low vision users.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>High Contrast Mode</h3>
        <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity in alert messages.</p>
        <div className={styles.centered}>
          {showHighContrastAlert && (
            <Alert variant='secondary' accessibility='high-contrast' title='High Contrast Secondary' dismissible onDismiss={() => setShowHighContrastAlert(false)}>
              Maximum contrast for optimal accessibility.
            </Alert>
          )}
        </div>
        <div className={styles.centered}>
          <Alert variant='primary' accessibility='high-contrast' title='High Contrast Primary'>
            Primary alert with maximum contrast.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='success' accessibility='high-contrast' title='High Contrast Success'>
            Success message with high contrast design.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='warning' accessibility='high-contrast' title='High Contrast Warning'>
            Warning alert with maximum contrast ratio.
          </Alert>
        </div>
        <div className={styles.centered}>
          <Alert variant='danger' accessibility='high-contrast' title='High Contrast Danger'>
            Danger alert optimized for high contrast.
          </Alert>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Alert</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Alert</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>title</span><span className={styles.operator}>=</span><span className={styles.string}>'High Contrast Mode'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maximum contrast for optimal accessibility.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Alert</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertPage;
