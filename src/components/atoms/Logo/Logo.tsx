import React, { FC } from "react";
import logo from "../../../assets/img/logo.svg";
import styles from "./Logo.module.scss";

interface LogoProps {}

const Logo: FC<LogoProps> = () => <img src={logo} alt="atomic logo" />;

export default Logo;
