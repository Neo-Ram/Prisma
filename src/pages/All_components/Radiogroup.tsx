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

  const customColorsCodeString = `import { Radiogroup } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';
import { useState } from 'react';

function Demo() {
  const [plan, setPlan] = useState('basic');
  const options = [
    { value: 'basic', label: 'Basic', description: 'Perfect for individuals' },
    { value: 'pro', label: 'Pro', description: 'Best for teams' },
    { value: 'enterprise', label: 'Enterprise', description: 'For large organizations' }
  ];

  return (
    <Radiogroup
      name='plan'
      label='Choose your plan'
      variant='custom'
      colorVision='protanopia'
      options={options}
      value={plan}
      onChange={setPlan}
      customColors={{
        // Normal vision colors
        defaultColor: '#1976D2',
        defaultBorderColor: '#CCCCCC',
        defaultBorderColorHover: '#1976D2',
        defaultBorderColorFocus: '#1976D2',
        defaultLabelColor: '#000000',
        defaultDescriptionColor: '#666666',
        // Protanopia
        protanopiaColor: '#FFA500',
        protanopiaBorderColor: '#E6B800',
        protanopiaBorderColorHover: '#FFA500',
        protanopiaBorderColorFocus: '#FFA500',
        protanopiaLabelColor: '#000000',
        protanopiaDescriptionColor: '#666666',
        // Deuteranopia
        deuteranopiaColor: '#9C27B0',
        deuteranopiaBorderColor: '#E6B8D7',
        deuteranopiaBorderColorHover: '#9C27B0',
        deuteranopiaBorderColorFocus: '#9C27B0',
        deuteranopiaLabelColor: '#000000',
        deuteranopiaDescriptionColor: '#666666',
        // Tritanopia
        tritanopiaColor: '#00BCD4',
        tritanopiaBorderColor: '#B3E5FC',
        tritanopiaBorderColorHover: '#00BCD4',
        tritanopiaBorderColorFocus: '#00BCD4',
        tritanopiaLabelColor: '#000000',
        tritanopiaDescriptionColor: '#666666'
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
              <span className={styles.keyword}>export type</span> <span className={styles.component}>Variant</span> <span className={styles.operator}>=</span> <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'custom'</span>;<br/>
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

        <h3>Custom Colors</h3>
        <p>The <code>customColors</code> property allows you to define custom colors for all color vision accessibility modes:</p>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>CustomRadiogroupColors Interface</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>CustomRadiogroupColors</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Radio button color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorderColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Border color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorderColorHover</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Hover border</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorderColorFocus</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Focus border</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultLabelColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Label text color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultDescriptionColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Description text color</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors (Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorderColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorderColorHover</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorderColorFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaLabelColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaDescriptionColor</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors (Most Common Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderColorHover</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderColorFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaLabelColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaDescriptionColor</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors (Blue-Yellow Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderColorHover</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderColorFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaLabelColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaDescriptionColor</span>: <span className={styles.keyword}>string</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>

        <div className={styles.centered}>
          <Radiogroup 
            name="custom-1" 
            label="Blue Plan" 
            variant='custom'
            options={options.slice(0, 3)} 
            value={selectedValue} 
            onChange={setSelectedValue}
            customColors={{
              defaultColor: '#007BFF',
              defaultBorderColor: '#CCCCCC',
              defaultBorderColorHover: '#007BFF',
              defaultBorderColorFocus: '#007BFF',
              defaultLabelColor: '#000000',
              defaultDescriptionColor: '#666666',
              protanopiaColor: '#007BFF',
              protanopiaBorderColor: '#CCCCCC',
              protanopiaBorderColorHover: '#007BFF',
              protanopiaBorderColorFocus: '#007BFF',
              protanopiaLabelColor: '#000000',
              protanopiaDescriptionColor: '#666666',
              deuteranopiaColor: '#007BFF',
              deuteranopiaBorderColor: '#CCCCCC',
              deuteranopiaBorderColorHover: '#007BFF',
              deuteranopiaBorderColorFocus: '#007BFF',
              deuteranopiaLabelColor: '#000000',
              deuteranopiaDescriptionColor: '#666666',
              tritanopiaColor: '#007BFF',
              tritanopiaBorderColor: '#CCCCCC',
              tritanopiaBorderColorHover: '#007BFF',
              tritanopiaBorderColorFocus: '#007BFF',
              tritanopiaLabelColor: '#000000',
              tritanopiaDescriptionColor: '#666666'
            }}
          />
          <Radiogroup 
            name="custom-2" 
            label="Orange Plan" 
            variant='custom'
            colorVision='protanopia'
            options={options.slice(0, 3)} 
            value={selectedValue} 
            onChange={setSelectedValue}
            customColors={{
              defaultColor: '#FF8C00',
              defaultBorderColor: '#E6B800',
              defaultBorderColorHover: '#FF8C00',
              defaultBorderColorFocus: '#FF8C00',
              defaultLabelColor: '#000000',
              defaultDescriptionColor: '#666666',
              protanopiaColor: '#FFB84D',
              protanopiaBorderColor: '#FFA500',
              protanopiaBorderColorHover: '#FFB84D',
              protanopiaBorderColorFocus: '#FFB84D',
              protanopiaLabelColor: '#000000',
              protanopiaDescriptionColor: '#666666',
              deuteranopiaColor: '#FFB84D',
              deuteranopiaBorderColor: '#FFA500',
              deuteranopiaBorderColorHover: '#FFB84D',
              deuteranopiaBorderColorFocus: '#FFB84D',
              deuteranopiaLabelColor: '#000000',
              deuteranopiaDescriptionColor: '#666666',
              tritanopiaColor: '#FFB84D',
              tritanopiaBorderColor: '#FFA500',
              tritanopiaBorderColorHover: '#FFB84D',
              tritanopiaBorderColorFocus: '#FFB84D',
              tritanopiaLabelColor: '#000000',
              tritanopiaDescriptionColor: '#666666'
            }}
          />
          <Radiogroup 
            name="custom-3" 
            label="Green Plan" 
            variant='custom'
            colorVision='deuteranopia'
            options={options.slice(0, 3)} 
            value={selectedValue} 
            onChange={setSelectedValue}
            customColors={{
              defaultColor: '#28A745',
              defaultBorderColor: '#CCCCCC',
              defaultBorderColorHover: '#28A745',
              defaultBorderColorFocus: '#28A745',
              defaultLabelColor: '#000000',
              defaultDescriptionColor: '#666666',
              protanopiaColor: '#28A745',
              protanopiaBorderColor: '#CCCCCC',
              protanopiaBorderColorHover: '#28A745',
              protanopiaBorderColorFocus: '#28A745',
              protanopiaLabelColor: '#000000',
              protanopiaDescriptionColor: '#666666',
              deuteranopiaColor: '#4CAF50',
              deuteranopiaBorderColor: '#CCCCCC',
              deuteranopiaBorderColorHover: '#4CAF50',
              deuteranopiaBorderColorFocus: '#4CAF50',
              deuteranopiaLabelColor: '#000000',
              deuteranopiaDescriptionColor: '#666666',
              tritanopiaColor: '#4CAF50',
              tritanopiaBorderColor: '#CCCCCC',
              tritanopiaBorderColorHover: '#4CAF50',
              tritanopiaBorderColorFocus: '#4CAF50',
              tritanopiaLabelColor: '#000000',
              tritanopiaDescriptionColor: '#666666'
            }}
          />
          <Radiogroup 
            name="custom-4" 
            label="Purple Plan" 
            variant='custom'
            colorVision='tritanopia'
            options={options.slice(0, 3)} 
            value={selectedValue} 
            onChange={setSelectedValue}
            customColors={{
              defaultColor: '#A855F7',
              defaultBorderColor: '#CCCCCC',
              defaultBorderColorHover: '#A855F7',
              defaultBorderColorFocus: '#A855F7',
              defaultLabelColor: '#000000',
              defaultDescriptionColor: '#666666',
              protanopiaColor: '#A855F7',
              protanopiaBorderColor: '#CCCCCC',
              protanopiaBorderColorHover: '#A855F7',
              protanopiaBorderColorFocus: '#A855F7',
              protanopiaLabelColor: '#000000',
              protanopiaDescriptionColor: '#666666',
              deuteranopiaColor: '#A855F7',
              deuteranopiaBorderColor: '#CCCCCC',
              deuteranopiaBorderColorHover: '#A855F7',
              deuteranopiaBorderColorFocus: '#A855F7',
              deuteranopiaLabelColor: '#000000',
              deuteranopiaDescriptionColor: '#666666',
              tritanopiaColor: '#D946EF',
              tritanopiaBorderColor: '#CCCCCC',
              tritanopiaBorderColorHover: '#D946EF',
              tritanopiaBorderColorFocus: '#D946EF',
              tritanopiaLabelColor: '#000000',
              tritanopiaDescriptionColor: '#666666'
            }}
          />
          <Radiogroup 
            name="custom-5" 
            label="Pink Plan" 
            variant='custom'
            options={options.slice(0, 3)} 
            value={selectedValue} 
            onChange={setSelectedValue}
            customColors={{
              defaultColor: '#EC4899',
              defaultBorderColor: '#CCCCCC',
              defaultBorderColorHover: '#EC4899',
              defaultBorderColorFocus: '#EC4899',
              defaultLabelColor: '#000000',
              defaultDescriptionColor: '#666666',
              protanopiaColor: '#F472B6',
              protanopiaBorderColor: '#EC4899',
              protanopiaBorderColorHover: '#F472B6',
              protanopiaBorderColorFocus: '#F472B6',
              protanopiaLabelColor: '#000000',
              protanopiaDescriptionColor: '#666666',
              deuteranopiaColor: '#F472B6',
              deuteranopiaBorderColor: '#EC4899',
              deuteranopiaBorderColorHover: '#F472B6',
              deuteranopiaBorderColorFocus: '#F472B6',
              deuteranopiaLabelColor: '#000000',
              deuteranopiaDescriptionColor: '#666666',
              tritanopiaColor: '#F472B6',
              tritanopiaBorderColor: '#EC4899',
              tritanopiaBorderColorHover: '#F472B6',
              tritanopiaBorderColorFocus: '#F472B6',
              tritanopiaLabelColor: '#000000',
              tritanopiaDescriptionColor: '#666666'
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
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>Radiogroup</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/>
              <span className={styles.keyword}>import</span> &#123; <span className={styles.component}>useState</span> &#125; <span className={styles.keyword}>from</span> <span className={styles.string}>'react'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() &#123;<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>plan</span>, <span className={styles.component}>setPlan</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.string}>'basic'</span>);<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>options</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className={styles.property}>value</span>: <span className={styles.string}>'basic'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Basic'</span>, <span className={styles.property}>description</span>: <span className={styles.string}>'Perfect for individuals'</span> &#125;,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className={styles.property}>value</span>: <span className={styles.string}>'pro'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Pro'</span>, <span className={styles.property}>description</span>: <span className={styles.string}>'Best for teams'</span> &#125;,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className={styles.property}>value</span>: <span className={styles.string}>'enterprise'</span>, <span className={styles.property}>label</span>: <span className={styles.string}>'Enterprise'</span>, <span className={styles.property}>description</span>: <span className={styles.string}>'For large organizations'</span> &#125;<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Radiogroup</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>name</span><span className={styles.operator}>=</span><span className={styles.string}>'plan'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'Choose your plan'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'custom'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>options</span><span className={styles.operator}>=</span>&#123;options&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>value</span><span className={styles.operator}>=</span>&#123;plan&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onChange</span><span className={styles.operator}>=</span>&#123;setPlan&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>customColors</span><span className={styles.operator}>={'{'}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.string}>'#1976D2'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorderColor</span>: <span className={styles.string}>'#CCCCCC'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorderColorHover</span>: <span className={styles.string}>'#1976D2'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorderColorFocus</span>: <span className={styles.string}>'#1976D2'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultLabelColor</span>: <span className={styles.string}>'#000000'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultDescriptionColor</span>: <span className={styles.string}>'#666666'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Protanopia</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.string}>'#FFA500'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBorderColor</span>: <span className={styles.string}>'#E6B800'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBorderColorHover</span>: <span className={styles.string}>'#FFA500'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBorderColorFocus</span>: <span className={styles.string}>'#FFA500'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaLabelColor</span>: <span className={styles.string}>'#000000'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaDescriptionColor</span>: <span className={styles.string}>'#666666'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.string}>'#9C27B0'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderColor</span>: <span className={styles.string}>'#E6B8D7'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderColorHover</span>: <span className={styles.string}>'#9C27B0'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorderColorFocus</span>: <span className={styles.string}>'#9C27B0'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaLabelColor</span>: <span className={styles.string}>'#000000'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaDescriptionColor</span>: <span className={styles.string}>'#666666'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Tritanopia</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.string}>'#00BCD4'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderColor</span>: <span className={styles.string}>'#B3E5FC'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderColorHover</span>: <span className={styles.string}>'#00BCD4'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBorderColorFocus</span>: <span className={styles.string}>'#00BCD4'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaLabelColor</span>: <span className={styles.string}>'#000000'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaDescriptionColor</span>: <span className={styles.string}>'#666666'</span><br/>
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

export default RadiogroupPage;