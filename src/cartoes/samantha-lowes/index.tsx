import React from 'react';
import { Box, Center, Image, Text, Divider, Flex, Link } from "@chakra-ui/react";
import Contacts from './components/Contacts';
import imagemCapa from '../../assets/samantha-lowes/imgs/ImagemCapa.jpg';
import comp from "../../assets/samantha-lowes/icons/Share.png";

export const SamanthaLowes = () => {
    const handleShare = async () => {
        try {
            await navigator.share({
                title: 'Samantha Lowes',
                text: 'Tapa os ouvidos e vai!',
                url: 'https://onlinecartoes.com/samantha-lowes',
            });
            console.log('Conteúdo compartilhado com sucesso!');
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    };

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            h="100%"
            w={"100%"}
            backgroundColor={"black"}
        >
            <Box maxW={"428px"} h={'full'} backgroundColor={"#000000"} position={'relative'}>

                <Box zIndex={4} position={"absolute"} marginLeft={"89%"} top={'10px'} cursor={'pointer'} onClick={() => { handleShare() }}>
                    <Image src={comp} alt='Compartilhar' w={"30px"} h={"30px"} />
                </Box>

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
