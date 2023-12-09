import { Box, VStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const log = localStorage.getItem("isLogged");
    if (log) {
      const tokenid = localStorage.getItem("userinfo");
      axios
        .get(`/api/check`, {
          headers: {
            tok: tokenid,
          },
        })
        .then((response) => {
          if (!response.data.isValid) {
            setLoading(true);
            router.push("/");
          }
          setLoading(false);
        });
    } else {
      setLoading(true);
      router.push("/");
    }
  }, [router]);
  if (loading) {
    return (
        <></>
    )
  }
  return (
    <Box
      w="250px"
      h="100vh"
      bg="#45c4b0"
      p={4}
      boxShadow="2px 0 10px rgba(0, 0, 0, 0.1)"
      position={"sticky"}
    >
      <VStack spacing={4} pt={20} align="flex-start">
        <Text fontSize="xl" fontWeight="bold">
          Dashboard menu
        </Text>
        <Text fontSize="md">QR code stats</Text>
        <Text fontSize="md">Option 2</Text>
        <Text fontSize="md">Option 3</Text>
        {/* Ajoutez d'autres éléments de menu ici */}
      </VStack>
    </Box>
  );
};

export default Sidebar;
