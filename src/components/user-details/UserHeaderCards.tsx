import { Card, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { HiMiniAtSymbol } from "react-icons/hi2";

import colors from "../../theme/colors";
import { formatWebsiteUrl } from "../../utils/helpers";

const MotionCard = motion(Card);

const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.04 },
};

interface UserSocialCardsProps {
  location: string;
  website: string;
  twitterUsername: string | null;
}

const UserSocialCards: React.FC<UserSocialCardsProps> = ({
  location,
  website,
  twitterUsername,
}) => {
  const cardBg = useColorModeValue(colors.gray2, colors.blue2);

  return (
    <Flex
      alignItems={"center"}
      mt={"5"}
      gap={{ base: "4", md: "5" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      {location && (
        <MotionCard
          w={"full"}
          bg={cardBg}
          padding={"3"}
          fontSize={"xl"}
          initial="initial"
          whileHover="hover"
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Text
            fontSize={"md"}
            fontWeight={"bold"}
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
            mb={"2"}
          >
            <FaLocationDot size={20} />
            Location
          </Text>
          <Text fontSize={"14px"}>{location}</Text>
        </MotionCard>
      )}
      {website && (
        <MotionCard
          w={"full"}
          bg={cardBg}
          padding={"3"}
          fontSize={"xl"}
          initial="initial"
          whileHover="hover"
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Text
            fontSize={"md"}
            fontWeight={"bold"}
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
            mb={"2"}
          >
            <CgWebsite size={20} />
            Website
          </Text>
          <a
            href={formatWebsiteUrl(website)}
            rel="norefferer"
            target="_blank"
            style={{
              fontSize: "14px",
            }}
          >
            {formatWebsiteUrl(website)}
          </a>
        </MotionCard>
      )}
      {twitterUsername && (
        <MotionCard
          w={"full"}
          bg={cardBg}
          padding={"3"}
          fontSize={"xl"}
          initial="initial"
          whileHover="hover"
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Text
            fontSize={"md"}
            fontWeight={"bold"}
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
            mb={"2"}
          >
            <FaSquareXTwitter size={20} />
            Twitter
          </Text>
          <a
            href={`https://twitter.com/${twitterUsername}`}
            rel="norefferer"
            target="_blank"
            style={{
              fontSize: "14px",
            }}
          >
            <Flex alignItems={"center"} gap={"1"}>
              <HiMiniAtSymbol size={14} /> {twitterUsername}
            </Flex>
          </a>
        </MotionCard>
      )}
    </Flex>
  );
};
export default UserSocialCards;
