import { Badge, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { UserDetails } from "../../types";
import { Link } from "react-router-dom";
import { HiMiniAtSymbol } from "react-icons/hi2";
import colors from "../../theme/colors";
import UserSocialCards from "./UserHeaderCards";

interface UserProfileHeaderProps {
  selectedUser: UserDetails;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  selectedUser,
}) => {
  return (
    <Flex
      w={"full"}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      h={{
        base: "full",
        md: "20rem",
        lg: "20rem",
      }}
      gap={"10"}
    >
      <Image
        src={selectedUser.avatar_url}
        h={"full"}
        maxW={"100%"}
        objectFit={"cover"}
        objectPosition={"cover"}
        borderRadius={"lg"}
      />
      <Box w={"full"}>
        <Text
          fontSize={"5xl"}
          fontWeight={"700"}
          display={"flex"}
          alignItems={"center"}
          gap={"6"}
        >
          {selectedUser.login}
          {selectedUser.hireable && <Badge colorScheme="green">Hireable</Badge>}
        </Text>
        <Text
          fontSize={"xl"}
          display={"flex"}
          alignItems={"center"}
          gap={"1"}
          color={colors.gray3}
          mb={"4"}
        >
          <HiMiniAtSymbol size={20} />
          {selectedUser.name}
        </Text>
        {selectedUser.bio && (
          <Text fontSize={"xl"} mb={"4"}>
            {selectedUser.bio}
          </Text>
        )}
        <Button
          as={Link}
          to={selectedUser.html_url}
          rel="noreferrer"
          target="_blank"
          variant={"outline"}
          colorScheme={"blue"}
        >
          Visit Github Profile
        </Button>
        <UserSocialCards
          location={selectedUser.location}
          website={selectedUser.blog}
          twitterUsername={selectedUser.twitter_username}
        />
      </Box>
    </Flex>
  );
};
export default UserProfileHeader;
