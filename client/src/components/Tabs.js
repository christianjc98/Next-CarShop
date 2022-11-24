import { Container } from "../assets/wrappers/components/Tabs";

const Tabs = ({ tabsInfo }) => {
  const setFalse = () => {
    tabsInfo.forEach((element) => {
      element.onClick(false);
    });
  };
  return (
    <Container>
      {tabsInfo.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setFalse();
              item.onClick(true);
            }}
          >
            {item.name}
          </button>
        );
      })}
    </Container>
  );
};
export default Tabs;
