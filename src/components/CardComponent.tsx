import { Card, Image, Text } from '@mantine/core';


type CardComponentProps = {
  imagelink?: string;
  alt?: string;
  title: string;
  description: string;
};

function CardComponent({ imagelink, alt, title, description }: CardComponentProps) {
  return (
    <Card
      shadow="lg" 
      padding="xl"
      component="a"
      target="_blank"
      style={{
        width: 250,
        margin: "0 auto",
        border: "1px solid #e0e0e0", // borde suave
        background: "#fff", // asegúrate que el fondo sea blanco
      }}
    >
      <Card.Section>
        <Image
          src={imagelink}
          h={160}
          alt={alt}
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        {description}
      </Text>
    </Card>
  );
}

export default CardComponent;