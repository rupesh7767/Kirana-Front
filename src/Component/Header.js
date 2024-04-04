import React, { useState } from "react";
import styled from "styled-components";
import logo from "../image/logo.jpeg";

const Header = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Container onMouseLeave={closeDropdown}>
      <Logo>
        <a href="/">
          <img src={logo} alt="Image not found" />
        </a>
      </Logo>
      <NavMenu>
        <a href="/">
          <span>Home</span>
        </a>
        <ActionsButton onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span>Actions</span>
          {isDropdownOpen && (
            <DropdownContent>
              <a href="/addItem">Add Item</a>
              <a href="/sellItem">Sell Item</a>
            </DropdownContent>
          )}
        </ActionsButton>
        <ActionsButton onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span>Reports</span>
          {isDropdownOpen && (
            <DropdownContent>
              <a href="/stock">Stock report</a>
              <a href="#">Action 2</a>
              <a href="#">Action 3</a>
            </DropdownContent>
          )}
        </ActionsButton>
        <a href="/about">
          <span>About</span>
        </a>
        <a href="/contact">
          <span>Contact</span>
        </a>
      </NavMenu>
    </Container>
  );
};

//Styled-Components

const Container = styled.div`
  position: fixed;
  background-color: #bd723c;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.a`
  width: 80px;
  align-items: center;

  a {
    cursor: auto;
    img {
      width: 90%;
      border-radius: 50px;
    }
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;

    span {
      color: rgb(249, 249, 249);
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 1.08;
      padding: 1px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 548px) {
    display: none;
  }
`;

const ActionsButton = styled.div`
  cursor: pointer;
  color: rgb(249, 249, 249);
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 1.08;
      padding: 12px 16px;
      white-space: nowrap;
      position: relative;

  &:hover {
    div {
      display: block;
    }
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #8AB7D7;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
  left: 0;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export default Header;
