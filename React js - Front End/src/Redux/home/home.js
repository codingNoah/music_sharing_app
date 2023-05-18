import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    musics: [],
    playLists: [],
    selectedMusic: {},
    musicID: null,
    error: "",
    addToPlayList: false,
    playListID: null,
  },
  reducers: {
    getPlayList: (state, action) => {},
    getPlayListSuccess: (state, action) => {
      state.playLists = action.payload;
    },
    showAddToPlayList: (state, action) => {
      state.addToPlayList = true;
    },
    hideAddToPlayList: (state, action) => {
      state.addToPlayList = false;
    },
    musicToPlayList: (state, action) => {
      state.playListID = action.payload;
    },
    getMusics: (state, action) => {},
    getMusicSuccess: (state, action) => {
      state.musics = action.payload;
    },
    getMusicFail: (state, action) => {
      const { data } = action.payload;

      state.error = data;
    },
    getSelectedMusic: (state, action) => {
      state.musicID = action.payload;
    },
    showSelectedMusic: (state, action) => {
      state.selectedMusic = action.payload;
    },
    hideSelectedMusic: (state) => {
      state.selectedMusic = {};
    },
  },
});

export default homeSlice;
export const {
  getMusics,
  getMusicFail,
  getMusicSuccess,
  showSelectedMusic,
  getSelectedMusic,
  showAddToPlayList,
  hideAddToPlayList,
  musicToPlayList,
  getPlayList,
  getPlayListSuccess,
  hideSelectedMusic,
} = homeSlice.actions;
