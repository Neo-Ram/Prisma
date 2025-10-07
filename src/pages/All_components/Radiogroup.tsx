import styles from './Styles.module.css'
import { Radiogroup } from 'neo-ram-prisma';
import { useState } from 'react';

const RadiogroupPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' }
  ];
    
    const codeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';
import { useState } from 'react';

function Demo() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <Radiogroup
      name="demo"
      label="Select an option"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      variant='secondary'
    />
  );
}`;

  const disabledCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';
import { useState } from 'react';

function Demo() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <Radiogroup
      name="disabled-demo"
      label="Disabled options"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      variant='secondary'
      disabled
    />
  );
}`;

  const sizeCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';
import { useState } from 'react';

function Demo() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <Radiogroup
      name="size-demo"
      label="Large size options"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      variant='secondary'
      size='lg'
    />
  );
}`;

  const typographyCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';
import { useState } from 'react';

function Demo() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <Radiogroup
      name="typography-demo"
      label="Large text options"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      variant='secondary'
      fontSize='fs-lg'
    />
  );
}`;

  const directionCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';
import { useState } from 'react';

function Demo() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <Radiogroup
      name="direction-demo"
      label="Horizontal options"
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      variant='secondary'
      direction='horizontal'
    />
  );
}`;

  const protanopiaCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Radiogroup variant='secondary' colorVision='protanopia'></Radiogroup>
  );
}`;

  const deuteranopiaCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Radiogroup variant='secondary' colorVision='deuteranopia'></Radiogroup>
  );
}`;

  const tritanopiaCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Radiogroup variant='secondary' colorVision='tritanopia'></Radiogroup>
  );
}`;

  const lowVisionCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Radiogroup variant='secondary' accessibility='low-vision'></Radiogroup>
  );
}`;

  const highContrastCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Radiogroup variant='secondary' accessibility='high-contrast'></Radiogroup>
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
        <h1>Radiogroup</h1>
        <h3>Interactive radio group component with comprehensive accessibility support</h3>
        <p>A versatile Radiogroup component designed for form inputs with built-in accessibility features and WCAG compliance. 
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
              <span className={styles.keyword}>export type</span> <span className={styles.component}>Variant</span> <span className={styles.operator}>=</span> <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span>;<br/>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>ColorVision</span> <span className={styles.operator}>=</span> <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span>;<br/>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>AccessibilityMode</span> <span className={styles.operator}>=</span> <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span>;<br/>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>Size</span> <span className={styles.operator}>=</span> <span className={styles.string}>'xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'xl'</span>;<br/>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>FontSize</span> <span className={styles.operator}>=</span> <span className={styles.string}>'fs-xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-xl'</span>;<br/>
              <span className={styles.keyword}>export type</span> <span className={styles.component}>Direction</span> <span className={styles.operator}>=</span> <span className={styles.string}>'vertical'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'horizontal'</span>;
            </code>
          </div>
        </div>

        <div className={styles.centered}>
        <Radiogroup name="basic-1" label="Primary options" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} />
        <Radiogroup name="basic-2" label="Secondary options" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' />
        <Radiogroup name="basic-3" label="Success options" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' />
        <Radiogroup name="basic-4" label="Warning options" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' />
        <Radiogroup name="basic-5" label="Danger options" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' />
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>name</span><span className={styles.operator}>=</span><span className={styles.string}>"demo"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Select an option"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>options</span><span className={styles.operator}>=</span>&#123;options&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>value</span><span className={styles.operator}>=</span>&#123;selectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>&#123;setSelectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Disabled State</h3>
        <p>Disabled radio groups prevent user interaction and provide visual indication when options are temporarily unavailable or not permitted.</p>
        <div className={styles.centered}>
          <Radiogroup name="disabled-1" label="Disabled primary" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} disabled />
          <Radiogroup name="disabled-2" label="Disabled secondary" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' disabled />
          <Radiogroup name="disabled-3" label="Disabled success" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' disabled />
          <Radiogroup name="disabled-4" label="Disabled warning" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' disabled />
          <Radiogroup name="disabled-5" label="Disabled danger" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' disabled />
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>name</span><span className={styles.operator}>=</span><span className={styles.string}>"disabled-demo"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Disabled options"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>options</span><span className={styles.operator}>=</span>&#123;options&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>value</span><span className={styles.operator}>=</span>&#123;selectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>&#123;setSelectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>disabled</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Size Variants</h3>
        <p>Choose from multiple size options to maintain visual hierarchy and adapt to different layout contexts and touch targets.</p>
        <div className={styles.centered}>
          <Radiogroup name="size-1" label="Extra small" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} size='xs' />
          <Radiogroup name="size-2" label="Small" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' size='sm' />
          <Radiogroup name="size-3" label="Medium" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' size='md' />
          <Radiogroup name="size-4" label="Large" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' size='lg' />
          <Radiogroup name="size-5" label="Extra large" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' size='xl' />
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>name</span><span className={styles.operator}>=</span><span className={styles.string}>"size-demo"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Large size options"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>options</span><span className={styles.operator}>=</span>&#123;options&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>value</span><span className={styles.operator}>=</span>&#123;selectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>&#123;setSelectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Typography Scale</h3>
        <p>Adjust text size independently from radio group dimensions to optimize readability and maintain consistent typography across your interface.</p>
        <div className={styles.centered}>
          <Radiogroup name="font-1" label="Extra small text" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='primary' fontSize='fs-xs' />
          <Radiogroup name="font-2" label="Small text" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' fontSize='fs-sm' />
          <Radiogroup name="font-3" label="Medium text" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' fontSize='fs-md' />
          <Radiogroup name="font-4" label="Large text" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' fontSize='fs-lg' />
          <Radiogroup name="font-5" label="Extra large text" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' fontSize='fs-xl' />
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>name</span><span className={styles.operator}>=</span><span className={styles.string}>"typography-demo"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Large text options"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>options</span><span className={styles.operator}>=</span>&#123;options&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>value</span><span className={styles.operator}>=</span>&#123;selectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>&#123;setSelectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>fontSize</span><span className={styles.operator}>=</span><span className={styles.string}>'fs-lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Direction Options</h3>
        <p>Control the layout direction of radio group items to optimize space usage and maintain consistent design patterns.</p>
        <div className={styles.centered}>
          <Radiogroup name="dir-1" label="Vertical layout" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='primary' direction='vertical' />
          <Radiogroup name="dir-2" label="Horizontal layout" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' direction='horizontal' />
          <Radiogroup name="dir-3" label="Vertical success" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' direction='vertical' />
          <Radiogroup name="dir-4" label="Horizontal warning" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' direction='horizontal' />
          <Radiogroup name="dir-5" label="Vertical danger" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' direction='vertical' />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>DirectionDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(directionCodeString, 'direction')}>
              {copiedButton === 'direction' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>name</span><span className={styles.operator}>=</span><span className={styles.string}>"direction-demo"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Horizontal options"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>options</span><span className={styles.operator}>=</span>&#123;options&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>value</span><span className={styles.operator}>=</span>&#123;selectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>&#123;setSelectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>direction</span><span className={styles.operator}>=</span><span className={styles.string}>'horizontal'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
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
          <Radiogroup name="protanopia-1" label="Primary protanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='primary' colorVision='protanopia' />
          <Radiogroup name="protanopia-2" label="Secondary protanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' colorVision='protanopia' />
          <Radiogroup name="protanopia-3" label="Success protanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' colorVision='protanopia' />
          <Radiogroup name="protanopia-4" label="Warning protanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' colorVision='protanopia' />
          <Radiogroup name="protanopia-5" label="Danger protanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' colorVision='protanopia' />
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span>&gt;&lt;/<span className={styles.component}>Radiogroup</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Radiogroup name="deuteranopia-1" label="Primary deuteranopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='primary' colorVision='deuteranopia' />
          <Radiogroup name="deuteranopia-2" label="Secondary deuteranopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' colorVision='deuteranopia' />
          <Radiogroup name="deuteranopia-3" label="Success deuteranopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' colorVision='deuteranopia' />
          <Radiogroup name="deuteranopia-4" label="Warning deuteranopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' colorVision='deuteranopia' />
          <Radiogroup name="deuteranopia-5" label="Danger deuteranopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' colorVision='deuteranopia' />
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>name</span><span className={styles.operator}>=</span><span className={styles.string}>"colorvision-demo"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Color vision accessible"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>options</span><span className={styles.operator}>=</span>&#123;options&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>value</span><span className={styles.operator}>=</span>&#123;selectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>&#123;setSelectedValue&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation.</p>
        <div className={styles.centered}>
          <Radiogroup name="tritanopia-1" label="Primary tritanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='primary' colorVision='tritanopia' />
          <Radiogroup name="tritanopia-2" label="Secondary tritanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' colorVision='tritanopia' />
          <Radiogroup name="tritanopia-3" label="Success tritanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' colorVision='tritanopia' />
          <Radiogroup name="tritanopia-4" label="Warning tritanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' colorVision='tritanopia' />
          <Radiogroup name="tritanopia-5" label="Danger tritanopia" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' colorVision='tritanopia' />
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span>&gt;&lt;/<span className={styles.component}>Radiogroup</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Radiogroup name="lowvision-1" label="Primary low vision" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='primary' accessibility='low-vision' />
          <Radiogroup name="lowvision-2" label="Secondary low vision" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' accessibility='low-vision' />
          <Radiogroup name="lowvision-3" label="Success low vision" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' accessibility='low-vision' />
          <Radiogroup name="lowvision-4" label="Warning low vision" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' accessibility='low-vision' />
          <Radiogroup name="lowvision-5" label="Danger low vision" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' accessibility='low-vision' />
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span>&gt;&lt;/<span className={styles.component}>Radiogroup</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
      <h3>High Contrast Mode</h3>
      <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity.</p>
      <div className={styles.centered}>
          <Radiogroup name="highcontrast-1" label="Primary high contrast" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='primary' accessibility='high-contrast' />
          <Radiogroup name="highcontrast-2" label="Secondary high contrast" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='secondary' accessibility='high-contrast' />
          <Radiogroup name="highcontrast-3" label="Success high contrast" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='success' accessibility='high-contrast' />
          <Radiogroup name="highcontrast-4" label="Warning high contrast" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='warning' accessibility='high-contrast' />
          <Radiogroup name="highcontrast-5" label="Danger high contrast" options={options.slice(0, 3)} value={selectedValue} onChange={setSelectedValue} variant='danger' accessibility='high-contrast' />
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span> <span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span> <span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span>&gt;&lt;/<span className={styles.component}>Radiogroup</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
        </div>
      

    </>
  );
};

export default RadiogroupPage;