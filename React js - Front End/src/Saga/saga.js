import { put, takeEvery, call, select } from "@redux-saga/core/effects";

import axios from "axios";

import {
  logInSuccess,
  logInFail,
  setUserName,
  logOut,
  getNewTokenSuccess,
  signUpFailed,
} from "../Redux/auth/authSlice";
import {
  getMusicSuccess,
  getPlayList,
  getPlayListSuccess,
  hideAddToPlayList,
  showSelectedMusic,
} from "../Redux/home/home";
import {
  getUserMusics,
  getUserMusicsSuccess,
  hideMusicPost,
  hideSelectedUserMusic,
  hideUpDateForm,
  hideUserAddToPlayList,
  hideUserDeleteWarning,
  showSelectedUserMusic,
} from "../Redux/music/musicSlice";
import {
  getPlayListMusics,
  getPlayListMusicSuccess,
  hideDeleteWarning,
  hideMusicDelete,
  hidePlayListPost,
  showSelectedPlayList,
  showSelectedPlayListMusic,
} from "../Redux/playlist/playListSlice";
function* logInRequest() {
  const { username, password } = yield select((state) => state.auth);

  try {
    const response = yield call(() =>
      axios.post("http://localhost:8000/api/login/", {
        username: username,
        password: password,
      })
    );

    yield put(logInSuccess(response.data));
  } catch (err) {
    const { response } = err;
    yield put(logInFail(response));
  }
}

export function* authSaga() {
  yield takeEvery("auth/logIn", logInRequest);
}

