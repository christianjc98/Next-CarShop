import {
  ActionsContainer,
  Container,
  Menu,
  MenuContainer,
  UserSettings,
} from "../assets/wrappers/components/Navbar";
import Logo from "./Logo";
import {
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const user = useSelector(selectUser);
  const [showMenu, setShowMenu] = useState(false);
  const [sendLogout] = useSendLogoutMutation();
  const actions = [{ id: 1, name: "Settings", icon: <AiOutlineSetting /> }];
  const navigate = useNavigate();

  const logoutUser = async () => {
    await sendLogout();
    console.log("success");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Container>
      <div className="actions-left">
        <FaBars
          className="toggle-btn"
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <AiOutlineSearch className="search" />
      </div>

      <ActionsContainer>
        {actions.map((action) => {
          return (
            <div key={action.id} className="action">
              {action.icon}
            </div>
          );
        })}
        <MenuContainer>
          <UserSettings className="btn" onClick={() => setShowMenu(!showMenu)}>
            <div className="profile-icon">
              <AiOutlineUser />
            </div>
            <div>{user && user.name}</div>
            <FaCaretDown />
          </UserSettings>
          <Menu className={showMenu ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              logout
            </button>
          </Menu>
        </MenuContainer>
      </ActionsContainer>
    </Container>
  );
};
export default Navbar;
