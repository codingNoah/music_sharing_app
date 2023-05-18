import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayList } from "../../Redux/home/home";

import { MainContainer } from "../Home/HomeStyles";
import {
  MusicList,
  PlayList,
  PlayListHeader,
  PlayListDetail,
  PlayListDeleteWarning,
  PlayListPost,
  MusicDeleteWarning,
} from "./Components/PlayListComponents";
import { getUserDetail } from "../../Redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const PlayListContainer = styled.div`
  width: 85%;
  display: flex;
  gap: 20px;
  padding-top: 20px;
`;

export const PlayListDiv = styled.div`
  background-color: white;
  width: 800px;
  border-radius: 10px;
  height: 97%;
  border: 0.1px solid rgb(205, 205, 205);
  background-size: cover;
  background-position: center;
  background-image: url("https://images.pexels.com/photos/1652361/pexels-photo-1652361.jpeg?auto=compress&cs=tinysrgb&w=1600");
`;
function PlayLists() {
  const navigate = useNavigate();
  const { isLogged } = useSelector((state) => state.auth);
  const { playLists } = useSelector((state) => state.home);
  const { deleteWarning, playListPost, musicDeleteWarning } = useSelector(
    (state) => state.playlist
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
      return;
    }
    dispatch(getUserDetail());
    dispatch(getPlayList());
  }, [dispatch, isLogged, navigate]);
  return (
    <PlayListContainer>
      {musicDeleteWarning && <MusicDeleteWarning />}
      {playListPost && <PlayListPost />}
      <section>
        {deleteWarning && <PlayListDeleteWarning />}

        <PlayListDiv>
          <PlayListDetail />
          <MainContainer
            style={{
              height: "630px",
              padding: "10px 0px 10px 00px",
            }}
          >
            {playLists.length === 0 && (
              <span
                style={{ color: "white", fontSize: "30px", marginTop: "200px" }}
              >
                No available playlist
              </span>
            )}
            {playLists.map((playList) => {
              return (
                <PlayList
                  key={playList.id}
                  index={playLists.indexOf(playList)}
                  playList={playList}
                />
              );
            })}
          </MainContainer>
        </PlayListDiv>
      </section>
      <div style={{ width: "46%", height: "820px" }}>
        <PlayListHeader />
        <MusicList />
      </div>
    </PlayListContainer>
  );
}

export default PlayLists;
