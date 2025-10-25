import styles from './Styles.module.css'
import { Select } from 'neo-ram-prisma';
import { useState } from 'react';

const SelectPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  const [selectedCustom1, setSelectedCustom1] = useState('');
  const [selectedCustom2, setSelectedCustom2] = useState('');
  const [selectedCustom3, setSelectedCustom3] = useState('');
  const [selectedCustom4, setSelectedCustom4] = useState('');
  const [selectedCustom5, setSelectedCustom5] = useState('');
  
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

  const customColorsCodeString = `import { Select } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

function Demo() {
  return (
    <Select
      label="Select Country"
      placeholder="Choose a country"
      value="option1"
      onChange={(value) => setValue(value)}
      colorVision="deuteranopia"
      variant='custom'
      options={options}
      customColors={{
        // Normal vision colors
        defaultBg: '#FFFFFF',
        defaultBorder: '#CCCCCC',
        defaultBorderFocus: '#1976D2',
        defaultColor: '#000000',
        defaultPlaceholder: '#999999',
        defaultShadowFocus: 'rgba(25, 118, 210, 0.2)',

        // Protanopia (Red-blind)
        protanopiaBg: '#FFFFFF',
        protanopiaBorder: '#E6B800',
        protanopiaBorderFocus: '#FFA500',
        protanopiaColor: '#000000',
        protanopiaPlaceholder: '#999999',
        protanopiaShadowFocus: 'rgba(255, 165, 0, 0.2)',

        // Deuteranopia (Green-blind)
        deuteranopiaBg: '#FFFFFF',
        deuteranopiaBorder: '#E6B8D7',
        deuteranopiaBorderFocus: '#9C27B0',
        deuteranopiaColor: '#000000',
        deuteranopiaPlaceholder: '#999999',
        deuteranopiaShadowFocus: 'rgba(156, 39, 176, 0.2)',

        // Tritanopia (Blue-blind)
        tritanopiaBg: '#FFFFFF',
        tritanopiaBorder: '#B3E5FC',
        tritanopiaBorderFocus: '#00BCD4',
        tritanopiaColor: '#000000',
        tritanopiaPlaceholder: '#999999',
        tritanopiaShadowFocus: 'rgba(0, 188, 212, 0.2)'
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
              <span className={styles.keyword}>type</span> <span className={styles.component}>Variant</span> <span className={styles.operator}>=</span> <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'custom'</span><br/>
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

        <h3>Custom Colors</h3>
        <p>The <code>customColors</code> property allows you to define custom colors for all color vision accessibility modes:</p>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>CustomSelectColors Interface</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>CustomSelectColors</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBg</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Background color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorder</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Border color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorderFocus</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Focus border</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Text color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultPlaceholder</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Placeholder color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultShadowFocus</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Focus shadow</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors (Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorderFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaPlaceholder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaShadowFocus</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors (Most Common Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaPlaceholder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaShadowFocus</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors (Blue-Yellow Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaPlaceholder</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaShadowFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>

        <div className={styles.centered}>
          <Select 
            variant='custom'
            options={selectOptions} 
            placeholder="Blue Custom" 
            value={selectedCustom1} 
            onChange={setSelectedCustom1}
            customColors={{
              defaultBg: '#FFFFFF',
              defaultBorder: '#007BFF',
              defaultBorderFocus: '#0056B3',
              defaultColor: '#000000',
              defaultPlaceholder: '#999999',
              defaultShadowFocus: 'rgba(0, 123, 255, 0.2)',
              protanopiaBg: '#FFFFFF',
              protanopiaBorder: '#E6B800',
              protanopiaBorderFocus: '#FFA500',
              protanopiaColor: '#000000',
              protanopiaPlaceholder: '#999999',
              protanopiaShadowFocus: 'rgba(255, 165, 0, 0.2)',
              deuteranopiaBg: '#FFFFFF',
              deuteranopiaBorder: '#E6B8D7',
              deuteranopiaBorderFocus: '#9C27B0',
              deuteranopiaColor: '#000000',
              deuteranopiaPlaceholder: '#999999',
              deuteranopiaShadowFocus: 'rgba(156, 39, 176, 0.2)',
              tritanopiaBg: '#FFFFFF',
              tritanopiaBorder: '#B3E5FC',
              tritanopiaBorderFocus: '#00BCD4',
              tritanopiaColor: '#000000',
              tritanopiaPlaceholder: '#999999',
              tritanopiaShadowFocus: 'rgba(0, 188, 212, 0.2)'
            }}
          />
          <Select 
            variant='custom'
            colorVision='protanopia'
            options={selectOptions} 
            placeholder="Orange Custom" 
            value={selectedCustom2} 
            onChange={setSelectedCustom2}
            customColors={{
              defaultBg: '#FFFFFF',
              defaultBorder: '#FF8C00',
              defaultBorderFocus: '#E67E00',
              defaultColor: '#000000',
              defaultPlaceholder: '#999999',
              defaultShadowFocus: 'rgba(255, 140, 0, 0.2)',
              protanopiaBg: '#FFFFFF',
              protanopiaBorder: '#FFA500',
              protanopiaBorderFocus: '#FF8C00',
              protanopiaColor: '#000000',
              protanopiaPlaceholder: '#999999',
              protanopiaShadowFocus: 'rgba(255, 165, 0, 0.2)',
              deuteranopiaBg: '#FFFFFF',
              deuteranopiaBorder: '#FFA500',
              deuteranopiaBorderFocus: '#FF8C00',
              deuteranopiaColor: '#000000',
              deuteranopiaPlaceholder: '#999999',
              deuteranopiaShadowFocus: 'rgba(255, 165, 0, 0.2)',
              tritanopiaBg: '#FFFFFF',
              tritanopiaBorder: '#FFA500',
              tritanopiaBorderFocus: '#FF8C00',
              tritanopiaColor: '#000000',
              tritanopiaPlaceholder: '#999999',
              tritanopiaShadowFocus: 'rgba(255, 165, 0, 0.2)'
            }}
          />
          <Select 
            variant='custom'
            colorVision='deuteranopia'
            options={selectOptions} 
            placeholder="Green Custom" 
            value={selectedCustom3} 
            onChange={setSelectedCustom3}
            customColors={{
              defaultBg: '#FFFFFF',
              defaultBorder: '#28A745',
              defaultBorderFocus: '#1E7E34',
              defaultColor: '#000000',
              defaultPlaceholder: '#999999',
              defaultShadowFocus: 'rgba(40, 167, 69, 0.2)',
              protanopiaBg: '#FFFFFF',
              protanopiaBorder: '#28A745',
              protanopiaBorderFocus: '#1E7E34',
              protanopiaColor: '#000000',
              protanopiaPlaceholder: '#999999',
              protanopiaShadowFocus: 'rgba(40, 167, 69, 0.2)',
              deuteranopiaBg: '#FFFFFF',
              deuteranopiaBorder: '#4CAF50',
              deuteranopiaBorderFocus: '#2E7D32',
              deuteranopiaColor: '#000000',
              deuteranopiaPlaceholder: '#999999',
              deuteranopiaShadowFocus: 'rgba(76, 175, 80, 0.2)',
              tritanopiaBg: '#FFFFFF',
              tritanopiaBorder: '#4CAF50',
              tritanopiaBorderFocus: '#2E7D32',
              tritanopiaColor: '#000000',
              tritanopiaPlaceholder: '#999999',
              tritanopiaShadowFocus: 'rgba(76, 175, 80, 0.2)'
            }}
          />
          <Select 
            variant='custom'
            colorVision='tritanopia'
            options={selectOptions} 
            placeholder="Purple Custom" 
            value={selectedCustom4} 
            onChange={setSelectedCustom4}
            customColors={{
              defaultBg: '#FFFFFF',
              defaultBorder: '#A855F7',
              defaultBorderFocus: '#7E22CE',
              defaultColor: '#000000',
              defaultPlaceholder: '#999999',
              defaultShadowFocus: 'rgba(168, 85, 247, 0.2)',
              protanopiaBg: '#FFFFFF',
              protanopiaBorder: '#A855F7',
              protanopiaBorderFocus: '#7E22CE',
              protanopiaColor: '#000000',
              protanopiaPlaceholder: '#999999',
              protanopiaShadowFocus: 'rgba(168, 85, 247, 0.2)',
              deuteranopiaBg: '#FFFFFF',
              deuteranopiaBorder: '#A855F7',
              deuteranopiaBorderFocus: '#7E22CE',
              deuteranopiaColor: '#000000',
              deuteranopiaPlaceholder: '#999999',
              deuteranopiaShadowFocus: 'rgba(168, 85, 247, 0.2)',
              tritanopiaBg: '#FFFFFF',
              tritanopiaBorder: '#D946EF',
              tritanopiaBorderFocus: '#A855F7',
              tritanopiaColor: '#000000',
              tritanopiaPlaceholder: '#999999',
              tritanopiaShadowFocus: 'rgba(217, 70, 239, 0.2)'
            }}
          />
          <Select 
            variant='custom'
            options={selectOptions} 
            placeholder="Pink Custom" 
            value={selectedCustom5} 
            onChange={setSelectedCustom5}
            customColors={{
              defaultBg: '#FFFFFF',
              defaultBorder: '#EC4899',
              defaultBorderFocus: '#BE185D',
              defaultColor: '#000000',
              defaultPlaceholder: '#999999',
              defaultShadowFocus: 'rgba(236, 72, 153, 0.2)',
              protanopiaBg: '#FFFFFF',
              protanopiaBorder: '#F472B6',
              protanopiaBorderFocus: '#EC4899',
              protanopiaColor: '#000000',
              protanopiaPlaceholder: '#999999',
              protanopiaShadowFocus: 'rgba(244, 114, 182, 0.2)',
              deuteranopiaBg: '#FFFFFF',
              deuteranopiaBorder: '#F472B6',
              deuteranopiaBorderFocus: '#EC4899',
              deuteranopiaColor: '#000000',
              deuteranopiaPlaceholder: '#999999',
              deuteranopiaShadowFocus: 'rgba(244, 114, 182, 0.2)',
              tritanopiaBg: '#FFFFFF',
              tritanopiaBorder: '#F472B6',
              tritanopiaBorderFocus: '#EC4899',
              tritanopiaColor: '#000000',
              tritanopiaPlaceholder: '#999999',
              tritanopiaShadowFocus: 'rgba(244, 114, 182, 0.2)'
            }}
          />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Select</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option1'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 1'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option2'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 2'</span> {'}'},<br/>
              &nbsp;&nbsp;{'{'} <span className={styles.property}>value</span>: <span className={styles.string}>'option3'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Option 3'</span> {'}'},<br/>
              ];<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Select</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Select Country"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>placeholder</span><span className={styles.operator}>=</span><span className={styles.string}>"Choose a country"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>value</span><span className={styles.operator}>=</span><span className={styles.string}>"option1"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>{'{'}<span className={styles.function}>(value)</span> {'=> setValue(value)'}{'}'}  <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>"deuteranopia"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'custom'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>options</span><span className={styles.operator}>=</span>{'{'}<span className={styles.component}>options</span>{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>customColors</span><span className={styles.operator}>={'{'}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBg</span>: <span className={styles.string}>'#FFFFFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorder</span>: <span className={styles.string}>'#CCCCCC'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorderFocus</span>: <span className={styles.string}>'#1976D2'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.string}>'#000000'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultPlaceholder</span>: <span className={styles.string}>'#999999'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultShadowFocus</span>: <span className={styles.string}>'rgba(25, 118, 210, 0.2)'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBg</span>: <span className={styles.string}>'#FFFFFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorder</span>: <span className={styles.string}>'#E6B8D7'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderFocus</span>: <span className={styles.string}>'#9C27B0'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.string}>'#000000'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaPlaceholder</span>: <span className={styles.string}>'#999999'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaShadowFocus</span>: <span className={styles.string}>'rgba(156, 39, 176, 0.2)'</span><br/>
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

export default SelectPage;