function* fetchMusicRequest() {
  try {
    const token = yield select((state) => state.auth.token);

    const response = yield call(() =>
      axios.get("http://localhost:8000/api/musics/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );

    yield put(getMusicSuccess(response.data));
  } catch (err) {}
}
export function* getHomeMusics() {
  yield takeEvery("home/getMusics", fetchMusicRequest);
}

function* fetchSelectedMusicRequest() {
  try {
    const token = yield select((state) => state.auth.token);
    const musicID = yield select((state) => state.home.musicID);

    const response = yield call(() =>
      axios.get(`http://localhost:8000/api/musicdetail/${musicID}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );

    yield put(showSelectedMusic(response.data));
  } catch (err) {}
}
export function* selectedMusic() {
  yield takeEvery("home/getSelectedMusic", fetchSelectedMusicRequest);
}

function* fetchSelectedUserMusicRequest() {
  try {
    const token = yield select((state) => state.auth.token);
    const musicID = yield select((state) => state.music.musicID);

    const response = yield call(() =>
      axios.get(`http://localhost:8000/api/musicdetail/${musicID}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );

    yield put(showSelectedUserMusic(response.data));
  } catch (err) {}
}

export function* selectedUserMusic() {
  yield takeEvery("music/getSelectedUserMusic", fetchSelectedUserMusicRequest);
}

function* addToPlayListRequest() {
  try {
    const token = yield select((state) => state.auth.token);

    const { selectedUserMusic, playListID } = yield select(
      (state) => state.music
    );

    yield call(() =>
      axios.post(
        `http://localhost:8000/api/categoryitems/`,
        { music: selectedUserMusic.id, category: playListID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(hideUserAddToPlayList());
  } catch (err) {}
}
export function* createPlayList() {
  yield takeEvery("music/addToPlayList", addToPlayListRequest);
}

function* playListAddRequest() {
  try {
    const token = yield select((state) => state.auth.token);

    const { selectedMusic, playListID } = yield select((state) => state.home);

    yield call(() =>
      axios.post(
        `http://localhost:8000/api/categoryitems/`,
        { music: selectedMusic.id, category: playListID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(hideAddToPlayList());
  } catch (err) {}
}
export function* playListAdd() {
  yield takeEvery("home/musicToPlayList", playListAddRequest);
}

function* fetchPlayList() {
  try {
    const token = yield select((state) => state.auth.token);

    const response = yield call(() =>
      axios.get(
        `http://localhost:8000/api/categories/`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(getPlayListSuccess(response.data));
  } catch (err) {}
}
export function* getPlayListSaga() {
  yield takeEvery("home/getPlayList", fetchPlayList);
}

function* fetchUserMusics() {
  try {
    const token = yield select((state) => state.auth.token);

    const response = yield call(() =>
      axios.get(
        `http://localhost:8000/api/usermusics/`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(getUserMusicsSuccess(response.data));
  } catch (err) {}
}

export function* getUserMusicsSaga() {
  yield takeEvery("music/getUserMusics", fetchUserMusics);
}

function* deleteUserMusics() {
  try {
    const token = yield select((state) => state.auth.token);
    const musicID = yield select((state) => state.music.musicID);

    yield call(() =>
      axios.delete(
        `http://localhost:8000/api/musics/${musicID}/`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );
    yield put(hideSelectedUserMusic());
    yield put(hideUserDeleteWarning());

    yield put(getUserMusics());
  } catch (err) {}
}

export function* deleteMusic() {
  yield takeEvery("music/deleteMusic", deleteUserMusics);
}

function* createUserMusicRequest() {
  try {
    const token = yield select((state) => state.auth.token);
    const { musicTitle, musicGenre } = yield select((state) => state.music);

    yield call(() =>
      axios.post(
        `http://localhost:8000/api/musics/`,
        { title: musicTitle, genre: musicGenre },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(hideMusicPost());
    yield put(getUserMusics());
  } catch (err) {}
}

export function* createMusicSage() {
  yield takeEvery("music/createMusic", createUserMusicRequest);
}

function* getPlayListMusicsRequest() {
  try {
    const token = yield select((state) => state.auth.token);
    const { playListID } = yield select((state) => state.playlist);

    const response = yield call(() =>
      axios.get(
        `http://localhost:8000/api/categorymusics/?categoryID=${playListID}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(getPlayListMusicSuccess(response.data));
  } catch (err) {}
}

export function* getPlayListMusicsSaga() {
  yield takeEvery("playList/getPlayListMusics", getPlayListMusicsRequest);
}

function* getSelectedPlayListMusicRequest() {
  try {
    const token = yield select((state) => state.auth.token);
    const { musicID } = yield select((state) => state.playlist);

    const response = yield call(() =>
      axios.get(`http://localhost:8000/api/musicdetail/${musicID}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );
    yield put(showSelectedPlayListMusic(response.data));
  } catch (err) {}
}
export function* getSelectedPlayListMusicSage() {
  yield takeEvery(
    "playList/getSelectedPlayListMusic",
    getSelectedPlayListMusicRequest
  );
}

function* deletePlayListRequest() {
  try {
    const token = yield select((state) => state.auth.token);
    const { playListID } = yield select((state) => state.playlist);

    yield call(() =>
      axios.delete(`http://localhost:8000/api/categories/${playListID}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );

    yield put(hideDeleteWarning());
    yield put(showSelectedPlayList({}));
    yield put(getPlayListMusicSuccess([]));
    yield put(getPlayList());
  } catch (err) {}
}

export function* deletePlayListSaga() {
  yield takeEvery("playList/deletePlayList", deletePlayListRequest);
}

function* createPlayListRequest() {
  try {
    const token = yield select((state) => state.auth.token);
    const { title } = yield select((state) => state.playlist);

    yield call(() =>
      axios.post(
        `http://localhost:8000/api/categories/`,
        { category_title: title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(hidePlayListPost());
    yield put(getPlayList());
  } catch (err) {}
}

export function* createPlayListSaga() {
  yield takeEvery("playList/createPlayList", createPlayListRequest);
}

function* deletePlayListMusicRequest() {
  try {
    const token = yield select((state) => state.auth.token);
    const { itemID, playListID } = yield select((state) => state.playlist);

    yield call(() =>
      axios.delete(
        `http://localhost:8000/api/categoryitems/${itemID}/`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(hideMusicDelete());
    yield put(getPlayListMusics(playListID));
    yield put(showSelectedPlayListMusic({}));
  } catch (err) {}
}

export function* deletePlayListMusicSaga() {
  yield takeEvery("playList/deleteMusic", deletePlayListMusicRequest);
}

function* getUserDetailRequest() {
  try {
    const token = yield select((state) => state.auth.token);

    const response = yield call(() =>
      axios.get(
        `http://localhost:8000/api/userdetail/`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(setUserName(response.data));
  } catch (err) {}
}

export function* getUserDetailSaga() {
  yield takeEvery("auth/getUserDetail", getUserDetailRequest);
}

function* getNewTokenRequest() {
  try {
    const refreshToken = yield select((state) => state.auth.refreshToken);

    const response = yield call(() =>
      axios.post(`http://localhost:8000/api/refresh/`, {
        refresh: refreshToken,
      })
    );

    yield put(getNewTokenSuccess(response.data));
  } catch (err) {
    yield put(logOut());
  }
}

export function* getNewTokenSaga() {
  yield takeEvery("auth/getNewToken", getNewTokenRequest);
}

function* registerUserRequest() {
  try {
    const { username, password } = yield select((state) => state.auth);

    yield call(() =>
      axios.post(`http://localhost:8000/api/register/`, {
        username: username,
        password: password,
      })
    );

    const res = yield call(() =>
      axios.post(`http://localhost:8000/api/login/`, {
        username: username,
        password: password,
      })
    );

    yield put(logInSuccess(res.data));
  } catch (err) {
    yield put(signUpFailed(err.response));
  }
}
export function* registerUserSaga() {
  yield takeEvery("auth/signUp", registerUserRequest);
}

function* updateMusicRequest() {
  try {
    const { musicGenre, musicTitle, selectedUserMusic } = yield select(
      (state) => state.music
    );
    const { token } = yield select((state) => state.auth);
    console.log(musicGenre, selectedUserMusic.id);

    const res = yield call(() =>
      axios.patch(
        `http://localhost:8000/api/musics/${selectedUserMusic.id}/`,
        {
          title: musicTitle,
          genre: musicGenre,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(hideUpDateForm());
    yield put(
      showSelectedUserMusic({
        title: musicTitle,
        genre: musicGenre,
        created_at: selectedUserMusic.created_at,
        userID: selectedUserMusic.userID,
      })
    );
    yield put(getUserMusics());
  } catch (err) {
    console.log(err);
  }
}
export function* updateMusicSaga() {
  yield takeEvery("music/updateMusic", updateMusicRequest);
}
