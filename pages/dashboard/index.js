import ContainerBlock from "@/components/ContainerBlock";
import { Box, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const router = useRouter()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const log = localStorage.getItem('isLogged')
        if (log) {
            const tokenid = localStorage.getItem('userinfo')
            axios
                .get(`/api/check`, {
                    headers: {
                        tok: tokenid,
                    },
                }).then((response) => {
                    if(!response.data.isValid){
                        setLoading(true)
                        router.push("/")
                    }
                    setLoading(false)
                })
        } else {
            setLoading(true)
            router.push("/")
        }
    },[router])

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <ContainerBlock>
            <Box bg={"#45c4b0"} h={"94vh"} w={"1240px"}>

            </Box>
        </ContainerBlock>
    )
}