import React from 'react';
import { Box, Center, Image, Text, Divider, Flex, Link } from "@chakra-ui/react";
import topo from "../../assets/marcos-rodrigues/Topo.jpg";
import ImageCarousel from './components/Carrossel'
import Contacts from "./components/Contacts";
import agenda from "../../assets/marcos-rodrigues/Agenda.svg";
import compartilhar from "../../assets/marcos-rodrigues/Share.png";

const MarcosRodrigues: React.FunctionComponent = () => {
    const handleShare = async () => {
        try {
            await navigator.share({
                title: 'Marcos Rodrigues Barbeiro',
                text: '',
                url: 'https://onlinecartoes.com/marcos-rodrigues',
            });
            console.log('Conteúdo compartilhado com sucesso!');
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    };

    let responsive = '340px';
    const h = () => {
        const tamanhoTela = window.innerHeight;

        if (tamanhoTela >= 700 && tamanhoTela < 800) {
            responsive = '250px';
        }

        if (tamanhoTela >= 700) {
            responsive = '300px';
        }

        if (tamanhoTela >= 550 && tamanhoTela < 650) {
            responsive = '290px';
        }
    }
    h();
    return (
        <Box maxW={"428px"} h={'full'} position={'relative'}>
            <Box position={"absolute"} marginLeft={"90%"} top={'10px'} cursor={'pointer'} onClick={() => {handleShare()}}>
                <Image src={compartilhar} alt='Compartilhar' w={"30px"} h={"30px"} />
            </Box>

            <Box w={'full'} id="1">
                <Image src={topo} alt="Imagem de apresentação" />
            </Box>

            <Box
                id="2"
                w={'full'}
                backgroundColor={'#111111'}
                borderTopRadius={'3xl'}
                padding={"3"}
                position={'absolute'}
                top={responsive}
            >
                <Center>
                    <Text
                        fontSize={'20pt'}
                        fontFamily={"'Great Vibes', cursive"}
                        px={"2"}
                        color={'white'}
                        borderBottom={'2px'}
                    >
                        Marcos Rodrigues
                    </Text>
                </Center>
                <Center>
                    <Text
                        fontSize={'11pt'}
                        color={'white'}
                        px={"2"}
                        mt={'2'}
                        mb={'2'}
                        fontWeight={'light'}
                        fontFamily={"'Fira Sans'"}
                    >
                        Barbeiro | Curso para barbeiros
                    </Text>
                </Center>

                <Divider></Divider>

                <Box w={'full'}>
                    <ImageCarousel />
                </Box>

                <Divider></Divider>

                <Box w={'full'}>
                    <Contacts />
                </Box>

                <Link href="https://minhaagenda.digital/MR.Barbearia">
                    <Box w={"145px"} h={"37px"} mx={'auto'} my={'4'} bgGradient="linear(to-r, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.2))" borderRadius={'2xl'} border={'1px'} borderColor={'white'}>
                        <Flex mx={'auto'} pt={'5px'} w={'max-content'}>
                            <Image src={agenda} w={"26px"} h={"23px"} alt="Agendar"></Image>
                            <Text color={'white'} fontSize={'13pt'}>Agendar</Text>
                        </Flex>
                    </Box>
                </Link>

                <Center>
                    <Text color={'white'} mb={'1'} fontSize={'8pt'}>Atendimento de segunda a sábado, das 09:00 às 20:00</Text>
                </Center>
            </Box>
        </Box>
    );
}

export default MarcosRodrigues;
