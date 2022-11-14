import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    overflow: auto;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  .main-content {
    overflow: auto;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
