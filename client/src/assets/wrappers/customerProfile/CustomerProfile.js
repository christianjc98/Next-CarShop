import styled from "styled-components";

export const Container = styled.div``;

export const Navbar = styled.div`
  border: 4px solid #1c6ea4;
  border-radius: 8px 8px 8px 8px;
  padding: 1rem;
  background-color: var(--grey-100);
  h2 {
    margin-bottom: 0;
  }
  .header {
    display: flex;
    align-items: center;

    .updated-at {
      margin-left: 1rem;
    }
  }
  .customer-icon {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    padding: 0.5rem;
    margin-right: 1rem;
    background-color: #6699cc;
  }
  .nav-info {
    display: flex;
    margin-top: 1rem;
    div {
      margin: 0 0.5rem;
      display: flex;
      flex-direction: column;
      .title {
        display: flex;
        flex-direction: row;
      }
      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;

export const ProfileTabs = styled.div`
  margin-top: 1rem;
  background-color: #1c6ea4;
`;

export const TabsInfoContainer = styled.div``;
