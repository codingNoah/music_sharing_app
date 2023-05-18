import DeleteIcon from "@mui/icons-material/Delete";
import {
  HomeHeaderContainer,
  HomeHeaderDiv,
  NoteIconSection,
  PostMusicDiv,
  HomeDiv,
  DetailContainer,
  DetailDiv,
  DetailTitle,
  DetailSection,
  HomePostContainer,
  Container1,
  PostContainer,
  PostMusic,
  Hr2,
  PostForm,
  FormInput,
} from "../../Home/HomeStyles";
import {
  MusicListContainer,
  MusicListArticle,
  SectionMain,
  PlayListMusicContainer,
} from "../PlayListStyle";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

import CloseIcon from "@mui/icons-material/Close";
import {
  PlayListContainer,
  PlayListAddContent,
  UserInfo,
  MusicInfo,
  Info,
  Select,
  AddBtn,
} from "../../Home/HomeStyles";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useDispatch, useSelector } from "react-redux";
import { hideAddToPlayList, musicToPlayList } from "../../../Redux/home/home";
import { useRef } from "react";
import {
  createPlayList,
  deleteMusic,
  deletePlayList,
  getPlayListMusics,
  getSelectedPlayListMusic,
  hideDeleteWarning,
  hideMusicDelete,
  hidePlayListPost,
  showDeleteWarning,
  showMusicDelete,
  showPlayListPost,
  showSelectedPlayList,
} from "../../../Redux/playlist/playListSlice";
import {
  Button,
  DeleteDiv,
  DeleteDivSection,
  DeleteWarningContainer,
  Section,
  Warning,
} from "../../Music/Components/MusicComponents";

