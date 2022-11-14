import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 280px;
  background-color: #f9fafc;
  overflow: auto;
  position: absolute;
  left: ${({ open }) => (open ? "0" : "-100%")};
  transition: 0.5s all ease;
  top: var(--nav-height);

  .logo {
    width: 6rem;
    margin: 1rem 0;
  }

  @media (min-width: 992px) {
    position: initial;
  }
`;

export const SideBarHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--grey-100);
`;

export const Menu = styled.ul`
  margin-top: 2rem;
  margin: 2rem 1rem;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: flex-start;
  a {
    padding: 9px 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--textColor);
    width: 100%;
    cursor: pointer;
  }
  .link-active {
    background-color: var(--grey-200);
    color: var(--primary-600);
    border-radius: 8px;
  }
  svg {
    font-size: 1.75rem;
    margin-right: 0.5rem;
  }
  div {
    font-weight: 600;
  }
`;
