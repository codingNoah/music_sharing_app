import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { getSelectedMusic, showAddToPlayList } from "../../Redux/home/home";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {
  CreatorArticle,
  CreatorContainer,
  CreatorDiv,
  CreatorItemContainer,
  DetailContainer,
  DetailDiv,
  DetailSection,
  DetailTitle,
  HomeMusicDiv,
  HomeMusicListContainer,
  PopularArticle,
  PopularContainer,
  Section1,
  Span,
} from "./HomeStyles";
import { useDispatch } from "react-redux";

export const HomePopular = () => {
  return (
    <>
      <HomeMusicListContainer>
        <HomeMusicDiv>
          <section>
            <Span className="musicName">1. Teddy</Span>
          </section>
          <Section1>
            <PlaylistAddIcon
              style={{
                fontSize: "30px",
                cursor: "pointer",
              }}
            />

            <section>1hr ago</section>
          </Section1>
        </HomeMusicDiv>
      </HomeMusicListContainer>
    </>
  );
};

export const Detail = ({ selectedMusic }) => {
  return (
    <>
      <DetailContainer>
        <DetailDiv>
          <DetailTitle className="detail">
            {selectedMusic.title ? (
              <div>Title: {selectedMusic.title}</div>
            ) : (
              "Music Title"
            )}
          </DetailTitle>
          <DetailSection className="detail">
            {selectedMusic.userID ? (
              <div>Creator: @{selectedMusic.userID.username}</div>
            ) : (
              "Creator"
            )}
          </DetailSection>
          <DetailSection className="detail">
            {selectedMusic.genre ? (
              <div>Genre: {selectedMusic.genre}</div>
            ) : (
              "Genre"
            )}
          </DetailSection>
          <DetailSection className="detail">
            {selectedMusic.created_at ? (
              <div>
                Date:{" "}
                {new Date(selectedMusic.created_at).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </div>
            ) : (
              "Created_at"
            )}
          </DetailSection>
        </DetailDiv>
      </DetailContainer>
      <hr />
    </>
  );
};

export const HomeMusicList = ({ width, music, index }) => {
  const { title, id, created_at } = music;
  const timestamp = created_at;
  const date = new Date(timestamp);
  const currentDate = new Date();

  const timeDifference = Math.abs(currentDate - date);

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

  let timePassed;
  if (years >= 1) {
    timePassed = years + " yr(s) ago";
  } else if (weeks >= 1) {
    timePassed = weeks + " week(s) ago";
  } else if (days >= 1) {
    timePassed = days + " day(s) ago";
  } else if (hours >= 1) {
    timePassed = hours + " hr(s) ago";
  } else {
    timePassed = minutes + " min(s) ago";
  }
  const dispatch = useDispatch();

  return (
    <>
      <HomeMusicListContainer onClick={() => dispatch(getSelectedMusic(id))}>
        <HomeMusicDiv>
          <section>
            <Span className="musicName">
              {index + 1}. {title}
            </Span>
          </section>
          <Section1>
            <PlaylistAddIcon
              style={{
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => {
                // dispatch(getSelectedMusic(id));
                dispatch(showAddToPlayList());
              }}
            />

            <section style={{ fontSize: "12px" }}>{timePassed}</section>
          </Section1>
        </HomeMusicDiv>
      </HomeMusicListContainer>
    </>
  );
};

export const PopularMusic = () => {
  return (
    <>
      <PopularContainer>
        <PopularArticle>Popular</PopularArticle>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <HomePopular />
          <HomePopular />
          <HomePopular />
        </section>
      </PopularContainer>
    </>
  );
};

export const CreatorItem = () => {
  return (
    <CreatorItemContainer>
      <section>
        <AccountCircleRoundedIcon style={{ fontSize: "60px" }} />
      </section>
      <section
        className="creatorDetail"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100px" }}>Full Name</div>
        <div style={{ width: "100px" }}>@username</div>
      </section>
    </CreatorItemContainer>
  );
};
export const Creator = () => {
  return (
    <CreatorContainer>
      <CreatorArticle>Creator</CreatorArticle>
      <CreatorDiv>
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
      </CreatorDiv>
    </CreatorContainer>
  );
};
