import React from "react";

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const CardComponent = ({name,onAdd,price,src}) => {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src= {`/assets/${src}.jpg`}
                    height={160}
                    alt="Pizza"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{name}</Text>
                {/* <Badge color="pink" variant="light">
                </Badge> */}
            </Group>

            <Text size="sm" color="dimmed">
                Evet, Pele rahmetli, o da bizden yerdi... Taptaze fırından yeni çıkan pizzalarımızı dumanı tüterken
                görmenizi sağlıyoruz. Bir tık kadar uzağız...
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={onAdd} >
                Ekle Babba...
            </Button>
        </Card>
    );
}

export default CardComponent;