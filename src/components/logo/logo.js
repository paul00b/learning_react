import React from "react"
import logoStyles from "./logostyle.module.css"
import logo from "../../images/bro_white.svg"
export default () => (
    <div className={logoStyles.logoContainer}>
        <img className={logoStyles.logo} src={logo} alt="logo"></img>
    </div>
)