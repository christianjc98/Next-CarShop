import styled from "styled-components";

export const Container = styled.div`
  max-width: 90vw;
  .form {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
  .form-row {
    display: flex;
    label {
      width: 33%;
    }
    input {
      width: 67%;
    }
  }
`;
