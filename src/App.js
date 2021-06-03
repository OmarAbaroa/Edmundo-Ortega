import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
	return (
    	<div className="body">
			<Navbar expand = 'lg'>
				<Navbar.Toggle className = 'ml-auto text-white'>
					<FontAwesomeIcon icon = { faBars } />
				</Navbar.Toggle>
  				<Navbar.Collapse id="basic-navbar-nav">
    				<Nav className="ml-auto">
      					<NavDropdown title="Mis servicios" id="basic-nav-dropdown">
        					<NavDropdown.Item href="#action/3.1">Arquitectura & Diseño</NavDropdown.Item>
        					<NavDropdown.Item href="#action/3.2">Instalaciones</NavDropdown.Item>
        					<NavDropdown.Item href="#action/3.3">Construcción & Remodelación</NavDropdown.Item>
      					</NavDropdown>
      					<Nav.Link href="#home">Fotos</Nav.Link>
      					<Nav.Link href="#link">Renders</Nav.Link>
						<Nav.Link href="#link">Sobre nosotros</Nav.Link>
    				</Nav>
      			</Navbar.Collapse>
			</Navbar>
    	</div>
  	);
}

export default App;
