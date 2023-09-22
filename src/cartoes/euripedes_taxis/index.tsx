import React from 'react';
import { Box, Center, Image, Text, Divider, Flex, Link } from "@chakra-ui/react";
import carro from "../../assets/euripedestaxi/imgs/carro.png";
import linhaDivisao from "../../assets/euripedestaxi/imgs/Detalhe encima 2.png";
import imagePerfil from "../../assets/euripedestaxi/imgs/Photo Eurípedes.png";
import tracado from "../../assets/euripedestaxi/imgs/arte tracado 1.svg";
import tracado2 from "../../assets/euripedestaxi/imgs/arte tracado 2.svg";
import predio from "../../assets/euripedestaxi/icons/Empresas.svg";
import idosos from "../../assets/euripedestaxi/icons/Idosos.svg";
import whats from "../../assets/euripedestaxi/icons/WhatsApp.svg";
import fone from "../../assets/euripedestaxi/icons/Phone.svg";

const EuripedesTaxis = () => {
    return (
        <Box maxW={"428px"} h={'full'} position={'relative'}>
            <Box position={"relative"} h={"max-content"}>
                <Box h="max-content" w={"full"}>
                    <Image src={carro} w={"full"} />
                    <Image src={linhaDivisao} top={"0"} position={"absolute"} w={"full"} />
                </Box>

                <Box w={"max-content"} left={"50%"} right={"50%"} transform="translate(-50%, -50%)" position={"absolute"} top={"100%"}>
                    <Image src={imagePerfil} w={"200px"} boxShadow={"2xl"} borderRadius={"full"}></Image>
                    <Center>
                        <Text fontSize={"2xl"} fontWeight={'700'}>
                            Eurípedes Quirino
                        </Text>
                    </Center>
                    <Center>
                        <Text fontFamily={"'Fira Sans'"} fontWeight={"600"}>
                            Taxista | SMT 1268
                        </Text>
                    </Center>
                </Box>
            </Box>

            <Box position={"relative"} h={"max-content"}>
                <Flex mt={"170px"} w={"full"}>
                    <Image src={predio} w={"200px"} h={"100px"} />
                    <Center>
                        <Text textAlign={"center"}>Atendemos empresas e entregas</Text>
                    </Center>
                </Flex>

                <Box mt={"-70px"}>
                    <Image src={tracado} w={"50%"} position={"absolute"} right={"0"} />
                </Box>

                <Flex mt={"120px"} w={"full"} zIndex={"2"}>
                    <Center>
                        <Text textAlign={"center"}>Atendemos empresas e entregas</Text>
                    </Center>
                    <Image src={idosos} w={"200px"} h={"100px"} />
                </Flex>

                <Box zIndex={"1"}>
                    <Image src={tracado2} w={"100%"} position={"absolute"} top={"80%"} />
                </Box>
            </Box>

            <Box>
                <Link href="https://api.whatsapp.com/send?phone=5562985819490&text=Ol%C3%A1,%20queria%20agendar%20uma%20corrida!">
                    <Box>
                        <Flex border={"1px"} borderColor={"green.200"} w={"max-content"} p={"1.5"} borderRadius={"full"} my={"5"} mx={"auto"}>
                            <Image src={whats} w={"35px"} />
                            <Box ml={"2"}>
                                <Text fontSize={"10px"}>WhatsApp</Text>
                                <Text fontSize={"16px"}>(62) 9-8581-9490</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>

                <Link href="href='tel:+55 62 985819490">
                    <Box>
                        <Flex border={"1px"} borderColor={"green.200"} w={"max-content"} p={"1.5"} borderRadius={"full"} mt={"-2"} mx={"auto"}>
                            <Image src={fone} w={"35px"} />
                            <Box ml={"2"}>
                                <Text fontSize={"10px"}>WhatsApp</Text>
                                <Text fontSize={"16px"}>(62) 9-8581-9490</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>
            </Box>

            <Box textAlign={"center"} mt={"4"} mb={"5"}>
                <Text fontFamily={"'Fira Sans'"} fontWeight={"800"}>Fazemos viagens, desconto especial</Text>
                <Text fontWeight={"bold"}>Qualidade e respeito ao cliente</Text>
            </Box>
        </Box>
    )
}

export default EuripedesTaxis