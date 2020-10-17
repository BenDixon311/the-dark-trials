import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto'
    },
    nav: {
        fontFamily: 'Bebas Neue',
    },
    icon: {
        margin: 5,
        color: 'grey'
    }
});

export default function NavDrawer(props) {
const classes = useStyles();

return (
    <div className={classes.nav}>
         
       <Navbar bg="dark" expand="lg" variant="dark">
       <Container>
        <Navbar.Brand href="/">T. James Kelly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
            <a href="#twitter" className={classes.icon}><Twitter /></a>
            <a href="#twitter" className={classes.icon}><Facebook /></a>
            <a href="#twitter" className={classes.icon}><Instagram /></a>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
    </div>
)

}