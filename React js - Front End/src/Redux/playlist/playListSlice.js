import { createSlice } from "@reduxjs/toolkit";

const playListSlice = createSlice({
  name: "playList",
  initialState: {
    selected: {},
    playListMusics: [],
    musicID: null,
    userDeleteWarning: false,
    playListPost: false,
    playListTitle: null,
    playListID: null,
    deleteWarning: false,
    title: null,
    itemID: null,
    musicDeleteWarning: false,
  },
  reducers: {
    showPlayListPost: (state) => {
      state.playListPost = true;
    },
    hidePlayListPost: (state) => {
      state.playListPost = false;
    },
    getPlayListMusics: (state, action) => {
      state.playListID = action.payload;
    },
    getPlayListMusicSuccess: (state, action) => {
      state.playListMusics = action.payload;
    },
    showSelectedPlayList: (state, action) => {
      state.selected = action.payload;
      state.playListTitle = action.payload.category_title;
      state.playListID = action.payload.id;
    },
    showSelectedPlayListMusic: (state, action) => {
      state.selected = action.payload;
    },
    hideSelected: (state) => {
      state.selected = {};
    },
    getSelectedPlayListMusic: (state, action) => {
      state.musicID = action.payload;
    },
    hidePlayListMusics: (state) => {
      state.playListMusics = [];
    },
    deletePlayList: (state, action) => {
      state.playListID = action.payload;
    },
    showDeleteWarning: (state, action) => {
      state.deleteWarning = true;
    },
    hideDeleteWarning: (state, action) => {
      state.deleteWarning = false;
    },
    createPlayList: (state, action) => {
      state.title = action.payload;
    },
    showMusicDelete: (state, action) => {
      state.itemID = action.payload;
      state.musicDeleteWarning = true;
    },
    hideMusicDelete: (state) => {
      state.musicDeleteWarning = false;
    },
    deleteMusic: (state, action) => {},
  },
});

export default playListSlice;
export const {
  getPlayListMusics,
  showSelectedPlayList,
  getPlayListMusicSuccess,
  showSelectedPlayListMusic,
  getSelectedPlayListMusic,
  deletePlayList,
  showDeleteWarning,
  hideDeleteWarning,
  showPlayListPost,
  hidePlayListPost,
  createPlayList,
  showMusicDelete,
  hideMusicDelete,
  hideSelected,
  deleteMusic,
  hidePlayListMusics,
} = playListSlice.actions;
