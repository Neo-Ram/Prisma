import styles from './Styles.module.css'
import { Pagination } from 'neo-ram-prisma';
import { useState } from 'react';

const PaginationPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  
  // State for interactive pagination examples
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(3);
  const [currentPage3, setCurrentPage3] = useState(5);
  const [currentPageDisabled, setCurrentPageDisabled] = useState(2);
  const [currentPageProtanopia, setCurrentPageProtanopia] = useState(4);
  const [currentPageDeuteranopia, setCurrentPageDeuteranopia] = useState(2);
  const [currentPageTritanopia, setCurrentPageTritanopia] = useState(6);
  const [currentPageLowVision, setCurrentPageLowVision] = useState(3);
  const [currentPageHighContrast, setCurrentPageHighContrast] = useState(7);
  const [currentPageCustom1, setCurrentPageCustom1] = useState(1);
  const [currentPageCustom2, setCurrentPageCustom2] = useState(2);
  const [currentPageCustom3, setCurrentPageCustom3] = useState(3);
  const [currentPageCustom4, setCurrentPageCustom4] = useState(4);
  const [currentPageCustom5, setCurrentPageCustom5] = useState(5);

  const codeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      variant='secondary'
    />
  );
}`;

  const disabledCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      variant='secondary'
      disabled
    />
  );
}`;

  const configCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={20}
      onPageChange={setCurrentPage}
      variant='secondary'
      showFirstLast={true}
      showPrevNext={true}
      maxVisiblePages={5}
      ariaLabel="Product navigation"
    />
  );
}`;

  const protanopiaCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      variant='secondary'
      colorVision='protanopia'
    />
  );
}`;

  const deuteranopiaCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      variant='secondary'
      colorVision='deuteranopia'
    />
  );
}`;

  const tritanopiaCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      variant='secondary'
      colorVision='tritanopia'
    />
  );
}`;

  const lowVisionCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      variant='secondary'
      accessibility='low-vision'
    />
  );
}`;

  const sizeCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={8}
      onPageChange={setCurrentPage}
      size='lg'
    />
  );
}`;

  const fontSizeCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={6}
      onPageChange={setCurrentPage}
      fontSize='fs-lg'
    />
  );
}`;

  const highContrastCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination 
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      variant='secondary'
      accessibility='high-contrast'
    />
  );
}`;

  const customColorsCodeString = `import { Pagination } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      currentPage={page}
      totalPages={10}
      onPageChange={setPage}
      variant='custom'
      colorVision='tritanopia'
      customColors={{
        // Normal vision
        defaultColorActive: '#FFFFFF',
        defaultBgActive: '#007BFF',
        defaultShadowFocus: '0 0 0 3px rgba(11,92,255,.15)',
        // Protanopia
        protanopiaColorActive: '#FFFFFF',
        protanopiaBgActive: '#3399FF',
        protanopiaShadowFocus: '0 0 0 3px rgba(51,153,255,.15)',
        // Deuteranopia
        deuteranopiaColorActive: '#FFFFFF',
        deuteranopiaBgActive: '#4F83CC',
        deuteranopiaShadowFocus: '0 0 0 3px rgba(79,131,204,.15)',
        // Tritanopia
        tritanopiaColorActive: '#FFFFFF',
        tritanopiaBgActive: '#D946EF',
        tritanopiaShadowFocus: '0 0 0 3px rgba(217,70,239,.15)'
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
        <h1>Pagination</h1>
        <h3>Interactive pagination component with comprehensive accessibility support</h3>
        <p>A versatile pagination component that allows users to navigate through multiple pages of content efficiently. 
          Supports multiple variants, sizes, and accessibility features to enhance user navigation experience with 
          customizable controls for first/last page buttons, previous/next navigation, and visible page ranges.</p>
        
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>Props</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>PaginationProps</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Core pagination properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>currentPage</span>: <span className={styles.keyword}>number</span>; <span className={styles.comment}>// Current active page</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>totalPages</span>: <span className={styles.keyword}>number</span>; <span className={styles.comment}>// Total number of pages</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>onPageChange</span>: (<span className={styles.property}>page</span>: <span className={styles.keyword}>number</span>) <span className={styles.operator}>=&gt;</span> <span className={styles.keyword}>void</span>; <span className={styles.comment}>// Page change handler</span><br/><br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Styling properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>variant</span>?: <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'custom'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>size</span>?: <span className={styles.string}>'xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'xl'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>fontSize</span>?: <span className={styles.string}>'fs-xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-xl'</span>;<br/><br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Accessibility properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>colorVision</span>?: <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>accessibility</span>?: <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span>;<br/><br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Behavioral properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>disabled</span>?: <span className={styles.keyword}>boolean</span>; <span className={styles.comment}>// Disable all pagination controls</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>showFirstLast</span>?: <span className={styles.keyword}>boolean</span>; <span className={styles.comment}>// Show first/last page buttons</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>showPrevNext</span>?: <span className={styles.keyword}>boolean</span>; <span className={styles.comment}>// Show previous/next buttons</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>maxVisiblePages</span>?: <span className={styles.keyword}>number</span>; <span className={styles.comment}>// Maximum visible page numbers</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>ariaLabel</span>?: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Accessibility label</span><br/>
              {'}'}
            </code>
          </div>
        </div>
        
        <h3>Pagination variants</h3>
        <p>The pagination component supports different variants such as primary, secondary, success, warning, and danger.</p>
        <div className={styles.centered}>
          <Pagination currentPage={currentPage1} totalPages={10} onPageChange={setCurrentPage1} />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={currentPage2} totalPages={10} onPageChange={setCurrentPage2} variant='secondary' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={currentPage3} totalPages={10} onPageChange={setCurrentPage3} variant='success' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={4} totalPages={10} onPageChange={() => {}} variant='warning' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={8} totalPages={10} onPageChange={() => {}} variant='danger' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}10{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Size Variations</h3>
        <p>Different sizes to accommodate various design needs and content densities.</p>
        <div className={styles.centered}>
          <Pagination currentPage={2} totalPages={8} onPageChange={() => {}} size='xs' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={3} totalPages={8} onPageChange={() => {}} size='sm' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={4} totalPages={8} onPageChange={() => {}} size='md' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={5} totalPages={8} onPageChange={() => {}} size='lg' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={6} totalPages={8} onPageChange={() => {}} size='xl' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}8{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>'lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Font Size Variations</h3>
        <p>Different font sizes for better readability and visual hierarchy.</p>
        <div className={styles.centered}>
          <Pagination currentPage={2} totalPages={6} onPageChange={() => {}} fontSize='fs-xs' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={3} totalPages={6} onPageChange={() => {}} fontSize='fs-sm' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={4} totalPages={6} onPageChange={() => {}} fontSize='fs-md' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={5} totalPages={6} onPageChange={() => {}} fontSize='fs-lg' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={6} totalPages={6} onPageChange={() => {}} fontSize='fs-xl' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}6{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>fontSize</span><span className={styles.operator}>=</span><span className={styles.string}>'fs-lg'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Configuration Options</h3>
        <p>Customize pagination behavior with first/last buttons, previous/next navigation, and visible page limits.</p>
        <div className={styles.centered}>
          <Pagination 
            currentPage={5} 
            totalPages={20} 
            onPageChange={() => {}} 
            showFirstLast={true}
            showPrevNext={true}
            maxVisiblePages={5}
            variant='secondary'
          />
        </div>
        <div className={styles.centered}>
          <Pagination 
            currentPage={3} 
            totalPages={15} 
            onPageChange={() => {}} 
            showFirstLast={false}
            showPrevNext={true}
            maxVisiblePages={3}
            variant='secondary'
          />
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>ConfigDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(configCodeString, 'config')}>
              {copiedButton === 'config' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}20{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>showFirstLast</span><span className={styles.operator}>=</span>{'{'}true{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>showPrevNext</span><span className={styles.operator}>=</span>{'{'}true{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>maxVisiblePages</span><span className={styles.operator}>=</span>{'{'}5{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>ariaLabel</span><span className={styles.operator}>=</span><span className={styles.string}>"Product navigation"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Disabled State</h3>
        <p>Disabled pagination prevents user interaction while maintaining visual context of the current page position.</p>
        <div className={styles.centered}>
          <Pagination 
            currentPage={currentPageDisabled} 
            totalPages={10} 
            onPageChange={setCurrentPageDisabled} 
            variant='secondary' 
            disabled 
          />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>2</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}10{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
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
        <p>Optimized color scheme for users with red-green color blindness (protanopia), enhancing distinction between navigation elements.</p>
        <div className={styles.centered}>
          <Pagination currentPage={currentPageProtanopia} totalPages={10} onPageChange={setCurrentPageProtanopia} variant='primary' colorVision='protanopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} variant='secondary' colorVision='protanopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} variant='success' colorVision='protanopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={7} totalPages={10} onPageChange={() => {}} variant='warning' colorVision='protanopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={9} totalPages={10} onPageChange={() => {}} variant='danger' colorVision='protanopia' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}10{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
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
          <Pagination currentPage={currentPageDeuteranopia} totalPages={10} onPageChange={setCurrentPageDeuteranopia} variant='primary' colorVision='deuteranopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={4} totalPages={10} onPageChange={() => {}} variant='secondary' colorVision='deuteranopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={6} totalPages={10} onPageChange={() => {}} variant='success' colorVision='deuteranopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={8} totalPages={10} onPageChange={() => {}} variant='warning' colorVision='deuteranopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={10} totalPages={10} onPageChange={() => {}} variant='danger' colorVision='deuteranopia' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}10{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
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
          <Pagination currentPage={currentPageTritanopia} totalPages={10} onPageChange={setCurrentPageTritanopia} variant='primary' colorVision='tritanopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={2} totalPages={10} onPageChange={() => {}} variant='secondary' colorVision='tritanopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={4} totalPages={10} onPageChange={() => {}} variant='success' colorVision='tritanopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={6} totalPages={10} onPageChange={() => {}} variant='warning' colorVision='tritanopia' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={8} totalPages={10} onPageChange={() => {}} variant='danger' colorVision='tritanopia' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}10{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
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
          <Pagination currentPage={currentPageLowVision} totalPages={10} onPageChange={setCurrentPageLowVision} variant='primary' accessibility='low-vision' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} variant='secondary' accessibility='low-vision' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={7} totalPages={10} onPageChange={() => {}} variant='success' accessibility='low-vision' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={9} totalPages={10} onPageChange={() => {}} variant='warning' accessibility='low-vision' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} variant='danger' accessibility='low-vision' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}10{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
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
          <Pagination currentPage={currentPageHighContrast} totalPages={10} onPageChange={setCurrentPageHighContrast} variant='primary' accessibility='high-contrast' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} variant='secondary' accessibility='high-contrast' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} variant='success' accessibility='high-contrast' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={7} totalPages={10} onPageChange={() => {}} variant='warning' accessibility='high-contrast' />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={9} totalPages={10} onPageChange={() => {}} variant='danger' accessibility='high-contrast' />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>currentPage</span>, <span className={styles.component}>setCurrentPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}currentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}10{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setCurrentPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'secondary'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>'high-contrast'</span><br/>
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
              <span>CustomPaginationColors Interface</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>CustomPaginationColors</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColorActive</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Active page text color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBgActive</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Active page background</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultShadowFocus</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Focus shadow effect</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors (Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColorActive</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBgActive</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaShadowFocus</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors (Most Common Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColorActive</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBgActive</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaShadowFocus</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors (Blue-Yellow Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColorActive</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBgActive</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaShadowFocus</span>: <span className={styles.keyword}>string</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>

        <div className={styles.centered}>
          <Pagination currentPage={currentPageCustom1} totalPages={10} onPageChange={setCurrentPageCustom1} variant='custom' customColors={{
            defaultColorActive: '#FFFFFF',
            defaultBgActive: '#007BFF',
            defaultShadowFocus: '0 0 0 3px rgba(11,92,255,.15)',
            protanopiaColorActive: '#FFFFFF',
            protanopiaBgActive: '#007BFF',
            protanopiaShadowFocus: '0 0 0 3px rgba(11,92,255,.15)',
            deuteranopiaColorActive: '#FFFFFF',
            deuteranopiaBgActive: '#007BFF',
            deuteranopiaShadowFocus: '0 0 0 3px rgba(11,92,255,.15)',
            tritanopiaColorActive: '#FFFFFF',
            tritanopiaBgActive: '#007BFF',
            tritanopiaShadowFocus: '0 0 0 3px rgba(11,92,255,.15)'
          }} />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={currentPageCustom2} totalPages={10} onPageChange={setCurrentPageCustom2} variant='custom' colorVision='protanopia' customColors={{
            defaultColorActive: '#FFFFFF',
            defaultBgActive: '#FF8C00',
            defaultShadowFocus: '0 0 0 3px rgba(255,140,0,.15)',
            protanopiaColorActive: '#FFFFFF',
            protanopiaBgActive: '#FFB84D',
            protanopiaShadowFocus: '0 0 0 3px rgba(255,184,77,.15)',
            deuteranopiaColorActive: '#FFFFFF',
            deuteranopiaBgActive: '#FFB84D',
            deuteranopiaShadowFocus: '0 0 0 3px rgba(255,184,77,.15)',
            tritanopiaColorActive: '#FFFFFF',
            tritanopiaBgActive: '#FFB84D',
            tritanopiaShadowFocus: '0 0 0 3px rgba(255,184,77,.15)'
          }} />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={currentPageCustom3} totalPages={10} onPageChange={setCurrentPageCustom3} variant='custom' colorVision='deuteranopia' customColors={{
            defaultColorActive: '#FFFFFF',
            defaultBgActive: '#28A745',
            defaultShadowFocus: '0 0 0 3px rgba(40,167,69,.15)',
            protanopiaColorActive: '#FFFFFF',
            protanopiaBgActive: '#28A745',
            protanopiaShadowFocus: '0 0 0 3px rgba(40,167,69,.15)',
            deuteranopiaColorActive: '#FFFFFF',
            deuteranopiaBgActive: '#4CAF50',
            deuteranopiaShadowFocus: '0 0 0 3px rgba(76,175,80,.15)',
            tritanopiaColorActive: '#FFFFFF',
            tritanopiaBgActive: '#4CAF50',
            tritanopiaShadowFocus: '0 0 0 3px rgba(76,175,80,.15)'
          }} />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={currentPageCustom4} totalPages={10} onPageChange={setCurrentPageCustom4} variant='custom' colorVision='tritanopia' customColors={{
            defaultColorActive: '#FFFFFF',
            defaultBgActive: '#A855F7',
            defaultShadowFocus: '0 0 0 3px rgba(168,85,247,.15)',
            protanopiaColorActive: '#FFFFFF',
            protanopiaBgActive: '#A855F7',
            protanopiaShadowFocus: '0 0 0 3px rgba(168,85,247,.15)',
            deuteranopiaColorActive: '#FFFFFF',
            deuteranopiaBgActive: '#A855F7',
            deuteranopiaShadowFocus: '0 0 0 3px rgba(168,85,247,.15)',
            tritanopiaColorActive: '#FFFFFF',
            tritanopiaBgActive: '#D946EF',
            tritanopiaShadowFocus: '0 0 0 3px rgba(217,70,239,.15)'
          }} />
        </div>
        <div className={styles.centered}>
          <Pagination currentPage={currentPageCustom5} totalPages={10} onPageChange={setCurrentPageCustom5} variant='custom' size='lg' customColors={{
            defaultColorActive: '#FFFFFF',
            defaultBgActive: '#EC4899',
            defaultShadowFocus: '0 0 0 3px rgba(236,72,153,.15)',
            protanopiaColorActive: '#FFFFFF',
            protanopiaBgActive: '#F472B6',
            protanopiaShadowFocus: '0 0 0 3px rgba(244,114,182,.15)',
            deuteranopiaColorActive: '#FFFFFF',
            deuteranopiaBgActive: '#F472B6',
            deuteranopiaShadowFocus: '0 0 0 3px rgba(244,114,182,.15)',
            tritanopiaColorActive: '#FFFFFF',
            tritanopiaBgActive: '#F472B6',
            tritanopiaShadowFocus: '0 0 0 3px rgba(244,114,182,.15)'
          }} />
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Pagination</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>page</span>, <span className={styles.component}>setPage</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.number}>1</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Pagination</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>currentPage</span><span className={styles.operator}>=</span>{'{'}page{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>totalPages</span><span className={styles.operator}>=</span>{'{'}10{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onPageChange</span><span className={styles.operator}>=</span>{'{'}setPage{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'custom'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>'tritanopia'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>customColors</span><span className={styles.operator}>={'{'}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Normal vision</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColorActive</span>: <span className={styles.string}>'#FFFFFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBgActive</span>: <span className={styles.string}>'#007BFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultShadowFocus</span>: <span className={styles.string}>'0 0 0 3px rgba(11,92,255,.15)'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Protanopia</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaColorActive</span>: <span className={styles.string}>'#FFFFFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBgActive</span>: <span className={styles.string}>'#3399FF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaShadowFocus</span>: <span className={styles.string}>'0 0 0 3px rgba(51,153,255,.15)'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaColorActive</span>: <span className={styles.string}>'#FFFFFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaBgActive</span>: <span className={styles.string}>'#4F83CC'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>deuteranopiaShadowFocus</span>: <span className={styles.string}>'0 0 0 3px rgba(79,131,204,.15)'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// Tritanopia</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaColorActive</span>: <span className={styles.string}>'#FFFFFF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaBgActive</span>: <span className={styles.string}>'#D946EF'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>tritanopiaShadowFocus</span>: <span className={styles.string}>'0 0 0 3px rgba(217,70,239,.15)'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&#125;<br/>
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

export default PaginationPage;
