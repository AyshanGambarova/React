import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Index = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to="/" className={({isActive})=>{return isActive?"text-blue-600":undefined}}>Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/products" className={({isActive})=>{return isActive?"text-blue-600":undefined}}>Products</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Index;
