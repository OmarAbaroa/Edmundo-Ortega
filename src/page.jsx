import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Planos } from './assets/images';
import { motion, AnimatePresence } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = ({ isVisible, src }) => (
    <AnimatePresence>
        {
            isVisible && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }} > 
                    {/* <img className = 'img-fluid' src = { src }  alt  = 'Planos' />  */}
                    <LazyLoadImage className = 'img-fluid' alt = 'PLANOS' src = { src }/>
                </motion.div>
            )
        }
    </AnimatePresence>
)

class Page extends Component {

    componentDidMount = () => {

    }

    render(){
        return (
            <div className="app px-2 px-md-3">
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
                <div className="body">
                    <div className="bg-gray-2">
                        <div className="row mx-0">
                            <div className="col-md-6 col-lg-8 p-md-5 p-2">
                                <div className="py-3 text-center text-yellow">
                                    <h2 className="text-yellow">Arquitectura & Diseño</h2>
                                </div>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Toggle eventKey="0" as = { Button } variant="link" className ='collapse-accordion-button' >
                                        <span><FontAwesomeIcon className ='bullet'  icon = { faCircle } /></span> Proyecto arquitectónico
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <p className="mt-2 text-justify">
                                            Quisque rutrum arcu quis venenatis mattis. Mauris sem dui, tempus at neque vel, cursus venenatis nunc. Ut rutrum ultricies arcu, id gravida elit pharetra a. Nunc a ex sed urna mattis molestie. In hac habitasse platea dictumst. Vivamus a quam sit amet risus commodo tincidunt. Integer ut fringilla mi. In luctus, erat ut fermentum vestibulum, dolor nisi euismod mi, eu finibus ligula mi id nunc. Quisque id rutrum leo. Donec nec tempor dolor, vel cursus libero. Donec varius finibus libero sit amet venenatis. Donec ornare est enim, fringilla posuere velit pharetra vitae. Aliquam quis consectetur nisl. Morbi suscipit pretium dolor. Maecenas maximus dictum gravida.
                                        </p>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle eventKey="1" as = { Button } variant="link" className ='collapse-accordion-button' >
                                        <span><FontAwesomeIcon className ='bullet'  icon = { faCircle } /></span> Anteproyecto
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <p className="mt-2 text-justify">
                                            Quisque rutrum arcu quis venenatis mattis. Mauris sem dui, tempus at neque vel, cursus venenatis nunc. Ut rutrum ultricies arcu, id gravida elit pharetra a. Nunc a ex sed urna mattis molestie. In hac habitasse platea dictumst. Vivamus a quam sit amet risus commodo tincidunt. Integer ut fringilla mi. In luctus, erat ut fermentum vestibulum, dolor nisi euismod mi, eu finibus ligula mi id nunc. Quisque id rutrum leo. Donec nec tempor dolor, vel cursus libero. Donec varius finibus libero sit amet venenatis. Donec ornare est enim, fringilla posuere velit pharetra vitae. Aliquam quis consectetur nisl. Morbi suscipit pretium dolor. Maecenas maximus dictum gravida.
                                        </p>
                                    </Accordion.Collapse> 
                                    <Accordion.Toggle eventKey="2" as = { Button } variant="link" className ='collapse-accordion-button' >
                                        <span><FontAwesomeIcon className ='bullet'  icon = { faCircle } /></span><span>Construcción & Remodelación</span> 
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <p className="mt-2 text-justify">
                                            Quisque rutrum arcu quis venenatis mattis. Mauris sem dui, tempus at neque vel, cursus venenatis nunc. Ut rutrum ultricies arcu, id gravida elit pharetra a. Nunc a ex sed urna mattis molestie. In hac habitasse platea dictumst. Vivamus a quam sit amet risus commodo tincidunt. Integer ut fringilla mi. In luctus, erat ut fermentum vestibulum, dolor nisi euismod mi, eu finibus ligula mi id nunc. Quisque id rutrum leo. Donec nec tempor dolor, vel cursus libero. Donec varius finibus libero sit amet venenatis. Donec ornare est enim, fringilla posuere velit pharetra vitae. Aliquam quis consectetur nisl. Morbi suscipit pretium dolor. Maecenas maximus dictum gravida.
                                        </p>
                                    </Accordion.Collapse> 
                                </Accordion>
                            </div>
                            <div className="col-md-6 col-lg-4 p-md-5 p-2 d-flex align-items-center">
                                <Image isVisible = {1} src = {Planos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page