import { AbsoluteCenter, Box, Text } from "@chakra-ui/react";
import UserResults from "../components/users/UserResults";
import { useEffect } from "react";
import Loading from "../components/common/Loading";
import { TiWarning } from "react-icons/ti";
import useGithubContext from "../hooks/useGithubContext";

const Home: React.FC = () => {
  const { users, error, loading, fetchUsers } = useGithubContext();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (error) {
    return (
      <AbsoluteCenter>
        <Text
          fontSize={"2xl"}
          fontWeight={"500"}
          display={"flex"}
          alignItems={"center"}
          gap={"4"}
        >
          Error fetching users
          <TiWarning size={28} fill={"tomato"} />
        </Text>
      </AbsoluteCenter>
    );
  }

  if (loading) {
    return (
      <AbsoluteCenter>
        <Loading />
      </AbsoluteCenter>
    );
  }

  return (
    <Box>
      Search Bar
      <UserResults users={users} />
    </Box>
  );
};
export default Home;
