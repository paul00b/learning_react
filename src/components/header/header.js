import React from "react"
import header from "./headerStyle.module.css";
export default props => <h1 className={header.title}>{props.headerText}</h1>