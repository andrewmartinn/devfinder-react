import {
  GithubAction,
  GithubInitialState,
  GithubStateActionType,
} from "../../types";

const githubReducer = (state: GithubInitialState, action: GithubAction) => {
  switch (action.type) {
    case GithubStateActionType.GET_USERS:
      return { ...state, users: action.payload, loading: false, error: false };
    case GithubStateActionType.GET_SELECTED_USER:
      return { ...state, selectedUser: action.payload, loading: false };
    case GithubStateActionType.SET_LOADING:
      return { ...state, loading: true };
    case GithubStateActionType.SET_ERROR:
      return { ...state, loading: false, error: true };
    case GithubStateActionType.RESET_SEARCH:
      return {
        ...state,
        users: [],
        loading: false,
        error: false,
        hasSearched: false,
      };
    case GithubStateActionType.SET_HAS_SEARCHED:
      return { ...state, hasSearched: action.payload };
    default:
      return state;
  }
};

export default githubReducer;
