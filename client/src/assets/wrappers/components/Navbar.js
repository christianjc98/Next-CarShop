import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
  background-color: var(--primary-500);
  height: var(--nav-height);
  .logo {
    width: 3.5rem;
    margin-left: 1rem;
    display: none;
  }
  .toggle-btn {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: var(--grey-50);
  }
  .actions-left {
    align-self: center;
  }
  .search {
    font-size: 1.5rem;
    color: var(--grey-50);
    margin-left: 1rem;
  }
  @media (min-width: 992px) {
    .logo {
      display: block;
    }
    .toggle-btn {
      display: none;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  .action {
    margin: 0 1rem;
    svg {
      font-size: 1.5rem;
      color: var(--grey-50);
    }
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
`;

export const Menu = styled.div`
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
`;

export const UserSettings = styled.button`
  display: flex;
  align-items: center;
  color: var(--primary-500);
  background-color: var(--grey-50);
  .profile-icon {
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--grey-50);
    font-size: 2rem;
    margin-right: 0.5rem;
  }
  svg {
    border-radius: 50%;
    color: var(--primary-500);
    width: 20px;
    height: 20px;
  }
  :hover {
    color: var(--grey-50);
  }
`;
