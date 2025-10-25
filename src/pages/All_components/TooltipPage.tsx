import styles from './Styles.module.css'
import { Tooltip, Button } from 'neo-ram-prisma';
import { useState } from 'react';

const TooltipPage = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  
  // State for interactive tooltip examples
  const [manualTooltip, setManualTooltip] = useState(false);

  const codeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="This is a helpful tooltip"
      position="top"
      variant="primary"
      arrow={true}
    >
      <Button>Hover me</Button>
    </Tooltip>
  );
}`;

  const positionCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Tooltip positioned on the right"
      position="right"
      variant="secondary"
      arrow={true}
    >
      <Button>Right tooltip</Button>
    </Tooltip>
  );
}`;

  const sizeCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Large tooltip with more space"
      position="top"
      size="lg"
      variant="primary"
    >
      <Button>Large tooltip</Button>
    </Tooltip>
  );
}`;

  const fontSizeCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Large text tooltip for better readability"
      position="top"
      fontSize="fs-lg"
      variant="secondary"
    >
      <Button>Large text</Button>
    </Tooltip>
  );
}`;

  const triggerCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Click to see this tooltip"
      position="top"
      trigger="click"
      variant="warning"
    >
      <Button>Click me</Button>
    </Tooltip>
  );
}`;

  const manualCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip 
      content="Manually controlled tooltip"
      position="top"
      trigger="manual"
      open={open}
      onOpenChange={setOpen}
      variant="success"
    >
      <Button onClick={() => setOpen(!open)}>
        Toggle tooltip
      </Button>
    </Tooltip>
  );
}`;

  const protanopiaCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Protanopia optimized tooltip"
      position="top"
      colorVision="protanopia"
      variant="success"
    >
      <Button>Protanopia tooltip</Button>
    </Tooltip>
  );
}`;

  const deuteranopiaCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Deuteranopia optimized tooltip"
      position="top"
      colorVision="deuteranopia"
      variant="warning"
    >
      <Button>Deuteranopia tooltip</Button>
    </Tooltip>
  );
}`;

  const tritanopiaCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Tritanopia optimized tooltip"
      position="top"
      colorVision="tritanopia"
      variant="danger"
    >
      <Button>Tritanopia tooltip</Button>
    </Tooltip>
  );
}`;

  const lowVisionCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Enhanced contrast tooltip for low vision users"
      position="top"
      accessibility="low-vision"
      size="lg"
      variant="primary"
    >
      <Button>Low vision tooltip</Button>
    </Tooltip>
  );
}`;

  const highContrastCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Maximum contrast tooltip for optimal accessibility"
      position="top"
      accessibility="high-contrast"
      size="lg"
      variant="secondary"
    >
      <Button>High contrast tooltip</Button>
    </Tooltip>
  );
}`;

  const customColorsCodeString = `import { Tooltip, Button } from 'neo-ram-prisma';
import 'neo-ram-prisma/style.css';

