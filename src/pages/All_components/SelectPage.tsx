import styles from './Styles.module.css'
import { Select } from 'neo-ram-prisma';
import { useState } from 'react';

const SelectPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  
  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4', disabled: true },
  ];

  const codeString = `import { Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function Demo() {
  return (
    <Select variant='secondary' options={options} placeholder="Choose an option" />
  );
}`;

  const sizeCodeString = `import { Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

function Demo() {
  return (
    <Select variant='secondary' size='lg' options={options} placeholder="Large Select" />
  );
}`;

  const typographyCodeString = `import { Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

function Demo() {
  return (
    <Select variant='secondary' fontSize='fs-lg' options={options} placeholder="Large Text" />
  );
}`;

  const protanopiaCodeString = `import { Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

function Demo() {
  return (
    <Select variant='secondary' colorVision='protanopia' options={options} placeholder="Protanopia" />
  );
}`;

  const deuteranopiaCodeString = `import { Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

function Demo() {
  return (
    <Select variant='secondary' colorVision='deuteranopia' options={options} placeholder="Deuteranopia" />
  );
}`;

  const tritanopiaCodeString = `import { Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

function Demo() {
  return (
    <Select variant='secondary' colorVision='tritanopia' options={options} placeholder="Tritanopia" />
  );
}`;

  const lowVisionCodeString = `import { Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

function Demo() {
  return (
    <Select variant='secondary' accessibility='low-vision' options={options} placeholder="Low Vision" />
  );
}`;

  const highContrastCodeString = `import { Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

function Demo() {
  return (
    <Select variant='secondary' accessibility='high-contrast' options={options} placeholder="High Contrast" />
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
        <h1>Select</h1>
        <h3>Interactive dropdown select component with comprehensive accessibility support</h3>
        <p>A versatile select component that allows users to choose from a list of options with built-in accessibility features and WCAG compliance. 
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
              <span className={styles.keyword}>type</span> <span className={styles.component}>Variant</span> <span className={styles.operator}>=</span> <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>ColorVision</span> <span className={styles.operator}>=</span> <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>AccessibilityMode</span> <span className={styles.operator}>=</span> <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>Size</span> <span className={styles.operator}>=</span> <span className={styles.string}>'xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'xl'</span><br/>
              <span className={styles.keyword}>type</span> <span className={styles.component}>FontSize</span> <span className={styles.operator}>=</span> <span className={styles.string}>'fs-xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-xl'</span><br/>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>SelectOption</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.property}>value</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>label</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>disabled</span>?: <span className={styles.keyword}>boolean</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>
        
        <h3>Select variants</h3>
        <p>The select component supports different variants such as primary, secondary, success, warning, and danger.</p>
        <div className={styles.centered}>
          <Select options={selectOptions} placeholder="Primary" value="" onChange={() => {}} />
          <Select variant='secondary' options={selectOptions} placeholder="Secondary" value="" onChange={() => {}} />
          <Select variant='success' options={selectOptions} placeholder="Success" value="" onChange={() => {}} />
          <Select variant='warning' options={selectOptions} placeholder="Warning" value="" onChange={() => {}} />
          <Select variant='danger' options={selectOptions} placeholder="Danger" value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Select</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option1'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 1'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option2'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 2'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option3'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 3'</span> {'}'},<br/>
              ];<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Select</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>options</span><span className={styles.operator}>=</span>{'{'}options{'}'} <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Choose an option"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Size Variants</h3>
        <p>Choose from multiple size options to maintain visual hierarchy and adapt to different layout contexts and touch targets.</p>
        <div className={styles.centered}>
          <Select size='xs' options={selectOptions} placeholder="Very small" value="" onChange={() => {}} />
          <Select variant='secondary' size='sm' options={selectOptions} placeholder="Small" value="" onChange={() => {}} />
          <Select variant='success' size='md' options={selectOptions} placeholder="Medium" value="" onChange={() => {}} />
          <Select variant='warning' size='lg' options={selectOptions} placeholder="Large" value="" onChange={() => {}} />
          <Select variant='danger' size='xl' options={selectOptions} placeholder="X-Large" value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Select</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option1'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 1'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option2'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 2'</span> {'}'},<br/>
              ];<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Select</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span> <span className={styles.property}>options</span><span className={styles.operator}>=</span>{'{'}options{'}'} <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Large Select"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Typography Scale</h3>
        <p>Adjust text size independently from select dimensions to optimize readability and maintain consistent typography across your interface.</p>
        <div className={styles.centered}>
          <Select variant='primary' fontSize='fs-xs' options={selectOptions} placeholder="Very small" value="" onChange={() => {}} />
          <Select variant='secondary' fontSize='fs-sm' options={selectOptions} placeholder="Small" value="" onChange={() => {}} />
          <Select variant='success' fontSize='fs-md' options={selectOptions} placeholder="Medium" value="" onChange={() => {}} />
          <Select variant='warning' fontSize='fs-lg' options={selectOptions} placeholder="Large" value="" onChange={() => {}} />
          <Select variant='danger' fontSize='fs-xl' options={selectOptions} placeholder="X-Large" value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Select</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option1'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 1'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option2'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 2'</span> {'}'},<br/>
              ];<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Select</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>fontSize</span><span className={styles.operator}>=</span><span className={styles.string}>'fs-lg'</span> <span className={styles.property}>options</span><span className={styles.operator}>=</span>{'{'}options{'}'} <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Large Text"</span> /&gt;<br/>
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
          <Select variant='primary' colorVision='protanopia' options={selectOptions} placeholder="Primary" value="" onChange={() => {}} />
          <Select variant='secondary' colorVision='protanopia' options={selectOptions} placeholder="Secondary" value="" onChange={() => {}} />
          <Select variant='success' colorVision='protanopia' options={selectOptions} placeholder="Success" value="" onChange={() => {}} />
          <Select variant='warning' colorVision='protanopia' options={selectOptions} placeholder="Warning" value="" onChange={() => {}} />
          <Select variant='danger' colorVision='protanopia' options={selectOptions} placeholder="Danger" value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Select</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option1'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 1'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option2'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 2'</span> {'}'},<br/>
              ];<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Select</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span> <span className={styles.property}>options</span><span className={styles.operator}>=</span>{'{'}options{'}'} <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Protanopia"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Select variant='primary' colorVision='deuteranopia' options={selectOptions} placeholder="Primary" value="" onChange={() => {}} />
          <Select variant='secondary' colorVision='deuteranopia' options={selectOptions} placeholder="Secondary" value="" onChange={() => {}} />
          <Select variant='success' colorVision='deuteranopia' options={selectOptions} placeholder="Success" value="" onChange={() => {}} />
          <Select variant='warning' colorVision='deuteranopia' options={selectOptions} placeholder="Warning" value="" onChange={() => {}} />
          <Select variant='danger' colorVision='deuteranopia' options={selectOptions} placeholder="Danger" value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Select</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option1'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 1'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option2'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 2'</span> {'}'},<br/>
              ];<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Select</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span> <span className={styles.property}>options</span><span className={styles.operator}>=</span>{'{'}options{'}'} <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Deuteranopia"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation.</p>
        <div className={styles.centered}>
          <Select variant='primary' colorVision='tritanopia' options={selectOptions} placeholder="Primary" value="" onChange={() => {}} />
          <Select variant='secondary' colorVision='tritanopia' options={selectOptions} placeholder="Secondary" value="" onChange={() => {}} />
          <Select variant='success' colorVision='tritanopia' options={selectOptions} placeholder="Success" value="" onChange={() => {}} />
          <Select variant='warning' colorVision='tritanopia' options={selectOptions} placeholder="Warning" value="" onChange={() => {}} />
          <Select variant='danger' colorVision='tritanopia' options={selectOptions} placeholder="Danger" value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Select</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option1'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 1'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option2'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 2'</span> {'}'},<br/>
              ];<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Select</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span> <span className={styles.property}>options</span><span className={styles.operator}>=</span>{'{'}options{'}'} <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Tritanopia"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Select variant='primary' accessibility='low-vision' options={selectOptions} placeholder="Primary" value="" onChange={() => {}} />
          <Select variant='secondary' accessibility='low-vision' options={selectOptions} placeholder="Secondary" value="" onChange={() => {}} />
          <Select variant='success' accessibility='low-vision' options={selectOptions} placeholder="Success" value="" onChange={() => {}} />
          <Select variant='warning' accessibility='low-vision' options={selectOptions} placeholder="Warning" value="" onChange={() => {}} />
          <Select variant='danger' accessibility='low-vision' options={selectOptions} placeholder="Danger" value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Select</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option1'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 1'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option2'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 2'</span> {'}'},<br/>
              ];<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Select</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span> <span className={styles.property}>options</span><span className={styles.operator}>=</span>{'{'}options{'}'} <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Low Vision"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>High Contrast Mode</h3>
        <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity.</p>
        <div className={styles.centered}>
          <Select variant='primary' accessibility='high-contrast' options={selectOptions} placeholder="Primary" value="" onChange={() => {}} />
          <Select variant='secondary' accessibility='high-contrast' options={selectOptions} placeholder="Secondary" value="" onChange={() => {}} />
          <Select variant='success' accessibility='high-contrast' options={selectOptions} placeholder="Success" value="" onChange={() => {}} />
          <Select variant='warning' accessibility='high-contrast' options={selectOptions} placeholder="Warning" value="" onChange={() => {}} />
          <Select variant='danger' accessibility='high-contrast' options={selectOptions} placeholder="Danger" value="" onChange={() => {}} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Select</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option1'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 1'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option2'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 2'</span> {'}'},<br/>
              ];<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Select</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span> <span className={styles.property}>options</span><span className={styles.operator}>=</span>{'{'}options{'}'} <span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"High Contrast"</span> /&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPage;
