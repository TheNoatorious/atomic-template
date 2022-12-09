import React, { FC } from "react";
import styles from "./navigation.module.scss";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => (
    <nav className="main-nav">
        <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

export default Navigation;
