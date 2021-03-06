import React, { Component } from 'react';
import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="sticky-top">
        <>
        <Navbar bg="light" variant="light">
            <Navbar.Brand style={{ color:'#FF6138', fontWeight: 'bold' }}href="/">BASEKMP</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/listings">Listings Demo</Nav.Link>
            <Nav.Link href="/cabin-demo">Profile Demo</Nav.Link>
            </Nav>
            {/* <Form inline>
            <FormControl onChange={this.props.searchHandler} type="text" placeholder="Search" className="mr-sm-2" />
            <>
                        <style type="text/css">
                        {`
                        .btn-search {
                            background-color: white;
                            color: #00A388;
                            border: 1px solid #00A388;
                        }

                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
                        </style>
            <Button variant="search">Search</Button>
            </>
            </Form> */}
        </Navbar>
        </>
      </div>
    )
  }
}