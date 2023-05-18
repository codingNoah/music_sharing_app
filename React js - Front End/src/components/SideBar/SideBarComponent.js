import {
  SideBarContainer,
  SideBarItem,
  SideBarItemContainer,
  SideBarProfileContainer,
  SideBarUserName,
  SideBarItemName,
} from "./SideBarStyles";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logOut } from "../../Redux/auth/authSlice";
import {
  hidePlayListMusics,
  hideSelected,
} from "../../Redux/playlist/playListSlice";
import { hideSelectedUserMusic } from "../../Redux/music/musicSlice";
import { hideSelectedMusic } from "../../Redux/home/home";

const SideBarComponent = () => {
  const navigate = useNavigate();

  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  return (
    <SideBarContainer>
      <SideBarProfileContainer>
        <AccountCircleRoundedIcon
          style={{ cursor: "pointer", fontSize: "50px" }}
        />
        <SideBarUserName onClick={() => navigate("/")}>
          @{username}
        </SideBarUserName>
      </SideBarProfileContainer>
      <SideBarItemContainer>
        <SideBarItem onClick={() => navigate("/")}>
          <HomeIcon
            className="icon"
            style={{ transition: "all 0.2s ease-in-out", fontSize: "30px" }}
          />
          <SideBarItemName className="name">Home</SideBarItemName>
        </SideBarItem>

        <SideBarItem onClick={() => navigate("/musics")}>
          <HeadphonesRoundedIcon
            className="icon"
            style={{ transition: "all 0.2s ease-in-out", fontSize: "30px" }}
          />
          <SideBarItemName className="name">Musics</SideBarItemName>
        </SideBarItem>
        <SideBarItem onClick={() => navigate("/playlist")}>
          <LibraryMusicIcon
            className="icon"
            style={{ transition: "all 0.2s ease-in-out", fontSize: "30px" }}
          />
          <SideBarItemName className="name">PlayLists</SideBarItemName>
        </SideBarItem>
        <SideBarItem
          onClick={() => {
            dispatch(hideSelected());
            dispatch(hideSelectedUserMusic());
            dispatch(hideSelectedMusic());
            dispatch(hidePlayListMusics());
            dispatch(logOut());
          }}
        >
          <LogoutIcon
            className="icon"
            style={{ transition: "all 0.2s ease-in-out", fontSize: "30px" }}
          />
          <SideBarItemName className="name">LogOut</SideBarItemName>
        </SideBarItem>
      </SideBarItemContainer>
    </SideBarContainer>
  );
};

export default SideBarComponent;
