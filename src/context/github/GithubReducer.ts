import {
  GithubAction,
  GithubInitalState,
  GithubStateActionType,
} from "../../types";

const githubReducer = (state: GithubInitalState, action: GithubAction) => {
  switch (action.type) {
    case GithubStateActionType.GET_USERS:
      return { ...state, users: action.payload, loading: false, error: false };
    case GithubStateActionType.SET_LOADING:
      return { ...state, loading: true, error: false };
    case GithubStateActionType.SET_ERROR:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export default githubReducer;
