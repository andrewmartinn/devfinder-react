import { Container, Flex, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Container
      maxW={"7xl"}
      py={"6"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex as={Link} to={"/"} alignItems={"center"} gap={"3"}>
        <FaGithub size={30} />
        <Text fontSize={"3xl"} fontWeight={"700"} letterSpacing={"1px"}>
          devfinder
        </Text>
      </Flex>
      <ThemeToggle />
    </Container>
  );
};
export default Navbar;
