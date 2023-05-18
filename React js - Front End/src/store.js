import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Redux/auth/authSlice";
import createSagaMiddleware from "@redux-saga/core";
import homeSlice from "./Redux/home/home";
import {
  selectedMusic,
  createPlayList,
  getPlayListSaga,
  getUserMusicsSaga,
  selectedUserMusic,
  createMusicSage,
  authSaga,
  deleteMusic,
  getHomeMusics,
  getPlayListMusicsSaga,
  getSelectedPlayListMusicSage,
  deletePlayListSaga,
  createPlayListSaga,
  deletePlayListMusicSaga,
  playListAdd,
  getUserDetailSaga,
  getNewTokenSaga,
  registerUserSaga,
  updateMusicSaga,
} from "./Saga/saga";
import musicSlice from "./Redux/music/musicSlice";
import playListSlice from "./Redux/playlist/playListSlice";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    home: homeSlice.reducer,
    music: musicSlice.reducer,
    playlist: playListSlice.reducer,
  },
  middleware: [saga],
});

saga.run(authSaga);
saga.run(getHomeMusics);
saga.run(selectedMusic);
saga.run(createPlayList);
saga.run(getPlayListSaga);
saga.run(getUserMusicsSaga);
saga.run(selectedUserMusic);
saga.run(deleteMusic);
saga.run(createMusicSage);
saga.run(getPlayListMusicsSaga);
saga.run(getSelectedPlayListMusicSage);
saga.run(deletePlayListSaga);
saga.run(createPlayListSaga);
saga.run(deletePlayListMusicSaga);
saga.run(playListAdd);
saga.run(getUserDetailSaga);
saga.run(getNewTokenSaga);
saga.run(registerUserSaga);
saga.run(updateMusicSaga);

export default store;
