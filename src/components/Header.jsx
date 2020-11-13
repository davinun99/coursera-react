import React, {Component} from 'react';
import {Jumbotron, Navbar, NavbarBrand} from 'reactstrap';


class Header extends Component{
    render(){
        return(
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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
            </>
        );
    }
}
 
export default Header;