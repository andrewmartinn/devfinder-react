import { AbsoluteCenter, Box, Text } from "@chakra-ui/react";
import UserResults from "../components/users/UserResults";
import { useEffect, useState } from "react";
import { User } from "../types";
import Loading from "../components/common/Loading";
import { TiWarning } from "react-icons/ti";

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await fetch("https://api.github.com/users", {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch users!");
      }
      const data: User[] = await response.json();
      setUsers(data);
      setLoading(false);
      setError(false);
      console.log(data);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Failed to fetch users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
