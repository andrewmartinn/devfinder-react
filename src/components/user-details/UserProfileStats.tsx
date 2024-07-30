import colors from "../../theme/colors";
import { Box, Flex, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCodepen, FaUserFriends } from "react-icons/fa";
import { BsStack } from "react-icons/bs";

const MotionFlex = motion(Flex);

const FadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 110,
  },
  animate: (elementId: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * elementId,
    },
  }),
};

interface UserProfileStatsProps {
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
}

const UserProfileStats: React.FC<UserProfileStatsProps> = ({
  followers,
  following,
  publicRepos,
  publicGists,
}) => {
  const cardBorderColor = useColorModeValue(colors.gray2, colors.blue2);
  const cardBg = useColorModeValue("white", colors.blue1);

  return (
    <Grid
      w={"full"}
      mt={"10"}
      gridTemplateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
      }}
      gap={"4"}
    >
      <MotionFlex
        custom={1}
        initial="initial"
        whileInView="animate"
        variants={FadeInAnimationVariants}
        justifyContent={"space-between"}
        alignItems={"center"}
        border={`1px solid ${cardBorderColor}`}
        bg={cardBg}
        boxShadow={"md"}
        p={"4"}
        borderRadius={"lg"}
      >
        <Box>
          <Text fontSize={"sm"} color={colors.gray3}>
            Following
          </Text>
          <Text fontSize={"2xl"}>{following}</Text>
        </Box>
        <FaUserFriends size={30} />
      </MotionFlex>
      <MotionFlex
        custom={2}
        initial="initial"
        whileInView="animate"
        variants={FadeInAnimationVariants}
        justifyContent={"space-between"}
        alignItems={"center"}
        border={`1px solid ${cardBorderColor}`}
        bg={cardBg}
        boxShadow={"md"}
        p={"4"}
        borderRadius={"lg"}
      >
        <Box>
          <Text fontSize={"sm"} color={colors.gray3}>
            Followers
          </Text>
          <Text fontSize={"2xl"}>{followers}</Text>
        </Box>
        <FaPeopleGroup size={30} />
      </MotionFlex>
      <MotionFlex
        custom={3}
        initial="initial"
        whileInView="animate"
        variants={FadeInAnimationVariants}
        justifyContent={"space-between"}
        alignItems={"center"}
        border={`1px solid ${cardBorderColor}`}
        bg={cardBg}
        boxShadow={"md"}
        p={"4"}
        borderRadius={"lg"}
      >
        <Box>
          <Text fontSize={"sm"} color={colors.gray3}>
            Public Repos
          </Text>
          <Text fontSize={"2xl"}>{publicRepos}</Text>
        </Box>
        <FaCodepen size={30} />
      </MotionFlex>
      <MotionFlex
        custom={4}
        initial="initial"
        whileInView="animate"
        variants={FadeInAnimationVariants}
        justifyContent={"space-between"}
        alignItems={"center"}
        border={`1px solid ${cardBorderColor}`}
        bg={cardBg}
        boxShadow={"md"}
        p={"4"}
        borderRadius={"lg"}
      >
        <Box>
          <Text fontSize={"sm"} color={colors.gray3}>
            Public Gists
          </Text>
          <Text fontSize={"2xl"}>{publicGists}</Text>
        </Box>
        <BsStack size={30} />
      </MotionFlex>
    </Grid>
  );
};
export default UserProfileStats;
