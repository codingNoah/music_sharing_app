import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserMusics } from "../../Redux/music/musicSlice";
import { getPlayList } from "../../Redux/home/home";

import { MainContainer } from "../Home/HomeStyles";
import {
  MusicCreator,
  MusicHeader,
  MusicItem,
  Popular,
  MusicDetail,
  UserPlayListAdd,
  DeleteWarning,
  MusicPost,
  UpdateForm,
} from "./Components/MusicComponents";
import { getUserDetail } from "../../Redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Music() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged } = useSelector((state) => state.auth);
  const {
    userMusics,
    userAddToPlayList,
    userDeleteWarning,
    musicPost,
    updateForm,
  } = useSelector((state) => state.music);

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
      return;
    }
    dispatch(getUserDetail());
    dispatch(getPlayList());

    dispatch(getUserMusics());
  }, [dispatch, isLogged, navigate]);
  return (
    <div
      style={{
        width: "85%",
        display: "flex",
        gap: "20px",
        paddingTop: "20px",
      }}
    >
      {musicPost && <MusicPost />}
      {updateForm && <UpdateForm />}
      <section>
        {userAddToPlayList && <UserPlayListAdd />}
        {userDeleteWarning && <DeleteWarning />}
        <div
          style={{
            width: "800px",
            borderRadius: "10px",
            height: "97%",
            border: "0.1px solid rgb(205,205,205)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              'url("https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        >
          <MusicDetail />
          <MainContainer>
            {userMusics.length === 0 && (
              <span
                style={{ color: "white", fontSize: "30px", marginTop: "200px" }}
              >
                No available musics
              </span>
            )}
            {userMusics.map((userMusic) => {
              return (
                <MusicItem
                  key={userMusic.id}
                  userMusic={userMusic}
                  index={userMusics.indexOf(userMusic)}
                />
              );
            })}
          </MainContainer>
        </div>
      </section>
      <div style={{ width: "46%", height: "812px" }}>
        <MusicHeader />
        <Popular />
        <MusicCreator />
      </div>
    </div>
  );
}

export default Music;
