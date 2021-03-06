import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchProfiles() {
  try {
    // const config = {
    //   headers: { "Content-Type": "application/json" },
    //   withCredentials: true,
    // };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get("/api/user/profiles");

    yield put({
      type: "SET_PROFILES",
      payload: response.data,
    });
  } catch (error) {
    console.log("Profiles get request failed", error);
  }
}

function* profilesSaga() {
  yield takeLatest("FETCH_PROFILES", fetchProfiles);
}

export default profilesSaga;
