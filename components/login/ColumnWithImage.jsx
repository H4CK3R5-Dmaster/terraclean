import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Grid,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const ColumnWithImage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("/api/logon", {
        username,
        password,
      });
      console.log(response)
      
      if (response.status === 200) {
        localStorage.setItem("isLogged", true)
        localStorage.setItem("user_id", response.data.iduser)
        localStorage.setItem("userinfo", response.data.infosup)
        router.push("/dashboard")
      } else {
        
        console.error("Login failed with status:", response.status);
      }
    } catch (error) {
      
      console.error("Error during login:", error);
    }

    setIsLoading(false);
  };
  return (
    <Flex align="center" justify="center" h="90vh" pt={20}>
      <Box
        w={"95%"}
        borderRadius="2xl"
        bg="#45c4b0"
        maxHeight={"90vh"}
        h={"70vh"}
        display="flex"
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box p={10} display={["none", "flex"]} pl={20}>
            <Image src="/conn.svg" alt="Image" boxSize={"90%"} />
          </Box>

          <Box mt={10} width={"60%"} mx={["24", "24"]}>
            <Heading my={10} color={"white"}>
              Connexion 👋
            </Heading>
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormControl mb={[4, 6]} w={"100%"}>
                <FormLabel
                  htmlFor="username"
                  fontSize={["10px", "12px"]}
                  fontWeight={500}
                  color={"white"}
                >
                  Identifiant
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Image
                      src={"/icons/user.svg"}
                      alt="User Icon"
                      boxSize={9}
                    />
                  </InputLeftElement>
                  <Input
                    type="text"
                    id="username"
                    autoFocus
                    placeholder="Identifiant"
                    fontSize={"12px"}
                    bg={"gray.200"}
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl mb={[4, 6]}>
                <FormLabel
                  htmlFor="password"
                  fontSize={["10px", "12px"]}
                  fontWeight={500}
                  color={"white"}
                >
                  Mot de passe
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Image
                      src={"/icons/lock.svg"}
                      alt="Lock Icon"
                      boxSize={9}
                    />
                  </InputLeftElement>
                  <Input
                    type={isOpen ? "text" : "password"}
                    id="password"
                    placeholder="Saisissez votre mot de passe"
                    fontSize={"12px"}
                    bg={"gray.200"}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={
                        isOpen
                          ? "Masquer le mot de passe"
                          : "Afficher le mot de passe"
                      }
                      icon={
                        <Image
                          src={isOpen ? "/icons/eye.png" : "/icons/eye.png"}
                          alt="Show/Hide Password Icon"
                          boxSize={6}
                        />
                      }
                      variant="ghost"
                      colorScheme="gray"
                      _hover={{}}
                      onClick={onToggle}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                type="submit"
                isDisabled={isLoading}
                bg="#042c44"
                _hover={{}}
                loadingText="Connexion en cours..."
                color={"white"}
                w={"full"}
                fontSize={["14px", "16px", "18px"]}
                fontWeight={600}
              >
                {isLoading ? (
                  <Spinner color="primary.500" />
                ) : (
                  <>Je me connecte </>
                )}
              </Button>
            </form>
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
};
