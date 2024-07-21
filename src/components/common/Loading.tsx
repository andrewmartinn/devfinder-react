import { Spinner } from "@chakra-ui/react";
import colors from "../../theme/colors";

const Loading = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color={colors.blue4}
      size="xl"
    />
  );
};
export default Loading;
