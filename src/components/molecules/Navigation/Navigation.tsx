import React, { FC } from "react";
// import styles from "./navigation.module.scss";
import Logo from "../../atoms/Logo/Logo";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => (
    <nav className="main-nav">
        <Logo />
        <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

export default Navigation;
