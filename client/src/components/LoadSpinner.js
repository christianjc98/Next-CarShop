import BeatLoader from "react-spinners/BeatLoader";
import { Container } from "../assets/wrappers/components/LoadSpinner";

const LoadSpinner = () => {
  return (
    <Container className="full-page">
      <div className="spinner">
        <BeatLoader style={{ display: "initial" }} size="25px" />
      </div>
    </Container>
  );
};
export default LoadSpinner;
