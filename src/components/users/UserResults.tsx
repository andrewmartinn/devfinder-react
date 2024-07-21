import { Box, Text } from "@chakra-ui/react";
import { User } from "../../types";

interface UserResultsProps {
  users: User[];
}

const UserResults: React.FC<UserResultsProps> = ({ users }) => {
  return (
    <Box>
      {users?.map((user) => (
        <Text key={user.id}>{user.login}</Text>
      ))}
    </Box>
  );
};
export default UserResults;
