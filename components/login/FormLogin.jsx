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

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function FormLogin() {
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
  return (
    <Box
      bg={"#45c4b0"}
      flexDirection="column"
      mt={20}
      mx={10}
      px={20}
      borderRightRadius={"2xl"}
      w={"50%"}
      height={"70vh"}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        onChange={() => {
          setFormError(false);
        }}
      >
        <FormControl mb={[4, 6]}>
          <FormLabel
            htmlFor="username"
            fontSize={["10px", "12px"]}
            fontWeight={500}
          >
            Identifiant
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Image
                src={"/icons/user.svg"}
                alt="User Icon"
                boxSize={9}
                pt={2}
              />
            </InputLeftElement>
            <Input
              type="text"
              id="username"
              autoFocus
              placeholder="Saisissez votre adresse email"
              fontSize={"12px"}
              bg={"secondary.500"}
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
          >
            Mot de passe
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Image
                src={"/icons/lock.svg"}
                alt="Lock Icon"
                boxSize={9}
                pt={2}
              />
            </InputLeftElement>
            <Input
              type={isOpen ? "text" : "password"}
              id="password"
              placeholder="Saisissez votre mot de passe"
              fontSize={"12px"}
              bg={"secondary.500"}
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
                    src={isOpen ? "/icons/eye.svg" : "/icons/eye.svg"}
                    alt="Show/Hide Password Icon"
                    boxSize={9}
                    pt={2}
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
          bg="primary.500"
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
            <>Je me connecte -&gt;</>
          )}
        </Button>
      </form>
    </Box>
  );
}
