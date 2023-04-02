import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'

export default function Nav(props){
    return (
        <div className={styles.nav}>
            <div className={styles.links}>
                <Link to='/home' className={styles.link}>
                    Home
                </Link>

                <Link to='/about' className={styles.link}>
                    About
                </Link>
            </div>
            <SearchBar onSearch={props.onSearch} random={props.random} />
        </div>
    )
}