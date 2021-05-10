import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default function Header(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="mx-2">
              <Link to="/">Home </Link>
            </div>{" "}
            <div className="mx-2">
              <Link to="/about"> About</Link>
            </div>
          </Nav>
          {props.searchbar ? (
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

Header.PropType = {
  title: PropTypes.string,
};
