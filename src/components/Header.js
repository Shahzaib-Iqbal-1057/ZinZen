import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Logo from '../images/LogoLight.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";
import "../translations/i18n"

const Header = () => {
    const { t } = useTranslation();
    return (
            <Navbar collapseOnSelect expand="lg">
                <img src={Logo} alt="ZinZen Logo" className="zinzen-logo-nav" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar-custom">
                        <Nav.Link href="#home" className="nav-link-landing-page">{t("home")}</Nav.Link>
                        <Nav.Link href="#discover" className="nav-link-landing-page">{t("discover")}</Nav.Link>
                        <Nav.Link href="#donate" className="nav-link-landing-page">{t("donate")}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Header