function Demo() {
  return (
    <Tooltip 
      content="Custom styled tooltip"
      position="top"
      colorVision="protanopia"
      variant="custom"
      arrow
      customColors={{
        defaultBg: '#ffffff',
        defaultColor: '#000000',
        defaultBorder: '#cbd2dd',
        protanopiaBg: '#ffffff',
        protanopiaColor: '#000000',
        protanopiaBorder: '#FFA500'
      }}
    >
      <Button>Custom tooltip</Button>
    </Tooltip>
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
        <h1>Tooltip</h1>
        <h3>Interactive tooltip component for providing contextual information and guidance</h3>
        <p>A versatile tooltip component designed to display helpful information, explanations, and contextual guidance when users interact with elements. 
          Features multiple positioning options, trigger methods, comprehensive accessibility support, and customizable styling to enhance user experience 
          and provide clear information without cluttering the interface.</p>
        
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>Props</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>TooltipProps</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Content properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>children</span>: <span className={styles.component}>React.ReactNode</span>; <span className={styles.comment}>// Element that triggers tooltip</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>content</span>: <span className={styles.component}>React.ReactNode</span>; <span className={styles.comment}>// Tooltip content</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Positioning properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>position</span>?: <span className={styles.string}>'top'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'bottom'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'left'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'right'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'auto'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>arrow</span>?: <span className={styles.keyword}>boolean</span>; <span className={styles.comment}>// Show pointing arrow</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>offset</span>?: <span className={styles.keyword}>number</span>; <span className={styles.comment}>// Distance from trigger element</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>maxWidth</span>?: <span className={styles.keyword}>number</span>; <span className={styles.comment}>// Maximum tooltip width</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Styling properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>variant</span>?: <span className={styles.string}>'primary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'secondary'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'success'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'warning'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'danger'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>size</span>?: <span className={styles.string}>'xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'xl'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>fontSize</span>?: <span className={styles.string}>'fs-xs'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-sm'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-md'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-lg'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'fs-xl'</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Accessibility properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>colorVision</span>?: <span className={styles.string}>'normal'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'protanopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'deuteranopia'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'tritanopia'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>accessibility</span>?: <span className={styles.string}>'default'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'low-vision'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'high-contrast'</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>ariaLabel</span>?: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Accessibility label</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Behavioral properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>trigger</span>?: <span className={styles.string}>'hover'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'click'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'focus'</span> <span className={styles.operator}>|</span> <span className={styles.string}>'manual'</span>; <span className={styles.comment}>// Trigger method</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>disabled</span>?: <span className={styles.keyword}>boolean</span>; <span className={styles.comment}>// Disable tooltip</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>delay</span>?: <span className={styles.keyword}>number</span>; <span className={styles.comment}>// Show delay in ms</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>hideDelay</span>?: <span className={styles.keyword}>number</span>; <span className={styles.comment}>// Hide delay in ms</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Manual control properties</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>open</span>?: <span className={styles.keyword}>boolean</span>; <span className={styles.comment}>// Controlled open state</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>onOpenChange</span>?: (<span className={styles.property}>open</span>: <span className={styles.keyword}>boolean</span>) <span className={styles.operator}>=&gt;</span> <span className={styles.keyword}>void</span>; <span className={styles.comment}>// Open state handler</span><br/>
              {'}'}
            </code>
          </div>
        </div>
        
        <h3>Tooltip Variants</h3>
        <p>Different color variants to match your application's design and convey different types of information.</p>
        <div className={styles.centered}>
          <Tooltip content="Primary tooltip with helpful information" position="top" variant="primary" arrow>
            <Button variant="primary">Primary</Button>
          </Tooltip>
          <Tooltip content="Secondary tooltip for additional context" position="top" variant="secondary" arrow>
            <Button variant="secondary">Secondary</Button>
          </Tooltip>
          <Tooltip content="Success tooltip for positive feedback" position="top" variant="success" arrow>
            <Button variant="success">Success</Button>
          </Tooltip>
          <Tooltip content="Warning tooltip for important notices" position="top" variant="warning" arrow>
            <Button variant="warning">Warning</Button>
          </Tooltip>
          <Tooltip content="Danger tooltip for critical information" position="top" variant="danger" arrow>
            <Button variant="danger">Danger</Button>
          </Tooltip>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"This is a helpful tooltip"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"primary"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>arrow</span><span className={styles.operator}>=</span>{'{'}true{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Hover me&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tooltip Positions</h3>
        <p>Control where the tooltip appears relative to the trigger element with precise positioning options.</p>
        <div className={styles.centered}>
          <Tooltip content="Tooltip positioned on top" position="top" variant="primary" arrow>
            <Button>Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip positioned on bottom" position="bottom" variant="primary" arrow>
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip content="Tooltip positioned on left" position="left" variant="primary" arrow>
            <Button>Left</Button>
          </Tooltip>
          <Tooltip content="Tooltip positioned on right" position="right" variant="primary" arrow>
            <Button>Right</Button>
          </Tooltip>
          <Tooltip content="Auto-positioned tooltip" position="auto" variant="primary" arrow>
            <Button>Auto</Button>
          </Tooltip>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>PositionDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(positionCodeString, 'position')}>
              {copiedButton === 'position' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Tooltip positioned on the right"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"right"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"secondary"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>arrow</span><span className={styles.operator}>=</span>{'{'}true{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Right tooltip&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Size Variations</h3>
        <p>Different sizes to accommodate various amounts of content and design requirements.</p>
        <div className={styles.centered}>
          <Tooltip content="Extra small tooltip" position="top" size="xs" variant="primary" arrow>
            <Button size="xs">XS</Button>
          </Tooltip>
          <Tooltip content="Small tooltip with brief info" position="top" size="sm" variant="primary" arrow>
            <Button size="sm">SM</Button>
          </Tooltip>
          <Tooltip content="Medium tooltip with standard content" position="top" size="md" variant="primary" arrow>
            <Button size="md">MD</Button>
          </Tooltip>
          <Tooltip content="Large tooltip with detailed information and more space for content" position="top" size="lg" variant="primary" arrow>
            <Button size="lg">LG</Button>
          </Tooltip>
          <Tooltip content="Extra large tooltip with extensive information and maximum space for detailed explanations" position="top" size="xl" variant="primary" arrow>
            <Button size="xl">XL</Button>
          </Tooltip>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Large tooltip with more space"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>"lg"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"primary"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Large tooltip&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Font Size Variations</h3>
        <p>Different font sizes for better readability and visual hierarchy in tooltip content.</p>
        <div className={styles.centered}>
          <Tooltip content="Extra small text" position="top" fontSize="fs-xs" variant="secondary" arrow>
            <Button>XS Text</Button>
          </Tooltip>
          <Tooltip content="Small text tooltip" position="top" fontSize="fs-sm" variant="secondary" arrow>
            <Button>SM Text</Button>
          </Tooltip>
          <Tooltip content="Medium text tooltip" position="top" fontSize="fs-md" variant="secondary" arrow>
            <Button>MD Text</Button>
          </Tooltip>
          <Tooltip content="Large text tooltip for better readability" position="top" fontSize="fs-lg" variant="secondary" arrow>
            <Button>LG Text</Button>
          </Tooltip>
          <Tooltip content="Extra large text tooltip for maximum readability" position="top" fontSize="fs-xl" variant="secondary" arrow>
            <Button>XL Text</Button>
          </Tooltip>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Large text tooltip for better readability"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>fontSize</span><span className={styles.operator}>=</span><span className={styles.string}>"fs-lg"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"secondary"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Large text&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tooltip Triggers</h3>
        <p>Different ways to trigger tooltip display: hover, click, focus, or manual control.</p>
        <div className={styles.centered}>
          <Tooltip content="Hover to see this tooltip" position="top" trigger="hover" variant="success" arrow>
            <Button>Hover</Button>
          </Tooltip>
          <Tooltip content="Click to see this tooltip" position="top" trigger="click" variant="warning" arrow>
            <Button>Click</Button>
          </Tooltip>
          <Tooltip content="Focus to see this tooltip" position="top" trigger="focus" variant="secondary" arrow>
            <Button>Focus</Button>
          </Tooltip>
          <Tooltip 
            content="Manually controlled tooltip" 
            position="top" 
            trigger="manual" 
            open={manualTooltip} 
            onOpenChange={setManualTooltip}
            variant="danger" 
            arrow
          >
            <Button onClick={() => setManualTooltip(!manualTooltip)}>Manual</Button>
          </Tooltip>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>TriggerDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(triggerCodeString, 'trigger')}>
              {copiedButton === 'trigger' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Click to see this tooltip"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>trigger</span><span className={styles.operator}>=</span><span className={styles.string}>"click"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"warning"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Click me&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Manual Tooltip Control</h3>
        <p>Programmatically control tooltip visibility with manual trigger and state management.</p>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <div className={styles.codeHeaderLeft}>
              <div className={styles.codeIcon}>TS</div>
              <span>ManualDemo.tsx</span>
            </div>
            <button className={styles.copyButton} onClick={() => copyToClipboard(manualCodeString, 'manual')}>
              {copiedButton === 'manual' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>const</span> [<span className={styles.component}>open</span>, <span className={styles.component}>setOpen</span>] <span className={styles.operator}>=</span> <span className={styles.function}>useState</span>(<span className={styles.keyword}>false</span>);<br/><br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Manually controlled tooltip"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>trigger</span><span className={styles.operator}>=</span><span className={styles.string}>"manual"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>open</span><span className={styles.operator}>=</span>{'{'}open{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>onOpenChange</span><span className={styles.operator}>=</span>{'{'}setOpen{'}'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"success"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span> <span className={styles.property}>onClick</span><span className={styles.operator}>=</span>{'{'}() =&gt; setOpen(!open){'}'}&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toggle tooltip<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Color Vision Accessibility</h3>
        <p>Specialized color palettes designed for users with different types of color vision deficiencies, ensuring optimal contrast and usability.</p>
        
        <h3>Protanopia Support</h3>
        <p>Optimized color scheme for users with red-green color blindness (protanopia), enhancing distinction between tooltip variants.</p>
        <div className={styles.centered}>
          <Tooltip content="Protanopia optimized primary tooltip" position="top" colorVision="protanopia" variant="primary" arrow>
            <Button variant="primary">Primary</Button>
          </Tooltip>
          <Tooltip content="Protanopia optimized secondary tooltip" position="top" colorVision="protanopia" variant="secondary" arrow>
            <Button variant="secondary">Secondary</Button>
          </Tooltip>
          <Tooltip content="Protanopia optimized success tooltip" position="top" colorVision="protanopia" variant="success" arrow>
            <Button variant="success">Success</Button>
          </Tooltip>
          <Tooltip content="Protanopia optimized warning tooltip" position="top" colorVision="protanopia" variant="warning" arrow>
            <Button variant="warning">Warning</Button>
          </Tooltip>
          <Tooltip content="Protanopia optimized danger tooltip" position="top" colorVision="protanopia" variant="danger" arrow>
            <Button variant="danger">Danger</Button>
          </Tooltip>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Protanopia optimized tooltip"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>"protanopia"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"success"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Protanopia tooltip&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Deuteranopia Support</h3>
        <p>Adapted color palette for users with deuteranopia, the most common form of red-green color blindness.</p>
        <div className={styles.centered}>
          <Tooltip content="Deuteranopia optimized primary tooltip" position="top" colorVision="deuteranopia" variant="primary" arrow>
            <Button variant="primary">Primary</Button>
          </Tooltip>
          <Tooltip content="Deuteranopia optimized secondary tooltip" position="top" colorVision="deuteranopia" variant="secondary" arrow>
            <Button variant="secondary">Secondary</Button>
          </Tooltip>
          <Tooltip content="Deuteranopia optimized success tooltip" position="top" colorVision="deuteranopia" variant="success" arrow>
            <Button variant="success">Success</Button>
          </Tooltip>
          <Tooltip content="Deuteranopia optimized warning tooltip" position="top" colorVision="deuteranopia" variant="warning" arrow>
            <Button variant="warning">Warning</Button>
          </Tooltip>
          <Tooltip content="Deuteranopia optimized danger tooltip" position="top" colorVision="deuteranopia" variant="danger" arrow>
            <Button variant="danger">Danger</Button>
          </Tooltip>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Deuteranopia optimized tooltip"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>"deuteranopia"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"warning"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Deuteranopia tooltip&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Tritanopia Support</h3>
        <p>Specialized color scheme for users with blue-yellow color blindness (tritanopia), ensuring clear visual differentiation between tooltip variants.</p>
        <div className={styles.centered}>
          <Tooltip content="Tritanopia optimized primary tooltip" position="top" colorVision="tritanopia" variant="primary" arrow>
            <Button variant="primary">Primary</Button>
          </Tooltip>
          <Tooltip content="Tritanopia optimized secondary tooltip" position="top" colorVision="tritanopia" variant="secondary" arrow>
            <Button variant="secondary">Secondary</Button>
          </Tooltip>
          <Tooltip content="Tritanopia optimized success tooltip" position="top" colorVision="tritanopia" variant="success" arrow>
            <Button variant="success">Success</Button>
          </Tooltip>
          <Tooltip content="Tritanopia optimized warning tooltip" position="top" colorVision="tritanopia" variant="warning" arrow>
            <Button variant="warning">Warning</Button>
          </Tooltip>
          <Tooltip content="Tritanopia optimized danger tooltip" position="top" colorVision="tritanopia" variant="danger" arrow>
            <Button variant="danger">Danger</Button>
          </Tooltip>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Tritanopia optimized tooltip"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>"tritanopia"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"danger"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Tritanopia tooltip&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>Low Vision Support</h3>
        <p>Enhanced visual design with increased contrast and clearer boundaries to support users with low vision conditions.</p>
        <div className={styles.centered}>
          <Tooltip content="Enhanced contrast tooltip for low vision users with improved readability" position="top" accessibility="low-vision" size="lg" variant="primary" arrow>
            <Button variant="primary">Primary</Button>
          </Tooltip>
          <Tooltip content="Low vision optimized secondary tooltip with enhanced clarity" position="top" accessibility="low-vision" size="lg" variant="secondary" arrow>
            <Button variant="secondary">Secondary</Button>
          </Tooltip>
          <Tooltip content="Low vision success tooltip with improved visual indicators" position="top" accessibility="low-vision" size="lg" variant="success" arrow>
            <Button variant="success">Success</Button>
          </Tooltip>
          <Tooltip content="Low vision warning tooltip with enhanced contrast and clarity" position="top" accessibility="low-vision" size="lg" variant="warning" arrow>
            <Button variant="warning">Warning</Button>
          </Tooltip>
          <Tooltip content="Low vision danger tooltip with maximum visibility enhancements" position="top" accessibility="low-vision" size="lg" variant="danger" arrow>
            <Button variant="danger">Danger</Button>
          </Tooltip>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Enhanced contrast tooltip for low vision users"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>"low-vision"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>"lg"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"primary"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Low vision tooltip&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {'}'}
            </code>
          </div>
        </div>

        <h3>High Contrast Mode</h3>
        <p>Maximum contrast ratio design that meets WCAG AAA standards, ideal for users requiring enhanced visual clarity in tooltips.</p>
        <div className={styles.centered}>
          <Tooltip content="Maximum contrast tooltip for optimal accessibility and readability" position="top" accessibility="high-contrast" size="lg" variant="primary" arrow>
            <Button variant="primary">Primary</Button>
          </Tooltip>
          <Tooltip content="High contrast secondary tooltip with maximum visual clarity" position="top" accessibility="high-contrast" size="lg" variant="secondary" arrow>
            <Button variant="secondary">Secondary</Button>
          </Tooltip>
          <Tooltip content="High contrast success tooltip meeting WCAG AAA standards" position="top" accessibility="high-contrast" size="lg" variant="success" arrow>
            <Button variant="success">Success</Button>
          </Tooltip>
          <Tooltip content="High contrast warning tooltip with enhanced visibility" position="top" accessibility="high-contrast" size="lg" variant="warning" arrow>
            <Button variant="warning">Warning</Button>
          </Tooltip>
          <Tooltip content="High contrast danger tooltip for critical information clarity" position="top" accessibility="high-contrast" size="lg" variant="danger" arrow>
            <Button variant="danger">Danger</Button>
          </Tooltip>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span> <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Maximum contrast tooltip for optimal accessibility"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>accessibility</span><span className={styles.operator}>=</span><span className={styles.string}>"high-contrast"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>size</span><span className={styles.operator}>=</span><span className={styles.string}>"lg"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>"secondary"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;High contrast tooltip&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
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
              <span>CustomTooltipColors Interface</span>
            </div>
          </div>
          <div className={styles.code}>
            <code>
              <span className={styles.keyword}>interface</span> <span className={styles.component}>CustomTooltipColors</span> {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.comment}>// Normal vision colors</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBg</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Background color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Text color</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>defaultBorder</span>: <span className={styles.keyword}>string</span>; <span className={styles.comment}>// Border color</span><br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Protanopia colors (Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>protanopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Deuteranopia colors (Most Common Red-Green Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>deuteranopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/><br/>

              &nbsp;&nbsp;<span className={styles.comment}>// Tritanopia colors (Blue-Yellow Blindness)</span><br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBg</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaColor</span>: <span className={styles.keyword}>string</span>;<br/>
              &nbsp;&nbsp;<span className={styles.property}>tritanopiaBorder</span>: <span className={styles.keyword}>string</span>;<br/>
              {'}'}
            </code>
          </div>
        </div>

        <div className={styles.centered}>
          <Tooltip content="Blue custom tooltip" position="top" variant='custom' arrow customColors={{ defaultBg: '#FFFFFF', defaultColor: '#000000', defaultBorder: '#007BFF', protanopiaBg: '#FFFFFF', protanopiaColor: '#000000', protanopiaBorder: '#FFA500', deuteranopiaBg: '#FFFFFF', deuteranopiaColor: '#000000', deuteranopiaBorder: '#9C27B0', tritanopiaBg: '#FFFFFF', tritanopiaColor: '#000000', tritanopiaBorder: '#00BCD4' }}>
            <Button variant="primary">Hover me</Button>
          </Tooltip>
          <Tooltip content="Orange custom tooltip" position="top" colorVision='protanopia' variant='custom' arrow customColors={{ defaultBg: '#FFFFFF', defaultColor: '#000000', defaultBorder: '#FF8C00', protanopiaBg: '#FFFFFF', protanopiaColor: '#000000', protanopiaBorder: '#FFA500', deuteranopiaBg: '#FFFFFF', deuteranopiaColor: '#000000', deuteranopiaBorder: '#FFA500', tritanopiaBg: '#FFFFFF', tritanopiaColor: '#000000', tritanopiaBorder: '#FFA500' }}>
            <Button variant="secondary">Hover me</Button>
          </Tooltip>
          <Tooltip content="Green custom tooltip" position="top" colorVision='deuteranopia' variant='custom' arrow customColors={{ defaultBg: '#FFFFFF', defaultColor: '#000000', defaultBorder: '#28A745', protanopiaBg: '#FFFFFF', protanopiaColor: '#000000', protanopiaBorder: '#28A745', deuteranopiaBg: '#FFFFFF', deuteranopiaColor: '#000000', deuteranopiaBorder: '#4CAF50', tritanopiaBg: '#FFFFFF', tritanopiaColor: '#000000', tritanopiaBorder: '#4CAF50' }}>
            <Button variant="success">Hover me</Button>
          </Tooltip>
          <Tooltip content="Purple custom tooltip" position="top" colorVision='tritanopia' variant='custom' arrow customColors={{ defaultBg: '#FFFFFF', defaultColor: '#000000', defaultBorder: '#A855F7', protanopiaBg: '#FFFFFF', protanopiaColor: '#000000', protanopiaBorder: '#A855F7', deuteranopiaBg: '#FFFFFF', deuteranopiaColor: '#000000', deuteranopiaBorder: '#A855F7', tritanopiaBg: '#FFFFFF', tritanopiaColor: '#000000', tritanopiaBorder: '#D946EF' }}>
            <Button variant="warning">Hover me</Button>
          </Tooltip>
          <Tooltip content="Pink custom tooltip" position="top" variant='custom' arrow customColors={{ defaultBg: '#FFFFFF', defaultColor: '#000000', defaultBorder: '#EC4899', protanopiaBg: '#FFFFFF', protanopiaColor: '#000000', protanopiaBorder: '#F472B6', deuteranopiaBg: '#FFFFFF', deuteranopiaColor: '#000000', deuteranopiaBorder: '#F472B6', tritanopiaBg: '#FFFFFF', tritanopiaColor: '#000000', tritanopiaBorder: '#F472B6' }}>
            <Button variant="danger">Hover me</Button>
          </Tooltip>
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
              <span className={styles.keyword}>import</span> {'{'} <span className={styles.component}>Tooltip</span>, <span className={styles.component}>Button</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'neo-ram-prisma'</span>;<br/>
              <span className={styles.keyword}>import</span> <span className={styles.string}>'neo-ram-prisma/style.css'</span>;<br/><br/>
              <span className={styles.keyword}>function</span> <span className={styles.function}>Demo</span>() {'{'}<br/>
              &nbsp;&nbsp;<span className={styles.keyword}>return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Tooltip</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>content</span><span className={styles.operator}>=</span><span className={styles.string}>"Custom styled tooltip"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>position</span><span className={styles.operator}>=</span><span className={styles.string}>"top"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>colorVision</span><span className={styles.operator}>=</span><span className={styles.string}>"protanopia"</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>variant</span><span className={styles.operator}>=</span><span className={styles.string}>'custom'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>arrow</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>customColors</span><span className={styles.operator}>={'{'}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBg</span>: <span className={styles.string}>'#ffffff'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultColor</span>: <span className={styles.string}>'#000000'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>defaultBorder</span>: <span className={styles.string}>'#cbd2dd'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBg</span>: <span className={styles.string}>'#ffffff'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaColor</span>: <span className={styles.string}>'#000000'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>protanopiaBorder</span>: <span className={styles.string}>'#FFA500'</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.component}>Button</span>&gt;Custom tooltip&lt;/<span className={styles.component}>Button</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className={styles.component}>Tooltip</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              &#125;
            </code>
          </div>
        </div>
      </div>
    </>
  );
};

export default TooltipPage;
