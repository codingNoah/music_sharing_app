import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const SideBarContainer = styled.div`
  width: 15%;
  height: 100vh;
  align-items: center;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const SideBarItem = styled.section`
  display: flex;
  transition: all 0.2s ease-in-out;
  border: 0.2px solid rgb(241, 241, 241);
  cursor: pointer;
  height: 50px;
  padding-left: 20px;
  width: 150px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;

  &:hover .icon {
    color: orange;
  }
  &:hover .name {
    color: black;
    font-weight: bold;
  }
  &:hover {
    border: 0.2px solid orange;
  }
`;

export const SideBarItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const SideBarProfileContainer = styled.section`
  display: flex;
  gap: 5px;
  width: 200px;
  margin-left: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

export const SideBarUserName = styled.div`
  font-size: 22px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: blue;
  }
`;

export const SideBarItemName = styled.div`
  color: hwb(0 35% 65%);
  transition: all 0.2s ease-in-out;
`;
