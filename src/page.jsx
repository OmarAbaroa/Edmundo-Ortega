import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';

class Page extends Component {

    componentDidMount = () => {

    }

    render(){
        return (
            <div className="app">
                <div className = 'header'>
                    <Navbar expand = 'lg'>
                        <Navbar.Toggle className = 'ml-auto text-white'>
                            <FontAwesomeIcon icon = { faBars } />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavDropdown title="Mis servicios" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#arquitectura-y-diseno">Arquitectura & Diseño</NavDropdown.Item>
                                    <NavDropdown.Item href="#instalaciones">Instalaciones</NavDropdown.Item>
                                    <NavDropdown.Item href="#construccion-y-remodelacion">Construcción & Remodelación</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Fotos</Nav.Link>
                                <Nav.Link href="#link">Renders</Nav.Link>
                                <Nav.Link href="#link">Sobre nosotros</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Accordion defaultActiveKey="0">
                <div className = 'mis-servicios row mx-0 justify-content-center' id = 'mis-servicios'>
                    <div className = 'p-2 m-3 col-md-9' id = 'arquitectura-y-diseno'>
                        <div className="py-3 text-center text-yellow">
                            <h2 className="text-yellow">Arquitectura & Diseño</h2>
                        </div>
                        <div className="mt-3 row mx-0 justify-content-end">
                            <div className="col-12 px-0">
                                <Accordion.Toggle eventKey="0" as = { Button } variant="link" className ='collapse-accordion-button' >
                                    <span><FontAwesomeIcon icon = { faCircle } /></span> Proyecto arquitectónico
                                </Accordion.Toggle>
                            </div>
                            <div className="col-md-12 px-0 mt-3">
                                <Accordion.Collapse eventKey="0">
                                    <p className="mt-2">
                                    Quisque rutrum arcu quis venenatis mattis. Mauris sem dui, tempus at neque vel, cursus venenatis nunc. Ut rutrum ultricies arcu, id gravida elit pharetra a. Nunc a ex sed urna mattis molestie. In hac habitasse platea dictumst. Vivamus a quam sit amet risus commodo tincidunt. Integer ut fringilla mi. In luctus, erat ut fermentum vestibulum, dolor nisi euismod mi, eu finibus ligula mi id nunc. Quisque id rutrum leo. Donec nec tempor dolor, vel cursus libero. Donec varius finibus libero sit amet venenatis. Donec ornare est enim, fringilla posuere velit pharetra vitae. Aliquam quis consectetur nisl. Morbi suscipit pretium dolor. Maecenas maximus dictum gravida.
                                    </p>
                                </Accordion.Collapse>  
                            </div>
                            <div className="col-12 px-0">
                                <Accordion.Toggle eventKey="1" as = { Button } variant="link" className ='collapse-accordion-button'>
                                    <span><FontAwesomeIcon icon = { faCircle } /></span> Anteproyecto
                                </Accordion.Toggle>
                            </div>
                            <div className="col-md-12 px-0 mt-3">
                                <Accordion.Collapse eventKey="1">
                                    <p className="mt-2">
                                    Quisque rutrum arcu quis venenatis mattis. Mauris sem dui, tempus at neque vel, cursus venenatis nunc. Ut rutrum ultricies arcu, id gravida elit pharetra a. Nunc a ex sed urna mattis molestie. In hac habitasse platea dictumst. Vivamus a quam sit amet risus commodo tincidunt. Integer ut fringilla mi. In luctus, erat ut fermentum vestibulum, dolor nisi euismod mi, eu finibus ligula mi id nunc. Quisque id rutrum leo. Donec nec tempor dolor, vel cursus libero. Donec varius finibus libero sit amet venenatis. Donec ornare est enim, fringilla posuere velit pharetra vitae. Aliquam quis consectetur nisl. Morbi suscipit pretium dolor. Maecenas maximus dictum gravida.
                                    </p>
                                </Accordion.Collapse>  
                            </div>
                            <div className="col-12 px-0">
                                <Accordion.Toggle eventKey="2" as = { Button } variant="link" className ='collapse-accordion-button'>
                                    <span><FontAwesomeIcon icon = { faCircle } /></span> Proyecto ejecutivo
                                </Accordion.Toggle>
                            </div>
                            <div className="col-md-12 px-0 mt-3">
                                <Accordion.Collapse eventKey="2">
                                    <p className="mt-2">
                                    Quisque rutrum arcu quis venenatis mattis. Mauris sem dui, tempus at neque vel, cursus venenatis nunc. Ut rutrum ultricies arcu, id gravida elit pharetra a. Nunc a ex sed urna mattis molestie. In hac habitasse platea dictumst. Vivamus a quam sit amet risus commodo tincidunt. Integer ut fringilla mi. In luctus, erat ut fermentum vestibulum, dolor nisi euismod mi, eu finibus ligula mi id nunc. Quisque id rutrum leo. Donec nec tempor dolor, vel cursus libero. Donec varius finibus libero sit amet venenatis. Donec ornare est enim, fringilla posuere velit pharetra vitae. Aliquam quis consectetur nisl. Morbi suscipit pretium dolor. Maecenas maximus dictum gravida.
                                    </p>
                                </Accordion.Collapse>  
                            </div>
                        </div>
                    </div>
                    <div className = 'p-2 border mb-3 mx-3 col-md-9' id = 'instalaciones'>
                        
                    </div>
                    <div className = 'p-2 border mb-3 mx-3 col-md-9' id = 'construccion-y-remodelacion'>
                        
                    </div>
                </div>
                </Accordion>
            </div>
        )
    }
}

export default Page