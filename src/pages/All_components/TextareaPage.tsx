import styles from './Styles.module.css'
import { Textarea } from 'neo-ram-prisma';
import { useState } from 'react';

const TextareaPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);

  const codeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      label="Message" 
      placeholder="Enter your message here..." 
      rows={4} 
    />
  );
}`;

  const disabledCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      label="Disabled Textarea" 
      placeholder="This textarea is disabled" 
      disabled 
      rows={4} 
    />
  );
}`;

  const errorCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='danger' 
      label="Message" 
      placeholder="Enter your message..." 
      error="This field is required" 
      rows={4} 
    />
  );
}`;

  const sizeCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      textareaSize='lg' 
      label="Large Textarea" 
      placeholder="Large size textarea" 
      rows={4} 
    />
  );
}`;

  const typographyCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      fontSize='fs-lg' 
      label="Large Font" 
      placeholder="Large font size textarea" 
      rows={4} 
    />
  );
}`;

  const resizeCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      resize='both' 
      label="Resizable Textarea" 
      placeholder="You can resize this textarea" 
      rows={4} 
    />
  );
}`;

  const protanopiaCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      colorVision='protanopia' 
      label="Protanopia Support" 
      placeholder="Optimized for protanopia" 
      rows={4} 
    />
  );
}`;

  const deuteranopiaCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      colorVision='deuteranopia' 
      label="Deuteranopia Support" 
      placeholder="Optimized for deuteranopia" 
      rows={4} 
    />
  );
}`;

  const tritanopiaCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      colorVision='tritanopia' 
      label="Tritanopia Support" 
      placeholder="Optimized for tritanopia" 
      rows={4} 
    />
  );
}`;

  const lowVisionCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      accessibility='low-vision' 
      label="Low Vision Support" 
      placeholder="Enhanced for low vision" 
      rows={4} 
    />
  );
}`;

  const highContrastCodeString = `import { Textarea } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Textarea 
      variant='secondary' 
      accessibility='high-contrast' 
      label="High Contrast" 
      placeholder="Maximum contrast design" 
      rows={4} 
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
        <h1>Textarea</h1>
        <h3>Multi-line text input component with comprehensive accessibility support</h3>
        <p>A versatile textarea component that allows users to input multi-line text with built-in accessibility features and WCAG compliance. 
          Supports multiple variants, sizes, resize options, and customization features to meet diverse design requirements.</p>
        
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
              <span className={styles.keyword}>type</span> <span className={styles.component}>Size</span> <span className={styles.operator}>=</span> <span className={styles.string}>'xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'xl'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>FontSize</span> <span className={styles.operator}>=</span> <span className={styles.string}>'fs-xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-xl'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>Resize</span> <span className={styles.operator}>=</span> <span className={styles.string}>'none'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'vertical'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'horizontal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'both'</span>
            </code>
          </div>
        </div>
        
        <h3>Textarea variants</h3>
        <p>The textarea component supports different variants such as primary, secondary, success, warning, and danger.</p>
        <div className={styles.centered}>
          <Textarea label="Primary" placeholder="Primary textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='secondary' label="Secondary" placeholder="Secondary textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' label="Success" placeholder="Success textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='warning' label="Warning" placeholder="Warning textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' label="Danger" placeholder="Danger textarea" rows={3} value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Message"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Enter your message here..."</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Disabled State</h3>
        <p>Disabled textareas prevent user interaction and provide visual indication when input is temporarily unavailable or not permitted.</p>
        <div className={styles.centered}>
          <Textarea disabled label="Disabled Primary" placeholder="Disabled primary textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='secondary' disabled label="Disabled Secondary" placeholder="Disabled secondary textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' disabled label="Disabled Success" placeholder="Disabled success textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='warning' disabled label="Disabled Warning" placeholder="Disabled warning textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' disabled label="Disabled Danger" placeholder="Disabled danger textarea" rows={3} value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Disabled Textarea"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"This textarea is disabled"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>disabled</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Error State</h3>
        <p>Display error messages to provide feedback when validation fails or input requirements are not met.</p>
        <div className={styles.centered}>
          <Textarea variant='danger' label="Required Field" placeholder="This field is required" error="This field is required" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' label="Email" placeholder="Enter your email" error="Please enter a valid email address" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' label="Message" placeholder="Enter your message" error="Message must be at least 10 characters" rows={3} value="" onChange={() => {}} />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>ErrorDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(errorCodeString, 'error')}>
              {copiedButton === 'error' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'danger'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Message"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Enter your message..."</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>error</span><span className={styles.operator}>=</span><span className={styles.string}>"This field is required"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Size Variants</h3>
        <p>Choose from multiple size options to maintain visual hierarchy and adapt to different layout contexts and content requirements.</p>
        <div className={styles.centered}>
          <Textarea textareaSize='xs' label="Extra Small" placeholder="Extra small textarea" rows={2} value="" onChange={() => {}} />
          <Textarea variant='secondary' textareaSize='sm' label="Small" placeholder="Small textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' textareaSize='md' label="Medium" placeholder="Medium textarea" rows={4} value="" onChange={() => {}} />
          <Textarea variant='warning' textareaSize='lg' label="Large" placeholder="Large textarea" rows={5} value="" onChange={() => {}} />
          <Textarea variant='danger' textareaSize='xl' label="Extra Large" placeholder="Extra large textarea" rows={6} value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>textareaSize</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Large Textarea"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Large size textarea"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Typography Scale</h3>
        <p>Adjust text size independently from textarea dimensions to optimize readability and maintain consistent typography across your interface.</p>
        <div className={styles.centered}>
          <Textarea variant='primary' fontSize='fs-xs' label="Extra Small Font" placeholder="Extra small font size" rows={3} value="" onChange={() => {}} />
          <Textarea variant='secondary' fontSize='fs-sm' label="Small Font" placeholder="Small font size" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' fontSize='fs-md' label="Medium Font" placeholder="Medium font size" rows={3} value="" onChange={() => {}} />
          <Textarea variant='warning' fontSize='fs-lg' label="Large Font" placeholder="Large font size" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' fontSize='fs-xl' label="Extra Large Font" placeholder="Extra large font size" rows={3} value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>fontSize</span><span className={styles.operator}>=</span><span className={styles.string}>'fs-lg'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Large Font"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Large font size textarea"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Resize Options</h3>
        <p>Control how users can resize the textarea to fit their content needs. Options include none, vertical, horizontal, or both directions.</p>
        <div className={styles.centered}>
          <Textarea variant='primary' resize='none' label="No Resize" placeholder="This textarea cannot be resized" rows={3} value="" onChange={() => {}} />
          <Textarea variant='secondary' resize='vertical' label="Vertical Resize" placeholder="This textarea can be resized vertically" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' resize='horizontal' label="Horizontal Resize" placeholder="This textarea can be resized horizontally" rows={3} value="" onChange={() => {}} />
          <Textarea variant='warning' resize='both' label="Both Directions" placeholder="This textarea can be resized in both directions" rows={3} value="" onChange={() => {}} />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>ResizeDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(resizeCodeString, 'resize')}>
              {copiedButton === 'resize' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>resize</span><span className={styles.operator}>=</span><span className={styles.string}>'both'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Resizable Textarea"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"You can resize this textarea"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
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
          <Textarea variant='primary' colorVision='protanopia' label="Primary" placeholder="Primary protanopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='secondary' colorVision='protanopia' label="Secondary" placeholder="Secondary protanopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' colorVision='protanopia' label="Success" placeholder="Success protanopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='warning' colorVision='protanopia' label="Warning" placeholder="Warning protanopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' colorVision='protanopia' label="Danger" placeholder="Danger protanopia textarea" rows={3} value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Protanopia Support"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Optimized for protanopia"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Textarea variant='primary' colorVision='deuteranopia' label="Primary" placeholder="Primary deuteranopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='secondary' colorVision='deuteranopia' label="Secondary" placeholder="Secondary deuteranopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' colorVision='deuteranopia' label="Success" placeholder="Success deuteranopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='warning' colorVision='deuteranopia' label="Warning" placeholder="Warning deuteranopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' colorVision='deuteranopia' label="Danger" placeholder="Danger deuteranopia textarea" rows={3} value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Deuteranopia Support"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Optimized for deuteranopia"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation.</p>
        <div className={styles.centered}>
          <Textarea variant='primary' colorVision='tritanopia' label="Primary" placeholder="Primary tritanopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='secondary' colorVision='tritanopia' label="Secondary" placeholder="Secondary tritanopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' colorVision='tritanopia' label="Success" placeholder="Success tritanopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='warning' colorVision='tritanopia' label="Warning" placeholder="Warning tritanopia textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' colorVision='tritanopia' label="Danger" placeholder="Danger tritanopia textarea" rows={3} value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Tritanopia Support"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Optimized for tritanopia"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Textarea variant='primary' accessibility='low-vision' label="Primary" placeholder="Primary low vision textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='secondary' accessibility='low-vision' label="Secondary" placeholder="Secondary low vision textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' accessibility='low-vision' label="Success" placeholder="Success low vision textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='warning' accessibility='low-vision' label="Warning" placeholder="Warning low vision textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' accessibility='low-vision' label="Danger" placeholder="Danger low vision textarea" rows={3} value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Low Vision Support"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Enhanced for low vision"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>High Contrast Mode</h3>
        <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity.</p>
        <div className={styles.centered}>
          <Textarea variant='primary' accessibility='high-contrast' label="Primary" placeholder="Primary high contrast textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='secondary' accessibility='high-contrast' label="Secondary" placeholder="Secondary high contrast textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='success' accessibility='high-contrast' label="Success" placeholder="Success high contrast textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='warning' accessibility='high-contrast' label="Warning" placeholder="Warning high contrast textarea" rows={3} value="" onChange={() => {}} />
          <Textarea variant='danger' accessibility='high-contrast' label="Danger" placeholder="Danger high contrast textarea" rows={3} value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Textarea</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Textarea</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"High Contrast"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Maximum contrast design"</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>rows</span><span className={styles.operator}>=</span>{'{'}4{'}'} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextareaPage;