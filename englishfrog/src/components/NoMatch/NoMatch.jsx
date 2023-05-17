import React, { Component, useEffect, useState } from 'react';
import nomatch from '../img/404.png';
// import cn from 'classnames';
import styles from './NoMatch.module.css';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     NavLink
// } from "react-router-dom";
// import Mainpage from '../Mainpage/Mainpage.jsx'

function NoMatch() {

    return (
        <div>
            <div className={styles.root}>
                <img src={nomatch} className={styles.img} />
                <p className={styles.text}> упс... страница не найдена</p>
            </div>

            {/* <Router> */}
            {/* <div className={styles.root}>
                <img src={nomatch} className={styles.img} />
                
                    <NavLink className={styles.link} to="/">перейти на главную</NavLink>

                </p>
            </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>

                </div>
            </> */}

            {/* </Router > */}


        </div >

    );
}
// function Main() {
//     return <Mainpage />;
// }
export default NoMatch;