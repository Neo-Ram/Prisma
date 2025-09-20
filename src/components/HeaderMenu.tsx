import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';

interface HeaderMenuProps {
  onNavigate: (page: string) => void;
}

const links = [
  { page: 'components', label: 'Components' },
  { page: 'color-blindness', label: 'Color blindness simulator' },
  
  
  // 🔥 AQUÍ AGREGAS NUEVOS BOTONES DEL MENÚ:
  // { page: 'nueva-pagina', label: 'Nueva Página' },
  // { page: 'otra-pagina', label: 'Otra Página' },
  
 // { link: '/pricing', label: 'Pricing' },
  //{
   // link: '#2',
    //label: 'Support',
    //links: [
     // { link: '/faq', label: 'FAQ' },
      //{ link: '/demo', label: 'Book a demo' },
      //{ link: '/forums', label: 'Forums' },
    //],
 // },
];

export function HeaderMenu({ onNavigate }: HeaderMenuProps) {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <button
        key={link.label}
        className={classes.link}
        onClick={() => {
          onNavigate(link.page);
        }}
      >
        {link.label}
      </button>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <img
            src={('/src/assets/Prisma_logo_white_mini.png')}
            alt="Prisma Logo"
            style={{ height: 35, cursor: 'pointer' }}
            onClick={() => onNavigate('home')}
          />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}