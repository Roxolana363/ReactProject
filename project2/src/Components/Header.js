import React, {Component} from 'react';
import {Navbar, Nav, FormControl, Container, Form, Button} from 'react-bootstrap';
import Logo from './logo.png';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';



export default class Header extends Component {
  render() {
    return(
      <>
    <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" >
          <img
             src={Logo}
             heigth="30"
             width="30"
             className="d-inline-block align-top"
             alt="Logo"
           />
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About us</Nav.Link>
                  <Nav.Link href="/contacts">Contacts</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
               <Form inline>
                <FormControl
                   type="text"
                   placeholder="Search"
                   className="mr-s"
                />
                <Button variant="outline-info">Seasch</Button>
              </Form>
           </ Navbar.Collapse>
      </Container>
    </Navbar>

    <Router>

      <Switch>
        <Route exact Link path="/" component={Home} />
        <Route exact Link path="/about" component={About} />
        <Route exact Link path="/contacts" component={Contacts} />
        <Route exact Link path="/blog" component={Blog} />
      </Switch>
    </Router>
    </>
  );
  }
}
