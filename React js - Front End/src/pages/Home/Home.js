import { HomeContainer, MainContainer } from "./HomeStyles";

import { Detail, HomeMusicList, PopularMusic, Creator } from "./HomeComponents";
import { PlayListAdd } from "../PlayList/Components/PlayListComponents";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetail } from "../../Redux/auth/authSlice";
import { getMusics, getPlayList } from "../../Redux/home/home";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged } = useSelector((state) => state.auth);

  const { musics, selectedMusic, addToPlayList } = useSelector(
    (state) => state.home
  );
  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
      return;
    }
    dispatch(getUserDetail());
    dispatch(getPlayList());
    dispatch(getMusics());
  }, [dispatch, isLogged, navigate]);

  return (
    <HomeContainer>
      {addToPlayList && <PlayListAdd />}
      <section>
        <div
          style={{
            backgroundColor: "white",
            width: "800px",
            height: "97%",
            border: "0.1px solid rgb(205,205,205)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              'url("https://images.pexels.com/photos/15279627/pexels-photo-15279627.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          }}
        >
          <Detail selectedMusic={selectedMusic} />
          <MainContainer>
            {musics.length === 0 && (
              <span
                style={{ color: "white", fontSize: "30px", marginTop: "200px" }}
              >
                Be the first one to post!
              </span>
            )}
            {musics.map((music) => {
              return (
                <HomeMusicList
                  key={music.id}
                  music={music}
                  index={musics.indexOf(music)}
                />
              );
            })}
          </MainContainer>
        </div>
      </section>

      <div style={{ width: "46%", height: "812px" }}>
        <PopularMusic />

        <Creator />
      </div>
    </HomeContainer>
  );
}

export default Home;
