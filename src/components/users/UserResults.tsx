import { AbsoluteCenter, Grid, Text } from "@chakra-ui/react";
import { User } from "../../types";
import UserCard from "./UserCard";
import { motion, Variants } from "framer-motion";
import { TiWarning } from "react-icons/ti";

interface UserResultsProps {
  users: User[];
  hasSearched: boolean;
}

const MotionGrid = motion(Grid);
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const UserResults: React.FC<UserResultsProps> = ({ users, hasSearched }) => {
  return (
    <>
      <MotionGrid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={"8"}
        mt={"10"}
        inital="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </MotionGrid>
      {hasSearched && (!users || users.length === 0) && (
        <AbsoluteCenter>
          <Text
            fontSize={"xl"}
            fontWeight={"600"}
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
          >
            No Results Found
            <TiWarning size={28} fill={"tomato"} />
          </Text>
        </AbsoluteCenter>
      )}
    </>
  );
};
export default UserResults;
