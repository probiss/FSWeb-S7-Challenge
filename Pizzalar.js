import React, { useState } from 'react';
import { Container, Button,Indicator, Group, Drawer, List, ThemeIcon,Badge, SimpleGrid, Input } from '@mantine/core';
import Card from './components/Card';
import { IconCircleCheck, IconBasket, IconCircleDashed } from '@tabler/icons';
import "./App.css";
import { Routes } from "./components/Routes";


const storeItems = [
    {
        id:100,
        name: "Karışık Pizza",
        src: "pizza2",
        price: 20,
    },
    {
        id:100,
        name: "Bol Malzemeli Pizza",
        src: "pizza3",
        price: 25,
    },
    {
        id:101,
        name: "Sucuk Rüyası",
        src: "pizza4",
        price: 30,
    },
    {
        id:102,
        name: "Peynir Karnavalı",
        src: "pizza5",
        price: 25,
    },
    {
        id:103,
        name: "Vegy Pizza",
        src: "pizza6",
        price: 30,
    },
    {
        id:104,
        name: "Sucuk Rüyası v2.0",
        src: "pizza1",
        price: 30,
    }
]
function Pizzalar() {
    <>
    <Routes />
    </>
    let [basketItems, setBasketItems] = useState([]);
    let [searchValue, setSearchValue] = useState("");
    let [opened,setOpened] = useState(false);
    let filteredItems = storeItems.filter((item) =>
        item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    let addToBasket = ({id,name}) => {
        let basketIndex = basketItems.findIndex((item) => item.id == id);
        if (basketIndex>=0) {
            let _basketItems = [...basketItems];
            _basketItems[basketIndex].count+=1;
            setBasketItems(_basketItems);
        }else {
            setBasketItems([...basketItems, { id,name,count:1 }]);
        }
    };
    return (
        <Container>
            <Group align='end'>
                <Input.Wrapper label="Arama">
                    <Input value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
                </Input.Wrapper>
                <Button onClick={() => setSearchValue("")} > Temizleee </Button>
                <Indicator label={basketItems.count} color="red" size={20} >
                    <Button  onClick={() => setOpened(true) }>
                        <IconBasket  />
                    </Button>
                </Indicator>
            </Group>
            <SimpleGrid cols={3} className="Store" >
                {filteredItems.map(({ name, src, id }) => {
                    return (
                        <Card
                            key={name}
                            name={name}
                            src={src}
                            onAdd={ () => addToBasket({name,id})}
                        />
                    );
                })}
            </SimpleGrid >
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Sepetim"
                padding="md"
                size="md"
                transition="rotate-left"
                transitionDuration={250}
                transitionTimingFunction="ease"
            >
                <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                            <IconCircleCheck size={16} />
                        </ThemeIcon>
                    }
                >
                    {basketItems.map(({ name,count }, index) => (
                        <List.Item key={index}> {name} <Badge>{count}</Badge> </List.Item>
                    ))}
                </List>
            </Drawer>

            <Group position="center">
                <Indicator label={basketItems.length} color="red" size={20} >
                    <Button onClick={() => setOpened(true)}>
                        Sepetim
                    </Button>
                </Indicator>
            </Group>

        </Container>
    );
};

export default Pizzalar;