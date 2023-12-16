import { Container, Navbar, Nav } from 'react-bootstrap';
import React from 'react';

export const BarreNavigation = () => {
    return(
        <Navbar>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav"/>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil </Nav.Link>
                        <Nav.Link href='/AffichageCouleur/Couleurs'>Afficher couleur</Nav.Link>
                        <Nav.Link href='/Billeterie'>Billeterie</Nav.Link>
                        <Nav.Link href='/PanierEpicerie'>Panier Epicerie</Nav.Link>
                        <Nav.Link href='/PrevisionsMeteo'>Previsions Meteo</Nav.Link>
                        <Nav.Link href='/TempsEntrainement'>Temps Entrainement</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}