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
            An <span className={`${classes.highlight} `}>accessible</span> React <br /> components library
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
              <ThemeIcon size={5} radius="xl" color='black'>
               
              </ThemeIcon>
            }
          >
            <List.Item>
              <b className={classes.gradientText}>Accessibility focused</b>
              &nbsp;– components tested with color-blindness filters and scalable text for low vision.
            </List.Item>
            <List.Item>
              <b className={classes.gradientText}>Simple to use</b>
              &nbsp;– easy integration into any React project with minimal setup.
            </List.Item>
            <List.Item>
              <b className={classes.gradientText}>Customizable</b>
              &nbsp;– switch between themes for protanopia, deuteranopia, tritanopia, achromatopsia, or low vision.
            </List.Item>
            <List.Item>
              <b className={classes.gradientText}>Open source</b>
              &nbsp;– free to use and improve as part of my thesis project.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="l" size="md" className={classes.control} color='blue' variant="filled">
              Get started
            </Button>
            
          </Group>
        </div>
        <Image src={BoyWithLaptop} className={classes.image} />
      </div>
    </Container>
  );
}