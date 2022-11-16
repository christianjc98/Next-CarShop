import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TableContainer } from "../../assets/wrappers/components/Table";
import { setCustomerToModify } from "./customersSlice";

const Table = ({ data, columnNames, setOpenModal }) => {
  const dispatch = useDispatch();
  const handleCustomerDelete = (customer) => {
    setOpenModal(true);
    dispatch(setCustomerToModify(customer));
  };

  return (
    <TableContainer>
      <thead>
        <tr>
          {columnNames.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.length < 1 && (
          <tr>
            <td>No Data Available</td>
          </tr>
        )}
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <Link to={`/customer/${item._id}`}>
                  {item.name} {item.lastname}
                </Link>
              </td>
              <td>{item.phoneNumber}</td>
              <td>{item.address}</td>
              <td>{item.city}</td>
              <td>{item.rfc}</td>
              <td>{item.email}</td>
              <td>
                <div className="actions">
                  <button
                    className="delete-btn btn"
                    onClick={() => handleCustomerDelete(item)}
                  >
                    Delete
                  </button>
                  <button className="btn">Edit</button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};
export default Table;
