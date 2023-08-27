import React from 'react';
import { Box, Button, Center, Flex, Image, Text, Link } from '@chakra-ui/react';
import contact from '../../../assets/marcos-rodrigues/Phone.svg'
import instagram from '../../../assets/marcos-rodrigues/Instagram.png'
import whats from '../../../assets/marcos-rodrigues/whatsapp_logo_icon_147205.svg'
import maps from '../../../assets/marcos-rodrigues/Google Maps.png'


const Contacts = () => {
    return (
        <Box w={'full'} maxWidth="428px" my="30px" mx={'auto'}>
            <Flex justifyContent={'space-between'} mx={'20px'}>
                <Link href='tel:+55 62 995033237'>
                    <Box w={'max-content'}>
                        <Image
                            boxSize="50px"
                            objectFit="cover"
                            borderRadius="full"
                            src={contact}
                            alt="Imagem de contato"
                            cursor={'pointer'}
                            _hover={{ opacity: 0.8 }}
                        />
                        <Center>
                            <Text color={'white'} fontSize={'7pt'} mt={'0.5'} mx={'auto'} fontWeight={'bold'} fontFamily={"'Fira Sans'"}>
                                Discar
                            </Text>
                        </Center>
                    </Box>
                </Link>

                <Link href='https://api.whatsapp.com/send?phone=5562995033237&text=Ol%C3%A1,%20caso%20deseje%20agendar%20um%20hor%C3%A1rio,%20por%20favor%20acessar:%20https://minhaagenda.digital/MR.Barbearia'>
                    <Box w={'max-content'}>
                        <Image
                            boxSize="50px"
                            objectFit="cover"
                            borderRadius="full"
                            src={whats}
                            alt="Imagem de contato"
                            cursor={'pointer'}
                            _hover={{ opacity: 0.8 }}
                        />
                        <Center>
                            <Text color={'white'} fontSize={'7pt'} mt={'0.5'} mx={'auto'} fontWeight={'bold'} fontFamily={"'Fira Sans'"}>
                                WhatsApp
                            </Text>
                        </Center>
                    </Box>
                </Link>

                <Link href='https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTYzNTY0MjYzNjIxMDI0?igshid=MDJmNzVkMjY='>
                    <Box w={'max-content'}>
                        <Image
                            boxSize="50px"
                            objectFit="cover"
                            borderRadius="full"
                            src={instagram}
                            alt="Imagem de contato"
                            cursor={'pointer'}
                            _hover={{ opacity: 0.8 }}
                        />
                        <Center>
                            <Text color={'white'} fontSize={'7pt'} mt={'0.5'} mx={'auto'} fontWeight={'bold'} fontFamily={"'Fira Sans'"}>
                                Instagram
                            </Text>
                        </Center>
                    </Box>
                </Link>

                <Link href="https://maps.app.goo.gl/RfMHHp7EvyuL8UdE7?g_st=iwb">
                    <Box w={'max-content'}>
                        <Image
                            boxSize="50px"
                            objectFit="cover"
                            borderRadius="full"
                            src={maps}
                            alt="Imagem de contato"
                            cursor={'pointer'}
                            _hover={{ opacity: 0.8 }}
                        />
                        <Center>
                            <Text color={'white'} fontSize={'7pt'} mt={'0.5'} mx={'auto'} fontWeight={'bold'} fontFamily={"'Fira Sans'"}>
                                Maps
                            </Text>
                        </Center>
                    </Box>
                </Link>
            </Flex >
        </Box >
    );
};

export default Contacts;
