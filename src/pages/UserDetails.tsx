import { useEffect } from "react";
import useGithubContext from "../hooks/useGithubContext";
import { useParams } from "react-router-dom";

const UserDetails: React.FC = () => {
  const { username } = useParams();
  const { selectedUser, getUser } = useGithubContext();

  useEffect(() => {
    if (username) {
      getUser(username);
    }
  }, [getUser, username]);

  return <div>UserDetails {selectedUser.login}</div>;
};
export default UserDetails;
