import React from 'react';
import { Box, Center, Image, Text, Divider, Flex, Link } from "@chakra-ui/react";
import Contacts from './components/Contacts';
import imagemCapa from '../../assets/samantha-lowes/imgs/ImagemCapa.jpg'
export const SamanthaLowes = () => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            h="100%"
            w={"100%"}
            backgroundColor={"black"}
        >
            <Box maxW={"428px"} h={'full'} backgroundColor={"#000000"}>
                <Image src={imagemCapa} />
                <Box backgroundColor={"#000000"}>
                    <Contacts />
                </Box>
                <Center>
                    <Text color={"#FFFFFF"} fontFamily={"'Playball', cursive"} fontSize={"35px"} mb={"10"}>Tapa os ouvidos e <Text as="span" color={"#E3BA91"}>vai!</Text></Text>
                </Center>
            </Box>
        </Flex>
    )
}
