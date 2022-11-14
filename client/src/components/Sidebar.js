import {
  Container,
  Menu,
  MenuItem,
  SideBarHeader,
} from "../assets/wrappers/components/Sidebar";
import Logo from "./Logo";
import { menu } from "../utils/menuItems";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ showSidebar }) => {
  return (
    <Container open={showSidebar}>
      <SideBarHeader>
        <Logo />
      </SideBarHeader>
      <div>
        <Menu>
          {menu.map((item) => {
            return (
              <MenuItem key={item.id}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? "link-active" : undefined
                  }
                  end
                >
                  {item.icon} <div>{item.title}</div>
                </NavLink>
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </Container>
  );
};
export default Sidebar;
