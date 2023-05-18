import styled from "@emotion/styled";
export const SectionMain = styled.section`
  /* display: grid; */
  height: 624px;
  overflow-y: scroll;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: auto auto;
  grid-auto-rows: 60px 60px;
  grid-column-gap: 20px;
  /* background-color: white; */
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

export const PlayListMusicContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: center;
  height: 50px;
  align-items: space-between;
  margin: 0px 4px;
  width: 350px;
  transition: all 0.2s ease-in-out;
  /* background-color: red; */

  padding: 0px 10px;
  border-radius: 10px;

  &:hover {
    border: 0.2px solid white;
    color: orange;
  }
  &:hover .playListName {
    font-weight: bold;
  }
`;
export const MusicListContainer = styled.section`
  background-color: black;
  padding: 30px 0px;
  width: 565px;
  height: 720px;
`;

export const MusicListArticle = styled.article`
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-left: 33px;
  margin-bottom: 20px;

  &:hover {
    color: orange;
  }
`;
