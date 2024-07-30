import { Flex, Text } from "@chakra-ui/react";
import { UserRepo } from "../../types";
import RepoCard from "./RepoCard";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

interface UserReposProps {
  repos: UserRepo[];
}

const UserRepos: React.FC<UserReposProps> = ({ repos }) => {
  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      my={"6"}
      w={"full"}
      flexDirection={"column"}
    >
      <Text fontSize={"4xl"} fontWeight={"700"} mb={"4"}>
        Latest Repositories
      </Text>
      {repos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </MotionFlex>
  );
};
export default UserRepos;
