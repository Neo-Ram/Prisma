import {  Container, Text } from '@mantine/core';
import classes from './FooterLinks.module.css';
import Prisma_logo_white_mini from '../assets/Prisma_logo_white_mini.png'

const data = [
  {
    
    title: 'Project',
    links: [
      { label: 'Ramon Franco GitHub', link: '' },
      { label: 'Omar Beltran GitHub', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <img src={Prisma_logo_white_mini} alt="Prisma Logo" width={100} />
          <Text size="xs" c="dimmed" className={classes.description}>
           Simple, customizable, and built following basic WCAG guidelines.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          2025 Prisma.
        </Text>

        
      </Container>
    </footer>
  );
}
export default FooterLinks;