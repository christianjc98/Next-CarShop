import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/components/PageBtnContainer";
import { selectNumOfPages } from "../features/clients/customersSlice";

const PageBtnContainer = ({ page, setPage }) => {
  const numOfPages = useSelector(selectNumOfPages);
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    setPage(newPage);
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    setPage(newPage);
  };
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className="btn-container">
        {pages.map((item) => {
          return (
            <button
              type="button"
              className={item === page ? "pageBtn active" : "pageBtn"}
              key={item}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        Next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
