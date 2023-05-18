import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import styled from "@emotion/styled";

import {
  CreatorArticle,
  CreatorContainer,
  CreatorDiv,
  DetailContainer,
  DetailDiv,
  DetailTitle,
  DetailSection,
  HomeDiv,
  HomeHeaderContainer,
  HomeHeaderDiv,
  NoteIconSection,
  PopularArticle,
  PopularContainer,
  PostMusicDiv,
  PlayListContainer,
  PlayListAddContent,
  UserInfo,
  MusicInfo,
  Info,
  Select,
  AddBtn,
  HomePostContainer,
  Container1,
  PostContainer,
  PostMusic,
  Hr2,
  PostForm,
  FormInput,
} from "../../Home/HomeStyles";

import { CreatorItem, HomePopular } from "../../Home/HomeComponents";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedUserMusic,
  hideUserAddToPlayList,
  showUserAddToPlayList,
  hideUserDeleteWarning,
  showUserDeleteWarning,
  deleteMusic,
  hideMusicPost,
  showMusicPost,
  createMusic,
  addToPlayList,
  showUpDateForm,
  hideUpDateForm,
  updateMusic,
} from "../../../Redux/music/musicSlice";

export const UpdateBtn = styled.div`
  display: none;

  background-color: black;
  font-size: 22px;
  width: 120px;
  padding: 4px 0px;
  cursor: pointer;
  border-radius: 10px;
  justify-content: center;
  color: white;
`;

export const UpdateForm = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const genreRef = useRef();
  const handleSave = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const genre = genreRef.current.value;

    if (!title) {
      titleRef.current.style.border = "1px solid red";
      if (!genre) {
        genreRef.current.style.border = "1px solid red";
      }
      return;
    }
    if (!genre) {
      titleRef.current.style.border = "none";
      genreRef.current.style.border = "1px solid red";
      return;
    }

    dispatch(updateMusic({ title, genre }));
  };
  return (
    <PlayListContainer style={{ height: "250px" }}>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <comp1>Update Music</comp1>
        <CloseIcon
          onClick={() => dispatch(hideUpDateForm())}
          style={{ fontSize: "30px", cursor: "pointer" }}
        />
      </section>

      <hr style={{ margin: "7px 0px" }} />

      <MusicInfo>
        <PostForm>
          <FormInput
            ref={titleRef}
            type="text"
            placeholder="Title"
            name="musicTitle"
          />
          <Select ref={genreRef}>
            <option value="" disabled selected>
              Select a genre...
            </option>

            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
            <option value="R&B/Soul">R&B/Soul</option>
            <option value="Country">Country</option>
            <option value="Electronic/Dance">Electronic/Dance</option>
            <option value="Jazz">Jazz</option>
            <option value="Blues">Blues</option>
            <option value="Classical">Classical</option>
          </Select>
          <AddBtn type="submit" onClick={handleSave}>
            Save
          </AddBtn>
        </PostForm>
      </MusicInfo>
    </PlayListContainer>
  );
};

