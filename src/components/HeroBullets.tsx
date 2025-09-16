import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './HeroBullets.module.css';
import BoyWithLaptop from '../assets/BoyWithLaptop.png'

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            An <span className={classes.highlight} >accessible</span> React <br /> components library
          </Title>
          <Text c="dimmed" mt="md">
           Build inclusive web applications with ease 
           – this small library includes customizable components adapted for different types of color blindness and low vision, following basic WCAG guidelines.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color='pink'>
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Accessibility focused</b> – components tested with color-blindness filters and scalable text for low vision.
            </List.Item>
            <List.Item>
              <b>Simple to use</b> – easy integration into any React project with minimal setup.
            </List.Item>
            <List.Item>
              <b>Customizable</b> – switch between themes for protanopia, deuteranopia, tritanopia, achromatopsia, or low vision.
            </List.Item>
            <List.Item>
              <b>Open source</b> – free to use and improve as part of my thesis project.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="l" size="md" className={classes.control} color='pink' variant="filled">
              Get started
            </Button>
            
          </Group>
        </div>
        <Image src={BoyWithLaptop} className={classes.image} />
      </div>
    </Container>
  );
}