export const PlayListDetail = () => {
  const { selected } = useSelector((state) => state.playlist);
  return (
    <>
      <DetailContainer>
        <DetailDiv>
          <DetailTitle className="detail">
            {selected.category_title && (
              <div>Title: {selected.category_title}</div>
            )}
          </DetailTitle>
          <DetailTitle className="detail">
            {selected.title && <div>Title: {selected.title}</div>}
          </DetailTitle>
          <DetailSection className="detail">
            {selected.userID && selected.userID.username && (
              <div>Creator: @{selected.userID.username}</div>
            )}
          </DetailSection>
          <DetailSection className="detail">
            {selected.genre && <div>Genre: {selected.genre}</div>}
          </DetailSection>
          <DetailSection className="detail">
            {selected.created_at && (
              <div>
                Date:
                {new Date(selected.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            )}
          </DetailSection>
        </DetailDiv>
      </DetailContainer>
      <hr />
    </>
  );
};

export const PlayListAdd = () => {
  const { selectedMusic, playLists } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const selectRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedValue = selectRef.current.value;
    if (!selectedValue) {
      selectRef.current.style.border = "1px solid red";
    } else {
      // console.log(selectedValue, selectedMusic);
      dispatch(musicToPlayList(selectedValue));
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
            onClick={() => dispatch(hideAddToPlayList())}
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
              {selectedMusic.userID && `@${selectedMusic.userID.username}`}
            </section>
          </UserInfo>
        </PlayListAddContent>
        <MusicInfo>
          <Info>{selectedMusic.title && selectedMusic.title}</Info>
          <Info>{selectedMusic.genre && selectedMusic.genre}</Info>
          <form>
            <Select ref={selectRef}>
              <option value="" disabled selected>
                Select a playlist...
              </option>
              {playLists.map((playList) => {
                const { category_title, id } = playList;
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
export const PlayListHeader = () => {
  const dispatch = useDispatch();
  return (
    <>
      <HomeHeaderContainer>
        <HomeHeaderDiv>
          <NoteIconSection>
            <MusicNoteIcon style={{ fontSize: "50px", cursor: "pointer" }} />
          </NoteIconSection>
          <PostMusicDiv onClick={() => dispatch(showPlayListPost())}>
            Create Playlist
          </PostMusicDiv>
        </HomeHeaderDiv>
        <HomeDiv></HomeDiv>
      </HomeHeaderContainer>
      <hr style={{ margin: "10px  0px", width: "565px" }} />
    </>
  );
};

export const PlayListMusic = ({ playListMusic, index }) => {
  const { music } = playListMusic;
  const dispatch = useDispatch();
  return (
    <>
      <PlayListMusicContainer
        style={{ width: "250px" }}
        onClick={() => dispatch(getSelectedPlayListMusic(music.id))}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <section>
            <span
              style={{ fontSize: "25px", cursor: "pointer" }}
              className="playListName"
            >
              {index + 1}. {music.title}
            </span>
          </section>
          <section
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DeleteIcon
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              onClick={() => dispatch(showMusicDelete(playListMusic.id))}
            />
          </section>
        </div>
      </PlayListMusicContainer>
    </>
  );
};
export const MusicList = () => {
  const { playListMusics, playListTitle } = useSelector(
    (state) => state.playlist
  );
  return (
    <>
      <MusicListContainer
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MusicListArticle>
          {playListTitle ? playListTitle : "PlayList Title"}
        </MusicListArticle>

        <SectionMain>
          {playListMusics.map((playListMusic) => {
            return (
              <PlayListMusic
                key={playListMusic.id}
                playListMusic={playListMusic}
                index={playListMusics.indexOf(playListMusic)}
              />
            );
          })}
        </SectionMain>
      </MusicListContainer>
    </>
  );
};
export const PlayList = ({ playList, index }) => {
  const { id, category_title } = playList;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showSelectedPlayList(playList));
    dispatch(getPlayListMusics(id));
  };
  return (
    <>
      <PlayListMusicContainer onClick={() => handleClick()}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <section>
            <span
              style={{ fontSize: "25px", cursor: "pointer" }}
              className="playListName"
            >
              {index + 1}. {category_title}
            </span>
          </section>
          <section
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DeleteIcon
              style={{ fontSize: "22px", cursor: "pointer", color: "red" }}
              onClick={() => {
                dispatch(showDeleteWarning());
              }}
            />
          </section>
        </div>
      </PlayListMusicContainer>
    </>
  );
};

export const PlayListDeleteWarning = () => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.playlist);

  return (
    <DeleteWarningContainer>
      <DeleteDiv>
        <DeleteDivSection>
          <Warning>Are you sure you want to delete?</Warning>
          <Section>
            <Button onClick={() => dispatch(deletePlayList(selected.id))}>
              YES
            </Button>
            <Button
              onClick={() => dispatch(hideDeleteWarning())}
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

export const PlayListPost = () => {
  const dispatch = useDispatch();
  const title = useRef();

  const handleClick = () => {
    if (!title.current.value) {
      title.current.style.border = "1px solid red";
      return;
    }
    dispatch(createPlayList(title.current.value));
  };
  return (
    <HomePostContainer>
      <Container1 style={{ height: "200px" }}>
        <PostContainer>
          <PostMusic>Post Music</PostMusic>
          <section>
            <CloseIcon
              onClick={() => dispatch(hidePlayListPost())}
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </section>
        </PostContainer>
        <Hr2 style={{ margin: "7px 0px" }} />

        <PostForm>
          <FormInput ref={title} type="text" placeholder="Title" />

          <AddBtn onClick={handleClick} type="submit">
            Create
          </AddBtn>
        </PostForm>
      </Container1>
    </HomePostContainer>
  );
};

export const MusicDeleteWarning = () => {
  const dispatch = useDispatch();

  return (
    <DeleteWarningContainer>
      <DeleteDiv>
        <DeleteDivSection>
          <Warning>Are you sure you want to delete?</Warning>
          <Section>
            <Button onClick={() => dispatch(deleteMusic())}>YES</Button>
            <Button
              onClick={() => dispatch(hideMusicDelete())}
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