export const MusicDetail = () => {
  const { selectedUserMusic } = useSelector((state) => state.music);
  const dispatch = useDispatch();

  return (
    <>
      <DetailContainer>
        <DetailDiv>
          <DetailTitle className="detail">
            {selectedUserMusic.title ? (
              <div>Title: {selectedUserMusic.title}</div>
            ) : (
              "Music Title"
            )}
          </DetailTitle>

          <DetailSection className="detail">
            {selectedUserMusic.userID ? (
              <div>Creator: @{selectedUserMusic.userID.username}</div>
            ) : (
              "Creator"
            )}
          </DetailSection>
          <DetailSection className="detail">
            {selectedUserMusic.genre ? (
              <div>Genre: {selectedUserMusic.genre}</div>
            ) : (
              "Genre"
            )}
          </DetailSection>
          <DetailSection className="detail">
            {selectedUserMusic.created_at ? (
              <div>
                Date:{" "}
                {new Date(selectedUserMusic.created_at).toLocaleDateString(
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
          {selectedUserMusic.title && (
            <UpdateBtn
              className="update-btn"
              onClick={() => dispatch(showUpDateForm())}
            >
              Update
            </UpdateBtn>
          )}
        </DetailDiv>
      </DetailContainer>
      <hr />
    </>
  );
};
export const MusicItemContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  margin: 10px 0px;
  cursor: pointer;
  padding: 0px 5px;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  width: 350px;
  height: 50px;
  &:hover {
    border: 0.2px solid white;
    color: orange;
  }
  &:hover .musicName {
    font-weight: bold;
  }
`;

export const MusicCreator = () => {
  return (
    <CreatorContainer style={{ height: "400px" }}>
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

export const Popular = ({ add, setAdd }) => {
  return (
    <>
      <PopularContainer style={{ height: "300px" }}>
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

export const MusicHeader = ({ setClose, close }) => {
  const dispatch = useDispatch();
  return (
    <>
      <HomeHeaderContainer>
        <HomeHeaderDiv>
          <NoteIconSection>
            <MusicNoteIcon style={{ fontSize: "50px", cursor: "pointer" }} />
          </NoteIconSection>
          <PostMusicDiv onClick={() => dispatch(showMusicPost())}>
            Post Music
          </PostMusicDiv>
        </HomeHeaderDiv>
        <HomeDiv></HomeDiv>
      </HomeHeaderContainer>
      <hr style={{ margin: "10px  0px", width: "565px" }} />
    </>
  );
};

export const MusicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 25px;
  cursor: pointer;
`;
export const MusicSection = styled.section`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const UserPlayListAdd = () => {
  const { selectedUserMusic } = useSelector((state) => state.music);
  const { playLists } = useSelector((state) => state.home);

  const dispatch = useDispatch();
  const selectRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedValue = selectRef.current.value;
    // console.log(selectedValue);
    if (!selectedValue) {
      selectRef.current.style.border = "1px solid red";
    } else {
      dispatch(addToPlayList(selectedValue));
    }
  };

  return (
    <>
      <PlayListContainer>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <comp1>Add to PlayList</comp1>
          <CloseIcon
            onClick={() => dispatch(hideUserAddToPlayList())}
            style={{ fontSize: "30px", cursor: "pointer" }}
          />
        </section>

        <hr style={{ margin: "7px 0px" }} />
        <PlayListAddContent>
          <section>
            <AccountCircleRoundedIcon
              style={{ cursor: "pointer", fontSize: "50px" }}
            />
          </section>
          <UserInfo>
            <section>
              {selectedUserMusic.userID &&
                `@${selectedUserMusic.userID.username}`}
            </section>
          </UserInfo>
        </PlayListAddContent>
        <MusicInfo>
          <Info>{selectedUserMusic.title && selectedUserMusic.title}</Info>
          <Info>{selectedUserMusic.genre && selectedUserMusic.genre}</Info>
          <form>
            <Select ref={selectRef}>
              <option value="" disabled selected>
                Select a playlist...
              </option>
              {playLists.map((playList) => {
                const { category_title, id } = playList;
                // console.log(id);
                return (
                  <option key={id} value={id}>
                    {category_title}
                  </option>
                );
              })}
            </Select>
            <AddBtn type="submit" onClick={handleSubmit}>
              Add
            </AddBtn>
          </form>
        </MusicInfo>
      </PlayListContainer>
    </>
  );
};
export const MusicItem = ({ index, userMusic }) => {
  // console.log(userMusic);
  const { id, title, created_at } = userMusic;
  const timestamp = created_at;
  const date = new Date(timestamp);
  const currentDate = new Date();

  const timeDifference = Math.abs(currentDate - date); // Get the time difference in milliseconds

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
    <MusicItemContainer onClick={() => dispatch(getSelectedUserMusic(id))}>
      <MusicDiv>
        <section>
          <Span className="musicName">
            {index + 1}. {title}
          </Span>
        </section>
        <MusicSection>
          <PlaylistAddIcon
            style={{
              fontSize: "25px",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(showUserAddToPlayList());
            }}
          />

          <DeleteIcon
            style={{ fontSize: "25px", cursor: "pointer", color: "red" }}
            onClick={() => dispatch(showUserDeleteWarning())}
          />
          <section style={{ fontSize: "12px" }}>{timePassed}</section>
        </MusicSection>
      </MusicDiv>
    </MusicItemContainer>
  );
};

export const DeleteWarningContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  /* height: 100%; */
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const DeleteDiv = styled.div`
  width: 500px;
  margin-top: 100px;
  border-radius: 10px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  opacity: 1;
  padding: 25px 25px;
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

export const DeleteDivSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Warning = styled.section`
  font-size: 26px;
  text-align: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin-top: 10px;
`;

export const Button = styled.div`
  background-color: red;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
`;

export const MusicPost = () => {
  const dispatch = useDispatch();
  const title = useRef();
  const genre = useRef();

  const handleClick = () => {
    if (!title.current.value) {
      genre.current.style.border = "none";
      title.current.style.border = "1px solid red";
      return;
    }
    if (!genre.current.value) {
      title.current.style.border = "none";
      genre.current.style.border = "1px solid red";
      return;
    }

    dispatch(
      createMusic({
        musicTitle: title.current.value,
        musicGenre: genre.current.value,
      })
    );
  };
  return (
    <HomePostContainer>
      <Container1>
        <PostContainer>
          <PostMusic>Post Music</PostMusic>
          <section>
            <CloseIcon
              onClick={() => dispatch(hideMusicPost())}
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </section>
        </PostContainer>
        <Hr2 style={{ margin: "7px 0px" }} />

        <PostForm>
          <FormInput
            ref={title}
            type="text"
            placeholder="Title"
            name="musicTitle"
          />
          <Select ref={genre}>
            <option value="" disabled selected>
              Select a genre...
            </option>

            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
            <option value="R&B/Soul">R&B/Soul</option>
            <option value="Country">Country</option>
            <option value="Electronic/Dance">Electronic/Dance</option>
            <option value="Jazz">Jazz</option>
            <option value="Blues">Blues</option>
            <option value="Classical">Classical</option>
          </Select>
          <AddBtn onClick={handleClick} type="submit">
            Post
          </AddBtn>
        </PostForm>
      </Container1>
    </HomePostContainer>
  );
};

export const DeleteWarning = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.music.selectedUserMusic);

  return (
    <DeleteWarningContainer>
      <DeleteDiv>
        <DeleteDivSection>
          <Warning>Are you sure you want to delete?</Warning>
          <Section>
            <Button onClick={() => dispatch(deleteMusic(id))}>YES</Button>
            <Button
              onClick={() => dispatch(hideUserDeleteWarning())}
              style={{ backgroundColor: "green" }}
            >
              Cancel
            </Button>
          </Section>
        </DeleteDivSection>
      </DeleteDiv>
    </DeleteWarningContainer>
  );
};
