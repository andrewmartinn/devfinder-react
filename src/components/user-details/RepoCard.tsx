import {
  Badge,
  Card,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserRepo } from "../../types";
import colors from "../../theme/colors";
import { FaEye, FaLink, FaStar } from "react-icons/fa";
import { FaCodeFork, FaCodePullRequest } from "react-icons/fa6";

interface RepoCardProps {
  repo: UserRepo;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  const cardBg = useColorModeValue(colors.gray2, colors.blue2);

  return (
    <Card
      mb={"4"}
      borderRadius={"lg"}
      bg={cardBg}
      p={"4"}
      h={{ base: "full", md: "7.8rem" }}
    >
      <Text
        fontSize={"xl"}
        fontWeight={"700"}
        display={"flex"}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDirection={{ base: "column-reverse", md: "row" }}
        gap={"4"}
        mb={"2"}
      >
        <a
          href={repo.html_url}
          target="_blank"
          rel="norefferer"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Icon as={FaLink} display={{ base: "none", md: "block" }} />
          {repo.name}
        </a>
        <Badge variant={"outline"} colorScheme={"blue"}>
          {repo.language}
        </Badge>
      </Text>
      {repo.description && (
        <Text fontSize={"sm"} mb={"3"}>
          {repo.description}
        </Text>
      )}
      <Flex gap={"4"}>
        <Badge
          colorScheme="purple"
          h={"1.2rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2"}
          borderRadius={"md"}
        >
          <FaEye size={14} />
          {repo.watchers_count}
        </Badge>
        <Badge
          colorScheme="green"
          h={"1.2rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2"}
          borderRadius={"md"}
        >
          <FaStar size={14} />
          {repo.stargazers_count}
        </Badge>
        <Badge
          colorScheme="red"
          h={"1.2rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2"}
          borderRadius={"md"}
        >
          <FaCodePullRequest size={14} />
          {repo.open_issues_count}
        </Badge>
        <Badge
          colorScheme="yellow"
          h={"1.2rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2"}
          borderRadius={"md"}
        >
          <FaCodeFork size={14} />
          {repo.forks_count}
        </Badge>
      </Flex>
    </Card>
  );
};
export default RepoCard;
