import { START_LOADING, DONE_LOADING } from "../../types";
const a = "boy";

export const _startLoading = requestName => ({
  type: START_LOADING,
  requestName,
});

export const _doneLoading = requestName => ({
  type: DONE_LOADING,
  requestName,
});
