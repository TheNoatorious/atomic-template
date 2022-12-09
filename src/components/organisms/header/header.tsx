import React, { FC } from "react";
import styles from "./header.module.scss";

// const Header: FC<HeaderProps> = () => (
//   <div className={styles.Header}>
//     Header Component
//   </div>
// );

function Header() {
    let title = "This is some heading text in the header";
    return <h1>{title}</h1>;
}

export default Header;
