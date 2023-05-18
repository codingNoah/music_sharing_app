import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    userMusics: [],
    selectedUserMusic: {},
    musicID: null,
    userAddToPlayList: false,
    userDeleteWarning: false,
    musicPost: false,
    musicTitle: null,
    musicGenre: null,
    playListID: null,
    updateForm: false,
  },
  reducers: {
    getUserMusics: (state, action) => {},
    getUserMusicsSuccess: (state, action) => {
      state.userMusics = action.payload;
    },
    getSelectedUserMusic: (state, action) => {
      state.musicID = action.payload;
    },
    showSelectedUserMusic: (state, action) => {
      state.selectedUserMusic = action.payload;
    },
    hideSelectedUserMusic: (state, action) => {
      state.selectedUserMusic = {};
    },
    showUserAddToPlayList: (state, action) => {
      state.userAddToPlayList = true;
    },
    hideUserAddToPlayList: (state, action) => {
      state.userAddToPlayList = false;
    },

    showUserDeleteWarning: (state, action) => {
      state.userDeleteWarning = true;
    },
    hideUserDeleteWarning: (state, action) => {
      state.userDeleteWarning = false;
    },
    deleteMusic: (state, action) => {
      state.musicID = action.payload;
    },
    showMusicPost: (state) => {
      state.musicPost = true;
    },
    hideMusicPost: (state) => {
      state.musicPost = false;
    },
    createMusic: (state, action) => {
      state.musicTitle = action.payload.musicTitle;
      state.musicGenre = action.payload.musicGenre;
    },
    addToPlayList: (state, action) => {
      state.playListID = action.payload;
    },
    showUpDateForm: (state, action) => {
      state.updateForm = true;
    },
    hideUpDateForm: (state, action) => {
      state.updateForm = false;
    },
    updateMusic: (state, action) => {
      const { title, genre } = action.payload;
      state.musicTitle = title;
      state.musicGenre = genre;
    },
  },
});

export default musicSlice;
export const {
  getUserMusics,
  getUserMusicsSuccess,
  getSelectedUserMusic,
  showSelectedUserMusic,
  showUserAddToPlayList,
  hideUserAddToPlayList,
  showUserDeleteWarning,
  hideUserDeleteWarning,
  deleteMusic,
  hideSelectedUserMusic,
  showMusicPost,
  hideMusicPost,
  createMusic,
  showUpDateForm,
  hideUpDateForm,
  addToPlayList,
  updateMusic,
} = musicSlice.actions;
