import React, {Component} from 'react';
import {Button, Collapse, Form, FormGroup, Input, Jumbotron, Label, Modal, ModalBody, ModalHeader, Nav, 
Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            navIsOpen: false,
            modalIsOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            ...this.state,
            navIsOpen: !this.state.navIsOpen
        });
    }
    toggleModal(){
        this.setState({
            ...this.state,
            modalIsOpen: !this.state.modalIsOpen
        })
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value);
    }
    render(){
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="42" alt="Logo" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.navIsOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto">
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg">                                            
                                        </span> Login
                                    </Button>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Funsion</h1>
                                <p>We take inspiration from the Worlds best cuisines and create a unique fusion experience. Our lipsmacking</p>
                                
                            </div>

                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.modalIsOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen={this.state.modalIsOpen} toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input innerRef={input=>this.username = input} type="text" id="username" name="username" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input innerRef={input=>this.password = input} type="password" id="password" name="password" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input  innerRef={input=>this.remember = input} type="checkbox" name="remember" />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
 
export default Header;