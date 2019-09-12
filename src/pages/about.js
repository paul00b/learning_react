import React from "react"
import Header from "../components/header/header"
import Logo from "../components/logo/logo"
import styles from "./about.module.css"
import {Link} from "gatsby"

const User = props => (
    <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
export default () => (
    <div>
        <Link to ="/">
            <Logo/>
        </Link>       
        <Header headerText="About gatsby"/>
    </div>
)