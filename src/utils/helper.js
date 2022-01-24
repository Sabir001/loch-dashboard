export const clearUserLocalStorage = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user_info");
};
