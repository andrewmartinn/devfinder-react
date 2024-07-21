import {
  Avatar,
  Box,
  Card,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import colors from "../../theme/colors";
import { User } from "../../types";
import { TbChevronRight } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface UserCardProps {
  user: User;
}

const MotionCard = motion(Card);

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <MotionCard
      p={"4"}
      bg={useColorModeValue(colors.gray2, colors.blue2)}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      gap={"4"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Avatar size={"lg"} src={user.avatar_url} />
      <Box>
        <Text fontSize={"2xl"} fontWeight={"600"}>
          {user.login}
        </Text>
        <ChakraLink
          as={Link}
          display={"flex"}
          my={"2"}
          to={`user/${user.login}`}
          textTransform={"uppercase"}
          alignItems={"center"}
          gap={1}
          _hover={{ textDecoration: "underline" }}
          cursor={"pointer"}
          fontSize={"12px"}
        >
          View Profile
          <TbChevronRight size={12} />
        </ChakraLink>
      </Box>
    </MotionCard>
  );
};
export default UserCard;
