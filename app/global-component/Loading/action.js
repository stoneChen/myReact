export const SET_LOADING = 'SET_LOADING';

export default function (showLoading) {
  return {
    type: SET_LOADING,
    payload: showLoading
  };
}
