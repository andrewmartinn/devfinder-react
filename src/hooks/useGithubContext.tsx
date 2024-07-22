import { useContext } from "react";
import { GithubContextType } from "../types";
import { GithubContext } from "../context/github/GithubContext";

const useGithubContext = (): GithubContextType => {
  const context = useContext(GithubContext);
  if (context === undefined) {
    throw new Error("useGithubContext must be used within the GithubProvider");
  }
  return context;
};
export default useGithubContext;
