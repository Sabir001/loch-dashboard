export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export function signin({ username, password }) {
  return {
    type: SIGN_IN,
    credential: {
      username,
      password,
    },
  };
}
