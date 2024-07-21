import { Grid } from "@chakra-ui/react";
import { User } from "../../types";
import UserCard from "./UserCard";
import { motion, Variants } from "framer-motion";

interface UserResultsProps {
  users: User[];
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

const UserResults: React.FC<UserResultsProps> = ({ users }) => {
  return (
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
  );
};
export default UserResults;
