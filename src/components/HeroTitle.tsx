import { Button, Container, Group, Text } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          <Text component="span" variant="gradient" gradient={{ from: 'pink', to: 'blue' }} inherit>
            Accessible React
          </Text>{' '}
           components for visual diversity
        </h1>

        <Text className={classes.description} color="dimmed">
          A small library of React components designed for people with different types of color blindness and low vision – simple, customizable, and built following basic WCAG guidelines.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'pink', to: 'blue' }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="#"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}