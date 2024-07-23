import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import colors from "../../theme/colors";
import { FiSearch } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import useGithubContext from "../../hooks/useGithubContext";

const SearchBar: React.FC = () => {
  const { searchUsers } = useGithubContext();
  const [text, setText] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (text) {
      const params = new URLSearchParams({ q: text });
      searchUsers(params);
      setText("");
    } else {
      alert("ERROR: Please enter a username to search!");
    }
  };

  return (
    <Box w={{ base: "full", md: "60%" }} mx={"auto"}>
      <form onSubmit={handleSearch}>
        <InputGroup position={"relative"}>
          <InputLeftElement position={"absolute"} top={"2"} left={"2"}>
            <FiSearch color={colors.blue4} size={20} />
          </InputLeftElement>
          <Input
            type={"text"}
            placeholder={"Search Github username..."}
            outline={"none"}
            border={"none"}
            py={"7"}
            pl={"14"}
            bg={useColorModeValue(colors.gray2, colors.blue2)}
            color={useColorModeValue("#555", "white")}
            _focus={{ boxShadow: "none" }}
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          {text && (
            <InputRightElement
              pointerEvents="auto"
              mr={"5"}
              position={"absolute"}
              top={"2"}
              right={"5rem"}
              cursor={"pointer"}
              onClick={() => setText("")}
            >
              <IoCloseCircleOutline size={24} color={"#CCC"} />
            </InputRightElement>
          )}
          <InputRightElement
            position={"absolute"}
            top={"2"}
            right={"2"}
            w={"80px"}
          >
            <Button bg={colors.blue4} color={"white"} type={"submit"}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};
export default SearchBar;
