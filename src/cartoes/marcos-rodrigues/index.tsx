import { Box, Center, Image, Text, Divider, Flex, Link } from "@chakra-ui/react";
import topo from "../../assets/marcos-rodrigues/Topo.jpg";
import ImageCarousel from './components/Carrossel'
import Contacts from "./components/Contacts";
import agenda from "../../assets/marcos-rodrigues/Agenda.svg";

function MarcosRodrigues() {
    return (
        <Box maxW={"428px"} backgroundColor={"black"} position="relative">
            <Box w={'full'} id="1">
                <Image src={topo} alt="Imagem de apresentação" />
            </Box>

            <Box 
                id="2"
                w={'full'}
                backgroundColor={'#111111'}
                borderTopRadius={'3xl'}
                padding={"3"}
                position="absolute"
                top="380px">
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
                    <Text color={'white'} mb={'1'} fontSize={'6pt'}>Atendimento de segunda a sábado, das 09:00 às 20:00</Text>
                </Center>
            </Box>
        </Box>
    );
}

export default MarcosRodrigues;
