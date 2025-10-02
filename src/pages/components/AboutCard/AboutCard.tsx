import {  IconUser, IconStar, IconAlertTriangle } from '@tabler/icons-react';
import {
  Card,
  Container,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './AboutCard.module.css';

const mockdata = [
  {
    title: 'Creators',
    description:
      'Ramón Franco Reyes & Omar de Jesús Beltrán Beltrán',
    icon: IconStar,
  },
  {
    title: 'Director and Codirector',
    description:
      'Dr. Herman Geovany Ayala Zuñiga & Dr. Manuel de Jesús Rodríguez Guerrero',
    icon: IconUser,
  },
  {
    title: 'Note',
    description:
      'This is an academic project with no external sponsorships. Its purpose is to explore accessibility in web development and contribute to more inclusive digital experiences.',
    icon: IconAlertTriangle,
  },
];

export function AboutCard() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} />
      {feature.title === 'Creators' ? (
        <Text
          fz="lg"
          fw={500}
          className={classes.cardTitle}
          mt="md"
          variant="gradient"
          gradient={{ from: 'pink', to: 'blue' }}
        >
          {feature.title}
        </Text>
      ) : (
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
      )}
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      

      <Title order={2} className={classes.title} ta="center" mt="sm">
        About
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        This project was developed as part of the Software Engineering thesis at the Universidad Autónoma de Sinaloa (UAS).
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default AboutCard;