import { NavLink } from "react-router-dom";
import { Container } from "../assets/wrappers/components/Tabs";

const Tabs = ({ tabsInfo }) => {
  return (
    <Container>
      {tabsInfo.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.mapping}
            className={({ isActive }) => (isActive ? "link-active" : undefined)}
            end
          >
            {item.name}
          </NavLink>
        );
      })}
    </Container>
  );
};
export default Tabs;
