import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import colors from "../theme/colors";

const RootLayout: React.FC = () => {
  return (
    <Box minH={"100vh"} bg={useColorModeValue(colors.gray1, colors.blue1)}>
      <Navbar />
      <Container maxW={"7xl"} my={"10"}>
        <Outlet />
      </Container>
    </Box>
  );
};
export default RootLayout;
