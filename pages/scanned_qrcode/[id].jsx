import ContainerBlock from "@/components/ContainerBlock";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { Prisma, PrismaClient } from "@prisma/client";
import axios from "axios";

export default function index_redirect({ isCodeValid }) {
    const router = useRouter();
    const { id } = router.query;
    const prisma = new PrismaClient()
    const [isOk, setOk] = useState(isCodeValid);


    useEffect(() => {
        
        if (id) {


            axios.get(`/api/scannedqrcode`, {
                headers: {
                    "code_id": id
                }
            }).then((response) => {
                if (response.data.isValid) {
                    setOk(true)
                    setTimeout(() => {
                        router.push("/")
                    }, 5000)
                }
            })
            
        } 
        
    }, [id]);
    
    return (
        <ContainerBlock>
            {isOk ? (
                <Box
                    minHeight="100vh"
                    bg={`url('/fond.png')`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box mt={14}>
                        <Center>
                            <Box textAlign="center">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    boxSize="250px"
                                    width={"30%"}
                                    mx="auto"
                                    borderRadius={"10%"}
                                />
                                <Text color="#fff" fontSize={[40, 64]} mt={4}>
                                    Nous vous redirigeons vers notre site !
                                </Text>
                            </Box>
                        </Center>

                    </Box>
                </Box>
            ) : (
                <Box
                    minHeight="100vh"
                    bg={`url('/fond.png')`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box mt={14}>
                        <Center>
                            <Box textAlign="center">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    boxSize="250px"
                                    width={"30%"}
                                    mx="auto"
                                    borderRadius={"10%"}
                                />
                                <Text color="#fff" fontSize={[40, 64]} mt={4}>
                                    Une erreur est apparue veuillez rejoindre notre site !
                                </Text>
                            </Box>
                        </Center>

                    </Box>
                </Box>
            )}
        </ContainerBlock>
    )
}
