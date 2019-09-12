import React from "react"
import logoStyles from "./logostyle.module.css"
import logo from "../../images/bro.svg"
export default () => (
    <div className={logoStyles.logoContainer}>
        <img className={logoStyles.logo} src={logo}></img>
    </div>
)