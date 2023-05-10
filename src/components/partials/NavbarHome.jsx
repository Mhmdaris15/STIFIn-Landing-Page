import React from "react";
import { Navbar } from "flowbite-react";
import { useState } from "react";

const NavbarHome = () => {
  const [ActiveAbout, SetActiveAbout] = useState(false);
  const [ActiveServices, SetActiveServices] = useState(false);
  const [ActivePricing, SetActivePricing] = useState(false);
  const [ActiveContact, SetActiveContact] = useState(false);
  return (
    <Navbar
      className="bg-opacity-60 py-4 flex items-center justify-evenly"
      fluid={false}
      rounded={true}>
      <Navbar.Brand
        // as={{
        //   $$typeof: Symbol(React.forward_ref),
        //   render: LinkWithRef,
        // }}
        to="/navbars">
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
        <Navbar.Link
          href="/navbars"
          active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#whoshouldtakethistest">About</Navbar.Link>
        <Navbar.Link href="#results">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHome;
