import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  border: 0.1rem solid black;
  background-color: #f9fafc;
  border-radius: 5px;
  padding-left: 0.5rem;
  svg {
    font-size: 1.25rem;
  }
  input {
    background-color: transparent;
    border: none;
    :focus {
      outline: none;
    }
  }
`;
