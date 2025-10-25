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

  const customColorsCodeString = `import { Breadcrumb } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const customBreadcrumbColors = {
    // Normal vision colors
    defaultColor: '#6366F1',
    defaultColorHover: '#4F46E5',
    defaultColorCurrent: '#4C0519',
    defaultSeparator: '#CBD5E1',

    // Protanopia colors (Red-Green Blindness)
    protanopiaColor: '#3B82F6',
    protanopiaColorHover: '#2563EB',
    protanopiaColorCurrent: '#1E3A8A',
    protanopiaSeparator: '#94A3B8',

    // Deuteranopia colors (Most Common Red-Green Blindness)
    deuteranopiaColor: '#8B5CF6',
    deuteranopiaColorHover: '#7C3AED',
    deuteranopiaColorCurrent: '#581C87',
    deuteranopiaSeparator: '#D1D5DB',

    // Tritanopia colors (Blue-Yellow Blindness)
    tritanopiaColor: '#D946EF',
    tritanopiaColorHover: '#BE185D',
    tritanopiaColorCurrent: '#7E22CE',
    tritanopiaSeparator: '#E5E7EB'
  };

  const items = [
    { label: "Dashboard", onClick: () => navigate('/') },
    { label: "Projects", onClick: () => navigate('/projects') },
    { label: "UI Library" }
  ];

  return (
    <Breadcrumb 
      items={items}
      variant='custom'
      colorVision='tritanopia'
      customColors={customBreadcrumbColors}
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
              &nbsp;&nbsp;<span className={styles.property}>variant</span>?: <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'custom'</span>;<br/>
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

        <h3>Custom Colors</h3>
        <p>Complete customization of breadcrumb colors across all color vision modes. Each vision mode has customizable colors for total design control.</p>
        
        <h3>Custom Colors Interface</h3>
        <p>The <code>customColors</code> property allows you to define custom colors for all color vision accessibility modes:</p>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>CustomBreadcrumbColors Interface</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>CustomBreadcrumbColors</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Text color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColorHover</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Hover text color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColorCurrent</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Current page color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultSeparator</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Separator color</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors (Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColorHover</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColorCurrent</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaSeparator</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors (Most Common Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColorHover</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColorCurrent</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaSeparator</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors (Blue-Yellow Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColorHover</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColorCurrent</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaSeparator</span>: <span className={styles.keyword}>string</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Custom Colors Example</h3>
        <p>Define a custom color palette to create breadcrumbs with completely custom styling across all accessibility modes:</p>
        <div className={styles.centered}>
          <Breadcrumb 
            items={sampleItems}
            variant='custom'
            colorVision='normal'
            customColors={{
              defaultColor: '#7C3AED',
              defaultColorHover: '#6D28D9',
              defaultColorCurrent: '#581C87',
              defaultSeparator: '#E9D5FF',
              protanopiaColor: '#F59E0B',
              protanopiaColorHover: '#D97706',
              protanopiaColorCurrent: '#92400E',
              protanopiaSeparator: '#FDE68A',
              deuteranopiaColor: '#3B82F6',
              deuteranopiaColorHover: '#2563EB',
              deuteranopiaColorCurrent: '#1E40AF',
              deuteranopiaSeparator: '#BFDBFE',
              tritanopiaColor: '#8B5CF6',
              tritanopiaColorHover: '#7C3AED',
              tritanopiaColorCurrent: '#6D28D9',
              tritanopiaSeparator: '#DDD6FE'
            }}
          />
        </div>
        <div className={styles.centered}>
          <Breadcrumb 
            items={sampleItems}
            variant='custom'
            colorVision='normal'
            customColors={{
              defaultColor: '#0284C7',
              defaultColorHover: '#0369A1',
              defaultColorCurrent: '#0C4A6E',
              defaultSeparator: '#BAE6FD',
              protanopiaColor: '#FBBF24',
              protanopiaColorHover: '#F59E0B',
              protanopiaColorCurrent: '#D97706',
              protanopiaSeparator: '#FCD34D',
              deuteranopiaColor: '#22C55E',
              deuteranopiaColorHover: '#16A34A',
              deuteranopiaColorCurrent: '#166534',
              deuteranopiaSeparator: '#BBF7D0',
              tritanopiaColor: '#0284C7',
              tritanopiaColorHover: '#0369A1',
              tritanopiaColorCurrent: '#0C4A6E',
              tritanopiaSeparator: '#BAE6FD'
            }}
          />
        </div>
        <div className={styles.centered}>
          <Breadcrumb 
            items={sampleItems}
            variant='custom'
            colorVision='normal'
            customColors={{
              defaultColor: '#22C55E',
              defaultColorHover: '#16A34A',
              defaultColorCurrent: '#166534',
              defaultSeparator: '#BBF7D0',
              protanopiaColor: '#FBBF24',
              protanopiaColorHover: '#F59E0B',
              protanopiaColorCurrent: '#D97706',
              protanopiaSeparator: '#FCD34D',
              deuteranopiaColor: '#3B82F6',
              deuteranopiaColorHover: '#2563EB',
              deuteranopiaColorCurrent: '#1E40AF',
              deuteranopiaSeparator: '#BFDBFE',
              tritanopiaColor: '#22C55E',
              tritanopiaColorHover: '#16A34A',
              tritanopiaColorCurrent: '#166534',
              tritanopiaSeparator: '#BBF7D0'
            }}
          />
        </div>
        <div className={styles.centered}>
          <Breadcrumb 
            items={sampleItems}
            variant='custom'
            colorVision='normal'
            customColors={{
              defaultColor: '#F59E0B',
              defaultColorHover: '#D97706',
              defaultColorCurrent: '#92400E',
              defaultSeparator: '#FED7AA',
              protanopiaColor: '#F59E0B',
              protanopiaColorHover: '#D97706',
              protanopiaColorCurrent: '#92400E',
              protanopiaSeparator: '#FDE68A',
              deuteranopiaColor: '#3B82F6',
              deuteranopiaColorHover: '#2563EB',
              deuteranopiaColorCurrent: '#1E40AF',
              deuteranopiaSeparator: '#BFDBFE',
              tritanopiaColor: '#8B5CF6',
              tritanopiaColorHover: '#7C3AED',
              tritanopiaColorCurrent: '#6D28D9',
              tritanopiaSeparator: '#DDD6FE'
            }}
          />
        </div>
        
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>CustomColorsDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(customColorsCodeString, 'customColors')}>
              {copiedButton === 'customColors' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Breadcrumb</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>customBreadcrumbColors</span> <span className={styles.operator}>=</span> {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.string}>'#6366F1'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColorHover</span>: <span className={styles.string}>'#4F46E5'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColorCurrent</span>: <span className={styles.string}>'#4C0519'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultSeparator</span>: <span className={styles.string}>'#CBD5E1'</span>,<br/><br/>

              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.string}>'#3B82F6'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaColorHover</span>: <span className={styles.string}>'#2563EB'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaColorCurrent</span>: <span className={styles.string}>'#1E3A8A'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaSeparator</span>: <span className={styles.string}>'#94A3B8'</span>,<br/><br/>

              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.string}>'#8B5CF6'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaColorHover</span>: <span className={styles.string}>'#7C3AED'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaColorCurrent</span>: <span className={styles.string}>'#581C87'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaSeparator</span>: <span className={styles.string}>'#D1D5DB'</span>,<br/><br/>

              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.string}>'#D946EF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaColorHover</span>: <span className={styles.string}>'#BE185D'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaColorCurrent</span>: <span className={styles.string}>'#7E22CE'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaSeparator</span>: <span className={styles.string}>'#E5E7EB'</span>,<br/>
              &nbsp;&nbsp;{'}'};<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.component}>items</span> <span className={styles.operator}>=</span> [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Dashboard"</span>, <span className={styles.property}>onClick</span>: () <span className={styles.operator}>=&gt;</span> navigate('/') {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"Projects"</span>, <span className={styles.property}>onClick</span>: () <span className={styles.operator}>=&gt;</span> navigate('/projects') {'}'},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className={styles.property}>label</span>: <span className={styles.string}>"UI Library"</span> {'}'}<br/>
              &nbsp;&nbsp;];<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Breadcrumb</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>items</span><span className={styles.operator}>=</span>{'{'}items{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'custom'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>customColors</span><span className={styles.operator}>=</span>{'{'}customBreadcrumbColors{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>
      
    </>
  );
};

export default BreadcrumPage;
