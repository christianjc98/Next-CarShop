import styled from "styled-components";

export const TableContainer = styled.table`
  border-spacing: 0px;
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0 0px;
  font-size: 0.9em;
  min-width: 200px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow-x: auto;
  white-space: nowrap;
  display: block;
  @media (min-width: 992px) {
    overflow-x: unset;
    display: table;
    min-width: 400px;
  }
  th,
  td {
    padding: 12px 15px;
  }
  thead {
    background-color: rgb(243, 244, 246);
    border-bottom: none;
    tr {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
      border-radius: 5rem;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
      :nth-of-type(even) {
        background-color: #f3f3f3;
      }
      :last-of-type {
        border-bottom: 2px solid #009879;
      }
    }
  }
`;
