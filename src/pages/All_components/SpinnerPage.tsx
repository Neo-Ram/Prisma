import styles from './Styles.module.css'
import { Spinner, Button } from 'neo-ram-prisma';
import { useState } from 'react';

const SpinnerPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  
  // State for interactive spinner examples
  const [showSpinner, setShowSpinner] = useState(true);

  const codeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner 
      variant='primary'
      size='md'
      spinnerVariant='2'
      speed='normal'
      label='Loading...'
    />
  );
}`;

  const variantCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner 
      spinnerVariant='3'
      variant='success'
      size='lg'
      label='Processing...'
    />
  );
}`;

  const sizeCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner 
      variant='primary'
      size='lg'
      spinnerVariant='1'
      speed='normal'
    />
  );
}`;

  const speedCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner 
      variant='warning'
      size='md'
      spinnerVariant='4'
      speed='fast'
      label='Fast loading...'
    />
  );
}`;

  const conditionalCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <button onClick={() => setIsLoading(!isLoading)}>
        Toggle Loading
      </button>
      <Spinner 
        variant='primary'
        size='md'
        show={isLoading}
        label='Loading data...'
      />
    </>
  );
}`;

  const protanopiaCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner 
      variant='success'
      colorVision='protanopia'
      size='md'
      spinnerVariant='2'
      label='Protanopia loading...'
    />
  );
}`;

  const deuteranopiaCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner 
      variant='warning'
      colorVision='deuteranopia'
      size='md'
      spinnerVariant='3'
      label='Deuteranopia loading...'
    />
  );
}`;

  const tritanopiaCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner 
      variant='danger'
      colorVision='tritanopia'
      size='md'
      spinnerVariant='4'
      label='Tritanopia loading...'
    />
  );
}`;

  const lowVisionCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner 
      variant='primary'
      accessibility='low-vision'
      size='lg'
      spinnerVariant='1'
      label='Low vision loading...'
    />
  );
}`;

  const highContrastCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner 
      variant='secondary'
      accessibility='high-contrast'
      size='lg'
      spinnerVariant='5'
      label='High contrast loading...'
    />
  );
}`;

  const customColorsCodeString = `import { Spinner } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Spinner
      variant="primary"
      colorVision="protanopia"
      size="md"
      spinnerVariant="1"
      label="Loading..."
      customColors={{
        // Normal vision colors
        defaultColor: '#007bff',

        // Protanopia (Red-blind)
        protanopiaColor: '#3399ff',

        // Deuteranopia (Green-blind)
        deuteranopiaColor: '#4f83cc',

        // Tritanopia (Blue-blind)
        tritanopiaColor: '#ffcc00'
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
        <h1>Spinner</h1>
        <h3>Versatile loading spinner component with multiple variants and accessibility support</h3>
        <p>A comprehensive spinner component designed to indicate loading states and provide visual feedback during asynchronous operations. 
          Features multiple visual variants, customizable speeds, sizes, and extensive accessibility support to ensure optimal user experience 
          across different contexts and user needs. Perfect for loading screens, form submissions, and data fetching scenarios.</p>
        
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>Props</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>SpinnerProps</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Styling properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>variant</span>?: <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'custom'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>size</span>?: <span className={styles.string}>'xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'xl'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span>?: <span className={styles.string}>'1'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'2'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'3'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'4'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'5'</span>; <span className={styles.comment}>// Visual spinner style</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Accessibility properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>colorVision</span>?: <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>accessibility</span>?: <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>ariaLabel</span>?: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Accessibility label</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Behavioral properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>speed</span>?: <span className={styles.string}>'slow'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fast'</span>; <span className={styles.comment}>// Animation speed</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>show</span>?: <span className={styles.keyword}>boolean</span>; <span className={styles.comment}>// Control visibility</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Content properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>label</span>?: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Loading text label</span><br/>
              {'}'}
            </code>
          </div>
        </div>
        
        <h3>Spinner Variants</h3>
        <p>Different color variants to match your application's design and convey different loading states.</p>
        <div className={styles.centered}>
          <Spinner variant='primary' size='md' spinnerVariant='2' label='Primary Loading' />
          <Spinner variant='secondary' size='md' spinnerVariant='2' label='Secondary Loading' />
          <Spinner variant='success' size='md' spinnerVariant='2' label='Success Loading' />
          <Spinner variant='warning' size='md' spinnerVariant='2' label='Warning Loading' />
          <Spinner variant='danger' size='md' spinnerVariant='2' label='Danger Loading' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'primary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'md'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>'2'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>speed</span><span className={styles.operator}>=</span><span className={styles.string}>'normal'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'Loading...'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Spinner Visual Variants</h3>
        <p>Different visual styles of spinners to choose from, each with unique animation patterns.</p>
        <div className={styles.centered}>
          <Spinner variant='primary' size='lg' spinnerVariant='1' label='Variant 1' />
        </div>
        <div className={styles.centered}>
          <Spinner variant='primary' size='lg' spinnerVariant='2' label='Variant 2' />
        </div>
        <div className={styles.centered}>
          <Spinner variant='primary' size='lg' spinnerVariant='3' label='Variant 3' />
        </div>
        <div className={styles.centered}>
          <Spinner variant='primary' size='lg' spinnerVariant='4' label='Variant 4' />
        </div>
        <div className={styles.centered}>
          <Spinner variant='primary' size='lg' spinnerVariant='5' label='Variant 5' />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>VariantDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(variantCodeString, 'variant')}>
              {copiedButton === 'variant' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>'3'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'success'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'Processing...'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Size Variations</h3>
        <p>Different sizes to accommodate various design needs and loading contexts.</p>
        <div className={styles.centered}>
          <Spinner variant='primary' size='xs' spinnerVariant='2' label='Extra Small' />
          <Spinner variant='primary' size='sm' spinnerVariant='2' label='Small' />
          <Spinner variant='primary' size='md' spinnerVariant='2' label='Medium' />
          <Spinner variant='primary' size='lg' spinnerVariant='2' label='Large' />
          <Spinner variant='primary' size='xl' spinnerVariant='2' label='Extra Large' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'primary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>'1'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>speed</span><span className={styles.operator}>=</span><span className={styles.string}>'normal'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Animation Speed Options</h3>
        <p>Control the animation speed to match your application's performance and user experience requirements.</p>
        <div className={styles.centered}>
          <Spinner variant='success' size='lg' spinnerVariant='2' speed='slow' label='Slow Speed' />
          <Spinner variant='warning' size='lg' spinnerVariant='2' speed='normal' label='Normal Speed' />
          <Spinner variant='danger' size='lg' spinnerVariant='2' speed='fast' label='Fast Speed' />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>SpeedDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(speedCodeString, 'speed')}>
              {copiedButton === 'speed' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'warning'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'md'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>'4'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>speed</span><span className={styles.operator}>=</span><span className={styles.string}>'fast'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'Fast loading...'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Conditional Spinner Display</h3>
        <p>Control spinner visibility with the show prop for dynamic loading states.</p>
        <div className={styles.centered}>
          <Button onClick={() => setShowSpinner(!showSpinner)} variant='secondary' style={{margin: '10px 0'}}>
            {showSpinner ? 'Hide Spinner' : 'Show Spinner'}
          </Button>
          <Spinner 
            variant='primary' 
            size='lg' 
            spinnerVariant='2' 
            show={showSpinner} 
            label='Conditional Loading...' 
          />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>ConditionalDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(conditionalCodeString, 'conditional')}>
              {copiedButton === 'conditional' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>isLoading</span>, <span className={styles.component}>setIsLoading</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>true</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.keyword}>button</span> <span className={styles.property}>onClick</span><span className={styles.operator}>=</span>{'{'}() =&gt; setIsLoading(!isLoading){'}'}&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toggle Loading<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.keyword}>button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'primary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'md'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>show</span><span className={styles.operator}>=</span>{'{'}isLoading{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'Loading data...'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Color Vision Accessibility</h3>
        <p>Specialized color palettes designed for users with different types of color vision deficiencies, ensuring optimal contrast and usability.</p>
        
        <h3>Protanopia Support</h3>
        <p>Optimized color scheme for users with red-green color blindness (protanopia), enhancing distinction between loading states.</p>
        <div className={styles.centered}>
          <Spinner variant='primary' colorVision='protanopia' size='lg' spinnerVariant='2' label='Protanopia Primary' />
          <Spinner variant='secondary' colorVision='protanopia' size='lg' spinnerVariant='2' label='Protanopia Secondary' />
          <Spinner variant='success' colorVision='protanopia' size='lg' spinnerVariant='2' label='Protanopia Success' />
          <Spinner variant='warning' colorVision='protanopia' size='lg' spinnerVariant='2' label='Protanopia Warning' />
          <Spinner variant='danger' colorVision='protanopia' size='lg' spinnerVariant='2' label='Protanopia Danger' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'success'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'md'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>'2'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'Protanopia loading...'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Spinner variant='primary' colorVision='deuteranopia' size='lg' spinnerVariant='2' label='Deuteranopia Primary' />
          <Spinner variant='secondary' colorVision='deuteranopia' size='lg' spinnerVariant='2' label='Deuteranopia Secondary' />
          <Spinner variant='success' colorVision='deuteranopia' size='lg' spinnerVariant='2' label='Deuteranopia Success' />
          <Spinner variant='warning' colorVision='deuteranopia' size='lg' spinnerVariant='2' label='Deuteranopia Warning' />
          <Spinner variant='danger' colorVision='deuteranopia' size='lg' spinnerVariant='2' label='Deuteranopia Danger' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'warning'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'md'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>'3'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'Deuteranopia loading...'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation between loading states.</p>
        <div className={styles.centered}>
          <Spinner variant='primary' colorVision='tritanopia' size='lg' spinnerVariant='2' label='Tritanopia Primary' />
          <Spinner variant='secondary' colorVision='tritanopia' size='lg' spinnerVariant='2' label='Tritanopia Secondary' />
          <Spinner variant='success' colorVision='tritanopia' size='lg' spinnerVariant='2' label='Tritanopia Success' />
          <Spinner variant='warning' colorVision='tritanopia' size='lg' spinnerVariant='2' label='Tritanopia Warning' />
          <Spinner variant='danger' colorVision='tritanopia' size='lg' spinnerVariant='2' label='Tritanopia Danger' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'danger'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'md'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>'4'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'Tritanopia loading...'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Spinner variant='primary' accessibility='low-vision' size='xl' spinnerVariant='2' label='Low Vision Primary' />
          <Spinner variant='secondary' accessibility='low-vision' size='xl' spinnerVariant='2' label='Low Vision Secondary' />
          <Spinner variant='success' accessibility='low-vision' size='xl' spinnerVariant='2' label='Low Vision Success' />
          <Spinner variant='warning' accessibility='low-vision' size='xl' spinnerVariant='2' label='Low Vision Warning' />
          <Spinner variant='danger' accessibility='low-vision' size='xl' spinnerVariant='2' label='Low Vision Danger' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'primary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>'1'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'Low vision loading...'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>High Contrast Mode</h3>
        <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity in loading indicators.</p>
        <div className={styles.centered}>
          <Spinner variant='primary' accessibility='high-contrast' size='xl' spinnerVariant='2' label='High Contrast Primary' />
          <Spinner variant='secondary' accessibility='high-contrast' size='xl' spinnerVariant='2' label='High Contrast Secondary' />
          <Spinner variant='success' accessibility='high-contrast' size='xl' spinnerVariant='2' label='High Contrast Success' />
          <Spinner variant='warning' accessibility='high-contrast' size='xl' spinnerVariant='2' label='High Contrast Warning' />
          <Spinner variant='danger' accessibility='high-contrast' size='xl' spinnerVariant='2' label='High Contrast Danger' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>'5'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>'High contrast loading...'</span><br/>
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
              <span>CustomSpinnerColors Interface</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>CustomSpinnerColors</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Spinner stroke color</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors (Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors (Most Common Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors (Blue-Yellow Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>

        <div className={styles.centered}>
          <Spinner variant='custom' size='lg' spinnerVariant='1' label='Blue Custom' customColors={{ defaultColor: '#007BFF', protanopiaColor: '#FFA500', deuteranopiaColor: '#9C27B0', tritanopiaColor: '#00BCD4' }} />
          <Spinner variant='custom' colorVision='protanopia' size='lg' spinnerVariant='2' label='Orange Custom' customColors={{ defaultColor: '#FF8C00', protanopiaColor: '#FFB84D', deuteranopiaColor: '#FFB84D', tritanopiaColor: '#FFB84D' }} />
          <Spinner variant='custom' colorVision='deuteranopia' size='lg' spinnerVariant='3' label='Green Custom' customColors={{ defaultColor: '#28A745', protanopiaColor: '#28A745', deuteranopiaColor: '#4CAF50', tritanopiaColor: '#4CAF50' }} />
          <Spinner variant='custom' colorVision='tritanopia' size='lg' spinnerVariant='4' label='Purple Custom' customColors={{ defaultColor: '#A855F7', protanopiaColor: '#A855F7', deuteranopiaColor: '#A855F7', tritanopiaColor: '#D946EF' }} />
          <Spinner variant='custom' size='lg' spinnerVariant='5' label='Pink Custom' customColors={{ defaultColor: '#EC4899', protanopiaColor: '#F472B6', deuteranopiaColor: '#F472B6', tritanopiaColor: '#F472B6' }} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Spinner</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Spinner</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"primary"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>"protanopia"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>"md"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>spinnerVariant</span><span className={styles.operator}>=</span><span className={styles.string}>"1"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>label</span><span className={styles.operator}>=</span><span className={styles.string}>"Loading..."</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>customColors</span><span className={styles.operator}>={'{'}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.string}>'#007bff'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.string}>'#3399ff'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.string}>'#4f83cc'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.string}>'#ffcc00'</span><br/>
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

export default SpinnerPage;
