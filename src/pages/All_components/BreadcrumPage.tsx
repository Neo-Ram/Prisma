import styles from './Styles.module.css'
import { Breadcrumb } from 'neo-ram-prisma';
import { useState } from 'react';

const BreadcrumPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);

  const codeString = `import { Breadcrumb } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const items = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Products", href: "#", onClick: () => {} },
    { label: "Electronics", href: "#", onClick: () => {} },
    { label: "Smartphones" }
  ];

  return (
    <Breadcrumb 
      items={items}
      variant='secondary'
    />
  );
}`;

  const disabledCodeString = `import { Breadcrumb } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const items = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Products", disabled: true },
    { label: "Electronics", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  return (
    <Breadcrumb 
      items={items}
      variant='secondary'
    />
  );
}`;

  const protanopiaCodeString = `import { Breadcrumb } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const items = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Products", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  return (
    <Breadcrumb 
      items={items}
      variant='secondary'
      colorVision='protanopia'
    />
  );
}`;

  const deuteranopiaCodeString = `import { Breadcrumb } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const items = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Products", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  return (
    <Breadcrumb 
      items={items}
      variant='secondary'
      colorVision='deuteranopia'
    />
  );
}`;

  const tritanopiaCodeString = `import { Breadcrumb } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const items = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Products", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  return (
    <Breadcrumb 
      items={items}
      variant='secondary'
      colorVision='tritanopia'
    />
  );
}`;

  const lowVisionCodeString = `import { Breadcrumb } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const items = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Products", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  return (
    <Breadcrumb 
      items={items}
      variant='secondary'
      accessibility='low-vision'
    />
  );
}`;

  const fontSizeCodeString = `import { Breadcrumb } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const items = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  return (
    <Breadcrumb 
      items={items}
      fontSize='fs-lg'
    />
  );
}`;

  const highContrastCodeString = `import { Breadcrumb } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const items = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Products", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  return (
    <Breadcrumb 
      items={items}
      variant='secondary'
      accessibility='high-contrast'
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

  const sampleItems = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Products", href: "#", onClick: () => {} },
    { label: "Electronics", href: "#", onClick: () => {} },
    { label: "Smartphones" }
  ];

  const disabledItems = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Products", disabled: true },
    { label: "Electronics", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  const shortItems = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  const longItems = [
    { label: "Home", href: "#", onClick: () => {} },
    { label: "Category", href: "#", onClick: () => {} },
    { label: "Subcategory", href: "#", onClick: () => {} },
    { label: "Products", href: "#", onClick: () => {} },
    { label: "Item Details", href: "#", onClick: () => {} },
    { label: "Current Page" }
  ];

  return (
    <>
      <div className={styles.container}>
        <h1>Breadcrumb</h1>
        <h3>Navigation breadcrumb component with comprehensive accessibility support</h3>
        <p>A versatile breadcrumb navigation component that provides users with a clear path showing their current location within the site hierarchy. 
          Supports multiple variants, sizes, and accessibility features to enhance user navigation experience.</p>
        
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>Props</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>BreadcrumbProps</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Content and structure properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>items</span>: <span className={styles.component}>BreadcrumbItem</span>[];<br/>
              &nbsp;&nbsp;<span className={styles.property}>separator</span>?: <span className={styles.keyword}>string</span>;<br/>
              <br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Styling and appearance properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>variant</span>?: <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>size</span>?: <span className={styles.string}>'small'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'medium'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'large'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>fontSize</span>?: <span className={styles.string}>'fs-xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-xl'</span>;<br/>
              <br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Accessibility properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>colorVision</span>?: <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>accessibilityMode</span>?: <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span>;<br/>
              <br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Behavioral properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>maxItems</span>?: <span className={styles.keyword}>number</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>hideRoot</span>?: <span className={styles.keyword}>boolean</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>disabled</span>?: <span className={styles.keyword}>boolean</span>;<br/>
              {'}'}<br/>
              <br/>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>BreadcrumbItem</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.property}>label</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>href</span>?: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>onClick</span>?: () <span className={styles.operator}>=&gt;</span> <span className={styles.keyword}>void</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>disabled</span>?: <span className={styles.keyword}>boolean</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>
        
        <h3>Breadcrumb variants</h3>
        <p>The breadcrumb component supports different variants such as primary, secondary, success, warning, and danger.</p>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='secondary' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='success' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='warning' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='danger' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Breadcrumb</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>items</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Home"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Products"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/products"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Electronics"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/products/electronics"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Smartphones"</span> {'}'}<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Breadcrumb</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>items</span><span className={styles.operator}>=</span>{'{'}items{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Font Size Variations</h3>
        <p>Different font sizes for better readability and visual hierarchy.</p>
        <div className={styles.centered}>
          <Breadcrumb items={shortItems} fontSize='fs-xs' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={shortItems} fontSize='fs-sm' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={shortItems} fontSize='fs-md' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={shortItems} fontSize='fs-lg' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={shortItems} fontSize='fs-xl' />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>FontSizeDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(fontSizeCodeString, 'fontsize')}>
              {copiedButton === 'fontsize' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Breadcrumb</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>items</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Home"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Current Page"</span> {'}'}<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Breadcrumb</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>items</span><span className={styles.operator}>=</span>{'{'}items{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>fontSize</span><span className={styles.operator}>=</span><span className={styles.string}>'fs-lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Disabled Items</h3>
        <p>Breadcrumb items can be disabled to prevent navigation while maintaining visual context.</p>
        <div className={styles.centered}>
          <Breadcrumb items={disabledItems} variant='secondary' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Breadcrumb</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>items</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Home"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Products"</span>, <span className={styles.property}>disabled</span>: <span className={styles.keyword}>true</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Electronics"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/products/electronics"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Current Page"</span> {'}'}<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Breadcrumb</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>items</span><span className={styles.operator}>=</span>{'{'}items{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Long Navigation Path</h3>
        <p>Example of breadcrumb handling longer navigation paths with multiple levels.</p>
        <div className={styles.centered}>
          <Breadcrumb items={longItems} variant='secondary' />
        </div>

        <h3>Color Vision Accessibility</h3>
        <p>Specialized color palettes designed for users with different types of color vision deficiencies, ensuring optimal contrast and usability.</p>
        
        <h3>Protanopia Support</h3>
        <p>Optimized color scheme for users with red-green color blindness (protanopia), enhancing distinction between navigation elements.</p>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='primary' colorVision='protanopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='secondary' colorVision='protanopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='success' colorVision='protanopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='warning' colorVision='protanopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='danger' colorVision='protanopia' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Breadcrumb</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>items</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Home"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Products"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/products"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Current Page"</span> {'}'}<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Breadcrumb</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>items</span><span className={styles.operator}>=</span>{'{'}items{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'protanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='primary' colorVision='deuteranopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='secondary' colorVision='deuteranopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='success' colorVision='deuteranopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='warning' colorVision='deuteranopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='danger' colorVision='deuteranopia' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Breadcrumb</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>items</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Home"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Products"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/products"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Current Page"</span> {'}'}<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Breadcrumb</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>items</span><span className={styles.operator}>=</span>{'{'}items{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'deuteranopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation between navigation elements.</p>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='primary' colorVision='tritanopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='secondary' colorVision='tritanopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='success' colorVision='tritanopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='warning' colorVision='tritanopia' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='danger' colorVision='tritanopia' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Breadcrumb</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>items</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Home"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Products"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/products"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Current Page"</span> {'}'}<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Breadcrumb</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>items</span><span className={styles.operator}>=</span>{'{'}items{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='primary' accessibility='low-vision' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='secondary' accessibility='low-vision' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='success' accessibility='low-vision' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='warning' accessibility='low-vision' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='danger' accessibility='low-vision' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Breadcrumb</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>items</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Home"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Products"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/products"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Current Page"</span> {'}'}<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Breadcrumb</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>items</span><span className={styles.operator}>=</span>{'{'}items{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'low-vision'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>High Contrast Mode</h3>
        <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity in navigation elements.</p>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='primary' accessibility='high-contrast' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='secondary' accessibility='high-contrast' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='success' accessibility='high-contrast' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='warning' accessibility='high-contrast' />
        </div>
        <div className={styles.centered}>
          <Breadcrumb items={sampleItems} variant='danger' accessibility='high-contrast' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Breadcrumb</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>items</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Home"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Products"</span>, <span className={styles.property}>href</span>: <span className={styles.string}>"/products"</span> {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Current Page"</span> {'}'}<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Breadcrumb</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>items</span><span className={styles.operator}>=</span>{'{'}items{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span><br/>
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

export default BreadcrumPage;
