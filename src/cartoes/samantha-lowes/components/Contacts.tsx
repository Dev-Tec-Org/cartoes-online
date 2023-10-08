import React from 'react';
import { Box, Button, Center, Flex, Image, Text, Link } from '@chakra-ui/react';
import contact from '../../../assets/marcos-rodrigues/Phone.svg'
import instagram from '../../../assets/marcos-rodrigues/Instagram.png'
import whats from '../../../assets/marcos-rodrigues/whatsapp_logo_icon_147205.svg'
import maps from '../../../assets/marcos-rodrigues/Google Maps.png'


const Contacts = () => {
    return (
        <Box w={'full'} maxWidth="428px" my="20px" mx={'auto'}>
            <Flex justifyContent={'space-between'} mx={'20px'}>
                <Link href='tel:+55 62 999911873'>
                    <Box w={'max-content'}>
                        <Center>
                            <Image
                                boxSize="50px"
                                objectFit="cover"
                                borderRadius="full"
                                src={contact}
                                alt="Imagem de contato"
                                cursor={'pointer'}
                                _hover={{ opacity: 0.8 }}
                            />
                        </Center>

                        <Center>
                            <Text color={'white'} fontSize={'11px'} mt={'2'} mx={'auto'} fontWeight={"light"} fontFamily={"'Montserrat', sans-serif"}>
                                Ligar
                            </Text>
                        </Center>
                    </Box>
                </Link>

                <Link href='https://api.whatsapp.com/send?phone=5562999911873&text=E%20a%C3%AD%20Lowes,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20voc%C3%AA.'>
                    <Box w={'max-content'}>
                        <Center>
                            <Image
                                boxSize="50px"
                                objectFit="cover"
                                borderRadius="full"
                                src={whats}
                                alt="Imagem de contato"
                                cursor={'pointer'}
                                _hover={{ opacity: 0.8 }}
                            />
                        </Center>

                        <Center>
                            <Text color={'white'} fontSize={'11px'} mt={'2'} mx={'auto'} fontFamily={"'Montserrat', sans-serif"}>
                                WhatsApp
                            </Text>
                        </Center>
                    </Box>
                </Link>

                <Link href='https://www.instagram.com/samanthalowes_barbeira/'>
                    <Box w={'max-content'}>
                        <Center>
                            <Image
                                boxSize="50px"
                                objectFit="cover"
                                borderRadius="full"
                                src={instagram}
                                alt="Imagem de contato"
                                cursor={'pointer'}
                                _hover={{ opacity: 0.8 }}
                            />
                        </Center>

                        <Center>
                            <Text color={'white'} fontSize={'11px'} mt={'2'} mx={'auto'} fontFamily={"'Montserrat', sans-serif"}>
                                Instagram
                            </Text>
                        </Center>
                    </Box>
                </Link>

                <Link href="https://www.google.com/maps/place/New+Vikings+Barbearia+Moderna/@-16.7050258,-49.2697138,17z/data=!3m1!4b1!4m6!3m5!1s0x935ef10627601931:0x5ab8d3ab595644dc!8m2!3d-16.7050258!4d-49.2671389!16s%2Fg%2F11fwh54l83?entry=ttu">
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
                            <Text color={'white'} fontSize={'11px'} mt={'2'} mx={'auto'} fontFamily={"'Montserrat', sans-serif"}>
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
