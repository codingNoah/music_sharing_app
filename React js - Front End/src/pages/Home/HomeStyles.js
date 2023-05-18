import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  width: 85%;

  display: flex;
  gap: 20px;
  padding-top: 20px;
  /* padding-left: 200px; */
`;

export const PlayListAdd = styled.div`
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const PlayListContainer = styled.div`
  width: 500px;
  margin-top: 100px;
  border-radius: 10px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  opacity: 1;
  padding: 25px 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  left: 500px;
`;

export const PlayListAddHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const comp1 = styled.section`
  font-size: 26px;
`;
export const hr1 = styled.hr`
  margin: 7px 0px;
`;
export const PlayListAddContent = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;
`;

export const Info = styled.div`
  width: 300px;
  padding: 2px 10px;
  background-color: #f5f5f5;
  color: #333;
  box-shadow: 0 0 5px #ccc;
  font-size: 20px;
  background-repeat: no-repeat;
  background-position: right-center;
  padding-right: 20px;
`;

export const Select = styled.select`
  width: 300px;
  height: 30px;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  color: #333;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right-center;
  padding-right: 20px;
  box-shadow: 0 0 5px #ccc;
`;

export const AddBtn = styled.button`
  border: none;
  background-color: black;
  cursor: pointer;
  color: white;
  font-size: 20px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0px;
  transition: all 0.2s ease-in-out;
  width: 200px;
  height: 40px;
  margin-top: 10px;
  &:hover {
    border-radius: 20px;
    background-color: orange;
    color: black;
  }
`;

export const HomePostContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Container1 = styled.div`
  width: 500px;
  margin-top: 100px;
  border-radius: 10px;
  height: 250px;
  background-color: rgba(255, 255, 255, 1);
  opacity: 1;
  padding: 25px 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PostContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const PostMusic = styled.section`
  font-size: 26px;
`;

export const Hr2 = styled.hr`
  margin: 7px 0px;
`;
export const Div1 = styled.div`
  display: flex;
  align-items: center;
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;
`;

export const FormInput = styled.input`
  width: 300px;
  border: none;
  outline: none;
  padding: 2px 10px;
  background-color: #f5f5f5;
  color: #333;

  box-shadow: 0 0 5px #ccc;

  font-size: 20px;
  background-repeat: no-repeat;
  background-position: right-center;
  padding-right: 20px;
`;

export const HomeHeaderContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 0.1px solid rgb(137, 137, 137);
  width: 565px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  height: 100px;
`;

export const HomeHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoteIconSection = styled.section`
  display: flex;
  align-items: center;
`;

export const PostMusicDiv = styled.section`
  width: 500px;
  height: 50px;
  border-radius: 40px;
  font-size: 21px;
  background-color: white;
  border: 1px solid rgb(137, 137, 137);
  display: flex;
  font-weight: bold;
  align-items: center;
  color: rgb(137, 137, 137);
  padding-left: 20px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: orange;
    color: black;
    font-weight: bold;
  }
`;

export const HomeDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 50px;
`;

export const HomeDivSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 40px;
  cursor: pointer;
  gap: 5px;
`;

export const DetailDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  padding: 10px 5px;
  transition: all 0.2s ease-in-out;

  &:hover .detail {
    /* background-color: white; */
    color: black;
    font-weight: bold;
  }

  &:hover .update-btn {
    display: flex;
  }
  &:hover {
    /* border-radius: 10px; */
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    /* background-color: rgb(218, 214, 214); */
    background-color: orange;
    /* color: black; */
  }
`;
export const DetailSection = styled.section`
  font-size: 20px;
  color: white;
`;
export const DetailTitle = styled.section`
  font-size: 30px;
  color: white;
`;
export const DetailContainer = styled.section`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeMusicListContainer = styled.div`
  height: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin: 10px 0px;
  cursor: pointer;
  padding: 0px 5px;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  width: 350px;
  /* width: 290px; */
  &:hover {
    border: 0.2px solid white;
    color: orange;
  }
  &:hover .musicName {
    font-weight: bold;
  }
`;

export const HomeMusicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Span = styled.span`
  font-size: 25px;
  cursor: pointer;
`;

export const Section1 = styled.section`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const PopularContainer = styled.section`
  border-radius: 15px;
  padding: 30px 0px;
  background-color: black;
  width: 565px;
  background-image: url("https://images.pexels.com/photos/7715787/pexels-photo-7715787.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-size: cover;
  background-position: center;
  height: 50%;
`;

export const PopularArticle = styled.article`
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-left: 33px;
  transition: 0.2s all ease-in-out;

  &:hover {
    color: orange;
  }
`;

export const CreatorContainer = styled.section`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
  }

  background-color: orange;

  background-image: url("https://images.pexels.com/photos/2927080/pexels-photo-2927080.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  padding: 30px 33px;
  width: 565px;
  height: 416px;
`;

export const CreatorArticle = styled.article`
  font-size: 40px;
  font-weight: bold;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: white;
  }
`;
export const CreatorDiv = styled.div`
  display: grid;
  margin-top: 10px;
  justify-content: center;
  grid-template-columns: auto auto;
  grid-auto-rows: 60px 60px;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
`;

export const CreatorItemContainer = styled.section`
  display: flex;
  transition: all 0.2s ease-in-out;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  width: 220px;

  padding-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: white;
    border-radius: 10px;
    /* color: orange; */
  }
  &:hover .creatorDetail {
    font-weight: bold;
  }
`;

export const MainContainer = styled.section`
  height: 630px;
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-rows: 60px 60px;
  grid-column-gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;

  justify-content: center; /* Center content horizontally */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: orange;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
  }
`;
