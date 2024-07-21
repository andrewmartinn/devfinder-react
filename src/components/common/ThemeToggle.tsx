import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import colors from "../../theme/colors";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <MotionButton
      bg={"none"}
      size={"md"}
      onClick={toggleColorMode}
      display={"flex"}
      gap={"3"}
      alignItems={"center"}
      textTransform={"uppercase"}
      fontSize={"14px"}
      _hover={{ bg: useColorModeValue("#EEE", colors.blue2) }}
      whileHover={{
        y: [0, -8, 0],
        transition: { repeat: Infinity, duration: 1.2 },
      }}
    >
      {colorMode === "light" ? "Dark" : "Light"}
      {colorMode === "light" ? (
        <SunIcon boxSize={"18px"} />
      ) : (
        <MoonIcon boxSize={"18px"} />
      )}
    </MotionButton>
  );
};
export default ThemeToggle;
