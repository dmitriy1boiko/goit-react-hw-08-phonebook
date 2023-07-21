export const selectIsisLoading = state => state.auth.isLoading;
export const selectUserName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserisAuth = state => state.auth.isAuth;
export const selectAuthToken = state => state.auth.token;

const authSelectors = {
  selectIsisLoading,
  selectUserName,
  selectIsRefreshing,
  selectUserEmail,
  selectUserisAuth,
  selectAuthToken,
};

export default authSelectors;
