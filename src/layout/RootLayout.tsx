import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import colors from "../theme/colors";

const RootLayout: React.FC = () => {
  return (
    <Box bg={useColorModeValue(colors.gray1, colors.blue1)}>
      <Navbar />
      <Container maxW={"7xl"} py={"10"} minH={"100vh"}>
        <Outlet />
      </Container>
    </Box>
  );
};
export default RootLayout;
