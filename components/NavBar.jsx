import {
    Box,
    Flex,
    Spacer,
    IconButton,
    Collapse,
    useDisclosure,
    Image,
    Button,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import NextLink from "next/link";
  import { useState, useEffect } from "react";
  import { useRouter } from "next/router";
  
  const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    
    
  
    const handleDropdownToggle = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleDropdownClose = () => {
      setShowDropdown(false);
    };
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 50;
      setIsScrolled(isScrolled);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <Box
        bg={"#042c44" }
        boxShadow={isScrolled ? "md" : "none"}
        py={4}
        px={8}
        position="fixed"
        top={isScrolled ? 0 : 0}
        left={0}
        right={0}
        zIndex={"initial"}
        transition="top 0.3s ease-in-out"
      >
        <Flex align="center">
          
          
  
          <Box fontWeight="bold" fontSize="lg">
            <NextLink href={"/"}>
              <Image
                
                src="/logo.png"
                width={"90px"}
                height={"60px"}
                alt="logo"
              />
            </NextLink>
          </Box>
          <Spacer />
          <Box display={{ base: "none", md: "block" }}>
            <Flex color="white">
              <Box mx={4} _hover={{ color: "#45c4b0" }} fontFamily={"rust"}>
                <NextLink href={"/"} >Acceuil</NextLink>
              </Box>
              <Box mx={4} _hover={{ color: "#45c4b0" }}>
                <Box
                  
                  position="relative"
                >
                  <NextLink href={"/services"}>Services</NextLink>
                </Box>
              </Box>
              <Box mx={4} _hover={{ color: "#45c4b0" }}>
                <Box
                  
                  position="relative"
                >
                  <NextLink href={"/"}>Demande de devis</NextLink>
                </Box>
              </Box>
              <Box mx={4} _hover={{ color: "#45c4b0" }}>
                <Box
                  
                  position="relative"
                >
                  <NextLink href={"/"}>Contact</NextLink>
                </Box>
              </Box>
            </Flex>
          </Box>
          <IconButton
            icon={<HamburgerIcon color={"white"} />}
            variant="ghost"
            colorScheme="#042c44"
            size="md"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            display={{ base: "block", md: "none" }}
            onClick={onToggle}
          />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box mt={4} bg={"#042c44"}>
            <Flex direction="column" color="white">
            <Box mx={4} _hover={{ color: "#45c4b0" }} fontFamily={"rust"}>
                <NextLink href={"/"} >Acceuil</NextLink>
              </Box>
              <Box mx={4} _hover={{ color: "#45c4b0" }}>
                <Box
                  
                  position="relative"
                >
                  <NextLink href={"/services"}>Services</NextLink>
                </Box>
              </Box>
              <Box mx={4} _hover={{ color: "#45c4b0" }}>
                <Box
                  
                  position="relative"
                >
                  <NextLink href={"/"}>Demande de devis</NextLink>
                </Box>
              </Box>
              <Box mx={4} _hover={{ color: "#45c4b0" }}>
                <Box
                  
                  position="relative"
                >
                  <NextLink href={"/"}>Contact</NextLink>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Collapse>
      </Box>
    );
  };
  
  export default Navbar;
  