import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};
export default RootLayout;
