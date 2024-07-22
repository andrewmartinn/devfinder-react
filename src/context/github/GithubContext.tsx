import { createContext, useCallback, useState } from "react";
import { GithubContextType, GithubProviderProps, User } from "../../types";

const GITHUB_BASE_URL = "https://api.github.com";
const GITHUB_AUTH_TOKEN = import.meta.env.VITE_APP_GITHUB_API_TOKEN;

export const GithubContext = createContext<GithubContextType | undefined>(
  undefined
);

const GithubProvider: React.FC<GithubProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(`${GITHUB_BASE_URL}/users`, {
        headers: {
          Authorization: `token ${GITHUB_AUTH_TOKEN}`,
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
  }, []);

  return (
    <GithubContext.Provider value={{ users, loading, error, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
