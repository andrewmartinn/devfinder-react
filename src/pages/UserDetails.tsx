import { useEffect } from "react";
import useGithubContext from "../hooks/useGithubContext";
import { useParams } from "react-router-dom";
import { AbsoluteCenter, Text, VStack } from "@chakra-ui/react";
import { TiWarning } from "react-icons/ti";
import Loading from "../components/common/Loading";
import UserProfileHeader from "../components/user-details/UserProfileHeader";
import { UserDetails as UserDetailsType } from "../types";
import { motion } from "framer-motion";
import UserProfileStats from "../components/user-details/UserProfileStats";

const UserDetails: React.FC = () => {
  const { username } = useParams();
  const { selectedUser, getUser, error, loading } = useGithubContext();

  useEffect(() => {
    if (username) {
      getUser(username);
    }
  }, [getUser, username]);

  // Type Guard function to ensure selected user is not empty
  const isUserDetails = (user: unknown): user is UserDetailsType => {
    return (user as UserDetailsType).id !== undefined;
  };

  if (loading) {
    return (
      <AbsoluteCenter>
        <Loading />
      </AbsoluteCenter>
    );
  }

  if (error || !isUserDetails(selectedUser)) {
    return (
      <AbsoluteCenter>
        <Text
          fontSize={"2xl"}
          fontWeight={"500"}
          display={"flex"}
          alignItems={"center"}
          gap={"4"}
        >
          Error fetching user profile
          <TiWarning size={28} fill={"tomato"} />
        </Text>
      </AbsoluteCenter>
    );
  }

  const MotionStack = motion(VStack);

  return (
    <MotionStack
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <UserProfileHeader selectedUser={selectedUser} />
      <UserProfileStats
        followers={selectedUser.followers}
        following={selectedUser.following}
        publicRepos={selectedUser.public_repos}
        publicGists={selectedUser.public_gists}
      />
    </MotionStack>
  );
};
export default UserDetails;
